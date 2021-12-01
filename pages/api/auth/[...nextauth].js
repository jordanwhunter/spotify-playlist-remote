// Copied from 'https://next-auth.js.org/getting-started/example'

// Dependencies
import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import spotifyApi, { LOGIN_URL } from '../../../lib/spotify';

const refreshAcessToken = async (token) => {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshedToken } = await spotifyApi.refreshAccessToken(); // Renamed body as 'refreshedToken'
    console.log('REFRESHED TOKEN IS', refreshedToken);

    return {
      ...token,
      accessToken: refreshedToken.access_token,
      accessTokenExpires: Date.now + refreshedToken.expires_in * 1000, // = 1 hour as 3600 returns from API
      refreshToken: refreshedToken.refresh_token ?? token.refreshToken, // Replace token if new one came back, or else fall back on old refresh token
    };

  } catch (error) {
    console.error(error);

    return {
      ...token,
      error: 'RefreshAccessTokenError'
    };
  };
};

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
      clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_SECRET,
  pages: {
    signIn: '/login'
  },
  // Refresh Token documentation here: 'https://next-auth.js.org/tutorials/refresh-token-rotation'
  callbacks: {
    async jwt({ token, account, user }) {
      // If this was initial sign in...
      if (account && user) {
        return {
          ...token,
          accessToken: account.access.token,
          refreshToken: account.refresh.token,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000 // Standardizing with milliseconds
        }
      };

      // Return previous token if access token has not expired yet
      if (Date.now() < token.accessTokenExpires) {
        // Token would still be valid, so return it
        console.log('EXISTING ACCESS TOKEN IS VALID');
        return token;
      };

      // Access token has expired, must be refreshed
      console.log('ACESS TOKEN HAS EXPIRED, REFRESHING...');
      return await refreshAcessToken(token);

    },

    // Client Side
    async session ({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    }
  }
});
// Dependencies
import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => { // Providers destructured from props
  return (
    <div>
      <img className='w-52 mb-5' src='https://links.papareact.com/9xl' alt='Spotify Logo' />

      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button className='bg-[#18D860] text-white p-5 rounded-lg'>Log in with {provider.name}</button>
        </div>
      ))}
    </div>
  );
};

export default Login;

// Will run on server side EVERY TIME before page is delievered 
export const getServerSideProps = async () => {
  const providers = await getProviders();
  return {
    props: {
      providers
    },
  };
};
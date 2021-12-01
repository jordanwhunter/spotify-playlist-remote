// Dependencies
import React from 'react';
import { getProviders, signIn } from 'next-auth/react';

const Login = ({ providers }) => { // Providers destructured from props
  return (
    <div>
      <h1>Login Page</h1>
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
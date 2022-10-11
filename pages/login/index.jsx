/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

const login = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: session } = useSession();
  console.log(session);
  if (session) {
    return (
      <div>
        <p>Welcome, {session.user.name}</p>
        <img src={session.user.image} alt='' className='rounded-full' />
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  } else {
    return (
      <div>
        <p>You are not signed in</p>
        <button onClick={() => signIn()}>Sign In</button>
      </div>
    );
  }
};

export default login;

import React, { useState } from 'react';

import { useLogto } from '@logto/react';
import { logtoConfig } from 'shared/config/logto';

import './App.css';
import reactLogo from 'shared/assets/react.svg';

const Index = () => {
  const [count, setCount] = useState(0);

  const { signIn, isAuthenticated, isLoading, signOut } = useLogto();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (!isAuthenticated) {
    signIn(`${logtoConfig.baseUrl}/callback`);
  }

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <button onClick={() => signOut()}>sign out</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

export default Index;

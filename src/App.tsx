import React, { useState } from 'react';

import { useLogto } from '@logto/react';

import './App.css';
import reactLogo from './assets/react.svg';

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://admin.test.bmw-nsk.ru' : 'http://localhost:5173';
export const RootApp = () => {
  const [count, setCount] = useState(0);

  const { signIn, isAuthenticated, signOut } = useLogto();

  if (!isAuthenticated) {
    signIn(`${BASE_URL}/callback`);
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
        <button onClick={() => signOut(BASE_URL)}>sign out</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  );
};

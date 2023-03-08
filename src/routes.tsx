import React from 'react';

import { useRoutes } from 'react-router-dom';

import { LogtoConfig, LogtoProvider } from '@logto/react';

import { RootApp } from './App';
import { Callback } from './components/Callback';

const Router = () => {
  return useRoutes([
    {
      element: <Callback />,
      path: '/callback',
    },
    {
      element: <RootApp />,
      path: '/',
    },
  ]);
};

const LOGTO_CONFIG: LogtoConfig = {
  endpoint: 'https://auth.test.bmw-nsk.ru/',
  appId: '4MnUCOWI2wDZN67BgDuEz',
};

export const ProtectedRouter = () => {
  return (
    <LogtoProvider config={LOGTO_CONFIG}>
      <Router />
    </LogtoProvider>
  );
};

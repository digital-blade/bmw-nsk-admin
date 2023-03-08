import React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Callback from 'pages/Callback';
import Index from 'pages/Index';

const router = createBrowserRouter([
  {
    element: <Callback />,
    path: '/callback',
  },
  {
    element: <Index />,
    path: '/',
  },
]);

export const Router = () => <RouterProvider router={router} />;

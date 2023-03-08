import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import ReactDOM from 'react-dom/client';

import './index.css';
import { ProtectedRouter } from './routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <ProtectedRouter />
    </BrowserRouter>
  </React.StrictMode>,
);

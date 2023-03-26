import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import { Provider } from 'react-redux';
import { store } from './store/index.js';

import { RouterProvider } from "react-router-dom";
import { router } from './routes/index';

import "./assets/style/uikit.min.css";
import "./assets/style/style.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </Provider>
);


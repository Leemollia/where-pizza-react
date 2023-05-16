import React from 'react';

import { Provider } from 'react-redux';
import { store } from './store/index.js';

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import PageLayout from "./pages/PageLayout/PageLayout";
import MainPage from "./pages/MainPage/MainPage";
import ErrorPage from "./pages/ErrorPage/ErrorPage";


const router = createBrowserRouter([
  {
    element: <PageLayout />,
    children: [
      {
        path: '/',
        element: <MainPage />
      },
      {
        path: '*',
        element: <ErrorPage />
      }
    ]
  },
]);

function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  )
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { headerContent } from './contents';

const routes = headerContent.map((headerContent) => {
  type Routes = {
    path: string;
    element: JSX.Element;
  };

  const route: Routes = {
    path: headerContent.link,
    element: headerContent.el,
  };

  return route;
});

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { navContent } from './contents';

const routes = navContent.map((navContent) => {
  type Routes = {
    path: string;
    element: JSX.Element;
  };

  const route: Routes = {
    path: navContent.link,
    element: navContent.el,
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

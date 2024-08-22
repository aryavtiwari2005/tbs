import React from 'react';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import Contact from './Contact';
import About from './About'
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

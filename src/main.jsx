import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Login from './Components/Main/LogIn/Login.jsx';
import Registration from './Components/Main/Registration/Registration.jsx';
import ContextAPI from './Components/Context/ContextAPI.jsx';
import Others from './Components/Main/Others/Others.jsx';
import Items from './Components/Main/Others/Items.jsx';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './Components/Main/Others/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/Login',
        element: <Login></Login>,
      },
      {
        path: '/Registration',
        element: <Registration></Registration>,
      },
      {
        path: '/Others',
        element: (
          <Others>
            <Items></Items>
          </Others>
        ),
      },
      {
        path: '/About',
        element: (
          <Others>
            <About></About>
          </Others>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContextAPI>
      <RouterProvider router={router} />
      <ToastContainer />
    </ContextAPI>
  </StrictMode>
);

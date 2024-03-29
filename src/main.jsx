import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages, loaders and actions
import Home from './pages/Home'
import Login, {action as loginAction} from './pages/Login'
import Signup, { action as signupAction} from './pages/Signup'

//Components
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    index: true,
    element: <Home/>,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

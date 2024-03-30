import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages, loaders and actions
import Home from './pages/Home'

import Login, {action as loginAction} from './pages/auth/Login'
import Signup, { action as signupAction} from './pages/auth/Signup'
import ForgotPassword, {action as forgotPasswordAction} from './pages/auth/ForgotPassword'
import ResetPassword from './pages/auth/ResetPassword'

import ErrorPage from './pages/ErrorPage'

//Components
import AuthLayout from './components/AuthLayout'

const router = createBrowserRouter([
  {
    index: true,
    element: <Home/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
        action: loginAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "signup",
        element: <Signup />,
        action: signupAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
        action: forgotPasswordAction,
        errorElement: <ErrorPage />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
        errorElement: <ErrorPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

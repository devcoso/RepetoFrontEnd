import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";

//Pages, loaders and actions
import Home, {loader as homeLoader} from './pages/Home'

import Login, {action as loginAction} from './pages/auth/Login'
import Signup, { action as signupAction} from './pages/auth/Signup'
import ForgotPassword, {action as forgotPasswordAction} from './pages/auth/ForgotPassword'
import ResetPassword, {loader as resetPasswordLoader, action as resetPasswordAction} from './pages/auth/ResetPassword'

import Dashboard, {loader as dashboardLoader} from './pages/Dashboard'

import ErrorPage from './pages/ErrorPage'

//Components
import AuthLayout, {loader as authLayoutLoader} from './components/AuthLayout'

const router = createBrowserRouter([
  {
    index: true,
    element: <Home/>,
    loader: homeLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth/",
    element: <AuthLayout />,
    loader: authLayoutLoader,
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
        path: "reset-password/:token",
        element: <ResetPassword />,
        loader: resetPasswordLoader,
        action: resetPasswordAction,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

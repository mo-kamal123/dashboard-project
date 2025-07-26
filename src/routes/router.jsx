import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import AuthLayout from "../componants/Layout/auth-layout";
import Login from "../componants/auth/login";
import ForgetPassword from "../componants/auth/forget-password";
import RootLayout from "../componants/Layout/root-layout";

export const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Login /> },
      { path: "forget-password", element: <ForgetPassword /> },
    ],
  },
  {
    path: "/",
    element: <RootLayout isAuthenticated ={false} />,
    children: [{ index: true, element: <Home /> }],
  },
]);

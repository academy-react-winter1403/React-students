import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './components/root/Root'
import App from './App/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Panel from './components/UsePanel/Panel'
import SingUpConfirmCode from './components/Authorization/SignUp/SingUpConfirmCode'
import SignUpForm from './components/Authorization/SignUp/SignUpForm'
import LoginForm from './components/Authorization/Login/LoginForm'
import StepOne from './components/Authorization/SignUp/StepOne'
import NotFound from './components/error/NotFound'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        path: "/",
        element: <App />,
      }
    ],
  },
  {
    path: "/UserPanel",
    element: <Panel />,
    errorElement: <Error />,
  }, 
  {
    path: "/Login",
    element: <LoginForm />,
    errorElement: <Error />,
  },
  {
    path: "/SignUp",
    element: <StepOne />,
    errorElement: <Error />,
  },
  {
    path: "/SignUpCode",
    element: <SingUpConfirmCode />,
    errorElement: <Error />,
  },
  {
    path: "/SingUpForm",
    element: <SignUpForm />,
    errorElement: <Error />,
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
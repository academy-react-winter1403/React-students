import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Landing/Content'
import LoginForm from './components/Authorization/Login/LoginForm'
import NotFound from './components/error/NotFound'
import Route from './components/config/route'
import Error from './components/error/Error'
import Panel from './components/UsePanel/Panel'
import SingUp from './components/Authorization/SignUp/SignUp'
import SingUpConfirmCode from './components/Authorization/SignUp/SingUpConfirmCode'
import SignUpForm from './components/Authorization/SignUp/SignUpForm'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Route />, 
    children:[
      {
        path: "/",
        element: <Content />,
        errorElement: <Error />,
      },
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
    path: "/SingUp",
    element: <SingUp />,
    errorElement: <Error />,
  },
  {
    path: "/SingUpCode",
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
  </StrictMode>,
)

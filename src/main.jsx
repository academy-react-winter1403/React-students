import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Content from './components/Landing/Content'
import LoginForm from './components/Authorization/LoginForm'
import NotFound from './components/error/NotFound'
import Route from './components/config/route'
import Error from './components/error/Error'
import Panel from './components/UsePanel/Panel'

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
    path: "/Register",
    element: <LoginForm />,
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

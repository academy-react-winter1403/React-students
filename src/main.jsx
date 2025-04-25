import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './components/config/Route'
import App from './App/App'
import CourseList from './components/CourseList/CourseList'
import BlogList from './components/BlogList/BlogList'
import CourseDetail from './components/CourseDetail/CourseDetail'
import BlogDetail from './components/BlogDetail/BlogDetail'
import Panel from './components/UsePanel/Panel'
import LoginForm from './components/Authorization/Login/LoginForm'
import NotFound from './components/Error/NotFound'
import Error from './components/Error/Error'
import StepOne from './components/Authorization/SignUp/StepOne'
import SingUpConfirmCode from './components/Authorization/SignUp/SingUpConfirmCode'
import SignUpForm from './components/Authorization/SignUp/SignUpForm'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>,
    children: [
      {
        index: true,
        path: "/",
        element: <App/>,
      },
      {
        path: "/courselist",
        element: <CourseList/>,
        errorElement: <Error />
      },
      {
        path: "/bloglist",
        element: <BlogList/>,
        errorElement: <Error />
      },
      {
        path: "/detail/:id",
        element: <CourseDetail />,
      },
      {
        path: "/detail/:id",
        element: <BlogDetail />,
      }
    ],
  },
  {
    path: "/RegisterStepOne",
    element: <StepOne/>,
    errorElement: <Error />
  },
  {
    path: "/RegisterStepTwo",
    element: <SingUpConfirmCode />,
    errorElement: <Error />
  },
  {
    path: "/RegisterStepThree",
    element: <SignUpForm />,
    errorElement: <Error />
  },
  {
    path: "/Login",
    element: <LoginForm />,
    errorElement: <Error />
  },
  {
    path: "/UserPanel",
    element: <Panel />,
    errorElement: <Error />
  },
  {
    path: "*",
    element: <NotFound/>,
    errorElement: <Error/>
  }
]);




createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  </>
)


import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Route from './components/config/Route'
import App from './App/App'
import CourseList from './components/CourseList/CourseList'
import BlogList from './components/BlogList/BlogList'
import Panel from './components/UsePanel/Panel'
import LoginForm from './components/Authorization/LoginForm'
import NotFound from './components/Error/NotFound'
import Error from './components/Error/Error'

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
        element: <CourseList/>
      },
      {
        path: "/bloglist",
        element: <BlogList/>
      }
    ],
  },
  {
    path: "/userpanel",
    element: <Panel />,
    errorElement: <Error />,
  }, 
  {
    path: "/register",
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
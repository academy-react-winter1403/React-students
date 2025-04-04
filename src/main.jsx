import App from './App/App'
import CourseList from './components/CourseList/CourseList.jsx'
import BlogList from './components/BlogList/BlogList.jsx'
import Panel from './components/UsePanel/Panel.jsx'
import LoginForm from './components/Authorization/LoginForm.jsx'
import NotFound from './components/Error/NotFound.jsx'
import Error from './components/Error/Error.jsx'
import Route from './components/Config/Route.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'





const router = createBrowserRouter([
  {
    path: "/",
    element: <Route/>, 
    children:[
      {
        index: true,
        path: "/",
        element: <App />,
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
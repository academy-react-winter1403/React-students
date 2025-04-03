import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
<<<<<<< HEAD
import Root from './components/config/Root'
import CourseList from './components/CourseList/CourseList'
import BlogList from './components/blogList/BlogList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
<<<<<<< HEAD
import App from './App.jsx'
import Root from './components/root/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
=======
>>>>>>> develop


const router = createBrowserRouter([
  {
<<<<<<< HEAD
    path:"/",
    element: <Root/>,
    children: [
      {
        index: true,
        path:"/",
        element: <App/>
      }
    ]
=======
    path: "/",
    element: <Root />,
    children: [
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
>>>>>>> develop
  }
=======
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
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
<<<<<<< HEAD
    <RouterProvider router={router}/>
    {/* <App /> */}
=======
    <RouterProvider router={router} />
>>>>>>> develop
=======
    <RouterProvider router={router} />
>>>>>>> 7b22063b3f379e17e7236f75766b11569e7708ad
  </StrictMode>,
)
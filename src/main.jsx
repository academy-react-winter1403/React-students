import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import Root from './components/config/Root'
import CourseList from './components/courseList/CourseList'
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
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <RouterProvider router={router}/>
    {/* <App /> */}
=======
    <RouterProvider router={router} />
>>>>>>> develop
  </StrictMode>,
)
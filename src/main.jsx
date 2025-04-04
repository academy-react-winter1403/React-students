import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App/App'
import Route from './components/Config/Route'
import CourseList from './components/CourseList/CourseList'
import BlogList from './components/BlogList/BlogList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


const router = createBrowserRouter([
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
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
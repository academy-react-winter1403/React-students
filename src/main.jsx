import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './components/root/Root'
import App from './App/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'


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
  }
]);




createRoot(document.getElementById('root')).render(
  <StrictMode>
<<<<<<< HEAD
    <App />
  </StrictMode>
)
=======
    <RouterProvider router={router} />
  </StrictMode>,
)
>>>>>>> 779cf64b6ecbd9c6f8e38f09be3a25629d4b501b

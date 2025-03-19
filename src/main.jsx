import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from './components/root/Root.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Root/>,
    children: [
      {
        index: true,
        path:"/",
        element: <App/>
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App /> */}
  </StrictMode>,
)

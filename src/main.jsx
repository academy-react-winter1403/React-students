import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Root from './components/root/Root'
import App from './App/App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { router } from './components/config/route'



createRoot(document.getElementById('root')).render(
  <>
  <StrictMode>
    <App />
  </StrictMode>
  </>
  
)


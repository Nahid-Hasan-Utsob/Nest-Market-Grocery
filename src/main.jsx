import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router'
import CartProvider from './Context/CartContext'
import ScrollToTop from './Layout/ScrollToTop'

window.history.scrollRestoration = "manual";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </CartProvider>
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home/Home.jsx'
import About from './Pages/About/About.jsx'
import Sign_Up from './Pages/Sign_Up/Sign_Up.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Error from './Pages/ErrorPage/Error.jsx'
import AddToCart from './Pages/AddToCart/AddToCart.jsx'


const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/sign-up',
        element: <Sign_Up />
      }
      ,
      {
        path: '/add-to-cart',
        element: <AddToCart />
      }
    ]
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

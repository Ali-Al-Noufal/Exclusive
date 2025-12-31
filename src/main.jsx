import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Auth from './pages/Auth'
import Register from './pages/Register'
import Login from './pages/Login'
import Root from './pages/Root'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import WhishList from './pages/WhishList'
import Cart from './pages/Cart'
import CheckOut from './pages/CheckOut'
import Show from './pages/Show'
const routes=createBrowserRouter([
  {
    path:"/",
    element:<Auth />,
    children:[
      {
        path:"",
        element:<Login />
      },{
        path:"register",
        element:<Register />
      }
    ]
  },{
    path:"/store",
    element:<Root />,
    children:[
      {
        path:"home",
        element:<Home />
      },{
        path:"about",
        element:<About />
      },{
        path:"contact",
        element:<Contact />
      },{
        path:"whishlist",
        element:<WhishList />
      },{
        path:"cart",
        element:<Cart />
      },{
        path:"checkout",
        element:<CheckOut />
      },{
        path:"show/:id",
        element:<Show />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
<RouterProvider router={routes} />
  </StrictMode>,
)

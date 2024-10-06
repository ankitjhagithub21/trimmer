import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './layouts/app-layout'
import Home from './pages/home'
import Dashboard from './pages/Dashboard'
import LinkDetails from './pages/link-details'
import Auth from './pages/auth'

function App() {

  const router = createBrowserRouter([
    {
      element:<AppLayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/dashboard",
          element:<Dashboard/>
        },
        {
          path:"/link/:id",
          element:<LinkDetails/>
        },
        {
          path:"/auth",
          element:<Auth/>
        },
      ]
    }
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App

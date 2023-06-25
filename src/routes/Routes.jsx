import { createBrowserRouter } from 'react-router-dom'
import ECommerce from '../pages/Dashboard/ECommerce'
import AllStaff from '../Admin/Dashboard/Staffs/AllStaff'
import Main from '../layouts/Main'
import AddStaff from '../Admin/Dashboard/Staffs/AddStaff'
import DefaultLayout from '../layout/DefaultLayout'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'
import AddUrl from '../Admin/Dashboard/WebUrl/AddUrl'
import AllUrl from '../Admin/Dashboard/WebUrl/AllUrl'
import AllClient from '../Admin/Dashboard/Client/AllClient'
import AddClient from '../Admin/Dashboard/Client/AddClient'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/dashboard',
        element: <ECommerce></ECommerce>,
      },
    {
        path: '/staff/all-staff',
        element: <AllStaff></AllStaff>,
      },
      {
        path: '/staff/add-staff',
        element: <AddStaff></AddStaff>,
      },
      {
        path: '/webUrl/all-link',
        element: <AllUrl></AllUrl>,
      },
      {
        path: '/webUrl/web-link',
        element: <AddUrl></AddUrl>,
      },
      {
        path: '/client/all-client',
        element: <AllClient></AllClient>,
      },
      {
        path: '/client/add-client',
        element: <AddClient></AddClient>,
      },





      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <Signup></Signup>,
      }



    ]
  },
])

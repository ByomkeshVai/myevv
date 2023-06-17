import { createBrowserRouter } from 'react-router-dom'
import ECommerce from '../pages/Dashboard/ECommerce'
import AllStaff from '../Admin/Dashboard/Staffs/AllStaff'
import Main from '../layouts/Main'
import AddStaff from '../Admin/Dashboard/Staffs/AddStaff'
import DefaultLayout from '../layout/DefaultLayout'
import Login from '../Authentication/Login'
import Signup from '../Authentication/Signup'

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

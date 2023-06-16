import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import ECommerce from '../pages/Dashboard/ECommerce'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <ECommerce />,
  },
])

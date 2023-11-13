import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import ContactPage from '../Pages/Contact/ContactPage';
import MenuPage from '../Pages/MenuPage/MenuPage';
import OrderPage from '../Pages/Order/OrderPage';
import LoginPage from '../Pages/Login/LoginPage';
import SecondLayout from '../Layout/SecondLayout';
import RegisterPage from '../Pages/Register/RegisterPage';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/contact',
        element: (
          <PrivateRoute>
            <ContactPage />
          </PrivateRoute>
        ),
      },
      { path: '/menu', element: <MenuPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/:category', element: <OrderPage /> },
    ],
  },
  {
    path: '/login',
    element: <SecondLayout />,
    children: [{ index: true, element: <LoginPage /> }],
  },
  { path: '/register', element: <RegisterPage /> },
]);

export default router;

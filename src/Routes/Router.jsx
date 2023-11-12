import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import HomePage from '../Pages/HomePage/HomePage';
import ContactPage from '../Pages/Contact/ContactPage';
import MenuPage from '../Pages/MenuPage/MenuPage';
import OrderPage from '../Pages/Order/OrderPage';
import LoginPage from '../Pages/Login/LoginPage';
import SecondLayout from '../Layout/SecondLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
      { path: '/menu', element: <MenuPage /> },
      { path: '/order', element: <OrderPage /> },
      { path: '/order/:category', element: <OrderPage /> },
    ],
  },
  {
    path: '/login',
    element: <SecondLayout />,
    errorElement: <ErrorPage />,
    children: [{ index: true, element: <LoginPage /> }],
  },
]);

export default router;

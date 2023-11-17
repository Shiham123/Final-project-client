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
import DrawerLayout from '../Layout/DrawerLayout';
import DashBroadPage from '../Pages/DashBroad/DashBroadPage';
import CartPage from '../Pages/DashBroad/userPage/CartPage';
import ManageItemPage from '../Pages/DashBroad/ManageItemPage';
import BookingPage from '../Pages/DashBroad/BookingPage';
import UserPage from '../Pages/DashBroad/UserPage';
import UserHome from '../Pages/DashBroad/userPage/UserHome';
import Reservation from '../Pages/DashBroad/userPage/reservation';
import UserPayment from '../Pages/DashBroad/userPage/UserPayment';
import UserReview from '../Pages/DashBroad/userPage/UserReview';
import UserBooking from '../Pages/DashBroad/userPage/UserBooking';
import AddProduct from '../Pages/DashBroad/AddProduct';

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
  {
    path: '/dashBroad',
    element: (
      <PrivateRoute>
        <DrawerLayout />
      </PrivateRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      // admin panal link
      { path: 'home', element: <DashBroadPage /> },
      { path: 'cart', element: <AddProduct /> },
      { path: 'items', element: <ManageItemPage /> },
      { path: 'booking', element: <BookingPage /> },
      { path: 'user', element: <UserPage /> },
      // user panel link

      { path: 'userHome', element: <UserHome /> },
      { path: 'reservation', element: <Reservation /> },
      { path: 'payment', element: <UserPayment /> },
      { path: 'userCart', element: <CartPage /> },
      { path: 'review', element: <UserReview /> },
      { path: 'booking', element: <UserBooking /> },
    ],
  },
]);

export default router;

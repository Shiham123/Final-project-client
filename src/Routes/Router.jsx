import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../ErrorPage/ErrorPage';
import HomePage from '../HomePage/HomePage';
import ContactPage from '../Contact/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: '/contact', element: <ContactPage /> },
    ],
  }, // now i am code here // for this reason vs code is important
]);

export default router;

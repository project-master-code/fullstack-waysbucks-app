import LoginPage from '@/features/auth/login/page';
import RegisterPage from '@/features/auth/register/page';
import AdminPage from '@/features/pages/admin/page';
import CartPage from '@/features/pages/cart/page';
import DetailPage from '@/features/pages/details/page';
import HomePage from '@/features/pages/home/page';
import ProfilePage from '@/features/pages/profiles/page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/profile',
      element: <ProfilePage />,
    },
    {
      path: '/cart',
      element: <CartPage />,
    },
    {
      path: '/detail',
      element: <DetailPage />,
    },
    {
      path: '/admin',
      element: <AdminPage />,
    },
    {
      path: '*',
      element: <>404</>,
    },
  ]);
  return <RouterProvider router={router} />;
}

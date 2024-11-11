import LoginPage from '@/features/auth/login/page';
import RegisterPage from '@/features/auth/register/page';
import AdminPage from '@/features/pages/admin/page';
import CartPage from '@/features/pages/cart/page';
import DetailPage from '@/features/pages/details/page';
import HomePage from '@/features/pages/home/page';
import ProfilePage from '@/features/pages/profiles/page';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ProtectedRoute } from './_protected-router';
import ToppingPage from '@/features/pages/topping/page';
import ProductPage from '@/features/pages/product/page';
export function AppRouter() {
  const router = createBrowserRouter([
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/register',
      element: <RegisterPage />,
    },
    {
      path: '/',
      element: <HomePage />,
    },
    {
      element: <ProtectedRoute role={'USER'} />,
      children: [],
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
      path: '/topping',
      element: <ToppingPage />,
    },
    {
      path: '/product',
      element: <ProductPage />,
    },
    {
      path: '*',
      element: <>404</>,
    },
  ]);
  return <RouterProvider router={router} />;
}

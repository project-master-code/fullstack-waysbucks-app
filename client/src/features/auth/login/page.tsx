import { useAppDispatch, useAppSelector } from '@/app/stores/stores';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { LoginAsync, checkAuth } from '@/app/stores/auth/async';
import { useEffect } from 'react';
import Swal from 'sweetalert2';
interface LoginData {
  email: string;
  password: string;
}
export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>();
  const user = useAppSelector((state) => state.auth.user);
  const handleLoginSubmit = async (data: LoginData) => {
    const res = await dispatch(LoginAsync(data));
    if (LoginAsync.fulfilled.match(res)) {
      Swal.fire({
        title: 'Login Success!',
        icon: 'success',
      });
    }

    dispatch(checkAuth());
    // navigate('/');
  };
  useEffect(() => {
    if (user?.role === 'USER') {
      navigate('/');
    } else if (user?.role === 'ADMIN') {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <Card className="p-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-red-600">
              Login
            </h1>
          </div>
          <form
            className="space-y-4"
            onSubmit={handleSubmit(handleLoginSubmit)}
          >
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="sr-only"
              >
                Email
              </Label>
              <Input
                id="email"
                placeholder="Email"
                required
                {...register('email')}
                className="border-red-600"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email.message}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="sr-only"
              >
                Password
              </Label>
              <Input
                id="password"
                placeholder="Password"
                required
                type="password"
                {...register('password')}
                className="border-red-600"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <Button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700"
            >
              Login
            </Button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Don't have an account?{' '}
              <Link
                to="/register"
                className="font-medium hover:underline"
              >
                Klik Here
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}

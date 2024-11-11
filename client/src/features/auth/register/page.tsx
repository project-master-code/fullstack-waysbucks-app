import { RegisterAsync } from '@/app/stores/auth/async';
import { useAppDispatch } from '@/app/stores/stores';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

interface RegisterData {
  email: string;
  password: string;
  fullname: string;
}

export default function RegisterPage() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>();

  const handleRegisterSubmit = async (data: RegisterData) => {
    const res = await dispatch(RegisterAsync(data));
    if (RegisterAsync.fulfilled.match(res)) {
      navigate('/login');
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <Card className="p-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-red-600">
              Register
            </h1>
          </div>
          <form
            onSubmit={handleSubmit(handleRegisterSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label
                htmlFor="fullName"
                className="sr-only"
              >
                Full Name
              </Label>
              <Input
                id="fullName"
                placeholder="Full Name"
                required
                type="text"
                {...register('fullname')}
                className="border-red-600"
              />
              {errors.fullname && (
                <p className="text-red-600 text-sm">
                  {errors.fullname.message}
                </p>
              )}
            </div>
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
              Register
            </Button>
          </form>
          <div className="text-center">
            <p className="text-sm">
              Already have an account?{' '}
              <Link
                to="/login"
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

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-4">
      <div className="w-full max-w-md space-y-8">
        <Card className="p-12">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tighter text-red-600">
              Login
            </h1>
          </div>
          <form className="space-y-4">
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
                type="email"
                className="border-red-600"
              />
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
                className="border-red-600"
              />
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

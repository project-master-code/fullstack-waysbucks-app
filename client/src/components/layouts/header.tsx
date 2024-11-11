import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import CartIcon from '../ui/cart_count';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-4 py-4 border-b">
      <Link to={'/'}>
        <img
          src="https://res.cloudinary.com/dje40bx3b/image/upload/v1731300001/waysBucks/logo/otyzlepsneltzahkyc8w.png"
          alt="Waysbucks Logo"
          width={50}
          height={50}
          className="h-12 w-12"
        />
      </Link>
      <div className="flex items-center gap-4">
        <CartIcon itemCount={1} />

        <Button
          variant="ghost"
          className="p-0"
        >
          <Avatar>
            <AvatarImage
              src="/placeholders.svg"
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
            />
            <AvatarFallback>AV</AvatarFallback>
          </Avatar>
        </Button>
      </div>
    </header>
  );
};

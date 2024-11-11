import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';
import CartIcon from '../ui/cart_count';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

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
        <Link to={'/cart'}>
          <CartIcon itemCount={1} />
        </Link>

        {/* Bagian avatar */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className="flex w-10 h-10 border-2 rounded-full justify-center items-center">
              <AvatarImage
                src={'avatarSrc'}
                alt="@user"
                className="object-cover rounded-full w-10 h-10 border-2"
              />
              <AvatarFallback>A</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="bottom"
            className="mb-4 w-56 bg-white"
          >
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <Link
                  to="/profile"
                  className="w-full"
                >
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to={'/login'}>
                <Button variant="ghost">Log out</Button>
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

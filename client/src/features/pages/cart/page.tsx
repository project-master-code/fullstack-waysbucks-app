import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BsTrash2 } from 'react-icons/bs';

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'Ice Coffe Palm Sugar',
      toppings: ['Bill Berry Boba', 'Bubble Tea Gelatin'],
      price: '33.000',
      image: '/placeholder.svg',
    },
    {
      id: 2,
      name: 'Ice Coffe Palm Sugar',
      toppings: ['Bill Berry Boba', 'Manggo'],
      price: '36.000',
      image: '/placeholder.svg',
    },
  ];
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold text-red-600 mb-6">My Cart</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl mb-4">Review Your Order</h2>
          <div className="border-t border-b py-4 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start"
              >
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    width={80}
                    height={80}
                    className="rounded-lg"
                  />
                  <div>
                    <h3 className="font-bold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Toping:</span>{' '}
                      {item.toppings.join(', ')}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <p className="text-red-600">Rp.{item.price}</p>
                  <button className="text-red-600">
                    <BsTrash2 className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="border-b py-4">
            <div className="flex justify-between mb-2">
              <p>Subtotal</p>
              <p>69.000</p>
            </div>
            <div className="flex justify-between">
              <p>Qty</p>
              <p>2</p>
            </div>
          </div>
          <div className="flex justify-between py-4">
            <p className="font-bold">Total</p>
            <p className="font-bold text-red-600">69.000</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="space-y-4">
            <Input
              placeholder="Name"
              className="border-red-600"
            />
            <Input
              placeholder="Email"
              type="email"
              className="border-red-600"
            />
            <Input
              placeholder="Phone"
              type="tel"
              className="border-red-600"
            />
            <Input
              placeholder="Pos Code"
              className="border-red-600"
            />
            <Textarea
              placeholder="Address"
              className="border-red-600"
            />
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700">Pay</Button>
        </div>
      </div>
    </div>
  );
}
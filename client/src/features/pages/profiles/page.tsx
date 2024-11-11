import { Header } from '@/components/layouts/header';
import { Badge } from '@/components/ui/badge';
import { products } from '../home/page';

const profile = {
  avatar: 'https://wallpapercave.com/wp/wp11860905.jpg',
  fullname: 'Egi Ganteng',
  email: 'egigans@gmail.com',
};

const myTransactions = [
  {
    id: 1,
    orders: [
      {
        productId: 1,
        product: products.find((p) => p.id === 1),
        quantity: 2,
        price: 'Rp.33.000',
      },
      {
        productId: 2,
        product: products.find((p) => p.id === 2),
        quantity: 1,
        price: 'Rp.31.000',
      },
    ],
    date: 'Saturday, 5 March 2021',
    toppings: ['Bill Berry Boba', 'Bubble Tea Gelatin'],
    status: 'On The Way',
    subtotal: 'Rp.97.000',
    qrCodeImage: '/placeholder.svg',
  },
  {
    id: 2,
    orders: [
      {
        productId: 3,
        product: products.find((p) => p.id === 3),
        quantity: 1,
        price: 'Rp.29.000',
      },
      {
        productId: 4,
        product: products.find((p) => p.id === 4),
        quantity: 1,
        price: 'Rp.28.000',
      },
    ],
    date: 'Monday, 7 March 2021',
    toppings: ['Green Tea Boba', 'Mango Popping Pearl'],
    status: 'Completed',
    subtotal: 'Rp.57.000',
    qrCodeImage: '/placeholder.svg',
  },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8 grid md:grid-cols-2 gap-8">
        <section className="text-left">
          <h2 className="text-2xl font-bold text-red-600 mb-6">My Profile</h2>
          <div className="flex gap-6">
            <img
              src={profile.avatar}
              alt="Profile picture"
              width={180}
              height={180}
              className="rounded-lg object-cover h-[260px]"
            />
            <div>
              <h3 className="font-bold mb-4">Full Name</h3>
              <p className="mb-4">{profile.fullname}</p>
              <h3 className="font-bold mb-4">Email</h3>
              <p>{profile.email}</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-neutral-700 mb-6">
            My Transaction
          </h2>
          {myTransactions.map((transaction) => (
            <div
              key={transaction.id}
              className="text-left bg-pink-50 p-4 rounded-lg mb-4"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="">
                  {transaction.orders.map((order) => (
                    <div
                      key={order.productId}
                      className="flex justify-between items-start mb-4"
                    >
                      <div className="flex gap-4">
                        <img
                          src={order.product?.image}
                          alt={order.product?.name}
                          width={80}
                          height={80}
                          className="rounded-lg"
                        />
                        <div>
                          <h4 className="font-bold text-red-600">
                            {order.product?.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {transaction.date}
                          </p>
                          <p className="text-sm mt-2">
                            <span className="font-bold">Topping:</span>{' '}
                            {transaction.toppings.join(', ')}
                          </p>
                          <p className="text-sm">Price: {order.price}</p>
                          <p className="text-sm">Quantity: {order.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col">
                  <img
                    src={
                      'https://res.cloudinary.com/dje40bx3b/image/upload/v1731300001/waysBucks/logo/otyzlepsneltzahkyc8w.png'
                    }
                    alt="Waysbucks Logo"
                    width={40}
                    height={40}
                  />
                  <img
                    src={transaction.qrCodeImage}
                    alt="QR Code"
                    width={80}
                    height={80}
                  />
                </div>
              </div>
              <div className="flex justify-end items-center">
                <div className="text-right">
                  <Badge
                    variant={'secondary'}
                    className={`text-sm ${
                      transaction.status === 'On The Way'
                        ? 'text-blue-500'
                        : 'text-gray-500'
                    }`}
                  >
                    {transaction.status}
                  </Badge>
                  <p className="font-bold">Sub Total: {transaction.subtotal}</p>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

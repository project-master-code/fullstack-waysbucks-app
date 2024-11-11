import { Header } from '@/components/layouts/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { BsTrash2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';

export default function CartPage() {
  const cartItems = [
    {
      id: 1,
      name: 'Ice Coffe Palm Sugar',
      toppings: ['Bill Berry Boba', 'Bubble Tea Gelatin'],
      price: '33.000',
      image:
        'https://s3-alpha-sig.figma.com/img/82f2/db53/fac76fcc5fc42321f68aa860e9145f4f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEcjQvTk1KQIjTtPhYP~eturHphKLlscmNUtufFjY~dW3OuhR3SbSjS1qH4v5afhM10lJmK6XZwWyPLgbmubSexlsTTrLQZ4yafnb0smw2Ze4JG-VYfHscrvIQZLen0AkhWpSLdNyrpMAck0zSvRbpkji2OlupnaoPDtPW8KKfkYu7dRLVPStf6UMUcQmpl6~ORVHmmfvWcLcfDSe54aZ0usQowTVD3uut9FVExY9G4uK4Wman3kjs4r82KBfyCxovkvpCE8HLxRwDaa0zcSIUfLSD29mBwMCUndQyjCdcd4Gn2cs-NM4vPtp3l4mDamVR~NCq2Alozvjmk9PHRtFg__',
    },
    {
      id: 2,
      name: 'Ice Coffe Palm Sugar',
      toppings: ['Bill Berry Boba', 'Manggo'],
      price: '36.000',
      image:
        'https://s3-alpha-sig.figma.com/img/82f2/db53/fac76fcc5fc42321f68aa860e9145f4f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEcjQvTk1KQIjTtPhYP~eturHphKLlscmNUtufFjY~dW3OuhR3SbSjS1qH4v5afhM10lJmK6XZwWyPLgbmubSexlsTTrLQZ4yafnb0smw2Ze4JG-VYfHscrvIQZLen0AkhWpSLdNyrpMAck0zSvRbpkji2OlupnaoPDtPW8KKfkYu7dRLVPStf6UMUcQmpl6~ORVHmmfvWcLcfDSe54aZ0usQowTVD3uut9FVExY9G4uK4Wman3kjs4r82KBfyCxovkvpCE8HLxRwDaa0zcSIUfLSD29mBwMCUndQyjCdcd4Gn2cs-NM4vPtp3l4mDamVR~NCq2Alozvjmk9PHRtFg__',
    },
  ];
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8 text-left">
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
              <Link to={'/profile'}>
                <Button className="w-full bg-red-600 hover:bg-red-700">
                  Pay
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

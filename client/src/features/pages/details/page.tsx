import { Header } from '@/components/layouts/header';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

export const toppings = [
  { name: 'Bubble Tea Gelatin', image: '/placeholder.svg' },
  { name: 'Manggo', image: '/placeholder.svg' },
  { name: 'Green Coconut', image: '/placeholder.svg' },
  { name: 'Boba Manggo', image: '/placeholder.svg' },
  { name: 'Bill Berry Boba', image: '/placeholder.svg' },
  { name: 'Kiwi Popping Pearl', image: '/placeholder.svg' },
  { name: 'Matcha Cantaloupe', image: '/placeholder.svg' },
  { name: 'Strawberry Popping', image: '/placeholder.svg' },
];
export default function DetailPage() {
  const [selectedToppings, setSelectedToppings] = useState<string[]>([]);
  const basePrice = 27000;
  const toggleTopping = (name: string) => {
    setSelectedToppings((prev) =>
      prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
    );
  };
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <img
            src="/placeholder.svg"
            alt="Ice Coffee Palm Sugar"
            width={600}
            height={600}
            className="rounded-lg w-full"
          />

          <div>
            <h1 className="text-4xl font-bold text-red-600 mb-4">
              Ice Coffee Palm Sugar
            </h1>
            <p className="text-xl text-red-600 mb-8">Rp.27.000</p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold text-neutral-700 mb-4">
                Toping
              </h2>
              <div className="grid grid-cols-4 gap-4">
                {toppings.map((topping, index) => (
                  <button
                    key={index}
                    onClick={() => toggleTopping(topping.name)}
                    className={`flex flex-col items-center ${
                      selectedToppings.includes(topping.name)
                        ? 'text-red-600'
                        : 'text-gray-600'
                    }`}
                  >
                    <img
                      src={topping.image}
                      alt={topping.name}
                      width={50}
                      height={50}
                      className={`rounded-full mb-2 ${
                        selectedToppings.includes(topping.name)
                          ? 'ring-2 ring-red-600'
                          : ''
                      }`}
                    />
                    <p className="text-xs text-center">{topping.name}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-neutral-700">Total</h3>
              <p className="text-2xl font-bold text-red-600">
                Rp.{basePrice + selectedToppings.length * 3000}
              </p>
            </div>

            <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6">
              Add Cart
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

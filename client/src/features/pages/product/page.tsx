import { Header } from '@/components/layouts/header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { FaPaperclip } from 'react-icons/fa';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="container mx-auto px-4 py-8 text-left">
        <div className="container mx-auto p-6">
          <h1 className="text-2xl font-bold text-red-600 mb-6">Toping</h1>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <Input
                placeholder="Name Toping"
                className="border-red-600"
              />
              <Input
                placeholder="Price"
                type="number"
                className="border-red-600"
              />
              <div className="relative">
                <Input
                  placeholder="Photo Product"
                  className="border-red-600 pr-10"
                  readOnly
                />
                <label
                  htmlFor="photo-upload"
                  className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer text-red-600"
                >
                  <FaPaperclip className="h-5 w-5" />
                  <input
                    type="file"
                    id="photo-upload"
                    className="hidden"
                    accept="image/*"
                  />
                </label>
              </div>
              <Button className="w-full bg-red-600 hover:bg-red-700">
                Add Product
              </Button>
            </div>
            <div className="flex items-center justify-center">
              <img
                src="/placeholder.svg"
                alt="Preview"
                width={300}
                height={300}
                className="rounded-full"
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

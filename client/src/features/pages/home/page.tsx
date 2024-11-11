import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

export const products = [
  {
    id: 1,
    name: 'Ice Coffee Palm Sugar',
    price: 'Rp.27.000',
    image:
      'https://s3-alpha-sig.figma.com/img/82f2/db53/fac76fcc5fc42321f68aa860e9145f4f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEcjQvTk1KQIjTtPhYP~eturHphKLlscmNUtufFjY~dW3OuhR3SbSjS1qH4v5afhM10lJmK6XZwWyPLgbmubSexlsTTrLQZ4yafnb0smw2Ze4JG-VYfHscrvIQZLen0AkhWpSLdNyrpMAck0zSvRbpkji2OlupnaoPDtPW8KKfkYu7dRLVPStf6UMUcQmpl6~ORVHmmfvWcLcfDSe54aZ0usQowTVD3uut9FVExY9G4uK4Wman3kjs4r82KBfyCxovkvpCE8HLxRwDaa0zcSIUfLSD29mBwMCUndQyjCdcd4Gn2cs-NM4vPtp3l4mDamVR~NCq2Alozvjmk9PHRtFg__',
  },
  {
    id: 2,
    name: 'Ice Coffee Green Tea',
    price: 'Rp.31.000',
    image:
      'https://s3-alpha-sig.figma.com/img/0ce6/84bc/0f4e2f95bbf53e057c8051e5829ad356?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xcr62k8Cp2uLD6pUMtXXq2z9dZYWz1MXJz8VkkNt9-oleexZfXz1aY06mfKj2Ifw-a0eqPdJQeejeAoupHgbudFO4WFDTkwRd8QXcSvIST8PXSmtmMfwZ~tg0iAChMywCLwxidxmISoC4-NTfpjkt3cd2RfS9qnbjl6~filPQFJhgrieGZ~bWiw0UUZp3V0uZFT2hiiMuGqRioZw7FfAz~AGbc48HQoXkv-L2tIo81a4wtpRwafzClwY918Mb1Agzoa698~ZBDuLRFSb8wEDcrFrT0b3XVwIs~hSLrYxjFLVw-5q5XpPYVxoEL30ZoeExy5cMZmjBnwAISqMUXtoWg__',
  },
  {
    id: 3,
    name: 'Hanami Latte',
    price: 'Rp.29.000',
    image:
      'https://s3-alpha-sig.figma.com/img/0655/9843/7bb2fcf50294d6e214bde156ddc7046d?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WaPh1bmV8Vc-DqSGjX1nlFCs4klLVPW-D-5b9WMwhvDpMEockd4cBEK4TbGsHuN0Byy5Hu-THt0f6IqivIBSxdWQgRHOyNrmeuagAxyNR7jakkiOVf8-QXWhwAp-6mR4vWOI~ua19SR~r06VjiYOgNdFegbkYQ5QuaaMtAgLqxUmTldOhcmnt4EZIkSTTdOtjbjvFIs6owsIjQqfX3o~tr0R81l2kUBg4EfV0vv2d9B6HlmpkVD-PugYbZcmGCqMGKbMwlESAPTY-ABSfnQHwpPw82rATmYycY7XXiKb3uYFqbqRtzwYtFjZXqsCm1EtBU5BYxppcZlT1sWn65sdEQ__',
  },
  {
    id: 4,
    name: 'Clepon Coffee',
    price: 'Rp.28.000',
    image:
      'https://s3-alpha-sig.figma.com/img/455f/d2e8/c6f3c8f48b267cbb65c369485f9a27ad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ISEE6ofVKF20oMMc6fJNojvyq4Er6gapHrt~TScnVEyE8Slkh9t9SB9L9aXlGXAk3UvHiJU57BmilKtwGjMjB3JKi1FgsFrGTWZvhIFGX-ahY8HeZro3E~1h0CoDFF8~8y37AUawPrkQCV94OQ8mQ7RlmeH64S~B56ERzgjaPGHGLwEZl7szJ9fjWjW3uOXAjZ6lZd8TbvUfe6Ya82XsIPHTE3N0BIQbDMbmUY2wwA3lB3yM1jKgfG2feq4KwUDRPO8Fq8za04Sw9gx8WtZICW8YifjASYdvcjK8FRYTUu94RWCkOAKAaDaDH~eYW0CEjnx0ec~HqiFsOQuhuVwzoQ__',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="flex items-center justify-between px-4 py-4 border-b">
        <Link
          to="/"
          className="flex items-center"
        >
          <img
            src="https://res.cloudinary.com/dje40bx3b/image/upload/v1731300001/waysBucks/logo/otyzlepsneltzahkyc8w.png"
            alt="Waysbucks Logo"
            width={50}
            height={50}
            className="h-12 w-12"
          />
        </Link>
        <div className="flex gap-4">
          <Link to={'/login'}>
            <Button
              variant="outline"
              className="text-red-600 border-red-600 hover:bg-red-50"
            >
              Login
            </Button>
          </Link>
          <Link to={'/register'}>
            <Button className="bg-red-600 text-white hover:bg-red-700">
              Register
            </Button>
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 text-left">
        <section className="bg-red-600 rounded-lg p-8 mb-12 text-white relative overflow-hidden ">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">WAYSBUCKS</h1>
            <p className="text-xl mb-4">
              Things are changing, but we're still here for you
            </p>
            <p className="mb-6">
              We have temporarily closed our in-store cafes, but select grocery
              and drive-thru locations remaining open.
            </p>
            <p className="mb-4">Waysbucks Drivers is also available</p>
            <Button
              variant="outline"
              className="text-white border-white hover:bg-red-700 bg-transparent"
            >
              Let's Order...
            </Button>
          </div>
          <div className="absolute right-0 top-0 w-1/3 h-full">
            <img
              src="https://s3-alpha-sig.figma.com/img/f030/f66f/4fe88ea0871b9f90f3bd425e6abf5f58?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gT-GalgkasCL5fVlhT7Ni~6rU4uUcjp87b-3bHiAnJvEgxf3RqzbzM0CMjH5H8CnsEw9WRXgjEmSdWWIqEqzPB5s98WggvySxljCgURNU5d9xlsPzHkhNG6vWXjHLlyoVDgS4yHujdOPb0zFdjLnEUUH-G4~DhnszSZxhyzUyDIRRMKTwMngUCMtq9XhILXYQU-0PRi6dtI74GSJ4Iw8IQ4QSEG1E8DIXR5zFw2yL9jldvTYQaMKe9tw5Dix~JCCMPCvhL2lH7pxi6HR10cwhmfMPxxVdptdsY9B7hCRcNw9I8lWGaFhMOrQdH2cggS9SinC7Uu90VMm914fBRTYcQ__"
              alt="Coffee and snacks"
              width={400}
              height={300}
              className="object-cover h-full"
            />
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-red-600 mb-8">Let's Order</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <Link
                key={index}
                to={`/product/${index}`}
                className="bg-pink-50 rounded-lg p-4 transition-transform hover:scale-105"
              >
                <div className="relative w-full h-48">
                  <img
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <img
                    src="https://res.cloudinary.com/dje40bx3b/image/upload/v1731300001/waysBucks/logo/otyzlepsneltzahkyc8w.png"
                    alt="logo"
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 opacity-80"
                  />
                </div>
                <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                <p className="text-red-600">{product.price}</p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

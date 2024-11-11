import { Header } from '@/components/layouts/header';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const toppings = [
  {
    name: 'Bubble Tea Gelatin',
    image:
      'https://s3-alpha-sig.figma.com/img/dfda/d843/75a3647d9dec32a2832a4925cff3cdad?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e3bzMRC0dHts9eZ0Lje8--Erfp5FuJrZnsaJ~vV8u0sFek0ePRMDg4CHpdUA2~NqwZwcmBI~PUeZZwg-XAJFE3xfPUuyKKJBM8XjuHy5~T51J9QowxvWLz02zltLt3phxkr6aYczgOrHsNTkSw2SS3bqatfriGhEKFju~Dh11kG4PXy16kSv8DyHW~O4QIremBQ00uezCPKWAlhWl26I7Vksec~xi8heFqJJXdLPFDuNuE~Pt4e5pMozHyLs~R8eNZ0PsxIoskt3nVvA4bs0BDTiMPehUJp0ucJomjlcb5kTcL~efrCj6edy5~C~bb0lS3GRHv0wrOnqmkeu6B9jxg__',
  },
  {
    name: 'Manggo',
    image:
      'https://s3-alpha-sig.figma.com/img/6232/9dc9/67e38ad83a6fae6659ff5f4659219db7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j8p94gP3sIg7vlZ9stWorgUdCatHDNgpNADeWbOcSSXdeDLU8bYjI91Rp0SSVDZ5eMxDCMpBO7OYUZ2KlDzPeXQnnV4OZMfOb9M4yq2nxlke-26GyuPEQ4zmVkbnoyjYArKOWCsa2F9zVnc39Y7SLfvIdSbf692m0UjU~m97d2p0CBqQpn0uotwOlZmYB1ERYlCwxSnaPAegmdVdkPjYr1rhgZNKvlG5QMNWVyLCLK6Dg4bX57DcWeT4TzBRamnnwaI-uFBxIEXaUG21eeRfz8XMCEWtePWXwkctQjsk0G7yXfO8HT-FPvdpRoaFTjT5seCvMWZmbprrV6uw2SonOg__',
  },
  {
    name: 'Green Coconut',
    image:
      'https://s3-alpha-sig.figma.com/img/4023/118e/5da85ea2df661b911a03baac6a9de1c9?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cCoIgJKhW2JrJd-nBLUZPx16iBg0AY7jzIbk84fT0IizbXnIiNuLDqu1TelVFJNyJ5MoiQyPgvW0sMn6judW~mJcGgw2QniKYYOX0lFjqw5~CQikKOXiUNPHxo7JKdUx73oUssiAQY8CnosOA3m8qCJfbcsSCPU72bwk1K1mVU3KNMaVqNAD0DWDoslo0vjCfUzkpb4DsYqi2z9fcaAmVqrZV2jsnyWj1T4zeTuXvCsPrH3EuxGqs2CoSab9WfGKQeL8M7tIJtISD7j7-ktEcuglJWN~xE6PRHmWGirH-Y8UbRmohzVh4fX-5DFRvObV7o~dU-csgI5dd4E4KFS2Hg__',
  },
  {
    name: 'Boba Manggo',
    image:
      'https://s3-alpha-sig.figma.com/img/d590/4e9f/deb5d0f25a01f298b406bf12e3b980f6?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dDmqWUvlgXlai4E6N~-JfjqjjgAiMCoJmyrr80CDBQ75HukATc4kcVLibhCgaQUYXLl9N45c-xGd~rLAArqAnhWNh4e3VQWG2~EUqdSrn6JJm54-eilLAFiXVDqdeBvwBObZnTvQ27UDy6-qxny-3yKNSBKEQtDAiOwiWlssjSFZD0jkGDkSAuqA3vHMCnQYH7Zi~jwQQsT3MFZT7fP87oeFMjrsltzqIrnskX4dN35EMiyP9m-UKmIr4RedtH5hjEYGTFCn6fOzmdJRVcSis72OpuDQ-Jan0VFWK88K9B7zEZ1n4kM4QH~y51SrPvXKngqo0OkjaHe8AXLXHnGEuQ__',
  },
  {
    name: 'Bill Berry Boba',
    image:
      'https://s3-alpha-sig.figma.com/img/c91a/130d/99812eca74b192d69abc9b5ad2a97201?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=XcJ71JjrR1qJwQQEj8xMU5yfREUuA~l0mtTakceP6cA2Xwu40~zfSnSq7Ksx94yfrhTeVC60PfcNmDOzbXGkvBPrmaQztf~MxY~fBv9Cdr147nHhEDzIiwgu3u1qFwXG6sgpNWa1QlLTdgXojAYi23HQN~clliKTd6FxMK8p112MV-NHpydeEE9VAZq~YAT4uznEaOrCUw2pa8xV4CUcIZ5mv7QXSst5Yfb1tOHWrxvA0cGH4SSWaRns-idsAgBAMIscBbKmysPu8D9T9bLLJflnX14C8MMigPkJYEISMJw-74F5wIWyYDW8aNOX5Ued~CTxMX2B21Xhaf1~1uecwg__',
  },
  {
    name: 'Kiwi Popping Pearl',
    image:
      'https://s3-alpha-sig.figma.com/img/3dbd/dff1/9f672a3713f55e8efe97e637120fd656?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qz8FepAT4wW4ckQDY7EEyGKtlB8GaNgrgiyOA0qmXHxNEjMd52QgtV2BA0zF6lBxyf~rVlFvDQ0x0Y~SsD25ZL5Ur4SJxhRKGyI9F-fg2Awdrv2Ytv3Fb8Et3DEOEfrsN3~SybizPND37ZtYlkJ5PxPyqa~s-26cQa-eQ-m~bluzz6lwmBKbWlcBYg1Nbt3NtF57ZRk-AAfeGxmknFTXp7HvAjaZc5qLwG-uZomvU5hNjpBdxsgDmsHMncm4YpxG8rX9gsk10dNqODRnb3HJK68iSHFmhaL6-kN-2NAtBqq7UI9ClPCL1s4NEHG75RPF3SRB9BnXAo6yAQUOuejwWg__',
  },
  {
    name: 'Matcha Cantaloupe',
    image:
      'https://s3-alpha-sig.figma.com/img/182d/6348/ad01d0cbc1097f33f338b0d917255280?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BXa68UmVYVZBOlJsjTznQdwTmYp70GexyJfqxkuOzst7TZE8tyfMvBtzavI94qXjZel5mwa6SZVdzdFtot2GOpbDwRNGzealWIWToZv4rBNQGF1zzfHoyufwEoEN2RLigzVf4Q1H68SSZHV~QFYryyHQ-ptsyg8fvSB7q8YiCfQLcWoXpb~dYizXt-RwOaAPdEnWh9D0tpIJgSoQa0MFPxh6zO0Ogyvlr~adw0oTsWvV8xCfuBuRczzHoQH1GnicuU0lFJEPkeq72WZUtUqDqEREJfjNGXRByTzXxUDv8tZCgn7VKr1dRTAEBT-eiSukr0X9A-YJlTASiIfkNr~~2g__',
  },
  {
    name: 'Strawberry Popping',
    image:
      'https://s3-alpha-sig.figma.com/img/634e/132d/e8be8b6efdbc9321c21519b5892b16b7?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJeubyQ15V4z07jM-Q~p0TLC0VEHC1m6YgQFBwUUN2voWdEoXup0kaxbpNUMDaw9EKI6VQ0tcTIwZ2Gcf688wkdU7updX6iu8QRDucgPmFr3rRIt3bUtHUxtnIdzG-kriBvio7Zs9M3imcsUFrhQ1-8jDK5pn0WQVBWN5okSZvpOpjvyeP5nMelIXxr-nJ5nNwfntl2hExAzdC~qUPUFfMOF1doC2PVdTB9wmpwqHUtbGKZn5QExCQPjeAaxpWXD93qoBwM1f3ZlwCmiTDX-OQ98dGiDzSTV5zH53Nr1tRmMp~gTry5YY~yJVkmVaehO0s7WJMdNPJ4vHDJ7pFeNDw__',
  },
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
            src="https://s3-alpha-sig.figma.com/img/82f2/db53/fac76fcc5fc42321f68aa860e9145f4f?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BEcjQvTk1KQIjTtPhYP~eturHphKLlscmNUtufFjY~dW3OuhR3SbSjS1qH4v5afhM10lJmK6XZwWyPLgbmubSexlsTTrLQZ4yafnb0smw2Ze4JG-VYfHscrvIQZLen0AkhWpSLdNyrpMAck0zSvRbpkji2OlupnaoPDtPW8KKfkYu7dRLVPStf6UMUcQmpl6~ORVHmmfvWcLcfDSe54aZ0usQowTVD3uut9FVExY9G4uK4Wman3kjs4r82KBfyCxovkvpCE8HLxRwDaa0zcSIUfLSD29mBwMCUndQyjCdcd4Gn2cs-NM4vPtp3l4mDamVR~NCq2Alozvjmk9PHRtFg__"
            alt="Ice Coffee Palm Sugar"
            width={180}
            height={180}
            className="rounded-lg w-full object-contain max-h-[480px]"
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
            <Link to={'/cart'}>
              <Button className="w-full bg-red-600 hover:bg-red-700 text-white py-6">
                Add Cart
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

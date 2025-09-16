import { Description } from '@/sections/fresko/Description';
import { Hero } from '@/sections/fresko/Hero';
import { Products } from '@/sections/fresko/Products';

export const metadata = {
  metadataBase: 'https://www.envasadosh2o.com',
  title: 'Fresko',

  description: 'Fresko sabor a naranja es la elección perfecta, refrescante y deliciosa para revitalizar tus días.',
  openGraph: {
    title: 'Fresko',
    description: 'Fresko sabor a naranja es la elección perfecta, refrescante y deliciosa para revitalizar tus días.',
    url: 'https://www.envasadosh2o.com',
    siteName: 'envasadosh2o',
    locale: 'es_VE',
    type: 'website',
  },
};

export default function Fresko() {
  return (
    <main>
      <Hero />
      <Description />
      <Products />
    </main>
  );
}

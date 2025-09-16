import { Description } from '@/sections/agua-mineral-canaima/Description';
import { Products } from '@/sections/agua-mineral-canaima/Products';
import { Hero } from '@/sections/agua-mineral-canaima/Hero';

export const metadata = {
  metadataBase: 'https://www.envasadosh2o.com',
  title: 'Agua Mineral Canaima',

  description: 'Agua Mineral Canaima, Sin calorias, Libre de sodio, 100% natural.',
  openGraph: {
    title: 'Agua Mineral Canaima',
    description: 'Agua Mineral Canaima, Sin calorias, Libre de sodio, 100% natural.',
    url: 'https://www.envasadosh2o.com',
    siteName: 'envasadosh2o',
    locale: 'es_VE',
    type: 'website',
  },
};

export default function AguaMineralCanaima() {
  return (
    <main>
      <Hero />
      <Description />
      <Products />
    </main>
  );
}

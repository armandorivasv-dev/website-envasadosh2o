import { Construction } from '@/sections/home/Construction';
import { Hero } from '@/sections/home/Hero';
import { AboutUs } from '@/sections/home/AboutUs';
import { Products } from '@/sections/home/Products';

export const metadata = {
  metadataBase: 'https://www.envasadosh2o.com',
  title: 'Envasados H2O',

  description: 'Agua Mineral Canaima, Sin calorias, Libre de sodio, 100% natural.',
  openGraph: {
    title: 'Envasados H2O',
    description: 'Agua Mineral Canaima, Sin calorias, Libre de sodio, 100% natural.',
    url: 'https://www.envasadosh2o.com',
    siteName: 'envasadosh2o',
    locale: 'es_VE',
    type: 'website',
  },
};

export default function Home() {
  return (
    <main>
      {/* <Construction /> */}
      <Hero />
      <AboutUs />
      <Products />
    </main>
  );
}

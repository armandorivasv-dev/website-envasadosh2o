import { Hero } from '@/sections/agua-saborizada-canaima/Hero';
import { Products } from '@/sections/agua-saborizada-canaima/Products';
import { Description } from '@/sections/agua-saborizada-canaima/Description';

export const metadata = {
  metadataBase: 'https://www.envasadosh2o.com',
  title: 'Agua Saborizada Canaima',

  description:
    'Nuestras aguas saborizadas Canaima, con deliciosos sabores a frutas, son ideales para reponer energía durante actividades físicas.',
  openGraph: {
    title: 'Agua Saborizada Canaima',
    description:
      'Nuestras aguas saborizadas Canaima, con deliciosos sabores a frutas, son ideales para reponer energía durante actividades físicas.',
    url: 'https://www.envasadosh2o.com',
    siteName: 'envasadosh2o',
    locale: 'es_VE',
    type: 'website',
  },
};

export default function AguaSaborizadaCanaima() {
  return (
    <main>
      <Hero />
      <Description />
      <Products />
    </main>
  );
}

import { Description } from '@/sections/frutea/Description';
import { Hero } from '@/sections/frutea/Hero';
import { Products } from '@/sections/frutea/Products';

export const metadata = {
  metadataBase: 'https://www.envasadosh2o.com',
  title: 'Frutea',

  description:
    'Frutea es una bebida a base de té negro que ofrece magníficos elementos antioxidantes, siendo refrescante e ideal para procesos de dieta. ',
  openGraph: {
    title: 'Frutea',
    description:
      'Frutea es una bebida a base de té negro que ofrece magníficos elementos antioxidantes, siendo refrescante e ideal para procesos de dieta. ',
    url: 'https://www.envasadosh2o.com',
    siteName: 'envasadosh2o',
    locale: 'es_VE',
    type: 'website',
  },
};

export default function Frutea() {
  return (
    <main>
      <Hero />
      <Description />
      <Products />
    </main>
  );
}

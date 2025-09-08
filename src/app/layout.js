import LayoutProvider from '@/layouts/LayoutProvider';

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

export default function RootLayout({ children }) {
  return (
    <html lang='es'>
      <body style={{ margin: 0, padding: 0 }}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}

import LayoutProvider from '@/layouts/LayoutProvider';

export const metadata = {
  title: 'Envasados H2O',
  description: 'Envasados H2O',
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

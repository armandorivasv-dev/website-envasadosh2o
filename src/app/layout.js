import LayoutProvider from '@/layouts/LayoutProvider';
import { Inter, Raleway } from 'next/font/google';

const raleway = Raleway({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  return (
    <html
      lang='es'
      className={raleway.className}
    >
      <body style={{ margin: 0, padding: 0 }}>
        <LayoutProvider>{children}</LayoutProvider>
      </body>
    </html>
  );
}

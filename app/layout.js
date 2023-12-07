import { HeaderBackground } from '@/components/layout/HeaderBackground';
import './globals.css';

export const metadata = {
  title: 'NextLevel Food',
  description: 'Delicious meals, shared by a food-loving community.'
};

import { MainHeader } from '@/components/layout/MainHeader';

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <HeaderBackground />
        <MainHeader />
        {children}
      </body>
    </html>
  );
}

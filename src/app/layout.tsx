import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import localFont from 'next/font/local'

// Font files can be colocated inside of `app`
const pretendard = localFont({
  src: [
    {
      path: '../../public/assets/fonts/static/Pretendard-Thin.otf',

      weight: '100'
    },
    {
      path: '../../public/assets/fonts/static/Pretendard-ExtraLight.otf',
      weight: '200'
    },
    {
      path: '../../public/assets/fonts/static/Pretendard-Light.otf',
      weight: '300'
    },
    {
      path: '../../public/assets/fonts/static/Pretendard-Regular.otf',
      weight: '400'
    },
    {
      path: '../../public/assets/fonts/static/Pretendard-Medium.otf',
      weight: '500'
    },
    {
      path: '../../public/assets/fonts/static/Pretendard-SemiBold.otf',
      weight: '600'
    }
    ,
    {
      path: '../../public/assets/fonts/static/Pretendard-Bold.otf',
      weight: '700'
    }
    ,
    {
      path: '../../public/assets/fonts/static/Pretendard-ExtraBold.otf',
      weight: '800'
    }
    ,
    {
      path: '../../public/assets/fonts/static/Pretendard-Black.otf',
      weight: '900'
    }
  ],
  variable: '--pretendard'
})


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MOAD',
  description: 'MOAD WEB APP',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${pretendard.variable}`}>
      <ToastContainer />
        {children}
      </body>
    </html>
  );
}

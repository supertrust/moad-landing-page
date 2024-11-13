import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from "react";
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


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
    <head>
      <title>MOAD</title>
      <meta name="description" content={"모두에게 가치를 더하는 플랫폼, MOAD"} />
      <meta property="og:title" content={"모빌리티 광고 플랫폼"} />
      <meta property="og:description" content={"모두에게 가치를 더하는 플랫폼, MOAD"} />
    </head>
      <link rel="icon" href="/favicon.png" type="image/x-icon" />
      <body className={`${pretendard.variable}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}

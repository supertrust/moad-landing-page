'use client';
import { useEffect, useState } from 'react';
import Logo from '../../../Assets/logo.svg';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
const IndexPage = () => {
  const router = useRouter();

  const [scrolled, setScrolled] = useState(false);
  const buttons = [
    { id: 1, label: '앱 다운로드' },
    { id: 2, label: '화물주 페이지 가기' },
  ];

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      // If the scroll position is greater than 0, set scrolled to true, otherwise false
      setScrolled(scrollTop > 0);
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <header
        className={`fixed p-3 left-0 right-0 z-10 ${
          scrolled ? 'bg-white' : ''
        }`}>
        <div className='container  flex items-center justify-between'>
          <div className='' onClick={() => router.push('/advertiser')}>
            <Image
              src={Logo}
              alt='icarus-logo'
              className='ml-[135px] w-[96px] h-[32px]'
            />
          </div>
          <div className='flex space-x-4'>
            {buttons.map((button) => (
              <button
                key={button.id}
                className="rounded-full border border-1 border-[#101440] px-4 py-2 text-[#101440] font-['Pretendard']  ">
                {button.label}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default IndexPage;

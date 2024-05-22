'use client';
import { useEffect, useState } from 'react';
import Logo from '../../Assets/logo.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import PlayIcon from '../../Assets/play.svg';
import ArrowIcon from '../../Assets/arrow.svg';

// Extend the Button interface to include an optional icon property
interface Button {
  id: number;
  label: string;
  icon?: any;
}

const IndexPage: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Define button sets based on pathname
  const buttonsConfig: { [key: string]: Button[] } = {
    default: [
      { id: 1, label: '앱 다운로드' },
      { id: 2, label: '화물주 페이지 가기' },
    ],
    '/privacy-policy': [
      { id: 3, label: '광고주 페이지', icon: ArrowIcon },
      { id: 4, label: '앱 다운로드', icon: PlayIcon },
    ],
    '/terms-of-services': [
      { id: 3, label: '광고주 페이지', icon: ArrowIcon },
      { id: 4, label: '앱 다운로드', icon: PlayIcon },
    ],
    '/location-information-terms': [
      { id: 3, label: '광고주 페이지', icon: ArrowIcon },
      { id: 4, label: '앱 다운로드', icon: PlayIcon },
    ],
    '/personal-information-agreement': [
      { id: 3, label: '광고주 페이지', icon: ArrowIcon },
      { id: 4, label: '앱 다운로드', icon: PlayIcon },
    ],
  };

  // Determine the buttons to display based on pathname
  const buttons = buttonsConfig[pathname] || buttonsConfig.default;

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
        className={`fixed p-4 left-0 right-0 z-20 ${
          scrolled ? 'bg-white' : ''
        }`}>
        <div className='container flex items-center justify-between'>
          <div>
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
                className={`rounded-full px-4 py-2 font-['Pretendard'] flex items-center ${
                  button.id === 3
                    ? 'text-[#561AA4]'
                    : 'text-[#101440] border border-1 border-[#101440]'
                } ${
                  button.id === 4 ? 'bg-[#561AA4] text-white rounded-md' : ''
                }`}>
                {button.id === 4 && button.icon && (
                  <Image
                    src={button.icon}
                    alt={`${button.label} icon`}
                    className='mr-2'
                    width={16}
                    height={16}
                  />
                )}
                {button.label}
                {button.id !== 4 && button.icon && (
                  <Image
                    src={button.icon}
                    alt={`${button.label} icon`}
                    className='ml-2'
                    width={24}
                    height={24}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </header>
    </>
  );
};

export default IndexPage;

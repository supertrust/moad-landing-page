import Image from 'next/image';

import Logo from '../../Assets/logo.svg';
import PlaysIcon from '../../Assets/play.svg';
import ArrowIcon from '../../Assets/arrow.svg';
import Link from 'next/link';
import { HamburgerIcon } from '@/Assets/Svgs';

interface Button {
  id: number;
  label: string;
  icon?: any;
  styles: string;
  iconPosition: 'left' | 'right';
  link: string
}

const ColorNavbar: React.FC = () => {
  const buttonsConfig: Button[] = [
    {
      id: 1,
      label: '광고주 페이지',
      icon: ArrowIcon,
      styles: 'text-daisyBush-60 font-semibold',
      iconPosition: 'right',
      link: "/advertisers"
    },
    {
      id: 2,
      label: '앱 다운로드',
      icon: PlaysIcon,
      styles: 'bg-[#561AA4] text-white font-semibold hidden md:flex',
      iconPosition: 'left',
      link: ""
    },
  ];

  return (
    <>
      <nav className='  z-[40] w-full px-0 md:px-6 lg:px-10 xl:px-28'>
        <div className='px-4 container mx-auto flex justify-between items-center'>
          <Link href="/" className='logo'>
            <Image src={Logo} alt='Logo' className='h-12' />
          </Link>
          <div className='justify-center flex items-center md:space-x-4'>
            {buttonsConfig.map((button) => (
              <Link key={button.id} href={button.link} className='items-center flex'>
                <button
                  className={`py-2 md:px-4 rounded flex cursor-pointer items-center space-x-1  ${button.styles}`}>
                  {button.iconPosition === 'left' && (
                    <Image
                      src={button.icon}
                      alt={`${button.label} icon`}
                      className='h-5 w-5'
                    />
                  )}
                  <span>{button.label}</span>
                  {button.iconPosition === 'right' && (
                    <Image
                      src={button.icon}
                      alt={`${button.label} icon`}
                      className='h-8 w-8'
                    />
                  )}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default ColorNavbar;

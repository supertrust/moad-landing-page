import Image from 'next/image';

import Logo from '../../Assets/logo.svg';
import PlaysIcon from '../../Assets/play.svg';
import ArrowIcon from '../../Assets/arrow.svg';
import Link from 'next/link';

interface Button {
  id: number;
  label: string;
  icon?: any;
  styles: string;
  iconPosition: 'left' | 'right';
  link: string
}

interface Props {
  page?: string;
}


const ColorNavbar = ({ page }: Props) => {
  const buttonsConfig: Button[] = [
    {
      id: 1,
      label: page === "advertisers" ? "화물주 페이지" : '광고주 페이지',
      icon: ArrowIcon,
      styles: 'text-daisyBush-60 underline font-normal',
      iconPosition: 'right',
      link: page === 'advertisers' ? "/" : "/advertisers"
    },
    {
      id: 2,
      label: page === "advertisers" ? "웹 페이지로" : '앱 다운로드',
      icon: page === "advertisers" ? null : PlaysIcon,
      styles: 'bg-[#561AA4] rounded-lg text-white font-semibold hidden md:flex',
      iconPosition: 'left',
      link: page === 'advertisers' ? "https://moad.live/advertisers" : "https://play.google.com/store/apps/details?id=com.msquare.msq_moad"
    },
  ];

  return (
    <nav className='  z-40 mb-3 w-full px-0 md:px-6 lg:px-10 xl:px-28'>
      <div className='px-4 container mx-auto flex justify-between items-center'>
        <Link href={!page ? '/#' : `/${page}#`} className='logo'>
          <Image src={Logo} alt='Logo' className='h-12' />
        </Link>
        <div className='justify-center flex items-center md:space-x-4'>
          {buttonsConfig.map((button) => (
            <a key={button.id} href={button.link} className='items-center flex'>
              <button
                className={`py-1.5 md:px-4 flex cursor-pointer items-center space-x-1 ${button.styles}`}>
                {button.iconPosition === 'left' && button.icon && (
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
                    className='h-3 w-3'
                  />
                )}
              </button>
            </a>
          ))}
        </div>
      </div>
    </nav>

  );
};

export default ColorNavbar;

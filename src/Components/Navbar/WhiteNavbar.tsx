import Image from 'next/image';
import Logo from '../../Assets/cardLogo.svg';
import PlayIcon from '../../Assets/ColorPlay.svg';
import ArrowIcon from '../../Assets/WhiteVector.svg';
import Link from 'next/link';

// Extend the Button interface to include an optional icon property
interface Button {
  id: number;
  label: string;
  icon?: any;
  styles: string;
  iconPosition: 'left' | 'right';
  scrollToId?: string;
  link: string;
}

interface Props {
  page?: string;
  section?: string;
}

const IndexPage = ({ page, section }: Props) => {
  const buttonsConfig: Button[] = [
    {
      id: 1,
      label: page === "advertisers" ? "화물주 페이지" : '광고주 페이지',
      icon: ArrowIcon,
      styles: 'text-white underline font-normal',
      iconPosition: 'right',
      link: page === 'advertisers' ? "/" : "/advertisers"
    },
    {
      id: 2,
      label: page === "advertisers" ? "웹 페이지로" : '앱 다운로드',
      icon: page === "advertisers" ? null : PlayIcon,
      styles: 'bg-white text-daisyBush-60 rounded-lg font-semibold hidden md:flex',
      iconPosition: 'left',
      link: page === 'advertisers' ? "https://advertiser.moad.live/login" : ""
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
            <Link key={button.id} href={button.link} className='items-center flex'>
              <button
                className={`py-1.5 md:px-4 flex cursor-pointer text-base items-center space-x-1 ${button.styles}`}>
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
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default IndexPage;

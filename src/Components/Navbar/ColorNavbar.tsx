import Image from 'next/image';

import Logo from '../../Assets/logo.svg';
import PlaysIcon from '../../Assets/play.svg';
import ArrowIcon from '../../Assets/arrow.svg';

interface Button {
  id: number;
  label: string;
  icon?: any;
  styles: string;
  iconPosition: 'left' | 'right';
}

const IndexPage: React.FC = () => {
  const buttonsConfig: Button[] = [
    {
      id: 1,
      label: '광고주 페이지',
      icon: ArrowIcon,
      styles: 'text-daisyBush-60 font-semibold',
      iconPosition: 'right',
    },
    {
      id: 2,
      label: '앱 다운로드',
      icon: PlaysIcon,
      styles: 'bg-[#561AA4] text-white font-semibold',
      iconPosition: 'left',
    },
  ];

  return (
    <>
      <nav className='  z-[40] w-full px-4 md:px-6 lg:px-10 xl:px-28'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='logo'>
            <Image src={Logo} alt='Logo' className='h-12' />
          </div>
          <div className='flex justify-center space-x-4'>
            {buttonsConfig.map((button) => (
              <button
                key={button.id}
                className={`py-2 px-4 rounded flex items-center space-x-2  ${button.styles}`}>
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
                    className='h-5 w-5 z-[1000]'
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default IndexPage;

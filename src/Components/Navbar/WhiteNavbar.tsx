import Image from 'next/image';
import Logo from '../../Assets/cardLogo.svg';
import PlayIcon from '../../Assets/ColorPlay.svg';
import ArrowIcon from '../../Assets/WhiteVector.svg';

// Extend the Button interface to include an optional icon property
interface Button {
  id: number;
  label: string;
  icon?: any;
  styles: string;
  iconPosition: 'left' | 'right';
  scrollToId?: string;
}

const IndexPage: React.FC = () => {
  const buttonsConfig: Button[] = [
    {
      id: 1,
      label: '광고주 페이지',
      icon: ArrowIcon,
      styles: 'text-white font-semibold',
      iconPosition: 'right',
    },
    {
      id: 2,
      label: '앱 다운로드',
      icon: PlayIcon,
      styles: 'bg-white text-daisyBush-60 font-semibold',

      iconPosition: 'left',
    },
  ];

  return (
    <>
      <nav className='z-[500] w-full px-4 md:px-6 lg:px-10 xl:px-28'>
        <div className='w-[90%] mx-auto flex justify-between items-center py-3'>
          <div className='logo'>
            <Image src={Logo} alt='Logo' className='h-12' />
          </div>
          <div className='flex justify-center space-x-4'>
            {buttonsConfig.map((button) => (
              <button
                key={button.id}
                className={`py-2 px-4 rounded flex items-center space-x-2 ${button.styles}`}>
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
                    className='h-5 w-5'
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

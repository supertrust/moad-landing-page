import Image from 'next/image';
import DownArrow from '../../../Assets/downarrow.svg';
import SectionBackground from '../../../Assets/SecondSectionBg.png';
import SecondMobileIcon from '../../../Assets/SecondMobile.svg';
import ColorNavbar from '../../Navbar/ColorNavbar';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import { useEffect, useState } from 'react';
import 'animate.css'; // Ensure animate.css is imported

const IndexPage: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
  OnScrollDown,
  isInView,
}) => {
  const [animate, setAnimate] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };
  useEffect(() => {
    if (isInView) {
      setAnimate(true);
    } else {
      setAnimate(false);
    }
  }, [isInView]);

  return (
    <section
      className=' h-[100vh] bg-cover bg-center opacity-100'
      style={{
        backgroundImage: `url(${SectionBackground.src})`,
      }}>
      <ColorNavbar />

      <div className='flex justify-center items-center'>
        {isInView && (
          <>
            <div className=''>
              <Image
                onLoad={handleImageLoad}
                src={SecondMobileIcon}
                alt='Mobile-screen'
                className={`absolute left-10 bottom-10' w-[850px] ${
                  animate ? 'animate__animated animate__fadeInLeft' : ''
                }`}
              />
            </div>
          </>
        )}
        {isImageLoaded && isInView && (
          <>
            <div className='relative animate__animated  animate__fadeIn'>
              <div className='absolute top-[260px] left-[70px] w-[502px] h-[196px] flex-col justify-start items-start gap-4 inline-flex'>
                <div className="text-violet-900 text-4xl font-extrabold font-['Pretendard'] leading-[54px]">
                  화물차 기사님들의 편의와 부가수익,
                  <br />
                  모드가 자신합니다
                </div>
                <div className="text-gray-600 text-2xl font-bold font-['Pretendard'] leading-9">
                  화물차 기사님들의 편의와 부가수익 창출을 위한 고민,
                  <br />
                  모드가 대신 했습니다.
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <CustomScrollButton OnScrollDown={OnScrollDown} />
    </section>
  );
};

export default IndexPage;

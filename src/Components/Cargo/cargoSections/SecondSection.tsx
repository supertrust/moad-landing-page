import { SecondMobileSvg } from '@/Assets/Svgs';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import 'animate.css'; // Ensure animate.css is imported
import SectionBackground from '../../../Assets/SecondSectionBg.png';
import ColorNavbar from '../../Navbar/ColorNavbar';
import Image from 'next/image';
import { useMediaQuery } from '@/hooks';
import CustomImage from '@/Components/CustomImage/CustomImage';

const IndexPage: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
  OnScrollDown,
  isInView,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const sectionStyle = {
    background: `url(${SectionBackground.src}) center center / cover no-repeat, #EEEFF3`
  };

  return (
    <section
      className=' h-full flex flex-col  bg-cover overflow-hidden bg-center opacity-100'
      style={sectionStyle}>
      <ColorNavbar />
      <div className='flex items-center flex-col justify-center flex-1'>
        <div className='grid mb-8  md:grid-cols-2 md:gap-8 justify-center px-8 lg:px-10 xl:px-28 items-center'>
          {isInView && (
            <div className={`h-[35vh] w-[375px] md:h-[40rem] md:w-[40rem]  xl:w-[59rem] ${isInView ? 'animate__animated animate__fadeInLeft' : ''
              }`}>
              {
                isMobile ?
                  <CustomImage src='/assets/svgs/secondmobile-mob.svg' alt='mobile-img' fill />
                  :
                  <CustomImage src='/assets/svgs/secondmobile-desktop.svg' alt='mobile-img' fill />
              }
              {/* <SecondMobileSvg /> */}
            </div>
          )}
          <div className={`relative ${isInView ? "animate__animated  animate__fadeIn" : "hidden"} h-full justify-center flex items-center`}>
            <div className=' flex-col justify-start items-center gap-4 mb-20 inline-flex'>
              <div className="text-daisyBush-60  text-3xl font-extrabold font-Pretendard leading-9">
                화물차 기사님들의 편의와 부가수익,
                <br />
                모드가 자신합니다
              </div>
              <div className="text-text-trout text-xl font-bold font-Pretendard leading-6">
                화물차 기사님들의 편의와 부가수익 창출을 위한 고민,
                <br />
                모드가 대신 했습니다.
              </div>
            </div>
          </div>
        </div>

      </div>
      <CustomScrollButton OnScrollDown={OnScrollDown} color='#101440' />
    </section>
  );
};

export default IndexPage;

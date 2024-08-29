import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';
import CustomImage from '@/Components/CustomImage/CustomImage';
import { useMediaQuery } from '@/hooks';
import 'animate.css';
import clsx from "clsx"; // Ensure animate.css is imported
import SectionBackground from '../../../Assets/advertiserVideoSectionBg.png';
import ColorNavbar from '../../Navbar/ColorNavbar';

const VideoSection: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
                                                                                     OnScrollDown,
                                                                                     isInView,
                                                                                 }) => {
    const isMobile = useMediaQuery('(max-width: 768px)');

    const sectionStyle = {
        background: `linear-gradient(to top, #eeeff3 0%, #a895c1 51%, #561aa4)`,
    };

    return (
        <section
            className='h-full flex flex-col  bg-cover overflow-hidden bg-center opacity-100'
            style={sectionStyle}>
            {/*<ColorNavbar />*/}
            <section  className=' h-full flex flex-col  bg-cover overflow-hidden bg-center opacity-100' style={{ background: `url(${SectionBackground.src}) center center / cover no-repeat`,}}>
                <div className={clsx('flex items-center flex-col justify-center flex-1 space-y-10', isMobile?"pb-10" : "pb-20")}>
                    <div className={'flex justify-center pt-10 text-[#F5F7FA] font-extrabold flex-wrap text-wrap'}>
                        <span className={clsx(isMobile?"text-[24px]" : "text-[36px]")}>MOAD, 영상으로 확인해보세요!</span>
                    </div>
                    <iframe
                        src="https://iframe.mediadelivery.net/embed/297298/978cf187-a7a4-4c63-b6f8-fb2b70f72c45?autoplay=false&loop=false&muted=false&preload=false&responsive=true"
                        loading="lazy"
                        style={{ borderRadius: "20px",  height: isMobile?"70%":'70%', width: isMobile? "90%":'60%',zIndex:1,display: 'block', background : "black" }}
                        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                    ></iframe>

                </div>
                <CustomScrollButton OnScrollDown={OnScrollDown} color='#101440' />
            </section>
        </section>
    );
};

export default VideoSection;

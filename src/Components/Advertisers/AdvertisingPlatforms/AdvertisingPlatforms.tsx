import { WhiteNavbar } from "@/Components/Navbar";
import ServiceBackground from '../../../Assets/bg-4.png'
import { CustomScrollButton } from "@/Components/Buttons/CustomScrollButton";
import Image1 from '../../../Assets/image-1.jpeg'
import Image2 from '../../../Assets/image-2.jpeg'
import Image3 from '../../../Assets/image-3.jpeg'
const AdvertisingPlatforms: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
    OnScrollDown,
    isInView,
}) => {

    const cardsData = [
        {
            id: 1,
            title: '맞춤형 광고의 자유',
            text: <span>원하시는 시간과 장소에서 적합한 화물차 톤수를 <br /> 선택하여 효과적인 광고를 진행하세요.</span>,
            background: Image1.src
        },
        {
            id: 2,
            title: '간편한 광고 신청과 관리',
            text: <span>빠르고 간편한 광고 신청과 계약 관리 시스템을 통해 <br /> 광고 진행이 더욱 쉬워집니다.</span>,
            background: Image2.src
        },
        {
            id: 3,
            title: '체계적인 운행 기록',
            text: <span>한 눈에 보이는 화물차 운행 기록으로 광고 효과를 <br /> 쉽게 모니터링 하고 분석하세요.</span>,
            background: Image3.src
        },
    ];
    return (
        <div className="relative z-40 h-screen bg-daisyBush-60 bg-center bg-cover  bg-no-repeat  overflow-hidden flex flex-col items-start" style={{
            backgroundImage: `url(${ServiceBackground.src})`,
            zIndex: 0,
        }}>
            <WhiteNavbar page="advertisers" />
            <div className="flex items-center px-8 md:px-20 xl:px-25 flex-1 flex-col pt-[5dvh] md:pt-0 md:justify-center w-full gap-6 md:gap-32 ">
                <div className="flex w-full  flex-col gap-4 items-start">
                    <h2 className=" font-extrabold text-white text-2xl md:text-4xl font-Pretendard ">
                        광고주를 위한 광고 플랫폼
                    </h2>
                    <p className="text-gray-20 font-bold text-base md:text-2xl">광고주를 위한 세가지 서비스를 약속합니다.</p>
                </div>
                <div className="grid lg:grid-cols-3  md:justify-center items-center w-full flex-wrap gap-4 ">
                    {cardsData?.map((item) => {
                        return (
                            <div
                                className={`relative w-full  lg:max-w-[25rem] max-h-[12.8rem] py-4 px-4 gap-4 border-1 border-gray-100 rounded-[20px] flex flex-col justify-center  hover:text-gray-20 group transition-all duration-300 ease-in-out bg-white bg-center bg-cover`}
                                key={item.id}
                            >

                                <span className="h-8 z-50 text-[28px] group-hover:text-[#B49CD4] item-center text-daisyBush-50 font-bold ">
                                    {`0${item.id}`}
                                </span>
                                <h3 className="text-2xl  z-50 group-hover:text-[#F5F7FA] text-bunting-60 font-bold">{item.title}</h3>
                                <p className="flex-1  z-50 group-hover:text-[#CFD2DB] flex items-start text-gray-60 text-base font-[500] font-Pretendard">{item.text}</p>
                                {/* Conditional rendering of background image */}
                                {item.background && (
                                    <div
                                        className="absolute -z-10  inset-0  bg-cover bg-center rounded-[20px] transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100 bg-blend-multiply"
                                        style={{ background: `url(${item.background}), #101440`, zIndex: 0, }}
                                    ></div>
                                )}
                            </div>

                        );
                    })}
                </div>

            </div>
            <CustomScrollButton color='#E4DEEB' OnScrollDown={OnScrollDown} />
        </div>
    );
};

export default AdvertisingPlatforms;

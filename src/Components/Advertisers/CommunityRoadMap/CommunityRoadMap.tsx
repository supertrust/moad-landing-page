import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionBackground from '../../../Assets/BlurTruck.svg';
import WhiteNavbar from '../../Navbar/WhiteNavbar';
import { CustomScrollButton } from '@/Components/Buttons/CustomScrollButton';

const CommunityRoadMap: React.FC<{ OnScrollDown: () => void; isInView: boolean }> = ({
    OnScrollDown,
    isInView,
}) => {
    const [currentStep, setCurrentStep] = useState(1);

    const stepsData = [
        {
            id: 1,
            image: '/assets/svgs/community1.svg',
            step: 1,
            description: '빠른 광고 신청과 계약 관리로 간편하게 믿고 관리하세요.'
        },
        {
            id: 2,
            image: '/assets/svgs/community2.svg',
            step: 2,
            description: '화물주의 운행기록을 한 눈에 보고 간편하게 관리하세요.'
        },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentStep((prev) => (prev === 1 ? 2 : 1));
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className='overflow-hidden relative h-full bg-[#101440]'>


                <WhiteNavbar />

                <div className='flex md:items-center h-full'>
                    <div className='h-fit md:h-full mb-16 md:justify-center grid grid-cols-1 mt-40  md:grid-cols-2 relative gap-8 md:gap-16 md:items-center pb-10 px-4 md:px-6 lg:px-10 xl:px-28'>
                        <div className=' h-[380px] z-10 items-start md:hidden '>
                            <div className='animate__animated animate__fadeIn  flex'>
                                <div className='flex-col w-full md:justify-center items-start gap-2 inline-flex'>
                                    <h2 className="text-daisyBush-40 text-3xl font-extrabold font-Pretendard">
                                        커뮤니티도 모드에서 이용해 보세요.
                                    </h2>
                                    <div className="w-[502px] text-gray-20 text-xl font-bold font-Pretendard leading-9">
                                        <p>
                                            좋은 정보, 좋은 업체 찾기 번거로우셨죠?
                                        </p>
                                        <p>
                                            다른 화물차 기사님들과 앱 내에 커뮤니티 기능으로
                                        </p>
                                        <p>
                                            편하게 소통하세요!
                                        </p>
                                        <p className='text-sm mt-4 font-Pretendard font-normal'>
                                            추후 업데이트 예정입니다
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='relative h-full z-50 flex '>
                            {stepsData.map((item) => (
                                <div key={item.id} className={`absolute z-50 top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${item.step === currentStep ? 'opacity-100' : 'opacity-0'}`}>
                                    <div className='flex relative justify-center h-full items-center flex-col gap-4'>
                                        <Image
                                            src={item.image}
                                            alt='Mobile--screen'
                                            className='object-cover z-50'
                                            width={500}
                                            height={500}
                                        />
                                        <div className='bg-[#EEEFF34D]/30 w-[16rem] rounded-[1.25rem] p-4'>
                                            <div className='flex justify-center items-center gap-2'>
                                                <Image
                                                    src={'/assets/svgs/stepicon.svg'}
                                                    alt='Mobile--screen'
                                                    className=''
                                                    width={16}
                                                    height={16}
                                                />
                                                <p className='text-white text-base font-Pretendard uppercase font-bold'>step {item.step}</p>
                                            </div>
                                            <p className='text-white text-center  text-base font-bold font-Pretendard mt-2'>
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className=' flex gap-5 items-center h-4 z-40'>
                                            {
                                                stepsData.map((step) => (
                                                    <div key={step.id} className={`w-2 h-2 transition-all ease-in-out  ${step.step === currentStep ? 'bg-[#561AA4] scale-x-[3] rounded-[2px]' : 'bg-[#EEEFF3] rounded-full'}`}></div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className=' md:flex z-10 items-start hidden '>
                            <div className='animate__animated animate__fadeIn  flex'>
                                <div className='flex-col w-full md:justify-center items-start gap-2 inline-flex'>
                                    <h2 className="text-daisyBush-40 text-3xl font-extrabold font-Pretendard">
                                        커뮤니티도 모드에서 이용해 보세요.
                                    </h2>
                                    <div className="w-[502px] text-gray-20 text-xl font-bold font-Pretendard leading-9">
                                        <p>
                                            좋은 정보, 좋은 업체 찾기 번거로우셨죠?
                                        </p>
                                        <p>
                                            다른 화물차 기사님들과 앱 내에 커뮤니티 기능으로
                                        </p>
                                        <p>
                                            편하게 소통하세요!
                                        </p>
                                        <p className='text-sm mt-4 font-Pretendard font-normal'>
                                            추후 업데이트 예정입니다
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <CustomScrollButton color='#99A0AE' OnScrollDown={OnScrollDown} />
                <div className='absolute z-0 right-0 bottom-0 w-[600.50px]'>
                    <Image
                        alt='blur-truck'
                        src={SectionBackground}
                        className='-z-10'
                    />
                </div>
            </section>
        </>
    );
};

export default CommunityRoadMap;

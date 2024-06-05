import Image from 'next/image'
import React from 'react'
import stepOne from '../../../../Assets/stepone.svg';
import stepUnion from '../../../../Assets/StepUnion.svg';

const StepOne = () => {
    return (
        <div className='space-y-10 relative'>
            <li className='flex justify-between '>
                <div className='p-12'>
                    <h1 className='text-[4rem] font-bold text-daisyBush-60'>
                        광고 효과는 확실하게, <br /> 관리도 간편하게
                    </h1>
                    <p className='text-bunting-60 mt-6 text-2xl font-bold '>
                        빠른 광고 신청과 계약 관리로 간편하게 <br /> 
                        믿고 관리하세요.
                    </p>
                </div>
                <div className='mt-16 '>
                    <Image
                        src={stepOne}
                        alt='Step 1 image'
                        className='w-[32rem]  h-[36rem]'
                    />
                </div>
            </li>
            <div className=' absolute left-0 bottom-12 flex justify-start px-8 py-4 items-center'>
                <div>
                    <Image
                        src={stepUnion}
                        alt='icon'
                        className='w-[20px] h-[24px] mr-1'
                    />
                </div>
                <div>STEP-1</div>
            </div>
        </div>
    )
}

export default StepOne
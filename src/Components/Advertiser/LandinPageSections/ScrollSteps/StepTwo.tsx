import Image from 'next/image'
import React from 'react'
import steptwo from '../../../../Assets/steptwo.svg';
import stepUnion from '../../../../Assets/StepUnion.svg';

const StepTwo = () => {
    return (
        <div className='space-y-10  relative '>
            <li className=' justify-between flex'>
                <div className='p-12'>
                    <h1 className='text-[4rem] font-bold  text-daisyBush-60'>
                        광고 효과는 확실하게, <br /> 관리도 간편하게
                    </h1>
                    <p className='text-bunting-60 text-2xl  mt-6 font-bold w-[480px]'>
                        화물주의 운행기록을 한 눈에 보고 <br />
                        간편하게 관리하세요.
                    </p>
                </div>
                <div className='mt-16'>
                    <Image
                        src={steptwo}
                        alt='Step 2 image'
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
                <div>STEP-2</div>
            </div>
        </div>
    )
}

export default StepTwo
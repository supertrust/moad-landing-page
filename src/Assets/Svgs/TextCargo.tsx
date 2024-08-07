import React from 'react'
import { useMediaQuery } from '@/hooks'
import Image from 'next/image';

const TextCargo = () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    return (
        <div>
            {
                isMobile ?
                    <Image src='/assets/svgs/Cargo_m.svg' alt='' height={128} width={327} />
                    // <h1 className='font-extrabold text-7xl'>Cargo app</h1>
                    :
                    <Image src='/assets/svgs/CargoTextDesk.svg' alt='' height={100} width={1000} />
            }
        </div>
    )
}

export default TextCargo
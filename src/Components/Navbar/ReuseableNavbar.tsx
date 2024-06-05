import React from 'react';
import Link from 'next/link';
import { Logo } from '@/Assets/Svgs';

interface Props {
    color?: string;
    buttonsConfig?: any;
}

const IndexPage = ({ color, buttonsConfig }: Props) => {


    return (
        <>
            <nav className='z-[500] w-full px-4 md:px-6 lg:px-16'>
                <div className='w-[90%] mx-auto flex justify-between items-center py-3'>
                    <Link href="/" className='logo'>
                        <Logo color={color !== "#fff" ? "#561AA4" : color} />
                    </Link>

                    <div className='flex gap-4 items-center'>
                        {
                            buttonsConfig.map((item: any) => (
                                <Link key={item.id} href={item.link} className={`text-${color} border border-${color} px-4 py-2 rounded-full`} style={{ color: color, borderColor: color }}>
                                    {item.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </nav>
        </>
    );
};

export default IndexPage;

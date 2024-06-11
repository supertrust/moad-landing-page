'use client';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import DownIcon from '../../../Assets/chevron-up.svg';

interface Props {
    data: {
        id: number;
        title: string;
    }[]
    page: string
}

const DropDownReveal = ({ data, page }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [ssr, setSsr] = useState(true)
    const dropdownRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);
    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='flex flex-col w-full justify-center mt-16'>
            <div className={`w-full  px-10  py-6  bg-[#E1E4EA] border border-zinc-200 flex-col justify-start items-end inline-flex relative `}>
                <div className='flex justify-center  cursor-pointer items-center ' ref={dropdownRef}>
                    <h2 className="text-gray-100 w-full  font-semibold font-Pretendard">
                        열기
                    </h2>
                    <div
                        className={`w-6 h-6 relative flex items-center transition-all duration-300 ease-in-out ${isOpen ? 'rotate-180' : ''}`}
                        onClick={toggleDropdown}>
                        <Image
                            src={DownIcon}
                            width={26}
                            alt='Drop-Down-icon'
                            height={26}
                        />
                    </div>
                </div>
                <div className={`flex w-full overflow-hidden bg-white cargo duration-500 ease-in-out transition-all ${isOpen ? "opacity-100 h-auto mt-10" : "opacity-0 h-0"}`}>
                    <div className={`w-full grid grid-cols-3`}>
                        {data?.map((item, index) => (
                            <div
                                key={index}
                                className={`h-[49px] duration-300 ease-in-out w-full  p-4  border border-gray-300 justify-start items-center gap-2.5 flex 
                                              text-gray-100 ${page === 'cargo' ? "hover:text-white hover:bg-[#101440]" : " hover:bg-[#CACFD8] hover:text-daisyBush-60"} hover:font-bold

                                        }`}>
                                {item.title}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DropDownReveal
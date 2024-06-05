import React from 'react';
import Logo from '../../Assets/cardLogo.svg';
import LogoLight from '../../Assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  bgColor?: string
  type?: 'light' | 'dark'
}


const Footer = ({ bgColor, type = 'dark' }: Props) => {
  const FooterListPage = [
    { id: 1, lable: '개인정보 처리방침', href: '/privacy-policy' },
    { id: 2, lable: '서비스 이용약관', href: '/terms-of-services' },
    { id: 3, lable: '위치정보 수집약관', href: '/location-information-terms' },
    {
      id: 4,
      lable: '개인정보 수집 및 이용동의',
      href: '/personal-information-agreement',
    },
  ];
  const FooterItems = [
    { id: 1, lable: '상호: 모드 | 대표자: 차주헌' },
    { id: 2, lable: '주소: 서울특별시 강남구 대치동 890-12' },
    { id: 3, lable: '사업자 등록번호: 123-4567-8912 | 이메일: moad.co.kr' },
  ];
  return (
    <footer style={{ backgroundColor: bgColor ? bgColor : '' }} className='relative px-4 md:px-6 lg:px-10 xl:px-28 h-[22rem] flex flex-col justify-center py-1'>
      <div className='flex items-center mb-8'>
        <Image
          src={type === 'dark' ? Logo : LogoLight}
          alt='Logo'
          className='w-[120px] '
        />
      </div>
      <div className=' w-[100%] mb-4 flex items-start '>
        <div className='flex gap-6'>
          {FooterListPage.map((item) => (
            <button
              key={item.id}
              className=" text-[16px] font-Pretendard ">
              <Link href={item.href} className={` ${type === 'dark' ? 'text-gray-30' : 'text-gray-60'} `}>
                {item.lable}
              </Link>
            </button>
          ))}
        </div>
      </div>
        <ul className='space-y-2 mt-4'>
          {FooterItems.map((item) => (
            <li
              key={item.id}
              className={` ${type === 'dark' ? 'text-gray-30' : 'text-gray-60'}  text-[16px] font-Pretendard `}>
              {item.lable}
            </li>
          ))}
        </ul>
      <div className="  mt-10 text-gray-50 text-sm font-normal font-Pretendard">
        © 2024 MOAD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

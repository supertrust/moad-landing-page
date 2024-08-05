import React from 'react';
import Logo from '../../Assets/cardLogo.svg';
import LogoLight from '../../Assets/logo.svg';
import Image from 'next/image';
import Link from 'next/link';

interface Props {
  bgColor?: string
  type?: 'light' | 'dark'
  page?: string
}


const Footer = ({ bgColor, type = 'dark', page = 'cargo' }: Props) => {
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
    { id: 1, lable: '상호: (주)머스트핀테크 | 대표자: 차주헌' },
    { id: 2, lable: '주소: 서울특별시 강남구 테헤란로 418 다봉타워빌딩 11층 1115호 1116호' },
    { id: 3, lable: '사업자 등록번호: 312-88-01481 | 이메일: cs@moad.co.kr' },
  ];
  return (
    <footer style={{ backgroundColor: bgColor ? bgColor : '' }} className='relative px-4 md:px-6 lg:px-10 xl:px-28 h-full  flex flex-col justify-center py-6'>
      <div className='flex items-center mb-8'>
        <Link href='/' >
          <Image
            src={type === 'dark' ? Logo : LogoLight}
            alt='Logo'
            className='w-16 md:w-30 '
          />
        </Link>
      </div>
      <div className='flex flex-col-reverse md:flex-col gap-8 md:gap-4'>
        <div className=' w-[100%] flex items-start '>
          <div className='flex flex-col md:flex-row gap-4'>
            {FooterListPage.map((item) => (
              <button
                key={item.id}
                className="text-sm md:text-base  text-start font-Pretendard ">
                <Link href={`/${page}${item.href}`} className={` ${type === 'dark' ? 'text-gray-30' : 'text-gray-60'} `}>
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
              className={` ${type === 'dark' ? 'text-gray-30' : 'text-gray-60'}  text-sm md:text-base  font-Pretendard `}>
              {item.lable}
            </li>
          ))}
        </ul>
      </div>
      <div className="  mt-10 text-gray-50 text-sm font-normal font-Pretendard">
        © 2024 MOAD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

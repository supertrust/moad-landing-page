import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Logo from '../../Assets/cardLogo.svg';
import LogoLight from '../../Assets/logo.svg';

interface Props {
  bgColor?: string
  type?: 'light' | 'dark'
  page?: string
}


const Footer = ({ bgColor, type = 'dark', page = 'cargo' }: Props) => {
  const FooterListPage = [
    { id: 1, label: '개인정보 처리방침', href: '/privacy-policy' },
    { id: 2, label: '서비스 이용약관', href: '/terms-of-services' },
    { id: 3, label: '위치정보 수집약관', href: '/location-information-terms' },
    {
      id: 4,
      label: '개인정보 수집 및 이용동의',
      href: '/personal-information-agreement',
    },
  ];
  const FooterItems = [
    { id: 1, label: '상호: 주식회사 슈퍼트러스트 (SUPER TRUST) | 대표자: 김학응' },
    { id: 2, label: '주소: 서울특별시 송파구 송파대로 167, 에이동 1303호 (문정동, 문정역 테라타워)' },
    { id: 3, label: <>사업자 등록번호: 559-87-02646 | 이메일:  <a href="mailto:cs@moad.live?subject=모드 문의 메일입니다.">cs@moad.live</a></> },
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
                  {item.label}
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
              {item.label}
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

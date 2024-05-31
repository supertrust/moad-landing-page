import React from 'react';
import Logo from '../../Assets/cardLogo.svg';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
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
    <footer className='relative bg-gray-800  py-1'>
      <div className='flex items-center mt-[48px]'>
        <Image
          src={Logo}
          alt='Logo'
          className='w-[120px] h-[38px] ml-[135px]'
        />
      </div>
      <div className=' w-[100%] h-[58px] flex items-center mt-[40px]'>
        <div className='flex ml-[135px]'>
          {FooterListPage.map((item) => (
            <button
              key={item.id}
              className="mr-[24px] text-gray-300  text-[16px] font-['Pretendard'] ">
              <Link href={item.href} className='text-gray-300 '>
                {item.lable}
              </Link>
            </button>
          ))}
        </div>
      </div>
      <div className='mt-[40px]'>
        <ul className='ml-[135px]'>
          {FooterItems.map((item) => (
            <li
              key={item.id}
              className="text-gray-300  text-[16px] font-['Pretendard'] ">
              {item.lable}
            </li>
          ))}
        </ul>
      </div>
      <div className=" ml-[135px] mt-10 text-gray-500 text-sm font-normal font-['Pretendard']">
        © 2024 MOAD. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  id: number;
  label: string;
  href: string;
  name: string
}

const Nav = () => {
  const pathname = usePathname();

  const HeaderText: NavLink[] = [
    {
      id: 1, label: '정책 및 약관', href: '/privacy-policy',
      name: '개인정보 처리방침'
    },
    {
      id: 2, label: '서비스 이용약관', href: '/terms-of-services',
      name: '서비스 이용약관'
    },
    {
      id: 3, label: '위치정보 수집약관', href: '/location-information-terms',
      name: '면책서'
    },
    {
      id: 4,
      label: '개인정보 수집 및 이용동의',
      href: '/personal-information-agreement',
      name: '마케팅 이용약관'
    },
  ];

  const getClassName = (href: string) => {
    const baseClass =
      'h-16 px-5 py-5 border border-gray-300 justify-center items-center flex';

    if (pathname === href) {
      return `${baseClass} bg-daisyBush-60`;
    } else {
      return baseClass;
    }
  };

  return (
    <>
      <div className='w-full   justify-center items-center flex mt-16'>
        <div className="text-neutral-900 text-[32px] font-bold font-Pretendard">
          정책 및 약관
        </div>
      </div>

      <div className='flex justify-center w-full mt-20 '>
        <div className='h-16  w-full bg-white rounded-lg justify-center flex'>
          {HeaderText.map((item, index) => (
            <Link href={item.href}
              key={item.id}
              className={`max-w-[20.3rem] w-full transition-all flex-1 duration-300 ease-linear ${getClassName(item.href)} ${index === HeaderText.length - 1
                ? 'rounded-r-lg'
                : ''
                } text-xl   font-Pretendard ${pathname === item.href
                  ? 'text-white font-bold'
                  : 'text-gray-600 '
                }`}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;

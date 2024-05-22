'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLink {
  id: number;
  label: string;
  href: string;
}

const Nav = () => {
  const pathname = usePathname();

  const HeaderText: NavLink[] = [
    { id: 1, label: '개인정보 처리방침', href: '/privacy-policy' },
    { id: 2, label: '서비스 이용약관', href: '/terms-of-services' },
    { id: 3, label: '위치정보 수집약관', href: '/location-information-terms' },
    {
      id: 4,
      label: '개인정보 수집 및 이용동의',
      href: '/personal-information-agreement',
    },
  ];

  const getClassName = (href: string) => {
    const baseClass =
      'h-16 px-5 py-5 border-r border-gray-300 justify-center items-center flex';

    if (pathname === href) {
      return `${baseClass} bg-violet-900`;
    } else {
      return baseClass;
    }
  };

  return (
    <>
      <div className='w-full h-60  justify-center items-center inline-flex mt-16'>
        <div className="text-neutral-900 text-[32px] font-bold font-['Pretendard']">
          정책 및 약관
        </div>
      </div>

      <div className='flex justify-center mt-20'>
        <div className='h-16 bg-white rounded-lg border border-gray-300 justify-start items-start inline-flex'>
          {HeaderText.map((item, index) => (
            <div
              key={item.id}
              className={`w-[292px] ${getClassName(item.href)} ${
                index === HeaderText.length - 1
                  ? 'rounded-r-lg rounded-r-lg'
                  : ''
              }`}>
              <Link href={item.href}>
                <div
                  className={`text-xl   font-['Pretendard'] ${
                    pathname === item.href
                      ? 'text-white font-bold'
                      : 'text-gray-600 '
                  }`}>
                  {item.label}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;

"use client";
import Link from "next/link";
import Head from "next/head"; // Import Head component

import { usePathname } from "next/navigation";


const Nav = () => {
  const pathname = usePathname();
  console.log(pathname, "path");
  const HeaderText = [
    { id: 1, label: "개인정보 처리방침", href: "/privacy-policy" },
    { id: 2, label: "서비스 이용약관", href: "/terms-of-services" },
    { id: 3, label: "위치정보 수집약관", href: "/location-information-terms" },
    {
      id: 4,
      label: "개인정보 수집 및 이용동의",
      href: "/personal-information-agreement",
    },
  ];

 
  return (
    <>
      <Head>
        {HeaderText.map((item) => (
          <title>{`${ pathname === item.href}`}</title>
        ))}
        
      </Head>
      <div className="w-full h-60 bg-slate-100 justify-center items-center inline-flex mt-16">
        <div className="text-neutral-900 text-[32px] font-bold font-['Pretendard']">
          정책 및 약관
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="w-[1170px] h-16 bg-white rounded-lg border border-gray-300 justify-start items-start flex">
          {HeaderText.map((item) => (
            <div
              key={item.id}
              className={`h-16 w-[295px] px-6 py-5 border-r border-gray-300 justify-center items-center flex ${
                item.id === HeaderText.length
                  ? "rounded-tr-lg rounded-br-lg"
                  : ""
              }${pathname === item.href ? "bg-violet-100" : ""}`}
            >
              <Link
                href={item.href}
                className={`text-xl font-bold font-['Pretendard'] ${
                  pathname === item.href ? "text-violet-900" : 'text-gray-600 "'
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Nav;

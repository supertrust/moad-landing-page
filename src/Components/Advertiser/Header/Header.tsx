'use client'
import Logo from "../../../Assets/logo.svg";
import Image from "next/image";
import { useRouter } from 'next/navigation'
const IndexPage = () => {
  const router = useRouter()
  const buttons = [
    { id: 1, label: "앱 다운로드" },
    { id: 2, label: "화물주 페이지 가기" },
  ];
  return (
    <>
      <header className="fixed top-3 left-0 right-0 z-10  bg-transparent   ">
        <div className="container  flex items-center justify-between">
          <div className="" onClick={() => router.push('/advertiser')}>
            <Image src={Logo}  alt="icarus-logo"  className="ml-[135px] w-[96px] h-[32px]" />
          </div>
          <div className="flex space-x-4">
            {buttons.map((button) => (
              <button
                key={button.id}
                className="rounded-full border border-1 border-[#101440] px-4 py-2 text-[#101440] font-['Pretendard']  "
              >
                {button.label}
              </button>
            ))}
          </div>
        </div>
     
      </header>
      
    </>
  );
};

export default IndexPage;

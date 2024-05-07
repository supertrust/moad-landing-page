import React from "react";
import Nav from "@/Components/Advertiser/PagesNavbar/Nav";

const Page = () => {
  return (
    <>
      <Nav />
      <div className="flex justify-center mt-20">
        <div className="w-[1170px] h-[322px] flex-col justify-start items-start gap-20 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
          
              {`주`}이카루스에서 제공하는 이용자 맞춤형 서비스 및 상품 추천, 각종
              경품 행사, 이벤트 등의 광고성 정보 제공
              {`이메일, 서신우편, SMS,
              카카오톡 등`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;

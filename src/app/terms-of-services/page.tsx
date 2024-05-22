'use client';
import React, { useState, useRef, useEffect } from 'react';
import Nav from '@/Components/PagesNavbar/Nav';
import Image from 'next/image';
import DownIcon from '../../Assets/chevron-up.svg';
import TermsData from '../../PagesData/termsData.json';
import Footer from '@/Components/Footer/Footer';
const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
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
    <>
      <Nav />
      {/* DrowpDown--Content */}
      <div className='flex justify-center mt-20'>
        <div className='w-[1170px]  px-10  py-6 bg-slate-100 border border-zinc-200 flex-col justify-start items-end gap-10 inline-flex'>
          <div className='flex justify-center  items-center ' ref={dropdownRef}>
            <div className="text-neutral-900 w-[35px]  font-medium font-['Pretendard']">
              열기
            </div>
            <div
              className={`w-6 h-6 relative  ${isOpen ? 'rotate-180' : ''}`}
              onClick={toggleDropdown}>
              <Image
                src={DownIcon}
                width={26}
                alt='Drop-Down-icon'
                height={26}
              />
            </div>
          </div>
          {isOpen && (
            <div className='flex justify-center bg-white'>
              <div className='self-stretch  flex-col justify-start items-start inline-flex'>
                <div
                  className={`w-[1090px] justify-start items-start inline-flex flex-wrap`}>
                  {TermsData?.map((item, index) => (
                    <div
                      key={index}
                      className={` w-[363px] p-4  border border-gray-300 justify-start items-center gap-2.5 flex 
                      }`}>
                      <div
                        className={`${
                          index === 0
                            ? 'text-neutral-900 font-bold'
                            : 'text-neutral-900 font-normal'
                        }   text-sm font-['Pretendard'] `}>
                        {item.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className='flex justify-center mt-5 '>
        <div className='w-[1170px] py-20 flex-col justify-start items-start gap-6 inline-flex'>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제1조. 목적
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              본 약관은 모드(이하 "회사" 혹은 “대행사”)가 "광고주"(아래 정의)는
              제3조에 명시된 광고물(아래 정의)을 "차주"(아래 정의)에게 위임하여
              "차주"가 해당 광고운행의 관리자로서 의무를
              <br />
              성실히 이행하여 “광고주”가 의뢰하고 회사가 게시한 광고가
              효과적으로 집행될 수 있도록 "대행사", "차주" 간의 책무 관계를
              명확히 하는데 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제2조. 정의
            </div>
            <div className='flex-col justify-start items-start gap-1 flex'>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </div>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                1. "광고" (이하 "광고"라고 함)라 함은 "회사"가 "광고주"가 신청한
                광고 상품(아래 정의)의 내용과 절차에 따라 "광고주" (아래 정의)
                의 "광고 소재"(아래 정의)를 "광고매체"에 노출하는 것을 <br />{' '}
                말합니다.
                <br />
                2. "광고소재"라 함은 "광고주"가 제작하여 광고매체에 등록한 상품
                설명, 상품 사진, 텍스트 또는 이미지 등 형태의 저작물을 말합니다.
                <br />
                3. "광고 상품" 혹은 “광고물” 이라 함은 "광고주"의 "광고 소재"를
                "광고매체"에 게재하기 위하여 "회사"가 "광고주"에게 판매하는
                것으로 광고 상품의 종류, 노출 형태, 위치 등 구체적 내용은 <br />{' '}
                광고 상품 및 광고 별도로 제공되는 설명표(각 광고 상세에 게시)와
                같습니다. 기타 광고진행을 위한 광고비용등에 관한 내용은 광고
                체결시 광고계약서 안에 게시함을 원칙으로 합니다.
                <br />
                4. "광고 서비스" 라 함은 "광고주"가 구매한 광고 상품의 내용대로
                "광고주"의 "광고 소재"를 "광고매체"에 노출하고 광고 등록, 광고
                관리, 리포트 등 제반 서비스를 말합니다.
                <br />
                5. "광고주"라 함은 회사와 광고 계약을 진행하여, 광고 서비스를
                진행하는 업체를 말합니다.
                <br />
                6. “차주”라 함은 화물차를 운행하여 “회사”가 “광고주”랑 계약하여
                게재된 “광고”를 의뢰 하고 진행하여 운행및 집행후 대금을 지급받는
                주체를 뜻합니다.
                <br />
                7. "모드 어플"이라 함은 "광고주"가 신청한 “광고”를 게재하고, 
                "회사"가 "차주"에게 게재된 “광고”들을 노출하고, 제공하는 서비스
                페이지(홈페이지 URL)를 말합니다.
                <br />
                8. "광고의뢰" 라 함은 "모드” 어플리케이션에서 “차주”가 “광고”
                진행을 하기 이전에 “회사”와 “광고”관련된 “광고”집행전 사항을
                의뢰하며 “광고”에 대한 상세 진행 내용들을 상담 할수있는 <br />{' '}
                기능입니다.
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제3조. 계약목적물
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              매체명, 매체종류, 광고, 광고위치, 수량, 기타사항
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제4조. 광고비 지급
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              1. "회사"는 매월 광고료 일금 원정 (“광고” 상세에 기재)을 4조2항이
              지켜진 익월 25일에 계좌이체로 "차주"에게 지급한다.   25일이
              휴일이나 공휴일일 경우, 25일과 제일 가까운 앞선 일자 중, 공휴일과
              휴일이 아닌 날에 지급한다.
              <br />
              2. “차주”는 게시된 “광고”의 상세내용을 참고하여, 해당 “광고주”가
              요구한 사항들을 충족하여야 한다.   해당 사항들은 “광고의뢰”를
              통하여 확인후 “광고”를 진행할지 말지 정할수 있다.
              <br />
              3. "차주"는 매월(네 번째 주 월요일~ 금요일 사이) 날짜,
              운행거리(계기판) 식별이 가능한 사진(차량의 좌,우, 그리고 후면) 을
              "회사"에게 제공하여 광고 게재확인이 가능하도록 하여야 한다.
              <br />
              4. 위의 4조3항이 지켜지지 않을 시에 “회사”는 “차주”에게 광고료를
              지급하지 아니한다.{' '}
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제5조. 계약기간 및 내용
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              1. 본 광고의 계약기간은 “광고”상세에 게시된 일로부터 개월까지 로
              한다. <br /> 이후 진행 관련의 건에 관해서는 “광고주”나 “회사”에서
              협의하여, “광고”가 계속 진행될 경우 새롭게 진행되는 “광고” 를
              통하여 “차주”가 동일 의뢰 할수 있다.   계약만료 (혹은 협의된
              “광고”일자 만료) 시 광고주 또는 대행사가 바뀔 경우에 본 계약은
              자동 만료되는 것으로 간주한다.
              <br />
              2. “회사”는 어디까지나 “광고주”와 “차주”의 “광고”계약을 대행해주는
              책임을 진다.   “광고”에 관한 어떠한 내용도 “회사”는 책임지지
              아니한다. “광고”에 명시되어있는 내용에 대한 “광고” 의무는 차주가
              대금을 지급받기 위한 책임이다.   해당 계약 내용이 제대로 이행되고
              있지 않을경우 “광고주”는 언제든 “회사”나 “차주”한테 이의제기를
              할수 있다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제6조. 광고면 제작
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              최초 "대행사"가 제시한 시안에 의하여 "대행사"의 비용으로 광고면을
              제작하고, 계약기간 중 광고면이 “차주”의 과실로 인하여 훼손된 경우
              *교체비용은 “차주”가 부담한다.   이때, “회사”에게 광고면이
              훼손되었음을 알릴의무가 있다.   또한, 광고면을 제작 및 랩핑
              하기위하여, 선행 혹은 후행 되어야 할 작업은 어디까지나 “차주”의
              의무이다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제7조. “차주”의 의무
            </div>
            <div className='flex-col justify-start items-start gap-1 flex'>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                “차주"는 다음 각 항의 의무를 모드 서비스 이용시 책임있게 지켜야
                한다. 
              </div>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                1. “차주”는 위의 제 4 조에 기재된 내용에 관해 성실하게 의무를
                다한다.
                <br />
                2. 광고물을 수시 점검하여 최상의 청결상태를 유지한다.
                <br />
                3. 광고물을 오염, 퇴색, 손괴 등의 하자가 발생할 시 신속하게
                조치를 하며 “회사”에게 사실을 알린다.
                <br />
                4. 화물차의 명의변경, 교통사고, 광고물의 훼손 등 중대한 사항이
                발생할 경우 신속하게 “대행사”에게 그 사실을 알린다.
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제8조. 계약의 해지
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              "회사"는 다음 각 항에 해당되는 경우 계약을 일방적으로 해지할 수
              있다.
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              1. "회사"의 사전 허가 없이 광고물의 위치, 규격, 광고내용 등을
              변경하였을 경우.
              <br />
              2. “광고”면 부착이 계약 개시일 이후 15일 이내에 완료되지 않을
              경우.
              <br />
              3. 천재지변이나 행정명령에 의해 광고물이 철거되는 경우.
              <br />
              4. 광고대금이 2개월 이상 연체 할 경우 "차주"는 광고를 해지 할 수
              있다.
              <br />
              5. "대행사"의 사정으로 인하여 계약이 중도 해지될 경우.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제9조. 광고물 철거에 의한 광고 중단
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              1. 천재지변이나 행정명령에 의해 광고물이 철거되는 경우 광고는
              중단되며 계약은 해지된다.
              <br />
              2. 상기 조항에 의한 철거 시 "차주"는 "대행사"의 승인 하에 광고물을
              철거할 수 있다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제10조. 특약사항
            </div>
            <div className='flex-col justify-start items-start gap-1 flex'>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                상기 계약 일반사항 이외에 아래 내용을 특약사항으로 정하며,
                일반사항과 특약사항이 상충되는 경우에는 특약사항을 우선하여
                적용하도록 한다.
              </div>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                1. “차주”는 계약시에 사업자등록증사본, 차량등록증사본,
                사업자등록증상 사업자의 통장사 본을 함께 첨부한다.
              </div>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제11조. 기타사항
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              본 계약에 명시되지 않았거나 불분명한 사항은 민, 상법 및 일반
              상관례에 따라 처리한다.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

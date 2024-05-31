'use client';
import React, { useState, useRef, useEffect } from 'react';
import Nav from '@/Components/PagesNavbar/Nav';
import Image from 'next/image';
import DownIcon from '../../Assets/chevron-up.svg';
import Data from '../../PagesData/Data.json';
import Footer from '@/Components/Footer/Footer';
import ColorNavbar from '../../Components/Navbar/ColorNavbar';
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
      <ColorNavbar />
      <Nav />
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
            <div className='flex justify-center  bg-white'>
              <div className='h-[588px] flex-col justify-center items-center inline-flex'>
                <div
                  className={`w-[1090px] justify-start items-start inline-flex flex-wrap`}>
                  {Data?.map((item, index) => (
                    <div
                      key={index}
                      className={`h-[49px] w-[363px]  p-4  border border-gray-300 justify-start items-center gap-2.5 flex 
                      ${index === 0 ? 'bg-[#101440] text-white' : 'bg-white'} 

                      }`}>
                      <div
                        className={`${
                          index === 0
                            ? 'text-white '
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

      <div className='flex justify-center mt-5'>
        <div className='w-[1170px] py-20  flex-col justify-start items-start gap-6 inline-flex'>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제1조. 목적
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              {`주`}머스트핀테크{`이하 “회사“라고 함`}는 회사가 제공하고자 하는
              서비스{`이하 “회사 서비스“`}를 이용하는 개인
              {`이하 “이용자“ 또는
              “개인“`}
              의 정보{`이하 “개인정보"`}를 보호하기 위해, 개인정보보호법,
              정보통신망 이용촉진 및 정보보호 등에 관한 법률
              {`이하
              '정보통신망법'`}{' '}
              등 관련 법령을 준수하고, 서비스 이용자의 개인정보 보호 관련한
              고충을 신속하고 원활하게 처리할 수 있도록 하기 위하여 다음과 같이
              개인정보처리방침{`이하 “본 방침"`}을 수립합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제2조. 개인정보 처리의 원칙
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              개인정보 관련 법령 및 본 방침에 따라 회사는 이용자의 개인정보를
              수집할 수 있으며 수집된 개인정보는 개인의 동의가 있는 경우에 한해
              제3자에게 제공될 수 있습니다. 단, 법령의 규정 등에 의해 적법하게
              강제되는 경우 회사는 수집한 이용자의 개인정보를 사전에 개인의 동의
              없이 제3자에게 제공할 수도 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제3조. 본 방침의 공개
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자가 언제든지 쉽게 본 방침을 확인할 수 있도록 회사
              홈페이지 첫 화면 또는 첫 화면과의 연결화면을 통해 본 방침을
              공개하고 있습니다.
              <br />
              회사는 제1항에 따라 본 방침을 공개하는 경우 글자 크기, 색상 등을
              활용하여 이용자가 본 방침을 쉽게 확인할 수 있도록 합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제4조. 본 방침의 변경
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                본 방침은 개인정보 관련 법령, 지침, 고시 또는 정부나 회사
                서비스의 정책이나 내용의 변경에 따라 개정될 수 있습니다.
                <br />
                회사는
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제1항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                에 따라 본 방침을 개정하는 경우 다음 각 호 하나 이상의 방법으로
                공지합니다. 회사가 운영하는 인터넷 홈페이지의 첫 화면의
                공지사항란 또는 별도의 창을 통하여 공지하는 방법
                서면·모사전송·전자우편 또는 이와 비슷한 방법으로 이용자에게
                공지하는 방법
                <br />
                회사는
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제2항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                의 공지는 본 방침 개정의 시행일로부터 최소 7일 이전에
                공지합니다. 다만, 이용자 권리의 중요한 변경이 있을 경우에는 최소
                30일 전에 공지합니다.
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제5조. 회원 가입을 위한 정보
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 이용자의 회사 서비스에 대한 회원가입을 위하여 다음과 같은
                정보를 수집 합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                필수 수집 정보: 이름, 닉네임, 생년월일,아이디 및 비밀번호,
                휴대폰 번호, 소속 회사, 소유 차량
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제6조. 본인 인증을 위한 정보
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자의 본인인증을 위하여 다음과 같은 정보를 수집합니다.
              필수 수집 정보: 휴대폰 번호, 이름, 생년월일, 성별, 이동통신사 및
              내/외국인 여부
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제7조. 법정대리인 동의를 위한 정보
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 법정대리인의 동의가 필요한 경우 법정대리인의 동의를
                위하여 다음과 같은 정보를 수집합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                필수 수집 정보: 보호자 이름, 보호자 생년월일, 보호자 성별,
                보호자 내/외국인 여부, 보호자 휴대폰 번호, 보호자 이동통신사
                정보 및 본인과의 관계
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제8조. 결제 서비스를 위한 정보
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 이용자에게 회사의 결제 서비스 제공을 위하여 다음과 같은
                정보를 수집합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                향후 서비스 제공시 수집내역 : 카드번호, 유효기간, 생년월일 6자리
                {`yy/mm/dd`}, 은행명 및 계좌번호
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제9조. 현금 영수증 발행을 위한 정보
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자의 현금영수증을 발행하기 위하여 다음과 같은 정보를
              수집합니다.
              <br />
              필수 수집 정보: 현금영수증 발행 대상자 이름, 현금영수증 발행
              대상자 생년월일, 현금영수증 발행 대상자 주소, 휴대폰 번호 및
              현금영수증 카드번호
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제10조. 회사 서비스 제공을 위한 정보
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 이용자에게 회사의 서비스를 제공하기 위하여 다음과 같은
                정보를 수집합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                필수 수집 정보: 이름, 생년월일,태어난시간, 연락처, IP Address,
                서비스 이용기록, 불량 이용 기록, 접속로그, 문의내역, 모바일
                단말기 정보, 서비스 사용중 귀하의 모바일기기 위치정보, 광고
                식별자 정보{`ADID,IDFA`}
                <br />
                선택 수집 정보 : 고객센터 이용 시 또는 이벤트 응모시에 고충처리,
                경품발송 및 세금신고 등을 위해 회원가입시 수집하지 않는
                개인정보를 추가로 수집할 수 있습니다. 이과정에서 수집
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                관련 내용을 안내하고 별도 동의를 받습니다.
                <br /> - 고객센터 : 이메일주소, 실명 변경 정보 등
                <br /> - 이벤트 응모 및 당첨 : 이름, 전화번호, 이메일주소,
                배송지주소,주민등록번호*
                <br /> - 주민등록번호 수집 : 당첨자의 제세공과금 처리 등을 위해
                관련법에 따라 수집 시 별도 동의를 받습니다.
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제11조. 서비스 이용 및 부정 이용 확인을 위한 정보
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 이용자의 서비스 이용에 따른 통계∙분석 및 부정이용의
                확인∙분석을 위하여 다음과 같은 정보를 수집합니다.{' '}
                {`부정이용이란
                회원탈퇴 후 재가입, 상품구매 후 구매취소 등을 반복적으로 행하는
                등 회사가 제공하는 할인쿠폰, 이벤트 혜택 등의 경제상 이익을
                불·편법적으로 수취하는 행위, 이용약관 등에서 금지하고 있는 행위,
                명의도용 등의 불·편법행위 등을 말합니다.`}
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                필수 수집 정보: 서비스 이용기록, 쿠키, 접속지 정보 및 기기정보
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제12조. 수집하는 개인정보 항목 및 수집방법
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 다음과 같은 방법으로 이용자의 개인정보를 수집합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                이용자가 회사의 홈페이지에 자신의 개인정보를 입력하는 방식
                <br />
                어플리케이션 등 회사가 제공하는 홈페이지 외의 서비스를 통해
                이용자가 자신의 개인정보를 입력하는 방식
                <br />
                이용자가 고객센터의 상담, 게시판에서의 활동 등 회사의 서비스를
                이용하는 과정에서 이용자가 입력하는 방식
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제13조. 개인정보의 이용
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 개인정보를 다음 각 호의 경우에 이용합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                공지사항의 전달 등 회사운영에 필요한 경우
                <br />
                이용문의에 대한 회신, 불만의 처리 등 이용자에 대한 서비스 개선을
                위한 경우
                <br />
                회사의 서비스를 제공하기 위한 경우
                <br />
                법령 및 회사 약관을 위반하는 회원에 대한 이용 제한 조치, 부정
                이용 행위를 포함하여 서비스의 원활한 운영에 지장을 주는 행위에
                대한 방지 및 제재를 위한 경우
                <br />
                신규 서비스 개발을 위한 경우
                <br />
                이벤트 및 행사 안내 등 마케팅을 위한 경우
                <br />
                인구통계학적 분석, 서비스 방문 및 이용기록의 분석을 위한 경우
                <br />
                개인정보 및 관심에 기반한 이용자간 관계의 형성을 위한 경우
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제14조. 사전동의 등에 따른 개인정보의 제공
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 개인정보 제3자 제공 금지에도 불구하고, 이용자가 사전에
                공개하거나 다음 각호 사항에 대하여 동의한 경우에는 제3자에게
                개인정보를 제공할 수 있습니다. 다만 이 경우에도 회사는 관련 법령
                내에서 최소한으로 개인정보를 제공합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                이용자들이 사전에 공개 또는 제3자 제공에 동의한 경우
                <br />
                법령의 규정에 의거하거나,수사,조사 목적으로 법령에 정해진 절차와
                방법에 따라 수사기관 및 감독당국의 요구가 있는 경우
                <br /> 요금 정산을 위하여 필요한 경우
                <br />제 8조에 의거하여 서비스내 결제의 경우
                <br />
                회사는 전항의 제3자 제공 관계에 변화가 있거나 제3자 제공 관계가
                종결될 때도 같은 절차에 의해 이용자에게 고지 및 동의를 구합니다.
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제15조. 개인정보의 보유 및 이용기간
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자의 개인정보에 대해 개인정보의 수집·이용 목적 달성을
              위한 기간 동안 개인정보를 보유 및 이용합니다.
              <br />
              전항에도 불구하고 회사는 내부 방침에 의해 서비스 부정이용기록은
              부정 가입 및 이용 방지를 위하여 회원 탈퇴 시점으로부터 최대 1년간
              보관합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제16조. 법령에 따른 개인정보의 보유 및 이용기간
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 관계법령에 따라 다음과 같이 개인정보를 보유 및
                이용합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                전자상거래 등에서의 소비자보호에 관한 법률에 따른 보유정보 및
                보유기간
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                -계약 또는 청약철회 등에 관한 기록 : 5년
                <br /> - 대금결제 및 재화 등의 공급에 관한 기록 : 5년
                <br /> -소비자의 불만 또는 분쟁처리에 관한 기록 : 3년
                <br /> -표시&광고에 관한 기록 : 6개월
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                통신비밀보호법에 따른 보유정보 및 보유기간
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                -APP 로그 기록 자료 : 3개월
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                전자금융거래법에 따른 보유정보 및 보유기간
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                -전자금융거래에 관한 기록 : 5년
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                위치정보의 보호 및 이용 등에 관한 법률
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                -개인위치정보에 관한 기록 : 6개월
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제17조. 개인정보의 파기원칙
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 원칙적으로 이용자의 개인정보 처리 목적의 달성,
              보유·이용기간의 경과 등 개인정보가 필요하지 않을 경우에는 해당
              정보를 지체 없이 파기합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제18조. 개인정보파기절차
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              이용자가 회원가입 등을 위해 입력한 정보는 개인정보 처리 목적이
              달성된 후 별도의 DB로 옮겨져{`종이의 경우 별도의 서류함`} 내부
              방침 및 기타 관련 법령에 의한 정보보호 사유에 따라
              {`보유 및 이용기간
              참조`}{' '}
              일정 기간 저장된 후 파기 되어집니다. 회사는 파기 사유가 발생한
              개인정보를 개인정보보호 책임자의 승인절차를 거쳐 파기합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제19조. 개인정보파기방법
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
              기술적 방법을 사용하여 삭제하며, 종이로 출력된 개인정보는 분쇄기로
              분쇄하거나 소각 등을 통하여 파기합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제20조. 광고성 정보의 전송 조치
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를
                전송하는 경우 이용자의 명시적인 사전동의를 받습니다. 다만, 다음
                각호 어느 하나에 해당하는 경우에는 사전 동의를 받지 않습니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사가 재화 등의 거래관계를 통하여 수신자로부터 직접 연락처를
                수집한 경우, 거래가 종료된 날로부터 6개월 이내에 회사가 처리하고
                수신자와 거래한 것과 동종의 재화 등에 대한 영리목적의 광고성
                정보를 전송하려는 경우
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                1. 「방문판매 등에 관한 법률」에 따른 전화권유판매자가 육성으로
                수신자에게 개인정보의 수집출처를 고지하고 전화권유를 하는 경우
                <br /> 회사는 전항에도 불구하고 수신자가 수신거부의사를
                표시하거나 사전 동의를 철회한 경우에는 영리목적의 광고성 정보를
                전송하지 않으며 수신거부 및 수신동의 철회에 대한 처리 결과
                <br /> 를 알립니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 오후 9시부터 그다음 날 오전 8시까지의 시간에 전자적
                전송매체를 이용하여 영리목적의 광고성 정보를 전송하는 경우에는
                제1항에도 불구하고 그 수신자로부터 별도의 사전 동의를 받습니다.
                회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를
                전송하는 경우 다음의 사항 등을 광고성 정보에 구체적으로
                밝힙니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                1. 회사명 및 연락처
                <br /> 2. 수신 거부 또는 수신 동의의 철회 의사표시에 관한 사항의
                표시
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 전자적 전송매체를 이용하여 영리목적의 광고성 정보를
                전송하는 경우 다음 각 호의 어느 하나에 해당하는 조치를 하지
                않습니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                1. 광고성 정보 수신자의 수신거부 또는 수신동의의 철회를
                회피·방해하는 조치
                <br /> 2. 숫자·부호 또는 문자를 조합하여 전화번호·전자우편주소
                등 수신자의 연락처를 자동으로 만들어 내는 조치
                <br /> 3. 영리목적의 광고성 정보를 전송할 목적으로 전화번호 또는
                전자우편 주소를 자동으로 등록하는 조치
                <br /> 4. 광고성 정보 전송자의 신원이나 광고 전송 출처를 감추기
                위한 각종 조치
                <br /> 5. 영리목적의 광고성 정보를 전송할 목적으로 수신자를
                기망하여 회신을 유도하는 각종 조치
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제21조. 아동의 개인정보보호
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 만 14세 미만 아동의 개인정보 보호를 위하여 만 14세 이상의
                이용자에 한하여 회원가입을 허용합니다.
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제1항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                에도 불구하고 회사는 이용자가 만 14세 미만의 아동일 경우에는, 그
                아동의 법정대리인으로부터 그 아동의 개인정보 수집, 이용, 제공
                등의 동의를 그 아동의 법정대리인으로부터 받습니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제2항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                의 경우 회사는 그 법정대리인의 이름, 생년월일, 성별,
                중복가입확인 정보{`ID`}, 휴대폰 번호 등을 추가로 수집합니다.
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제22조. 개인정보 조회 및 수집동의 철회
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 개인정보를
              조회하거나 수정할 수 있으며 개인정보수집 동의 철회를 요청할 수
              있습니다.
              <br />
              이용자 및 법정 대리인은 자신의 가입정보 수집 등에 대한 동의를
              철회하기 위해서는 개인정보보호책임자 또는 담당자에게 서면, 전화
              또는 전자우편 주소로 연락하시면 회사는 지체 없이 조치하겠습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제23조. 개인정보 정보변경 등
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              이용자는 회사에게 전조의 방법을 통해 개인정보의 오류에 대한 정정을
              요청할 수 있습니다. 회사는 전항의 경우에 개인정보의 정정을
              완료하기 전까지 개인정보를 이용 또는 제공하지 않으며 잘못된
              개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를
              제3자에게 지체 없이 통지하여 정정이 이루어지도록 하겠습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제24조. 이용자의 의무
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의
              부정확한 정보 입력으로 발생하는 문제의 책임은 이용자 자신에게
              있습니다.
              <br />
              타인의 개인정보를 도용한 회원가입의 경우 이용자 자격을 상실하거나
              관련 개인정보보호 법령에 의해 처벌받을 수 있습니다.
              <br />
              용자는 계정에 대한 보안을 유지할 책임이 있으며 제3자에게 이를
              양도하거나 대여할 수 없습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제25조. 회사의 개인정보 관리
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자의 개인정보를 처리함에 있어 개인정보가 분실, 도난,
              유출, 변조, 훼손 등이 되지 아니하도록 안전성을 확보하기 위하여
              필요한 기술적·관리적 보호대책을 강구하고 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제26조. 삭제된 정보의 처리
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된
              개인정보는 회사가 수집하는 개인정보의 보유 및 이용기간 에 명시된
              바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록
              처리하고 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제27조. 비밀번호의 암호화
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              이용자의 비밀번호는 일방향 암호화하여 저장 및 관리되고 있으며,
              개인정보의 확인, 변경은 비밀번호를 알고 있는 본인에 의해서만
              가능합니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제28조. 해킹 등에 대비한 대책
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 해킹, 컴퓨터 바이러스 등 정보통신망 침입에 의해 이용자의
              개인정보가 유출되거나 훼손되는 것을 막기 위해 최선을 다하고
              있습니다.
              <br />
              회사는 최신 백신프로그램을 이용하여 이용자들의 개인정보나 자료가
              유출 또는 손상되지 않도록 방지하고 있습니다.
              <br />
              회사는 만일의 사태에 대비하여 침입차단 시스템을 이용하여 보안에
              최선을 다하고 있습니다.
              <br />
              회사는 민감한 개인정보{`를 수집 및 보유하고 있는 경우`}를 암호화
              통신 등을 통하여 네트워크상에서 개인정보를 안전하게 전송할 수
              있도록 하고 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제29조. 개인정보 처리 최소화 및 교육
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 개인정보 관련 처리 담당자를 최소한으로 제한하며, 개인정보
              처리자에 대한 교육 등 관리적 조치를 통해 법령 및 내부방침 등의
              준수를 강조하고 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제30조. 개인정보 유출 등에 대한 조치
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 개인정보의 분실·도난·유출{`이하 "유출 등"이라 한다`}{' '}
                사실을 안 때에는 지체 없이 다음 각 호의 모든 사항을 해당
                이용자에게 알리고 방송통신위원회 또는 한국인터넷진흥원에
                신고합니다.
                <br />
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                유출 등이 된 개인정보 항목
                <br />
                유출 등이 발생한 시점
                <br />
                이용자가 취할 수 있는 조치
                <br />
                정보통신서비스 제공자 등의 대응 조치
                <br />
                이용자가 상담 등을 접수할 수 있는 부서 및 연락처
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제31조. 개인정보 유출 등에 대한 조치의 예외
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 전조에도 불구하고 이용자의 연락처를 알 수 없는 등 정당한
              사유가 있는 경우에는 회사의 홈페이지에 30일 이상 게시하는 방법으로
              전조의 통지를 갈음하는 조치를 취할 수 있습니다.
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제32조. 국외 이전 개인정보의 보호
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 이용자의 개인정보에 관하여 개인정보보호법 등 관계 법규를
                위반 하는 사항을 내용으로 하는 국제계약을 체결하지 않습니다.
                <br />
                회사는 이용자의 개인정보를 국외에 제공
                {`조회되는 경우를
                포함`}
                ᆞ처리위탁ᆞ보관{`이하 "이전"이라 함`}하려면 이용자의 동의를
                받습니다. 다만, 본조
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제3항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                각 호의 사항 모두를 개인정보보호법 등 관계 법규에 따라
                공개하거나 전자우편 등 대통령령으로 정하는 방법에 따라
                이용자에게 알린 경우에는 개인정보 처리위탁ᆞ보관에 따른
                동의절차를 거치지 아니할 수 있습니다.
                <br />
                회사는 본조{' '}
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제2항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {' '}
                본문에 따른 동의를 받으려면 미리 다음 각 호의 사항 모두를
                이용자에게 고지합니다.
                <br />
                이전되는 개인정보 항목
                <br />
                개인정보가 이전되는 국가, 이전일시 및 이전방법
                <br />
                개인정보를 이전받는 자의 성명
                {`법인인 경우 그 명칭 및 정보관리
                책임자의 연락처를 말한다`}
                <br />
                개인정보를 이전받는 자의 개인정보 이용목적 및 보유ᆞ이용 기간
                <br />
                회사는 본조 제2항 본문에 따른 동의를 받아 개인정보를 국외로
                이전하는 경우 개인정보보호법 대통령령 등 관계법규에서 정하는
                바에 따라 보호조치를 합니다.
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제33조. 회사의 개인정보 보호 책임자 지정
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 이용자의 개인정보를 보호하고 개인정보와 관련한 불만을
              처리하기위하여 아래와 같이 관련 부서 및 개인정보 보호 책임자를
              지정하고 있습니다.
              <br />
              개인정보 보호 책임자
              <br />
              성명: 차주헌
              <br />
              직책: CEO
              <br />
              전화번호: 01066696314
              <br />
              이메일: youngcha@webloom.us
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제34조. 권익침해에 대한 구제방법
            </div>
            <div className='w-[1170px]'>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                정보주체는 개인정보침해로 인한 구제를 받기 위하여
                개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터
                등에 분쟁해결이나 상담 등 을 신청할 수 있습니다. 이 밖에 기타
                개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
                바랍니다.
                <br />
                개인정보분쟁조정위원회 : {`국번없이`} 1833-6972{' '}
                {`www.kopico.go.kr`}
                <br />
                개인정보침해신고센터 : {`국번없이`} 118 {`privacy.kisa.or.kr`}
                <br />
                대검찰청 : {`국번없이`} 1301 {`www.spo.go.kr`}
                <br />
                경찰청 : {`번없이`} 182 {`ecrm.cyber.go.kr`}
                <br />
                회사는 정보주체의 개인정보자기결정권을 보장하고, 개인정보침해로
                인한 상담 및 피해 구제를 위해 노력하고 있으며, 신고나 상담이
                필요한 경우{' '}
              </span>
              <span className="text-neutral-900 text-base font-bold font-['Pretendard'] leading-snug">
                제1항
              </span>
              <span className="text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                의 담당부서로 연락해주시기 바랍니다.
                <br />
                개인정보 보호법 제35조{`개인정보의 열람`}, 제36조
                {`개인정보의
                정정·삭제`}
                , 제37조{`개인정보의 처리정지 등`}의 규정에 의한 요구에 대 하여
                공공기관의장이 행한 처분 또는 부작위로 인하여 권리 또는 이익의
                침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을 청구할
                수 있습니다.
                <br />
                중앙행정심판위원회 : {`국번없이`} 110 {`www.simpan.go.kr`}
              </span>
            </div>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              부칙
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              제1조 본 방침은 2024.05.01부터 시행됩니다.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;

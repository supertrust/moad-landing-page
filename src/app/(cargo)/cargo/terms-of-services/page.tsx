/* eslint-disable react/no-unescaped-entities */
'use client';
import React from 'react';
import { DropDownReveal } from '@/Components/PoliciesAndTerms';
import { termsData } from '@/PagesData/cargo';

const Page = () => {

  return (
    <div className='flex flex-col '>
      < DropDownReveal data={termsData} page='cargo' />
      <div className='flex justify-center mt-5 text-gray-100'>
        <ul className='list-decimal  pl-4 py-20 flex-col justify-start items-start gap-6 inline-flex'>
          <li className='flex-col  justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제1조(목적)
            </h2>
            <div className=" text-neutral-900 text-base font-normal font-Pretendard">
              본 약관은 회원(이카루스의 서비스 약관에 동의한 자를 말하며 이하 '회원'이라고 합니다) 이 이카루스(이하 '회사'라고 합니다)가 제공하는 웹페이지 및 '이카루스' (회사가 개발 운영 하는 모바일 애플리케이션을 말합니다 이하 '모바일앱'이라고 합니다)의 서비스를 이용함 에 있어 회원과 회사의 권리 및 의무, 기타 제반 사항을 정하는 것을 목적으로 합니다.
            </div>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제2조(가입자격)
            </h2>
            <div className=' flex-col justify-start items-start gap-1 flex'>
              <p className="text-base ">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </p>
              <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
                <li>"광고" (이하 "광고"라고 함)라 함은 "회사"가 "광고주"가 신청한 광고 상품(아래 정의)의 내용과 절차에 따라 "광고주" (아래 정의) 의 "광고 소재"(아래 정의)를 "광고매체"에 노출하는 것을 말합니다.
                </li>
                <li>"광고소재"라 함은 "광고주"가 제작하여 광고매체에 등록한 상품 설명, 상품 사진, 텍스트 또는 이미지 등 형태의 저작물을 말합니다.
                </li>
                <li>"광고 상품" 혹은 “광고물” 이라 함은 "광고주"의 "광고 소재"를 "광고매체"에 게재하기 위하여 "회사"가 "광고주"에게 판매하는 것으로 광고 상품의 종류, 노출 형태, 위치 등 구체적 내용은 광고 상품 및 광고 별도로 제공되는 설명표(각 광고 상세에 게시)와 같습니다. 기타 광고진행을 위한 광고비용등에 관한 내용은 광고 체결시 광고계약서 안에 게시함을 원칙으로 합니다.
                </li>
                <li>"광고 서비스" 라 함은 "광고주"가 구매한 광고 상품의 내용대로 "광고주"의 "광고 소재"를 "광고매체"에 노출하고 광고 등록, 광고 관리, 리포트 등 제반 서비스를 말합니다.
                </li>
                <li>"광고주"라 함은 회사와 광고 계약을 진행하여, 광고 서비스를 진행하는 업체를 말합니다.
                </li>
                <li>차주”라 함은 화물차를 운행하여 “회사”가 “광고주”랑 계약하여 게재된 “광고”를 의뢰 하고 진행하여 운행및 집행후 대금을 지급받는 주체를 뜻합니다.
                </li>
                <li>"모드 어플"이라 함은 "광고주"가 신청한 “광고”를 게재하고,  "회사"가 "차주"에게 게재된 “광고”들을 노출하고, 제공하는 서비스 페이지(홈페이지 URL)를 말합니다.
                </li>
                <li>"광고의뢰" 라 함은 "모드” 어플리케이션에서 “차주”가 “광고” 진행을 하기 이전에 “회사”와 “광고”관련된 “광고”집행전 사항을 의뢰하며 “광고”에 대한 상세 진행 내용들을 상담 할수있는 기능입니다.
                </li>
              </ul>
            </div>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 3 조 (계약목적물)
            </h2>
            <p className="text-base">매체명, 매체종류, 광고, 광고위치, 수량, 기타사항</p>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 4 조 (광고비 지급)
            </h2>
            <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
              <li>"회사"는 매월 광고료 일금 원정 (“광고” 상세에 기재)을 4조2항이 지켜진 익월 25일에 계좌이체로 "차주"에게 지급한다. 25일이 휴일이나 공휴일일 경우, 25일과 제일 가까운 앞선 일자중, 공휴일과 휴일이 아닌 날에 지급한다.
              </li>
              <li>“차주”는 게시된 “광고”의 상세내용을 참고하여, 해당 “광고주”가 요구한 사항들을 충족하여야 한다. 해당 사항들은 “광고의뢰”를 통하여 확인후 “광고”를 진행할지 말지 정할수 있다.
              </li>
              <li>"차주"는 매월(4번째주월요일~ 금요일사이) 날짜, 운행거리 (계기판) 식별이 가능한 사진(차량의 좌,우, 그리고 후면) 을 "회사"에게 제공하여 광고 게재확인이 가능하도록 하여야 한다.</li>
              <li> “차주”는 “광고” 집행 기간 내 APP 실행 및 위치정보 제공을 “광고” 상세내용에 따라 제공 및 실행해야한다.</li>
              <li>위의 5조4항이 지켜지지 않을 시에 “회사”는 “차주”에게 광고료를 지급하지 아니한다.</li>
            </ul>
          </li>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 5 조 (계약기간 및 내용)
            </h2>
            <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
              <li> 본 광고의 계약기간은 “광고”상세에 게시된 일로부터 개월까지 로 한다. 이후 진행 관련의 건에 관해서는 “광고주”나 “회사”에서 협의하여, “광고”가 계속 진행될 경우 새롭게 진행되는 “광고” 를 통하여 “차주”가 동일 의뢰 할수 있다. 계약만료 (혹은 협의된 “광고”일자 만료) 시 광고주 또는 대행사가 바뀔 경우에 본 계약은 자동 만료되는 것으로 간주한다.
              </li>
              <li>“회사”는 어디까지나 “광고주”와 “차주”의 “광고”계약을 대행해주는 책임을 진다. “광고”에 관한 어떠한 내용도 “회사”는 책임지지 아니한다. “광고”에 명시되어있는 내용에 대한 “광고”의무는 차주가 대금을 지급받기 위한 책임이다. 해당 계약 내용이 제대로 이행되고 있지 않을경우 “광고주”는 언제든 “회사”나 “차주”한테 이의제기를 할수 있다.
              </li>
            </ul>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 6 조 (광고면 제작)
            </h2>
            <p className="text-base">최초 "대행사"가 제시한 시안에 의하여 "대행사"의 비용으로 광고면을 제작하고, 계약기간 중 광고면이 “차주”의 과실로 인하여 훼손된 경우 *교체비용은 “차주”가 부담한다. 이때, “회사”에게 광고면이 훼손되었음을 알릴의무가 있다. 또한, 광고면을 제작 및 랩핑 하기위하여, 선행 혹은 후행 되어야 할 작업은 어디까지나 “차주”의 의무이다.
            </p>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 7 조 (“차주”의 의무)
            </h2>
            <p className='text-base'>“차주"는 다음 각 항의 의무를 모드 서비스 이용시 책임있게 지켜야 한다. </p>
            <ul className='flex-col list-decimal pl-8 justify-start items-start gap-1 flex'>
              <li>“차주”는 위의 제 4 조에 기재된 내용에 관해 성실하게 의무를 다한다.
              </li>
              <li>광고물을 수시 점검하여 최상의 청결상태를 유지한다</li>
              <li>광고물을 오염, 퇴색, 손괴 등의 하자가 발생할 시 신속하게 조치를 하며 “회사”에게 사실을 알린다.</li>
              <li>화물차의 명의변경, 교통사고, 광고물의 훼손 등 중대한 사항이 발생할 경우 신속하게 “대행사”에게 그 사실을 알린다.
              </li>
            </ul>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 8 조 (계약의 해지)
            </h2>
            <p text-base>"회사" 및 “차주”는 다음 각 항에 해당되는 경우 계약을 일방적으로 해지할 수 있다.</p>
            <ul className="list-decimal pl-8 text-neutral-900 text-base font-normal font-Pretendard">
              <li>"회사"의 사전 허가 없이 광고물의 위치, 규격, 광고내용 등을 변경하였을 경우.
              </li>
              <li>“광고”면 부착이 계약 개시일 이후 15일 이내에 완료되지 않을 경우.
              </li>
              <li> 천재지변이나 행정명령에 의해 광고물이 철거되는 경우.
              </li>
              <li>광고대금이 2개월 이상 연체 할 경우 "차주"는 광고를 해지 할 수 있다.
              </li>
              <li>"대행사"의 사정으로 인하여 계약이 중도 해지될 경우.
              </li>
            </ul>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 9 조 (광고물 철거에 의한 광고 중단)
            </h2>
            <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
              <li>천재지변이나 행정명령에 의해 광고물이 철거되는 경우 광고는 중단되며 계약은 해지된다.
              </li>
              <li>상기 조항에 의한 철거 시 "차주"는 "대행사"의 승인 하에 광고물을 철거할 수 있다.에 관련해서는 광고계약시 작성한 광고 계약서내의 광고 계약 혜지 조항을 따르게 됩니다. 하지만, 따로 명시가 되어있지 않은 경우에는, 총 계약한 광고 금액에서 남아있는 잔금에 관해서는 전액 환불 됩니다.
              </li>
            </ul>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 10 조 (특약사항)
            </h2>
            <p>상기 계약 일반사항 이외에 아래 내용을 특약사항으로 정하며, 일반사항과 특약사항이 상충되는 경우에는 특약사항을 우선하여 적용하도록 한다.</p>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li> “차주”는 계약시에 사업자등록증사본, 차량등록증사본, 사업자등록증상 사업자의 통장사 본을 함께 첨부한다.
              </li>
            </ul>
          </div>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제 제 11 조 (기타사항)
            </h2>
            <p className='text-base'>본 계약에 명시되지 않았거나 불분명한 사항은 민, 상법 및 일반 상관례에 따라 처리한다.</p>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>  분쟁 해결 절차
                <ul className='list-disc pl-8'>
                  <li>내부 해결: 고객은 회사와의 모든 분쟁을 먼저 내부적으로 해결하려고 시도해야 합니다. 고객은 분쟁 발생 시 이를 서면으로 회사에 통보해야 하며, 회사는 통보일로부터 30일 이내에 이를 조사하고 대응할 것입니다.</li>
                  <li>중재: 내부 해결이 실패할 경우, 분쟁은 대한민국의 상사중재원에서 중재를 통해 해결됩니다. 중재 판정은 최종적이며 법적 구속력을 가집니다.</li>
                  <li>소송 제한: 고객은 분쟁 발생일로부터 1년 이내에 중재 절차를 개시해야 하며, 그렇지 않을 경우 모든 청구권은 소멸됩니다.</li>
                </ul>
              </li>
              <li> 데이터 보호 및 개인정보 처리
                <ul className='list-disc pl-8'>
                  <li>인정보 수집: 회사는 서비스 제공을 위해 필요한 최소한의 개인정보만을 수집합니다. 수집된 정보는 고객의 동의 없이 제3자에게 제공되지 않습니다. 해당 내용은 개인정보 처리방침 약관에 기재되어 있습니다.</li>
                  <li>데이터 보안: 회사는 고객의 개인정보를 보호하기 위해 최신 보안 기술을 적용하며, 무단 접근, 변경, 공개 및 삭제로부터 데이터를 보호하기 위한 합리적인 조치를 취합니다.</li>
                  <li>정보 주체의 권리: 고객은 언제든지 자신의 개인정보에 접근, 수정 및 삭제를 요청할 권리가 있습니다. 이러한 요청은 회사의 고객 지원 팀을 통해 이루어져야 합니다.</li>
                </ul>
              </li>
              <li> 성능 기준 및 측정 방법
                <ul className='list-disc pl-8'>
                  <li>성능 기준: 회사는 제공하는 서비스의 성능 기준을 계약서에 명시합니다. 성능 기준은 서비스 가용성, 응답 시간, 처리 속도 등을 포함할 수 있습니다.</li>
                  <li>측정 방법: 성능은 회사가 제공하는 모니터링 도구 및 보고서에 의해 측정됩니다. 모든 측정 데이터는 고객의 요청에 따라 제공될 수 있습니다.</li>
                  <li>비교 기준: 성능은 업계 표준과 비교하여 평가됩니다. 회사는 성능 기준을 충족하지 못할 경우, 이에 대한 원인을 조사하고 고객에게 통보합니다.</li>
                </ul>
              </li>
              <li>계약 수정 및 갱신 절차
                <ul className='list-disc pl-8'>
                  <li> 계약 수정: 회사는 필요 시 계약 조건을 수정할 수 있습니다. 수정된 약관은 적용일로부터 30일 전에 고객에게 통보되며, 고객은 변경된 약관에 동의하지 않을 경우 계약을 종료할 수 있습니다.</li>
                  <li>계약 갱신: 계약은 최초 계약 기간 종료 후 자동으로 갱신됩니다. 고객이 계약 종료를 원할 경우, 계약 만료일 60일 이전에 서면으로 회사에 통보해야 합니다.</li>
                  <li>변경 동의: 고객이 변경된 약관 발표 후 서비스를 계속 사용할 경우, 이는 변경된 약관에 동의한 것으로 간주됩니다.</li>
                </ul>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Page;

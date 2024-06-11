/* eslint-disable react/no-unescaped-entities */
'use client';
import { DropDownReveal } from '@/Components/PoliciesAndTerms';
import { locationData } from '@/PagesData/cargo';
import React from 'react';

const Page = () => {
  return (

    <div className='flex flex-col'>
      < DropDownReveal data={locationData} page='cargo' />
      <div className='flex flex-col py-20 gap-8 justify-center mt-5 text-gray-100'>
        <ul className='list-decimal  pl-4  flex-col justify-start items-start gap-6 inline-flex'>
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
            <p className="text-base ">
              서비스에 가입할 수 있는 회원은 위치기반서비스를 이용할 수 있는 이동전화 단말기의 소유자 본인이어야 합니다.
            </p>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제3조(서비스 이용 및 가입)
            </h2>
            <p className="text-base">회사는 다음 각 호에 해당하는 가입신청을 승낙하지 않을 수 있습니다, 혹은 이용중에 단말기의 조작등을 통해 올바른 위치정보를 얻을수 없을경우 서비스 이용에 제한이 있을수 있습니다</p>
            <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
              <li>실명이 아니거나 타인의 명의를 사용하는 등 허위로 신청하는 경우
              </li>
              <li>사용중인 단말기의 위치정보를 조작 및 제공거부하여 올바른 서비스 사용이 불가한 경우
              </li>
              <li>기타 회사가 정한 이용신청 요건이 충족되지 않았을 경우</li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제4조(서비스 해지)
            </h2>
            <p className='text-base'>회원은 회사가 정한 절차를 통해 서비스 해지를 신청할 수 있습니다.</p>
          </li>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제5조(이용약관의 효력 및 변경)
            </h2>
            <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
              <li> 본 약관은 서비스를 신청한 고객 또는 개인위치정보주체가 회사가 정한 소정의 절차 에 따라 회원으로 등록함으로써 효력이 발생합니다.
              </li>
              <li>서비스를 신청한 고객 또는 개인위치정보주체가 온라인에서 본 약관을 모두 읽고 "동 의하기" 버튼을 클릭하였을 경우 본 약관의 내용을 모두 읽고 이를 충분히 이해하였 으며, 그 적용에 동의한 것으로 봅니다.
              </li>
              <li>본 약관에 대하여 동의하지 않은 경우, 회사가 개인위치정보를 기반으로 제공하는 각 종 혜택 및 편의제공에 일부 제한이 발생할 수 있습니다.
              </li>
              <li>회사는 필요한 경우 '위치 정보의 보호 및 이용 등에 관한 법률, '콘텐츠산업 진흥법', '전자상거래 등에서의 소비자보호에 관한 법률', '소비자기본법', '약관의 규제에 관한 법률 등 관계법령(이하 '관계법령'이라 합니다)의 범위 내에서 본 약관을 개정할 수 있습니다.
              </li>
              <li>회사가 약관을 개정할 경우 기존약관과 개정약관 및 개정약관의 적용일자와 개정사 유를 명시하여 현행약관과 함께 그 적용일자 10일 전부터 적용일 이후 상당한 기간 동안 회사의 웹페이지 및 모바일앱을 통해 공지합니다. 다만, 개정약관의 내용이 회원 에게 새로운 의무를 부과하거나 권리를 제한하는 내용인 경우 그 적용일자 30일 전부 터 상당한 기간 동안 이를 회사의 웹페이지 및 모바일앱을 통해 공지 하고, 회원에게 전자적형태로 약관의 개정사실을 발송하여 고지합니다.
              </li>
            </ul>
          </div>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제6조(약관 외 준칙)
            </h2>
            <p className="text-base">본 약관은 신의성실의 원칙에 따라 공정하게 적용하며, 본 약관에 명시되지 아니한 사항에 대하여는 관계법령 및 건전한 거래관행에 따릅니다.
            </p>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제7조(서비스의 내용)
            </h2>
            <p className='text-base'>회사는 직접 위치정보를 수집하거나, 위치정보사업자로부터 위치정보를 전달받아 아래와 같은 위치기반 서비스를 제공합니다 </p>
            <ul className='flex-col list-decimal pl-8 justify-start items-start gap-1 flex'>
              <li>회원의 실시간 위치확인
              </li>
              <li>회원의 운행기간 동안의 총 이동거리 확인</li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제8조(서비스 이용요금)
            </h2>
            <ul className="list-decimal pl-8 text-neutral-900 text-base font-normal font-Pretendard">
              <li>회사의 서비스는 무료제공을 원칙으로 합니다. 다만, 회원이 별도로 유료서비스를 이용하고자 할 경우 해당 서비스 화면에 명시된 요금을 지불 하여야 사용할 수 있습니다
              </li>
              <li>회사는 유료서비스 이용요금을 회사와 계약한 전자지불업체에서 정한 방법에 의하거나 회사가 정한 청구서에 합산하여 청구할 수 있습니다.
              </li>
              <li>유료서비스 이용을 위하여 결제된 대금에 대한 취소 및 환불은 관계법령과 회사의 운영정책에 따릅니다.
              </li>
              <li>무선 서비스 이용시 발생하는 데이터 통신료는 별도이며, 이 때 부과되는 데이터 통신료는 회원이 가입한 각 이동통신사의 정책에 따릅니다.
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제9조(서비스내용 변경 통지 등)
            </h2>
            <ul className="list-decimal pl-4 text-neutral-900 text-base font-normal font-Pretendard">
              <li>회사가 서비스 내용을 변경하거나 종료하는 경우 회사는 회원이 등록한 전자우편 주 소로 이메일을 발송하여 서비스 내용의 변경 사항 또는 종료를 사전 일주일 전에 통지 합니다.
              </li>
              <li>전항의 경우 불특정 다수의 회원을 상대로 통지하는 때에는 회사의 웹페이지 등을 통 해 공지함으로써 회원들에게 통지할 수 있습니다.
              </li>
            </ul>
          </li>
          <div className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제10조(서비스이용의 제한 및 중지)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>회사는 아래 각 호에 해당하는 사유가 발생한 경우에는 회원의 서비스 이용을 제한하 거나 중지시킬 수 있습니다.
                <ul className='mt-2'>
                  <li>
                    가. 회원이 회사의 서비스 운영을 고의 또는 과실로 방해하는 경우
                  </li>
                  <li>
                    나. 서비스용 설비 점검, 보수 또는 공사로 인하여 부득이한 경우
                  </li>
                  <li>
                    다. 전기통신사업법에 규정된 기간통신사업자가 서비스를 중지했을 경우
                  </li>
                  <li>
                    라. 국가비상사태, 서비스 설비의 장애 또는 서비스 이용의 폭주 등으로 서비스 이용 에 지장이 있는 때
                  </li>
                  <li>
                    마. 기타 중대한 사유로 회사가 서비스 제공을 지속하는 것이 곤란한 경우
                  </li>
                </ul>
              </li>
              <li>
                회사가 전항에 따라 서비스의 이용을 제한하거나 중지한 때에는 해당사실을 인터넷 등에 공지하거나 고객에게 통지합니다. 다만 회사가 통제할 수 없는 사유로 인하여 서 비스를 중단하게 되는 경우 이를 사후에 통지할 수 있습니다.
              </li>
            </ul>
          </div>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제11조(개인위치정보의 이용 또는 제공)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>  분쟁 해결 절차
                회사가 개인위치정보를 이용하여 서비스를 제공하고자 하는 경우에는 본 약관에 대한 개인위치정보주체의 동의를 얻어야 합니다.
              </li>
              <li> 데이터 보호 및 개인정보 처리
                회사는 회원이 제공한 개인위치정보를 해당 회원의 동의 없이 서비스 제공 이외의 목적으로 이용하지 않습니다.
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제12조(개인위치정보의 보유기간 및 이용기간)
            </h2>
            <p className='text-base'>회사는 회원에게 개인정보위치를 서비스 제공이후 운행기록을 제외한 개인위치정보를 별도로 보유하지 않습니다. 보유하고자 하는 경우에는 보유목적 및 보유기간을 미리 이용약관에 명시한 후 동의를 얻습니다.</p>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제13조(개인위치정보 주체의 권리)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>회원은 회사에 대하여 언제든지 개인위치정보를 이용한 위치기반서비스 제공 및 개 인위치정보의 제3자 제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다. 이 경 우 회사는 수집한 개인위치정보 및 위치정보 이용, 제공사실 확인자료를 파기합니다, 하지만 위의 경우에는 서비스 이용이 제한되거나 불가능할수 있습니다.
              </li>
              <li> 회원은 회사에 대하여 언제든지 개인위치정보의 수집, 이용 또는 제공의 일시적인 중지를 요구할 수 있습니다.
              </li>
              <li> 회원은 회사에 대하여 아래 각 호의 자료에 대한 열람 또는 고지를 요구할 수 있고, 당 해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다. 이 경우 회사는 정당한 사유없이 회원의 요구를 거절할 수 없습니다.
                <ul className='mt-2'>
                  <li>
                    가. 본인에 대한 위치정보 이용, 제공사실 확인자료
                  </li>
                  <li>
                    나. 본인의 위치정보가 제3자에게 제공된 이유 및 내용
                  </li>
                </ul>
              </li>
              <li>
                회원은 회사가 정한 절차에 따라 제1항 내지 제3항의 권리를 행사할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제14조(법정대리인의 권리)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li> 회사는 14세 미만 회원에 대해서는 당해 회원과 회원의 법정대리인으로부터 모두 동의를 받은 경우에만 개인위치정보를 이용한 서비스를 제공합니다. 이 경우 법정대리 인은 본 약관에 의한 회원의 권리를 모두 가지며 회사는 법정대리인을 회원으로 봅니다.
              </li>
              <li> 회사는 14세 미만 회원의 개인위치정보 및 위치정보 이용, 제공사실에 관한 확인자료 를 본 약관에 명시 또는 고지한 범위를 넘어 이용하거나, 제3자에게 제공하고자 하는 경우 당해 회원과 회원의 법정대리인에게 모두 동의를 받아야합니다. 다만 다음 각호 의 경우는 제외합니다.
                <ul className='mt-2'>
                  <li>
                    가. 개인위치정보 및 위치기반서비스 제공에 따른 요금정산을 위하여 위치정보 이 용, 제공사실 확인자료가 필요한 경우
                  </li>
                  <li>나. 통계작성, 학술연구 또는 시장조사를 위하여 특정 개인을 알아볼 수 없는 형태로 가공하여 제공하는 경우</li>
                  <li>다. 기타 관계법령에 특별한 규정이 있는 경우</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제15조(위치정보관리책임자의 지정)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>회사는 위치정보를 적절히 관리, 보호하고 개인위치정보주체의 불만을 원활히 처리 할 수 있도록 실질적인 책임을 질 수 있는 지위에 있는 자를 위치정보의 관리책임자로 지정하고 운영합니다.
              </li>
              <li>회사의 위치정보관리책임자는 위치기반서비스의 제공에 관한 제반 사항을 담당 · 관 리하는 부서의 대표으로서, 구체적인 사항은 본 약관의 부칙에 따릅니다.
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제16조(손해배상)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>회사가 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 제26조의 규정을 위반 한 행위를 하여 회원에게 손해가 발생한 경우 회원은 회사에 대하여 손해배상 청구를 할 수 있습니다.
              </li>
              <li>회원이 고의 또는 과실로 본 약관의 규정을 위반하여 회사에 손해가 발생한 경우 회원 은 회사에 발생한 모든 손해를 배상해야 합니다.
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제17조(면책)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>회사는 다음 각 호의 사유로 서비스를 제공할 수 없는 경우 이로 인하여 회원에게 발생한 손해에 대한 책임을 부담하지 않습니다.
                <ul className='mt-2'>
                  <li>가. 천재지변 또는 이에 준하는 불가항력의 상태가 있는 경우</li>
                  <li>
                    나. 제3자의 고의적인 서비스 방해가 있는 경우
                  </li>
                  <li>다. 회원의 귀책사유로 서비스 이용에 장애가 있는 경우</li>
                  <li>라. 기타 회사의 고의 또는 과실이 없는 사유에 해당하는 경우</li>
                </ul>
              </li>
              <li>회사는 서비스 및 서비스에 게재된 정보, 자료, 사실의 신뢰도 및 정확성 등에 대한 보증을 하지 않으며 이로 인하여 회원에게 발생한 손해에 대하여 책임을 부담하지 않습 니다.
              </li>
              <li> 회사는 회원이 서비스를 이용하며 기대하는 수익을 상실한 것에 대한 책임과, 그 밖의 서비스를 통하여 얻은 자료로 인하여 회원에게 발생한 손해에 대한 책임을 부담하지 않습니다.</li>

            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제18조(분쟁의 조정)
            </h2>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>회사는 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 '위치정보의 보호 및 이용 등에 관한 법률' 제28조의 규정 에 따라 방송통신위원회에 재정을 신청할 수 있습니다.
              </li>
              <li>회사 또는 고객은 위치정보와 관련된 분쟁에 대해 당사자간 협의가 이루어지지 아니 하거나 협의를 할 수 없는 경우에는 '개인정보보호법' 제43조의 규정에 따라 개인정보 분쟁 조정 위원회에 조정을 신청할 수 있습니다.
              </li>
            </ul>
          </li>
          <li className='flex-col justify-start items-start gap-2 flex'>
            <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">
              제19조(회사의 연락처)
            </h2>
            <p>회사의 상호 및 주소 등은 다음과 같습니다.</p>
            <ul className='flex-col list-decimal pl-4 justify-start items-start gap-1 flex'>
              <li>법인명: (주) 머스트핀테크
              </li>
              <li>대표이사 : 차주헌
              </li>
              <li>소재지: 소재지 기입필요 (수정필요)</li>
              <li>연락처 : 02-1234-1234 (수정필요)</li>
            </ul>
          </li>
        </ul>
        <div className='space-y-4'>
          <h2 className="text-gray-100  text-xl font-semibold font-Pretendard">부칙</h2>
          <div>
            <h2 className="text-gray-100 mb-2 text-xl font-semibold font-Pretendard">
              제1조(시행일)
            </h2>
            <p>본 약관은 2024.01.15부터 시행합니다. (수정필요)</p>
          </div>
          <div>
            <h2 className="text-gray-100 mb-2 text-xl font-semibold font-Pretendard">
              제2조(위치정보관리책임자)제1조(시행일)
            </h2>
            <p className='mb-1'>위치정보관리책임자는 를 기준으로 다음과 같이 지정합니다.</p>
            <ul>
              <li>소속: (주) 머스트핀테크</li>
              <li>성명 : 차주헌</li>
              <li>직위 : 대표</li>
              <li>전화 : 02-1234-1234 (수정필요)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;

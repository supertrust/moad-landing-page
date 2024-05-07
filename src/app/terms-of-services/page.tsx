'use client'
import React,{useState} from 'react'
import Nav from '@/Components/Advertiser/PagesNavbar/Nav'
import Image from 'next/image'
import DownIcon from '../../Assets/chevron-up.svg'

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <Nav/>  
        {/* DrowpDown--Content */}
        <div className="flex justify-center mt-20">
        <div className="w-[1170px]  px-10  py-6 bg-slate-100 border border-zinc-200 flex-col justify-start items-end gap-10 inline-flex">
          <div className="flex justify-center  items-center ">
            <div className="text-neutral-900 w-[35px]  font-medium font-['Pretendard']">
              열기
            </div>
            <div
              className={`w-6 h-6 relative  ${isOpen ? "rotate-180" : ""}`}
              onClick={toggleDropdown}
            >
              <Image
                src={DownIcon}
            
                width={26}
                alt="Drop-Down-icon"
                height={26}
              />
            </div>
          </div>
          {isOpen && (
            <div className="flex justify-center pb-10">
             
              
                <div className="self-stretch h-[294px] flex-col justify-start items-start inline-flex">
                  <div className="w-[1090px] justify-start items-start inline-flex">
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-t border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제1조. 목적
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-r border-t border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제2조. 정의
                      </div>
                    </div>
                    <div className="h-[49px]  w-[363px] p-4 bg-white border-r border-t border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제3조. 약관의 게시 및 구성
                      </div>
                    </div>
                  </div>
                  <div className="w-[1090px] justify-start items-start inline-flex">
                    <div className="h-[49px]  w-[363px] p-4 bg-white border-l border-t border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제4조. 이용 계약 성립 등
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-r border-t border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제5조. 광고의 등록, 제한 및 관리
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border-r border-t border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제6조. 광고 서비스의 변경 및 중단
                      </div>
                    </div>
                  </div>
                  <div className="w-[1090px]  justify-start items-start inline-flex">
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-t border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제7조. 광고 서비스 이용료 정산 등
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제8조. {`광고주`}에 대한 통지
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border-r border-t border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제9조. 이용 계약 해지, 종료 및 환불
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start inline-flex">
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제10조. {`회사`}의 의무
                      </div>
                    </div>
                    <div className="h-[49px]  w-[363px] p-4 bg-white border-l border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제11조. {`광고주`}의 의무
                      </div>
                    </div>
                    <div className="h-[49px]w-[363px] p-4 bg-white border-l border-r border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제12조. 회사의 면책
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start inline-flex">
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제13조. 개인정보보호의무 및 비밀유지
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제14조. 분쟁의 해결
                      </div>
                    </div>
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-r border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        제15조. 외부플랫폼광고
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-start inline-flex">
                    <div className="h-[49px] w-[363px] p-4 bg-white border-l border-r border-b border-gray-300 justify-start items-center gap-2.5 flex">
                      <div className="text-neutral-900 text-sm font-normal font-['Pretendard']">
                        부칙
                      </div>
                    </div>
                  </div>
                </div>
              </div>
   
          )}
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <div className="w-[1170px] h-[3022px] flex-col justify-start items-start gap-6 inline-flex">
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제1조. 목적
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              본 약관은 모드{`이하 회사`}가 제공하는 광고 서비스{`아래 정의`}를
              광고주 {`아래 정의`}에게 제공함에 있어 회사 와 광고주 의 권리,
              의무 및 책임사항을 규정함을 목적으로 합니다
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제2조. 정의
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                본 약관에서 사용하는 용어의 정의는 다음과 같습니다.
              </div>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                광고 {`이하 광고 라고 함`} 라 함은 회사 가 광고주 가 신청한
                광고 상품 {`아래 정의`}  의 내용과 절차에 따라 광고주 의 광고
                소재{`아래 정의`}를 광고매체 에 노출하는 것을 말합니다.
                <br />
                광고소재 라 함은 광고주 가 제작하여 광고매체에 등록한 상품
                설명, 상품 사진, 텍스트 또는 이미지 등 형태의 제작물을 말합니다.
                <br />
                광고 상품 이라 함은 광고주 의 광고 소재를 광고매체에
                게재하기 위하여 회사 가 광고주 에게 판매하는 것으로 광고
                상품의 종류, 노출 형태, 위치 등 구체적 내용은 광고 상품 및 광고
                별도로 제공되는 설명표 {`홈페이지에 게시`} 와 같습니다. 기타
                광고진행을 위한 광고비용등에 관한 내용은 광고 체결시 광고계약서
                안에 게시함을 원칙으로 합니다.
                <br />
                광고 서비스 라 함은 광고주가 구매한 광고 상품의 내용대로
                광고주의 광고 소재 를 광고매체에 노출하고 광고 등록, 광고
                관리, 리포트 등 제반 서비스를 말합니다.
                <br />
                광고주라 함은 본 약관에서 정한 절차에 따라 서비스를 신청 및
                이용하는 자를 말합니다.
                <br />
                모드 광고주 웹이라 함은 광고주의 광고 신청, 게재, 관리, 취소
                등을 위해 회사가 광고주에게 제공하는 서비스 페이지{`홈페이지
                URL`}를 말합니다.
                <br />
                서비스 이용료 라 함은 서비스 이용대가로 광고주가 회사에
                지급하는 금액을 말합니다. 해당금액은 광고 신청후 광고 체결시에
                광고계약서 상으로 명시됩니다.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제3조. 약관의 게시 및 구성
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사는 본 약관의 내용을 광고주 가 쉽게 알 수 있도록
              모드{`홈페이지 URL`} 에 게시합니다.
              <br />
              회사가 본 약관을 개정하는 경우에는 적용 일자 및 개정 사유를
              명시하여 현행 약관과 함께 제1항의 방식에 따라 그 적용일자 칠{`7`}일
              이전부터 적용일자 전일까지 공지합니다. 다만 광고주에게 불리하게
              약관을 변경하는 경우에는 최소한 삼십{`30`}일 이상의 사전 유예기간을
              두고 공지합니다.
              <br />
              회사가 전항에 따라 개정약관을 공지 또는 통지하면서 광고주에게
              전항의 기간 내에 의사표시를 하지 않으면 동의한 것으로 본다는 뜻을
              명확하게 공지 또는 통지하였음에도 광고주가 명시적으로 거부의
              의사표시를 하지 아니한 경우 광고주가 개정약관에 동의한 것으로
              봅니다.
            </div>
          </div>
          <div className="h-[220px] flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제4조. 이용 계약 성립 등
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              
                광고주 는 회사가 제공하는 다음의 약관의 내용에 동의를 한
                다음 회사가 정한 절차에 따라 이용 신청을 하고 회사 가 이러한
                신청에 대하여 승낙함으로써 체결됩니다.
              </div>
              <div className="pl-7 justify-start items-center gap-2.5 inline-flex">
                <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                  {`1)`} 기본 약관에 대한 동의
                  <br />
                  {`2)`} 본 약관에 대한 동의
                  <br />
                  {`3)`} 광고주 가입 완료 확인
                </div>
              </div>
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사는 광고주 가 다음의 각 호의 하나의 사유가 있을 경우 광고
                서비스 이용을 제한할 수 있습니다.
              </div>
              <div className="px-7 justify-start items-center gap-2.5 inline-flex">
                <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                {`1)`}  허위 정보를 기재하거나 회사가 제시한 내용을 기재하지 않은
                  경우
                  <br />
                  {`2)`}  기본 약관 위반 등의 이유로 광고주 자격을 상실할 경우
                  <br />
                  {`3)`}  기타 회사가 합리적인 판단에 의하여 광고 서비스 이용제한이
                  필요하다고 인정되는 경우
                </div>
              </div>
            </div>
          </div>
          <div className="h-[352px] flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제5조. 광고의 등록, 제한 및 관리
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사 는 광고 상품의 종류, 광고 영역, 등록 절차 및 과금 방법,
                광고 상품등을 모드 광고센터 에 공지하며 광고주는 광고 신청
                전에 이를 신중히 확인하여야 합니다.
                <br />
                회사는 광고주가 전항에 따라 광고주가 신청한 광고 및
                광고소재에 대하여 회사 에서 정한 절차, 기준 및 방식에
                부합하는지 형식적인 여부만을 검수하는 것에 그치며 광고와 광고
                소재 간의 실질적 권리 유효성, 범위 및 권리의 주체, 관련 계약 등
                실질적 관계에 대한 심사를 하지 않습니다. 회사는 권리주장자의
                신고 또는 요청에 의한 광고 또는 광고소재의 취소, 삭제 또는
                일시 중지에 대해 일체의 책임을 지지 않으며 이는 권리주장자와
                광고주간 에 해결되어야 합니다.회사 는 회사 의 검수 승인을
                득한 광고를 광고주의 광고소재를 광고매체에 게재합니다.
                <br />
                광고주 는 광고 게재 전에 판매예치금을 예치하여야 합니다.
                광고주 가 사전에 충분히 판매예치금을 예치하지 않은 경우
                광고 의 게재가 중단될 수 있으며 이로 인해 발생하는 문제에 대한
                책임은 광고주 에게 있습니다.
                <br />
                회사 는 광고주의 광고 및 광고 소재가 아래 각 호 중 하나에
                해당하는 경우 광고의 게재를 제한 또는 중단할 수 있으며 광고
                중단과 관련하여 회사는 책임을 지지 않습니다.
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="pl-6 justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                  {`1)`}  광고주가 회사 가 제공하지 않는 방식으로 광고
                    서비스 에 접속하는 행위
                    <br />
                    {`2)`}  회사 에 법률적 또는 재산적 위험을 발생시키거나 발생시킬
                    우려가 있는 행위
                    <br />
                    {`3)`}  회사 의 광고매체, 서버 및 설비 등 시스템 부하를 야기하는
                    행위
                    <br />
                    {`4)`}  회사 와의 광고계약서를 위반하는 행위
                    <br />
                    {`5)`}  기타 광고 서비스 의 정상적인 운영을 방해하는 행위
                  </div>
                </div>
                <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                  광고주 는 회사 가 정한 절차와 방식에 따라 언제든지 모드 에
                  접속하여 광고 의 구매, 추가, 삭제, 게재, 게재 중지 등을
                  신청할 수 있습니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제6조. 광고 서비스의 변경 및 중단
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사 는 광고가 게재되는 광고매체의 범위 및 광고매체에서의 게재
              영역, 게재 순서, 게재 정보, UI 등 {`이하 "광고 영역 등"이라고 함`}에
              대한 결정 권한을 가지며, 변경 또는 추가할 수 있습니다.
              <br />
              회사 는 수시로  광고 서비스 의 품질 향상 및 광고의 효과 증대
              등을 위해 일부 키워드와 일부 트래픽을 대상으로 하는 테스트를
              별도의 공지 없이 진행할 수 있습니다. 최소 7일 전에 모드
              공지사항란을 통해 테스트 진행 내용을 별도 공지합니다.
              <br />
              회사 는 정보통신설비의 보수 점검 및 교체와 통신, 시스템의 장애
              등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수
              있습니다. 서비스 중단의 경우 회사 는 모드 광고센터 메인, 공지사항
              게시판이나 전자우편, 전화 등의 방법으로 즉시 중단 사실을
              광고주 에게 통지합니다. 단, 회사 가 미리 예측할 수 없는 사정에
              의한 서비스의 중단의 경우에는 예외로 합니다.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제7조. 광고 서비스 이용료 정산 등
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사 는 전항의 광고 서비스 이용료를 광고주 가 광고매체에
                예치한 판매예치금에서 매일 수시로 자동 차감합니다.
                <br />
                회사 는 광고주 가 실제 집행한 광고 서비스 이용료에 대하여
                세금계산서를 발행하며 광고주 는 해당 세금계산서를 회사 를
                통하여 발급의뢰를 할수 있습니다.
                <br />본 조 제1항의 광고 서비스 이용료는 변동될 수 있으며,
                이러한 경우 회사  는 모드 광고센터 초기 화면에 변경하려는
                내용을 노출하며, 칠{`7`}일 앞서 통보하게 됩니다.
                <br />
                광고 서비스 이용 중 보상 또는 환불 사유가 발생하는 경우
                회사 는 해당 대금을 광고주에게 보상또는 환불함을 원칙으로
                합니다. 환불 금액은 광고기간 및 내용에 따라 다릅니다. 자세한
                부분은 광고 신청내 광고약관에 따릅니다.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제8조. 광고주 에 대한 통지
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사 가 광고주 에 대하여 통지를 하는 경우 기본 약관, 본 약관
              및 광고 계약서 에 별도의 규정이 없는 한 광고주 가 모드
              광고센터 에 제공한 전자우편주소, {`휴대`}전화번호, 주소 중 하나로
              통지하거나, 통지에 갈음하여 광고주 의 모드 광고센터 로그인시
              알림창 등의 수단으로 할 수 있습니다.
              <br />
              광고주는 회사에 실제로 연락이 가능한 전자우편,{`휴대`}전화번호,
              주소 등의 정보를 제공하고 해당 정보들을 최신으로 유지하여야
              하며,회사의 통지를 확인하여야 합니다.
              <br />
              회사 는  광고주 가 전항의 의무를 소홀히 하여 발생한 불이익에 대한
              책임을 지지 않습니다.
            </div>
          </div>
          <div className="h-[274px] flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제9조. 이용 계약 해지, 종료 및 환불
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                광고주 는 언제든지 모드 광고센터 에 접속하여 광고 이용계약의
                해지를 의뢰 할수 있습니다. 하지만, 이 경우 해지에 관한 내용은
                광고계약시 작성한 광고 계약서내의 광고 계약 해지 조항을 따르게
                됩니다. 하지만, 따로 명시가 되어있지 않은 경우에는, 총 계약한
                광고 금액의 10%를 위약금으로 지불한뒤에 광고계약을 해지할수
                있습니다.
                <br />
                 회사 는 다음 각 호의 하나의 사유가 발생한 경우 이용계약을
                해지할 수 있습니다. 이 경우  회사는 광고주 에게
                이메일{`e-mail`}, 전화, 팩스 기타의 방법을 통하여 해지사유를 밝혀
                해지의사를 통지합니다. 다만, 회사 는 해당 광고주 에게 사전에
                해지사유에 대한 의견진술의 기회를 부여할 수 있습니다.
              </div>
              <div className="flex-col justify-start items-start gap-2 flex">
                <div className="pl-6 justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard']">
                  {`1)`}  광고주가 모드 회원 자격을 상실하거나 정지된 경우
                    <br />
                    {`2)`}  광고주 가 판매예치금 을 예치하지 못하여 회사 가 광고를
                    집행할 수 없는 경우
                    <br />
                    {`3)`}  광고주 가 허위신청, 관련 법령 또는 기본 약관 및 본
                    약관을 위반한 경우
                    <br />
                    {`4)`}  기타 광고주 가 본 계약을 이행할 수 없다고 객관적으로
                    판단된 경우
                  </div>
                </div>
                <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                  회사 가 9조 2항에 명시된 내용을 제외하고, 이용계약을 해지하는
                  경우 광고주 가 신청한 서비스 이용신청은 자동으로
                  취소되고,회사 는 광고 계약 해지 이후, 광고금액의 환불에
                  관련해서는 광고계약시 작성한 광고 계약서내의 광고 계약 혜지
                  조항을 따르게 됩니다. 하지만, 따로 명시가 되어있지 않은
                  경우에는, 총 계약한 광고 금액에서 남아있는 잔금에 관해서는
                  전액 환불 됩니다.
                </div>
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제10조. 회사 의 의무
            </div>
            <div className="flex-col justify-start items-start gap-1 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                회사 는 관련 법령과 본 약관 을 준수하며, 계속적이고 안정적으로
                광고 서비스 를 제공하기 위하여 최선을 다하여 노력합니다.
                <br />
                회사 는 광고주 가 안정하게 광고 서비스 를 이용할 수 있도록
                개인정보{`신용정보 포함`} 보호를 위하여 보안시스템을 갖추어야
                개인정보취급방침을 공시하고 준수합니다.
                <br />
                회사 는 관련 법령과 관련하여 광고주 로부터 제기된 의견이나
                불만이 정당하다고 인정될 경우 이를 처리하여야 하며 모드
                광고센터 내 게시판, 전자우편 등을 통하여 광고주 에게 처리과정
                및 결과를 전달할 수 있습니다.
                <br />
                회사 는 광고 효과 향상을 위해 광고주 에게 광고 설정기능을
                제공할 수 있으며, 광고주 가 설정한 조건에 따라 광고가 노출될 수
                있도록 최선을 다합니다.
              </div>
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제11조. 광고주 의 의무
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              광고주 는 광고매체에 키워드와 함께 등록한 광고 소재를
              전자상거래법, 정통망법, 표시광고의공정화에관한법률, 소비자기본법
              등 관련법령 및 본 약관, 개별약정, 판매자 운영정책을 비롯하여 고객
              보호 및 서비스 신뢰도 제고 등을 위해 회사가 제정하여 공개한 기타
              정책을 준수하여야 합니다
              <br />
              회사 의 원활한 서비스 제공을 위하여 광고주 는 모드 광고센터에
              게시되거나 회사에 통보한 자신의 이메일로 전달되는 공지사항 등을
              수시로 확인하여야 합니다.
              <br />
              광고주  는 광고 이용 목적에 한하여 서비스를 이용할 수 있으며,
              서비스에 의하여 제공된 정보를 제3자에게 제공 또는 유출하여서는
              안됩니다.
              <br />
              광고주 는 자신의 귀책 사유로 인해 회사 와 광고주, 고객 또는
              제3자와의 사이에 분쟁이 발생한 경우 즉시 자신의 비용과 책임으로
              회사를 면책시켜야 하고 회사, 고객 또는 제3자 등에게 손해가 발생한
              경우 이를 즉시 배상하여야 합니다.
              <br />
              광고주 는 본 약관에 따른 서비스 이용권한을 본인 외에 타인에게
              대여 하거나 양도 하여서는 안됩니다. 단, 회사 는 광고주 가 동의한
              경우에 한해 모드 광고센터 에 게시된 대행사 중 광고주 가 지정한
              대행사{`"광고대행사"`}에게 모드 광고센터 및 관련 시스템 이용
              권한을 부여할 수 있으며 광고대행사 에 대한 감독책임은
              광고주 에게 귀속됩니다. 광고주 가 광고대행사 를 지정하면 해당
              지정의 효과는 회사 가 모드 광고센터 에 공지한 기간동안 {`이하
              "최소 유지기간"`} 유지되며, 광고주 는 최소 유지기간 내에는 다른
              광고대행사 를 다시 지정할 수 없습니다. 최소 유지기간”은 확인은
              가능합니다.
              <br />
              회사 와 광고대행사간 의 계약 관계가 종료 또는 해지되는 경우
              광고주 는 자신의 선택에 따라 직접 광고 업무를 수행하거나 회사와
              계약관계에 있는 다른 광고대행사로 지정할 수 있습니다. 광고주 의
              선택이 없을 경우, 자동으로 직접 광고 업무를 수행하는 것으로
              변경됩니다.
              <br />
              회사 는 광고대행사 가 광고주 가 광고대행사 를 지정한 날 또는
              광고대행사 가 서비스 이용료 를 집행한 날부터 365일까지 로그인 과
              서비스 이용료 를 지급한 이력이 없을 경우 광고주 가
              광고대행사 에게 지정한 광고대행사 의 모드 ID 계정 이용을
              취소하며 광고주 가 직접 광고 업무를 수행하는 것으로 변경합니다.
              단, 모드 ID 계정 이용 해지 예고 후 7일 이내에 광고주 가 해당
              광고대행사 를 통해서 로그인 과 서비스 이용료 를 지급한 이력이
              있을 경우 재이용이 가능합니다.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제13조. 개인정보보호의무 및 비밀유지
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              각 당사자는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등
              관계 법령이 정하는 바에 따라 광고주 의 개인정보를 보호하기 위해
              노력합니다. 광고주 의 개인정보의 보호 및 사용에 대해서는 회사 의
              적용됩니다.
              <br />각 당사자는 법령상 요구되는 경우를 제외하고는 상대방으로부터
              취득한 제1항의 개인정보, 기술정보, 경영 정보 등 비밀로 관리되는
              정보를 제3자에게 누설하여서는 안되며 그 정보를 이용계약의 이행
              이외의 목적으로 이용하지 않습니다.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제14조. 분쟁의 해결
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              본 약관은 대한민국법령에 의하여 규정되고 이행되며, 본 서비스
              이용과 관련하여 발생한 분쟁에 대해서는 민사소송법상의 주소지를
              관할하는 법원을 합의관할로 합니다.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              제15조. 외부플랫폼광고
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              회사 는 외부플랫폼광고 의 광고소재 가 외부플랫폼광고
              네트워크상에 게시됨에 있어서 광고소재 가 어디에서, 얼마나 자주
              게시되는지, 서로 다른 광고주 간에 우선순위가 정해지는 방식에
              관하여 보증하지 않습니다.
              <br />
              회사 는 광고주 에 대한 통지 또는 보상 없이, 외부플랫폼광고 
              기술을 변경하거나 광고소재 의 게시를 중단하거나 그러한 게시를
              시작하지 않을 수 있습니다.
              <br />
              회사 는 회사가 선택한 외부플랫폼 광고업체의 서버를 통해서,
              클릭수 및/또는 광고주 가 부담할 광고요금을 산정하는데 필요한 기타
              지표를 측정하고, 측정결과를 광고주 에게 제공합니다.
              <br />
              외부플랫폼광고 는 제3자가 기망적이거나 부적절한 목적으로 클릭수
              또는 기타 본 계약상 요금에 영향을 미칠 수 있는 행위를 할 위험이
              있습니다. 회사 는 위와 같은 제3자의 부정클릭 또는 기타 발생할 수
              있는 부적절한 행위와 관련하여 광고주 에 대해 어떠한 책임도
              부담하지 않습니다.
              <br />
              광고주  는 외부플랫폼광고 를 시행함에 있어 회사 가 제공하는
              측정결과를 성실하게 검토하여 외부플랫폼광고 의 계속 여부를
              결정하여야 합니다. 광고주 는 위 {`3`}항의 측정결과에 대하여
              회사 에 대하여 이의를 제기할 수 없습니다.
            </div>
          </div>
          <div className="flex-col justify-start items-start gap-2 flex">
            <div className="text-neutral-900 text-xl font-medium font-['Pretendard']">
              부칙
            </div>
            <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
              제1조 본 방침은 2024.05.01부터 시행됩니다.
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page

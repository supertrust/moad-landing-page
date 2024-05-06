

import Nav from "@/Components/Advertiser/PagesNavbar/Nav";
const page = () => {
  
  return (
    <>
    <Nav/>
    
      <div className="flex justify-center mt-20">
        <div className="w-[1170px] h-[322px] flex-col justify-start items-start gap-20 inline-flex">
          <div className="flex-col justify-start items-start gap-6 flex">
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                이카루스는 화물주들의 안전한 운행과 올바른 서비스 사용을 위해서
                최선을 다할것입니다.
                <br />
                다음은 서비스 이용전에 확인해야할 내용입니다. 해당 내용에
                동의하시지 않으실수 있습니다만, 동의하지 않을시 서비스의 이용이
                불가함을 알려드립니다. 광고 신청후에는 모드쪽에서 광고 계약
                작성을 위하여 등록해주신 전화번호와 이메일로 연락이 갈
                예정입니다. 광고 신청전에 해당 내용이 올바르게 기입이
                되어있는지, 다시한번 확인 부탁드립니다. 
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-6 flex">
              <div className="w-[1170px] text-neutral-900 text-base font-normal font-['Pretendard'] leading-snug">
                본 서비스를 이용하는 사용자(이하 '사용자')는 본 서비스를 통해
                화물차에 광고를 부착하고 운행하며 발생하는 문제 (차량사고, 인재,
                차량고장으로 인한 운행불가 등)로 인해 발생하는 모든 결과에 대한
                책임은 사용자 본인에게 있음을 인지하고 이에 동의합니다.또한,
                안전법규의 이행이나 교통흐름에 방해가 안되는 운행을 하는것은
                화물주 역할이자 책임입니다. 또한, 광고주는 해당 내용을 충실히
                이행하기위해 올바른 협조를 하여야 합니다.
                <br />
                운행에 문제가 있거나 특별사항이 발생시에는 이카루스 고객센터로
                연락 바랍니다. 감사합니다.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

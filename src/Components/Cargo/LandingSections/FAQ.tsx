import React from 'react';

const FAQ = () => {
  const FaqCards = [
    {
      id: 1,
      head: '광고 비용은 어떻게 되나요?',
      subtext:
        '광고비용은 광고주가 계약한 내용마다 다릅니다. 화물주들의 이러한 광고단가 비용의 고민을 위해, 광고 신청전에 광고비용에대한 의뢰를 할수 있습니다.의뢰후에 알맞은 광고를 신청해보세요!',
    },
    {
      id: 2,
      head: '광고를 진행하는 과정은 어떻게 되나요?',
      subtext:
        '광고 시작후에는, 저희가 소개해드리는 랩핑업체를 통하여, 랩핑을 진행하게 됩니다. 화물주들의 편의를 위해서,각 지역마다 랩핑을 해주는 협력 업체가 분포해있어, 편하신 지역에서 랩핑을 진행하시면 됩니다. 랩핑 이후에는, 광고 시작일자에 맞춰 운행하시면 됩니다!',
    },
    {
      id: 3,
      head: '광고 기간은 어느정도 되나요?',
      subtext:
        '광고 기간은, 광고주와 계약한 내용마다 기간이 달라지게 됩니다. 기본적으로 6개월, 1년등으로 다양하게 설정될수 있습니다. 랩핑의 시간이나 비용등을 고려해봤을때, 단기간보단 장기간 운행하시는것을 추천 드립니다!',
    },
    {
      id: 4,
      head: '제가 운행하는 지역은 도심권이 아닌데, 신청할수 있나요?',
      subtext:
        '네, 물론입니다!  광고별로 모집하는  지역이 다양하기떄문에, 해당 지역에 맞는 광고를 신청하시면 됩니다!',
    },
  ];
  return (
    <>
      <div className='flex  '>
        <div className='w-full h-[900px] relative bg-slate-100 '>
          <div className='left-[135px] top-[100px] absolute flex-col justify-start items-start gap-[60px] inline-flex'>
            <div
              className='relative
'>
              <h1 className="text-violet-900 text-[68px] font-bold font-['Pretendard']">
                FAQ
              </h1>
            </div>
            <div className="text-neutral-900 text-[32px] font-bold font-['Pretendard'] underline">
              다른 궁금점이 있다면?
            </div>
          </div>
          <div className='  gap-5 flex  justify-center items-center mt-[30%]'>
            {FaqCards.map((item, index) => {
              return (
                <div
                  key={index}
                  className='bg-white w-[300px] h-[320px] p-5 rounded-3xl border-2 transition-transform hover:border-violet-900 hover:scale-110'>
                  <div className="text-neutral-900 text-[20px] font-bold font-['Pretendard'] mt-1">
                    {item.head}
                  </div>
                  <div className="text-gray-600 text-base font-normal font-['Pretendard'] leading-normal mt-3">
                    {item.subtext}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQ;

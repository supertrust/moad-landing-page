
import Image from "next/image";
import Elispe from "../../../Assets/Ellipse 8.svg";
import location from "../../../Assets/location.svg";
import Logo from "../../../Assets/cardLogo.svg";

const CardsSection = () => {

  const cardsData = [
    {
      id: 1,
      text: "원하는 시간과 장소, 광고에 적합한 화물차 톤수 선택이 가능합니다.",
    },
    { id: 2, text: " 빠른 광고 신청과 계약 관리가 가능합니다." },
    { id: 3, text: " 화물주의 운행기록 한 눈에 보기" },
  ];
  return (
    <section className="relative z-40 lg:p-20 xl:px-28 h-screen bg-daisyBush-60  overflow-hidden flex flex-col justify-between items-start">
      <div className="absolute top-0 left-0">
        <Image src={Elispe} alt="Elispe" className="" />
      </div>
      <div className="absolute top-0 right-0 ">
        <Image src={location} alt="Location" className=" " />
      </div>
      <div className="flex flex-col items-start">
        <h2 className=" font-bold text-white text-[4rem] font-Pretendard ">
          광고주를 위한 광고 플랫폼
        </h2>
        <Image src={Logo} alt="Logo" className="w-[273px] h-[85px] " />
      </div>
      <div className="grid grid-cols-3 justify-between items-center w-full flex-wrap gap-x-4 ">
        {cardsData?.map((item) => {
          return (
            <div
              className="max-w-[24.4rem] h-[12.8rem] bg-white py-6 px-4 gap-6 border-1 border-gray-100  rounded-[20px] flex flex-col  justify-center "
              key={item.id}
            >
              <span className=" h-8 text-[28px] item-center text-daisyBush-50  font-bold ">
                {`0${item.id}`}
              </span>
              <p className="flex-1 flx items-start text-gray-100 text-2xl font-[500]  font-Pretendard ">{item.text}</p>
            </div>
          );
        })}
      </div>

    </section>
  );
};

export default CardsSection;

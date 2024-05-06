
import Image from "next/image";
import Elispe from "../../../Assets/Ellipse 8.svg";
import location from "../../../Assets/location.svg";
import Logo from "../../../Assets/cardLogo.svg";

const CardsSection = () => {

  const cardsData = [
    {
      id: 1,
      card: "01",
      text: "원하는 시간과 장소, 광고에 적합한 화물차 톤수 선택이 가능합니다.",
    },
    { id: 2, card: "02", text: " 빠른 광고 신청과 계약 관리가 가능합니다." },
    { id: 3, card: "03", text: " 화물주의 운행기록 한 눈에 보기" },
  ];
  return (
    <section className="relative bg-[#561AA4] h-[900px]  overflow-hidden">
      <div className="absolute top-0 right-0 z-10">
        <Image
          src={location}
          alt="Top Right Image"
          className="opacity-6 w-[400px] h-[492px] "
        />
      </div>
      <div className="top-0 left-0">
        <Image
          src={Elispe}
          alt="Left Bottom Image"
          className="opacity-3"
          style={{
            width: "892px",
            height: "892px",
            background: "linear-gradient(to right, #561AA4 30%)",
          }}
        />
      </div>

      <div className="absolute top-0 w-full   ">
        <div className="ml-[135px] mt-[150px]">
          <h2 className=" font-bold text-white text-[68px] font-['Pretendard'] ">
            광고주를 위한 광고 플랫폼
          </h2>
          <Image src={Logo} alt="Logo" className="w-[273px] h-[85px] " />
        </div>
        <div className="flex justify-center items-center mt-[200px] gap-x-6 ">
          {cardsData?.map((item) => {
            return (
              <div
                className="w-[374px] h-[206px] bg-white border-1 border-gray-100  rounded-[20px] overflow-hidden "
                key={item.id}
              >
                <div className="  text-[28px] item-center text-[#7646B4]  font-bold p-4">
                  {item.card}
                </div>

                <div className=" h-[1px]  bg-gradient-to-r from-blue-200 to-white "></div>

                <div className="p-4">
                  <p className="text-gray-800  font-['Pretendard'] ">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </section>
  );
};

export default CardsSection;

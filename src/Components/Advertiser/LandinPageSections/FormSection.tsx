"use client";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Unionicon from "../../../Assets/Union.svg";
import LogogElement from "../../../Assets/LogoElement.svg";
import NewUnion from '../../../Assets/smallunion.svg'
import FormField from "@/Components/FormFields/FormField";

interface FormData {
  기업명: string;
  전화번호: string;
  문의내용: string;
}

const FormSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();


  const onSubmit = (data: FormData) => {
    console.log(data); // Handle form submission here
    reset();
  };

  return (
    <section className="relative lg:p-20 bg-[#EEEFF3] h-screen  overflow-hidden">
      <div className="absolute top-0 right-0 z-10">
        <Image
          src={Unionicon}
          alt="Top Right Image"
          className="opacity-6 w-[400px] h-[492px] "
        />
      </div>
      <div className="absolute top-[165px] right-[320px] z-10">
        <Image
          src={NewUnion}
          alt="Additional Image"
          className="opacity-6 w-[150px] h-[185px] "
        />
      </div>
      {/* Image on the left bottom */}
      <div className="absolute bottom-0 left-0 z-10">
        <Image
          src={LogogElement}
          alt="Left Bottom Image"
          className="opacity-3 h-[200px] w-[860px]"
        />
      </div>
      {/* Content */}
      <div className="grid grid-cols-2 justify-between w-full lg:px-[6rem] xl:px-[8rem]  z-20 ">
        <div className="">
          <h2 className=" font-bold text-bunting-60 text-[4rem] font-Pretendard ">
            문의
          </h2>
          <p className="text-daisyBush-60 font-bold text-3xl underline my-4 font-Pretendard ">
            다른 궁금점이 있다면?
          </p>
        </div>
        <div className=" ">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <FormField
              type="text"
              label="기업명*"
              name="기업명"
              placeholder=""
              className="form-field"
              register={register('기업명', { required: '회사명은 필수 입력 사항입니다.' })}
              errors={errors['기업명']}
            />
            <FormField
              type="text"
              label="전화번호*"
              name="전화번호"
              placeholder=""
              className="form-field"
              register={register('전화번호', { required: '전화번호 필수 입력' })}
              errors={errors['전화번호']}
            />
            <FormField
              type="textarea"
              label="문의내용*"
              name="문의내용"
              placeholder=""
              className="form-field"
              register={register('문의내용', { required: '문의 사항을 입력하세요' })}
              errors={errors['문의내용']}
            />
            <div className="flex  justify-end">
              <button
                type="submit"
                className="bg-daisyBush-60 text-xl text-white px-8 py-2 rounded-full   focus:outline-none  font-Pretendard "
              >
                문의하기
              </button>
            </div>
          </form>
        </div>
      </div>

    </section>
  );
};

export default FormSection;

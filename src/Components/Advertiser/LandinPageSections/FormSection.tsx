"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Unionicon from "../../../Assets/Union.svg";
import LogogElement from "../../../Assets/LogoElement.svg";
import NewUnion from '../../../Assets/smallunion.svg'

interface FormData {
  username: string;
  email: string;
  message: string;
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
    <section className="relative bg-[#EEEFF3] h-[900px]  overflow-hidden">
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
      <div className="absolute flex justify-between w-full  z-20 ">
        <div className="mt-[130px] ml-[135px]">
          <h2 className=" font-bold text-[#101440] text-[68px] font-['Pretendard'] ">
            문의
          </h2>
          <p className="text-[#561AA4] font-bold text-[32px] underline my-4 font-['Pretendard'] ">
            다른 궁금점이 있다면?
          </p>
        </div>
        <div className="mr-[180px] mt-[110px] ">
          <form onSubmit={handleSubmit(onSubmit)} className="mt-8">
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-[#0E121B]  font-bold mb-2 font-['Pretendard'] "
              >
                기업명 <span className="text-[#561AA4]">*</span>
              </label>
              <input
                type="text"
                id="username"
                {...register("username", { required: "기업명 is required" })}
                className=" border rounded-md w-[500px] py-2 px-3 leading-tight focus:border-[#561AA4] "
              />
              <p className="text-[#561AA4] mt-1 font-['Pretendard'] ">{errors.username?.message}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-[#0E121B]  font-bold mb-2  font-['Pretendard'] "
              >
                전화번호 <span className="text-[#561AA4] font-['Pretendard'] ">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email", { required: "전화번호 is required" })}
                className=" border rounded-md w-[500px] py-2 px-3 leading-tight focus:border-[#561AA4] "
              />
              <p className="text-[#561AA4] mt-1  font-['Pretendard'] ">{errors.email?.message}</p>
            </div>
            <div className="mb-4">
              <label
                htmlFor="username"
                className="block text-[#0E121B] font-bold mb-2 font-['Pretendard'] "
              >
                문의내용 <span className="text-[#561AA4] font-['Pretendard'] ">*</span>
              </label>
              <textarea
                rows={10}
                id="message"
                {...register("message", { required: "문의내용 is required" })}
                className=" border rounded-md w-[500px] py-2 px-3 leading-tight focus:border-[#561AA4] "
              />
              <p className="text-[#561AA4] mt-1  font-['Pretendard'] ">{errors.message?.message}</p>
            </div>
            <div className="flex  justify-end">
              <button
                type="submit"
                className="bg-[#561AA4] w-[142px] text-white px-4 py-2 rounded-full   focus:outline-none  font-['Pretendard'] "
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

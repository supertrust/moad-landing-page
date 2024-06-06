"use client";
import { useForm } from "react-hook-form";
import { useState } from 'react'
import FormField from "@/Components/FormFields/FormField";
import { ColorNavbar } from "@/Components/Navbar";
import { RightArrow, SubmitIcon } from "@/Assets/Svgs";
import Image from "next/image";
import ContactBackground from '@/Assets/contactbg.svg'
interface FormData {
    기업명: string;
    전화번호: string;
    문의내용: string;
}

const ContactSection = () => {
    const [isHovered, setIsHovered] = useState(false);
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
        <div className="pt-4 bg-[#F2F5F8] h-screen  overflow-hidden bg-center bg-cover" style={{ background: `url(${ContactBackground.src})`}}>
            <ColorNavbar />
            <section className="relative">

                <div className="grid grid-cols-2 py-5 justify-between w-full px-4 md:px-6 lg:px-10 xl:px-28 z-20 ">
                    <div className="">
                        <h2 className=" font-bold text-daisyBush-60  text-[2.25rem] font-Pretendard ">
                            Contact us
                        </h2>
                        <p className="font-bold flex items-center gap-4 text-bunting-50 text-[1.75rem] underline font-Pretendard ">
                            다른 질문이 있으신가요? <RightArrow />
                        </p>
                    </div>
                    <div className=" ">
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 max-w-[35rem]">
                            <FormField
                                type="text"
                                label="기업명*"
                                name="기업명"
                                placeholder="기업명을 입력해 주세요."
                                className="form-field"
                                register={register('기업명', { required: '회사명은 필수 입력 사항입니다.' })}
                                errors={errors['기업명']}
                            />
                            <FormField
                                type="text"
                                label="전화번호*"
                                name="전화번호"
                                placeholder="전화번호를 입력해 주세요."
                                className="form-field"
                                register={register('전화번호', { required: '전화번호 필수 입력' })}
                                errors={errors['전화번호']}
                            />
                            <FormField
                                type="textarea"
                                label="문의내용*"
                                name="문의내용"
                                placeholder="문의하실 내용을 기입해 주세요."
                                className="form-field "
                                register={register('문의내용', { required: '문의 사항을 입력하세요' })}
                                errors={errors['문의내용']}
                            />
                            <div className="flex w-full justify-end">
                                <button
                                    onMouseOver={() => setIsHovered(true)}
                                    onMouseOut={() => setIsHovered(false)}
                                    type="submit"
                                    className="bg-daisyBush-60 text-xl text-white px-8 py-2 rounded-xl w-full  focus:outline-none flex items-center gap-3 justify-center  font-Pretendard group hover:bg-[#EEEFF3] hover:text-daisyBush-60 hover:shadow-xl transition duration-500 ease-in-out hover:border-daisyBush-60 border font-bold"
                                >
                                    <SubmitIcon color={isHovered ? "#561AA4" : "#fff"} />
                                    문의하기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;

"use client";
import { useSendEmail } from "@/api/hooks";
import { ISendEmail } from "@/api/types";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import { useState } from 'react'
import FormField from "@/Components/FormFields/FormField";
import { ColorNavbar } from "@/Components/Navbar";
import { RightArrow, ScrollToTop, SubmitIcon } from "@/Assets/Svgs";
import Image from "next/image";
import ContactBackground from '@/Assets/contactbg.svg'
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";

interface Props {
    OnScrollDown: () => void;
}

const htmlIds = {
    name: "name" as const,
    phone: "phone" as const,
    detail: "detail" as const,
}

interface FormData {
    [htmlIds.name]: string;
    [htmlIds.phone]: string;
    [htmlIds.detail]: string;
}

const ContactSection = ({ OnScrollDown }: Props) => {
    const [fetching, setFetching] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { sendEmail } = useSendEmail()
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>();


    const onSubmit = async (data: ISendEmail) => {
        setFetching(true)
        console.log(data); // Handle form submission here
        const res = await sendEmail(data)
        if (res.error)
            toast.error('이메일 전송에 실패했습니다. 문제가 지속될시 하기 이메일로 문의 바랍니다. 감사합니다.')
        else
            toast.success('이메일이 성공적으로 발송되었습니다. 빠른 시일내 연락드리겠습니다.')
        setFetching(false)
        reset();
    };

    const handleScrollToTop = () => {
        OnScrollDown()
    }

    return (
        <div className=" bg-[#F2F5F8] h-full flex flex-col w-full overflow-hidden bg-center bg-cover">
            <div className="">
                <ColorNavbar page="advertisers" />
            </div>
            <section className="relative flex-1 md:items-center flex w-full">
                <div
                    className="flex flex-col  gap-8 justify-center items-center md:items-start md:grid lg:grid-cols-2   w-full px-4 md:px-16 lg:px-10 xl:px-28 z-20 ">
                    <div className="z-50">
                        <h2 className=" font-bold text-daisyBush-60  text-[2.25rem] font-Pretendard ">
                            Contact us
                        </h2>
                        <p className="font-bold flex items-center gap-4 text-bunting-50 text-[1.75rem] underline font-Pretendard ">
                            다른 질문이 있으신가요? <RightArrow />
                        </p>

                    </div>
                    <div className=" w-full flex items-center h-full flex-1 z-40 pb-6 ">
                        <form onSubmit={handleSubmit(onSubmit)} className=" w-full  lg:max-w-[35rem]">
                            <FormField
                                type="text"
                                label="기업명*"
                                name={htmlIds.name}
                                placeholder="기업명을 입력해 주세요."
                                className="form-field"
                                register={register(htmlIds.name, { required: '회사명은 필수 입력 사항입니다.' })}
                                errors={errors[htmlIds.name]}
                            />
                            <FormField
                                type={'text'}
                                label="전화번호*"
                                name={htmlIds.phone}
                                placeholder="전화번호를 입력해 주세요."
                                className="form-field"
                                register={register(htmlIds.phone, { required: '전화번호 필수 입력' })}
                                errors={errors[htmlIds.phone]}
                            />
                            <FormField
                                type="textarea"
                                rows={8}
                                label="문의내용*"
                                name={htmlIds.detail}
                                placeholder="문의하실 내용을 기입해 주세요."
                                className="form-field "
                                register={register(htmlIds.detail, { required: '문의 사항을 입력하세요' })}
                                errors={errors[htmlIds.detail]}
                            />
                            <div className="flex w-full justify-end">
                                <button
                                    disabled={fetching}
                                    onMouseOver={() => setIsHovered(true)}
                                    onMouseOut={() => setIsHovered(false)}
                                    type="submit"
                                    className={clsx(fetching && "opacity-75",
                                        "bg-daisyBush-60 text-xl text-white px-8 py-4 rounded-xl w-full  focus:outline-none flex items-center gap-3 justify-center  font-Pretendard group hover:bg-[#EEEFF3] hover:text-daisyBush-60 hover:shadow-xl transition duration-500 ease-in-out hover:border-daisyBush-60 border font-bold")}
                                >
                                    {/*<Loader show={fetching}/>*/}
                                    <ClipLoader
                                        color={'daisyBush-60'}
                                        loading={fetching}
                                        size={30}
                                        aria-label="Loading Spinner"
                                        data-testid="loader"
                                    />
                                    <SubmitIcon color={isHovered ? "#561AA4" : "#fff"} />
                                    문의하기
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <div className='md:hidden z-50 absolute right-8 bottom-6' onClick={() => {
                handleScrollToTop()

            }
            }>
                <ScrollToTop />
            </div>
            <div className='absolute -z-0 left-0 bottom-0 w-full'>
                <Image
                    alt='blur-truck'
                    src={ContactBackground}
                    className='-z-10'
                />
            </div>
        </div>
    );
};

export default ContactSection;

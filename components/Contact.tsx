import React from 'react';
import { PhoneIcon, MapPinIcon, ArrowUpCircleIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from 'next/link';

type Inputs = {
    name: string,
    email: string,
    message: string
};

export default function Contact() {
    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = formData => {
        window.location.href = `mailto:alejandro.dominguez1@live.com?subject=${""}&body=Hola, mi nombre es${formData.name}. ${formData.message} (${formData.email})`
    }

    return (
    <div className='flex flex-col md:flex-row text-center md:text-left relative min-h-screen max-w-7xl px-10
        justify-evenly mx-auto items-center pt-28 md:pt-24'>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-widest text-neutral-300 text-2xl ml-3 md:ml-0'>
            Contacto
        </h3>
        <div className="flex flex-col space-y-5 md:space-y-7">
            <h4 className='text-xl md:text-3xl text-center font-semibold'>¡Déjame un
                <span className='text-[#ffe500]'> mensaje!</span>
            </h4>
            <div className='flex flex-col ml-9 md:ml-20'>
                <div className='space-y-4 md:space-y-6'>
                    <div className='flex items-baseline space-x-5 justify-start'>
                        <PhoneIcon className='text-[#ffe500] h-6 w-6 md:h-7 md:w-7 animate-pulse'/>
                        <p className='text-base md:text-lg'>0800-WEB-DEVELOPER</p>
                    </div>
                    <div className='flex items-baseline space-x-5 justify-start'>
                        <MapPinIcon className='text-[#ffe500] h-6 w-6 md:h-7 md:w-7 animate-pulse'/>
                        <p className='text-base md:text-lg'>Calle Front End 123</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-3 mx-auto min-w-[18rem]
                md:min-w-[30rem]'>
                <input {...register('name')} className='contactInput' required type="text" placeholder='nombre'/>
                <input {...register('email')} className='contactInput' required type="email" placeholder='mail'/>
                <textarea {...register('message')} required className='contactInput' placeholder='mensaje'>
                </textarea>
                <button type='submit' className='text-base px-4 py-2 md:text-lg rounded-md bg-[#ffe500]
                    md:bg-[#ffe500]/70 font-black md:font-semibold tracking-[10px] uppercase transition-all
                    duration-200 hover:bg-[#ffe500] hover:font-black hover:text-neutral-900 text-neutral-900
                    md:text-neutral-50'>
                    Enviar
                </button>
            </form>
        </div>
        <Link href="#hero">
			<footer className='absolute bottom-3 right-[8.7rem] md:bottom-4 md:right-16'>
				<ArrowUpCircleIcon className='text-[#ffe500]/90 h-10 w-10 md:h-12 md:w-12 cursor-pointer'/>
			</footer>
		</Link>
    </div>
    )
}
import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import ClimateImg from "../../images/web-3.png";

export default function ProjectCard3() {
return (
    <article className='flex flex-col items-center snap-center'>
        <div className='bg-neutral-800 px-4 pt-6 pb-10 md:px-12 md:py-4 rounded-xl max-w-3xl min-h-[390px]
            md:min-h-[435px] min-w-[290px] shadow-md'>
            <h4 className='text-shadow text-lg md:text-2xl text-[#ffe500]'>Cli-mate</h4>
            <div className='flex justify-center items-start'>
                <div className='relative w-32 h-52 md:w-56 md:h-72 mt-4 flex-shrink-0 project-shadow'>
                    <Image src={ClimateImg} alt="Cli-mate" title="Cli-mate" layout='fill' objectFit='cover'
                    className='rounded-lg'/>
                </div>
                <div className="flex flex-col justify-center items-start ml-4 md:ml-6">
                    <p className='text-sm md:text-base text-left mt-4 max-w-xs'>Cli-mate es una web donde puedes 
                        chequear el clima de tu ciudad y del lugar que quieras.
                    </p>
                    <div className="flex justify-center items-center gap-4 mt-4">
                        <SocialIcon url="https://cli-mate-weather.netlify.app/" target={"_blank"} rel="noreferrer"
                        fgColor='ghostwhite' bgColor='transparent' className='transition-transform hover:scale-110
                        duration-300 flex-shrink-0'/>
                        <SocialIcon url="https://github.com/alejandro-dominguez/cli-mate" target={"_blank"}
                        rel="noreferrer" fgColor='ghostwhite' bgColor='transparent' className='transition-transform
                        hover:scale-110 duration-300 flex-shrink-0'/>
                    </div>
                </div>
            </div>
            <p className='text-[#ffe500]/90 text-sm md:text-base font-semibold mt-4 tracking-wider'>
                JQuery | LESS | HTML | CSS | Bootstrap
            </p>
        </div>
    </article>
    )
}
import React from 'react';
import { SkillImg1, SkillImg2, SkillImg3, SkillImg4, SkillImg5, SkillImg6, SkillImg7,
SkillImg8, SkillImg9, SkillImg10, SkillImg11, SkillImg12, SkillImg13, SkillImg14, SkillImg15 }
from "./skillsImgs";


export default function Skills() {
    return (
    <div className='flex flex-col relative h-screen px-0 md:px-10 justify-evenly mx-auto max-w-7xl
        items-center 2xl:overflow-x-hidden'>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-widest text-neutral-300 text-2xl ml-3 md:ml-0'>
            Herramientas
        </h3>
        <div className='z-10 grid grid-cols-3 md:grid-cols-4 mt-32 md:mt-14 gap-4 md:gap-5'>
            <SkillImg1 />
            <SkillImg2 />
            <SkillImg3 />
            <SkillImg4 />
            <SkillImg5 />
            <SkillImg6 />
            <SkillImg7 />
            <SkillImg8 />
            <SkillImg9 directionLeft />
            <SkillImg10 directionLeft />
            <SkillImg11 directionLeft />
            <SkillImg12 directionLeft />
            <SkillImg13 directionLeft />
            <SkillImg14 directionLeft />
            <SkillImg15 directionLeft />
        </div>
        <div className='z-0 w-[150%] absolute top-[12rem] bg-[#ffe500]/10 left-[-5rem] h-[350px]
        md:h-[250px] -skew-y-12 2xl:top-[30rem]'></div>
    </div>
    )
}
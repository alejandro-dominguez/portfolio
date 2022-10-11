import React from 'react';
import SkillImg1 from './skillsImgs/SkillImg1';
import SkillImg2 from './skillsImgs/SkillImg2';
import SkillImg3 from './skillsImgs/SkillImg3';
import SkillImg4 from './skillsImgs/SkillImg4';
import SkillImg5 from './skillsImgs/SkillImg5';
import SkillImg6 from './skillsImgs/SkillImg6';
import SkillImg7 from './skillsImgs/SkillImg7';
import SkillImg8 from './skillsImgs/SkillImg8';
import SkillImg9 from './skillsImgs/SkillImg9';
import SkillImg10 from './skillsImgs/SkillImg10';
import SkillImg11 from './skillsImgs/SkillImg11';
import SkillImg12 from './skillsImgs/SkillImg12';
import SkillImg13 from './skillsImgs/SkillImg13';
import SkillImg14 from './skillsImgs/SkillImg14';
import SkillImg15 from './skillsImgs/SkillImg15';

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
        <div className='z-0 w-[150%] absolute top-[11rem] bg-[#ffe500]/10 left-[-5rem] h-[350px] md:h-[250px]
        -skew-y-12 2xl:top-[30rem]'></div>
    </div>
    )
}
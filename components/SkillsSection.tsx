import React from 'react';
import { motion } from "framer-motion";
import SkillImg from './SkillImg';
import { Skill } from '../typings';

type Props = {
    skills: Skill[];
};

export default function Skills({ skills }: Props) {
    return (
    <motion.div className='flex flex-col relative h-screen px-0 md:px-10 justify-evenly mx-auto max-w-7xl
        items-center 2xl:overflow-x-hidden'
        initial={{
			opacity: 0
		}}
		whileInView={{
			opacity: 1
		}}
		viewport={{
			once: true
		}}
		transition={{
			duration: 1
		}}>
        <h3 className='absolute top-24 md:top-16 uppercase tracking-widest text-neutral-300 text-2xl ml-3 md:ml-0'>
            Herramientas
        </h3>
        <div className='z-10 grid grid-cols-3 md:grid-cols-4 mt-32 md:mt-14 gap-4 md:gap-5'>
        {skills?.slice(0, skills.length / 2).map(skill =>(
            <SkillImg key={skill._id} skill={skill} />
        ))}
        {skills?.slice(skills.length / 2, skills.length).map(skill =>(
            <SkillImg key={skill._id} skill={skill} directionLeft />
        ))}
        </div>
        <div className='z-0 w-[150%] absolute top-[11rem] bg-[#ffe500]/10 left-[-5rem] h-[350px] md:h-[250px]
        -skew-y-12 2xl:top-[30rem]'></div>
    </motion.div>
    )
}
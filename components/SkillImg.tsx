import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    directionLeft?: boolean;
    skill: Skill;
};

export default function SkillImg({ directionLeft, skill }: Props) {
    return (
    <div className='flex cursor-pointer'>
        <motion.div className='relative w-14 h-14 md:w-20 md:h-20 mx-3 flex-shrink-0'
        initial={{
            opacity: 0,
            x: directionLeft ? -200 : 200
        }}
        whileInView={{
            opacity: 1,
            x: 0
        }}
        viewport={{
            once: true
        }}
        transition={{
            duration: 1
        }}>
            <a href={skill?.linkToSkill} target="_blank" rel="noreferrer">
                <Image src={urlFor(skill?.image).url()} layout='fill' objectFit='contain'
                title={skill?.title} alt={skill?.title}/>
            </a>
        </motion.div>
    </div>
    )
}
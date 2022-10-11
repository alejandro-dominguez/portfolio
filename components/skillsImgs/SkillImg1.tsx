import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import HTML5 from "../../images/HTML5.png";

type Props = {
    directionLeft?: boolean;
};

export default function SkillImg1({ directionLeft }: Props) {
    return (
    <div className='flex cursor-pointer'>
        <motion.div className='relative w-14 h-14 md:w-20 md:h-20 mx-3 flex-shrink-0'
        initial={{
            opacity: 0,
            x: directionLeft ? -50 : 50
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
            <a href="https://developer.mozilla.org/es/docs/Glossary/HTML5" target="_blank" rel="noreferrer">
                <Image src={HTML5} layout='fill' objectFit='contain' title="HTML5" alt="HTML5"/>
            </a>
        </motion.div>
    </div>
    )
}
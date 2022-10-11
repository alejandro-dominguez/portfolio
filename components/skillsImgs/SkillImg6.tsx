import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import Bootstrap from "../../images/bootstrap.png";

type Props = {
    directionLeft?: boolean;
};

export default function SkillImg6({ directionLeft }: Props) {
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
            <a href="https://getbootstrap.com/docs/5.2/getting-started/introduction/" target="_blank"
                rel="noreferrer">
                <Image src={Bootstrap} layout='fill' objectFit='contain' title="Bootstrap" alt="Bootstrap"/>
            </a>
        </motion.div>
    </div>
    )
}
import React from 'react';
import { motion } from "framer-motion";

type Props = {};

export default function BackgroundCircles({}: Props) {
    return (
    <motion.div className='relative flex justify-center items-center'
        initial={{
            opacity: 0
        }}
        animate={{
            scale: [1, 2, 2, 3, 1],
            opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration: 2.5
        }}>
        <div className='absolute border border-neutral-400 rounded-full h-[250px] w-[250px] mt-52 animate-ping'/>
        <div className='absolute border border-[#ffe500] rounded-full h-[400px] w-[400px] mt-52 animate-pulse'/>
        <div className='absolute border border-neutral-600 rounded-full h-[600px] w-[600px] mt-52'/>
    </motion.div>
    )
}
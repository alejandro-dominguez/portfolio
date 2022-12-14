import React from 'react';
import { motion } from "framer-motion";
import { ProjectCard1, ProjectCard2, ProjectCard3, ProjectCard4, ProjectCard5 }
from "./proyectCards";

export default function Projects() {
    return (
    <div className='flex flex-col relative h-screen max-w-7xl px-0 md:px-10 justify-evenly mx-auto
    items-center 2xl:overflow-x-hidden'>
        <h3 className='absolute top-24 md:top-16 uppercase text-center tracking-widest text-neutral-300 text-2xl
            ml-3 md:ml-0'>
            Proyectos
        </h3>
        <motion.div className='z-10 mt-32 p-4 md:p-0 w-full flex space-x-6 overflow-x-scroll snap-x snap-mandatory
            max-w-[968px] min-h-[440px] md:min-h-[470px] scrollbar-thin md:scrollbarscrollbar-track-neutral-500/25
            scrollbar-thumb-[#ffe500]/90'
            initial={{
                opacity: 0,
                y: -100
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            viewport={{
                once: true
            }}
            transition={{
                duration: 1
            }}>
            <ProjectCard1 />
            <ProjectCard2 />
            <ProjectCard3 />
            <ProjectCard4 />
            <ProjectCard5 />
        </motion.div>
        <div className='z-0 w-[150%] absolute top-[12rem] md:top-[18rem] bg-[#ffe500]/10 left-[-5rem] h-[350px]
        md:h-[250px] skew-y-12 2xl:top-[35rem]'></div>
    </div>
    )
}
import React from 'react';
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import { Project } from '../typings';
import { urlFor } from '../sanity';

type Props = {
    project: Project;
};

export default function ProjectCard({ project }: Props) {
    return (
    <motion.article className='flex flex-col items-center snap-center'
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
        <div className='bg-neutral-800 px-4 pt-6 pb-10 md:px-12 md:py-4 rounded-xl max-w-3xl min-h-[390px]
            md:min-h-[435px] shadow-md'>
            <h4 className='text-shadow text-lg md:text-2xl text-[#ffe500]'>{project?.title}</h4>
            <div className='flex justify-center items-start'>
                <motion.div className='relative w-32 h-52 md:w-56 md:h-72 mt-4 flex-shrink-0 project-shadow'
                initial={{
                    opacity: 0,
                    y: -250
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                viewport={{
                    once: true
                }}
                transition={{
                    duration: 1.5
                }}>
                    <Image src={urlFor(project?.image).url()} alt={project?.title} layout='fill' objectFit='cover'
                    className='rounded-lg'/>
                </motion.div>
                <div className="flex flex-col justify-center items-start ml-4 md:ml-6">
                <p className='text-sm md:text-base text-left mt-4 max-w-xs'>{project?.summary}</p>
                <div className="flex justify-center items-center gap-4 mt-4">
                    <SocialIcon url={project?.linkToLive} target={"_blank"}
                    fgColor='ghostwhite' bgColor='transparent' className='transition-transform hover:scale-110
                    duration-300 flex-shrink-0'/>
                    <SocialIcon url={project?.linkToBuild} target={"_blank"}
                    fgColor='ghostwhite' bgColor='transparent' className='transition-transform hover:scale-110
                    duration-300 flex-shrink-0'/>
                </div>
                </div>
            </div>
            <p className='text-[#ffe500]/90 text-sm md:text-base font-semibold mt-4 tracking-wider'>
                {project?.technologies}
            </p>
        </div>
    </motion.article>
    )
}
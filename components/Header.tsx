import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion";
import Image from 'next/image';
import logo from '../images/logo-A.D.svg';
import { DocumentTextIcon } from "@heroicons/react/24/solid";

type Props = {};

export default function Header({}: Props) {
    return (
    <header className='sticky top-0 flex items-center justify-between pt-2 pb-4 px-4 md:px-8 md:pt-4 md:pb-8
        max-w-7xl mx-auto z-40'>
        <motion.div className='flex flex-row items-center gap-4'
            initial={{
                x: -150,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}>
            <div className='headerLogo'>
                <Image priority src={logo} alt="logo Alejandro Dominguez" layout='responsive' objectFit='contain'/>
            </div>
            <SocialIcon url="https://github.com/alejandro-dominguez" target={"_blank"} fgColor='black'
            bgColor='ghostwhite' className='transition-transform hover:scale-110 duration-300'
            style={{ height: 38, width: 38 }}/>
            <SocialIcon url="https://www.behance.net/alejandrod77ce" target={"_blank"} fgColor='black'
            bgColor='ghostwhite' className='transition-transform hover:scale-110 duration-300'
            style={{ height: 38, width: 38 }}/>
            <SocialIcon url="https://www.linkedin.com/in/alejandro-dominguez1" target={"_blank"} fgColor='black'
            bgColor='ghostwhite' className='transition-transform hover:scale-110 duration-300'
            style={{ height: 38, width: 38 }}/>
            
        </motion.div>
        <motion.div className='flex flex-row md:gap-2 items-center cursor-pointer'
            initial={{
                x: 150,
                opacity: 0,
                scale: 0.5
            }}
            animate={{
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                duration: 1
            }}>
            <a href="https://drive.google.com/file/d/1up-vGzzelKd4XkUqmu-jfb4hG9d_jyHs/view" target="_blank"
                rel="noreferrer">
				<DocumentTextIcon color='ghostwhite' className='transition-transform hover:scale-110 duration-300
                h-9 w-9 cursor-pointer'/>
		    </a>
            <p className='uppercase hidden md:inline-flex text-base'>CV</p>
        </motion.div>
    </header>
    )
}
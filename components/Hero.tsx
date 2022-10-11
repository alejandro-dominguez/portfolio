import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from '../components/BackgroundCircles';
import Image from 'next/image';
import avatar from '../images/avatar.png';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
    const [text] = useTypewriter({
        words: [
            "<h1>Hi, my name's Alejandro Dominguez</h1>",
            "Guy-who-loves-coffee.tsx",
            "<ButLovesToCodeMore />"
        ],
        loop: true,
        delaySpeed: 1500
    })
    return (
    <div className='min-h-screen flex flex-col space-y-4 md:space-y-8 items-center justify-center text-center
        overflow-hidden pt-8 md:pt-36'>
        <div className="z-10">
            <BackgroundCircles />
        </div>
        <div className="z-20">
            <div className='heroImg'>
                <Image priority src={avatar} alt="retrato Alejandro Dominguez" layout='fill' objectFit='contain'/>
            </div>
        </div>
        <div className="z-20">
            <div>
                <h2 className='z-20 text-sm md:text-base uppercase tracking-[0.5rem] text-neutral-200 pb-6
                    md:pb-10 px-10 text-shadow'>
                    Front end developer
                </h2>
                <h1 className='text-xl md:text-3xl font-semibold px-4 md:px-10 min-h-[80px] md:min-h-full md:pb-10
                    text-shadow'>
                    <span>{text}</span>
                    <Cursor cursorColor='#ffe500'/>
                </h1>
            </div>
        </div>
        <div className="z-20">
            <div className='flex flex-col md:flex-row gap-5 md:px-10 items-center justify-center'>
                <Link href='#projects'>
                    <button className='heroBtn'>Proyectos</button>
                </Link>
                <Link href='#skills'>
                    <button className='heroBtn'>Herramientas</button>
                </Link>
                <Link href='#about'>
                    <button className='heroBtn'>Sobre mí</button>
                </Link>
                <Link href='#contact'>
                    <button className='heroBtn'>Contacto</button>
                </Link>
            </div>
        </div>
    </div>
    )
}
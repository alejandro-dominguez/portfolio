import React from 'react';
import Image from 'next/image';
import { motion } from "framer-motion";
import devAvatar from '../images/dev-avatar.png';

type Props = {};

export default function About({}: Props) {
	return (
	<motion.div className='flex flex-col relative min-h-screen max-w-7xl px-0 md:px-10 justify-evenly mx-auto
		items-center'
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
			duration: 1.5
		}}>
		<h3 className='absolute top-24 md:top-16 uppercase tracking-widest text-neutral-300 text-2xl ml-3 md:ml-0'>
			Sobre mí
		</h3>
		<div className="flex flex-col md:flex-row items-start justify-center mt-0 md:mt-4">
			<motion.div className='relative h-[7.5rem] w-[7.5rem] md:h-60 md:w-60 mt-28 md:mt-0 mx-auto flex-shrink-0'
				initial={{
					opacity: 0,
					x: -150
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
				<Image src={devAvatar} alt="dev avatar" layout='fill' objectFit='contain' className='aboutImg'/>
			</motion.div>
			<motion.div className="flex flex-col max-w-xl items-center md:items-start gap-2 md:gap-6 pl-4 pr-4
				md:pl-0 mt-4 md:mt-0"
				initial={{
					opacity: 0,
					x: 150
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
				<h4 className='text-xl md:text-3xl text-center md:text-left font-semibold'>Un poco de información
					<span className='text-[#ffe500]'> sobre mí</span>
				</h4>
				<p className='text-sm md:text-base'>Soy un apasionado de la programación y el diseño. Vengo del 
					rubro del diseño gráfico y el marketing digital. Siempre había querido programar páginas web, 
					hasta que comencé a hacer y desde ese momento no he parado de aprender nuevas habilidades que 
					verdaderamente me fascinan.<span className='my-2 block' />Actualmente mi especialidad es el desarrollo front end, es el área 
					que más me interesa por su relación con todo el mundo del diseño.
				</p>
			</motion.div>
		</div>
	</motion.div>
	)
}
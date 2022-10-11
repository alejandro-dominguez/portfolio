import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Projects from '../components/Projects';
import Skills from '../components/SkillsSection';
import About from '../components/About';
import Contact from '../components/Contact';

const Home: NextPage = () => {
	return (
	<div className='bg-neutral-900 text-neutral-50 h-screen snap-y snap-mandatory overflow-x-hidden
		font-poppins overflow-y-scroll z-0 scroll-smooth md:scrollbar scrollbar-track-neutral-500/25
		scrollbar-thumb-[#ffe500]/90'>
		<Head>
			<title>Portfolio | Alejandro Dominguez</title>
			<meta name="description" content="Alejandro Dominguez | Portfolio" />
			<meta name="keywords"content="portfolio portafolio Alejandro alejandro Dominguez dominguez
			dev developer desarrollo desarrollador web frontend front end front-end" />
			<link rel="icon" href="/favicon.svg" />
		</Head>
		<Header />
		<section id='hero' className='snap-center max-w-[1800px] mx-auto'>
			<Hero />
		</section>
		<section id='projects' className='snap-start max-w-[1800px] mx-auto'>
			<Projects />
		</section>
		<section id='skills' className='snap-start max-w-[1800px] mx-auto'>
			<Skills />
		</section>
		<section id='about' className='snap-start max-w-[1800px] mx-auto'>
			<About />
		</section>
		<section id='contact' className='snap-start max-w-[1800px] mx-auto'>
			<Contact />
		</section>
	</div>
  	)
}

export default Home;
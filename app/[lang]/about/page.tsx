import React from "react";
import { Locale } from "@/i18n.config";

import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";

import Services from "../components/Services";
import Tools from "../components/Tools";
import Experiences from "../components/Experiences";

export default function About({ params: { lang } }: { params: { lang: Locale } }) {
	return (
		<>
			{lang === "en" ? <PageHead subtitle="Who I am" title="About me" /> : <PageHead subtitle="Qui suis-je ?" title="À propos de moi" />}
			<div className="pt-32 px-16 md:px-32 lg:px-72 max-w-screen-2xl m-auto text-center">
				
				<p className="dark:text-[#b0b0b0]">
				{lang === "en" ? `Welcome!\nI'm a versatile creative professional with 7+ years of graphic design expertise. Recently, I've rekindled my love for web development, and I'm now proficient in crafting seamless websites that are both aesthetically stunning and functionally outstanding!
` : `Bienvenue !\nJe suis une créative polyvalente avec plus de 7 ans d'expertise en design graphique. Récemment, j'ai ravivé ma passion pour le développement web, et je suis maintenant compétente pour créer des sites web fluides à la fois esthétiquement époustouflants et fonctionnellement exceptionnels !`}
				</p>

				<p className="dark:text-[#b0b0b0]">
					{lang === "en" ? `Beyond the screen, my hands are the canvas for my boundless creativity. I find joy in bringing beautiful things to life—sewing clothes and dolls, crafting Jesmonite objects, designing stationery, building event decor and leaving my mark through screen and block printing... There are no limits to what my hands can create!</p>
` : `Au-delà de l'écran, mes mains sont le support de ma créativité sans limites. Je trouve de la joie à donner vie à de belles choses, que ce soit en confectionnant des vêtements et des poupées, en créant des objets en Jesmonite, en imaginant de la papeterie, en élaborant des décors pour des événements, ou en laissant mon empreinte à travers la sérigraphie et la linogravure... Il n'y a aucune limite à ce que mes mains peuvent créer !`}</p>
					
					
			</div>
			{lang === "en" ? <SectionHead subtitle="Who I do" title="Services" /> : <SectionHead subtitle="Que fais-je?" title="Services" />}
			<Services lang={lang}/>

			{lang === "en" ? <SectionHead subtitle="What I use" title="Tools" /> : <SectionHead subtitle="Ce que j'utilise" title="Outils" />}
			<Tools />

			{lang === "en" ? <SectionHead subtitle="Where I worked" title="Experiences" /> : <SectionHead subtitle="Où j'ai travaillé" title="Expériences" />}
			<Experiences lang={lang}/>
		</>
	);
}

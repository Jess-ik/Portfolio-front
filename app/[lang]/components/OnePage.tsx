import React from "react";
import { Locale } from '@/i18n.config'
import Skills from "./Skills";
import Projects from "./Projects";

interface Params {
	lang: string;
}

export default function OnePage({ lang }: Params) {
	return (
		<section className="onepage-section">
			{/* Who I am */}
			<div className="max-w-screen-2xl m-auto px-6 md:px-10 lg:px-16 xl:px-32 pt-32 flex flex-col lg:flex-row justify-between">
				<div className="lg:w-5/12">
					<h5 className={`yeseva dark:text-[#c0ccbb]`}>{lang === "en" ? "Who I am" : "Qui suis-je ?"}</h5>

					<section className="h-1/3 animation">
						<div className="first">
							<h2 className="leading-none dark:text-[#e7e6e2]">
								{lang === "en" ? "Creative" : "Designer"} <br />
								{lang === "en" ? "Designer" : "Graphique"}
							</h2>
						</div>
						<div className="second">
							<h2 className="leading-none dark:text-[#e7e6e2]">
								{" "}
								{lang === "en" ? "Web" : "Developpeur"} <br />
								{lang === "en" ? "Developer" : "Web"}{" "}
							</h2>
						</div>
						<div className="third">
							<h2 className="leading-none dark:text-[#e7e6e2]">
								{lang === "en" ? "Passionate" : "Artisane"} <br />
								{lang === "en" ? "Crafter" : "Passionnée"}
							</h2>
						</div>
					</section>
				</div>
				<div className="lg:w-6/12 pt-6 md:pt-10 lg:pl-10 flex flex-col gap-10 justify-center items-start">
					<p className="dark:text-[#b0b0b0]">{lang === "en" ? "Hey there! I'm Jess, a newly-minted front-end developer with 7+ years of creative design experience in agencies, in-house, and freelance. But that's not all—I'm also a born crafter, channeling my passion into creating unique handmade gems." : "Salut ! Je suis Jess, une développeuse front-end récemment diplômée avec plus de 7 ans d'expérience en design créatif, que ce soit en agence, en entreprise ou en tant que freelance. Mais ce n'est pas tout — je suis également une créatrice dans l'âme, passionnée par la confection d'objets artisanaux uniques."}</p>
					<h6 className="-mt-5 font-medium dark:text-[#e7e6e2]">
					{lang === "en" ? "Let's connect and create something special together!" : "Faisons connaissance et créons quelque chose de spécial ensemble !"}
						
						</h6>
					<a href={`/${lang}/about`} className="button dark:dark-button">
						{lang === "en" ? "Get to know me" : "En savoir plus"}
					</a>
				</div>
			</div>

			{/* Skills */}
			<Skills lang={lang}/>

			{/* Selected works */}
			<div className="max-w-screen-2xl m-auto px-6 md:px-10 lg:px-16 xl:px-32 pt-32 flex flex-col md:flex-row justify-between">
				<div className="w-6/12">
					<h5 className={`yeseva dark:text-[#c0ccbb]`}>{lang === "en" ? "What I do" : "Ce que je fais"}</h5>
					<h2 className="leading-none  dark:text-[#e7e6e2]">{lang === "en" ? "Latest works" : "Projets récents"}</h2>
				</div>
				<div className="md:w-10/21 pt-10 flex flex-col gap-10 justify-end items-start">
					<a href={`/${lang}/projects`} className="button dark:dark-button ">
					{lang === "en" ? "See all works" : "Tous mes projets"}
					</a>
				</div>
			</div>
			<Projects lang={lang}/>

			{/* CTA Contact */}
			<div className=" home-contact mt-32 py-32 px-6 md:px-10 lg:px-16 xl:px-32 flex flex-col justify-center items-center ">
				<div className="md:w-6/12 text-center">
					<h5 className={`text-[#17515C] yeseva`}>{lang === "en" ? "Get in touch" : "Une question ?"}</h5>
					<h2 className="leading-none ">{lang === "en" ? "Want to chat ?" : "Contactez-moi"}</h2>
					<p className="button mt-12">
						<a href={`/${lang}/contact`} className="py-2.5 px-4 ">
						{lang === "en" ? "Send me an email" : "Envoyer un message"}
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

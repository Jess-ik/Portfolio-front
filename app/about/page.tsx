import React from "react";

import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";

import Services from "../components/Services";
import Tools from "../components/Tools";
import Experiences from "../components/Experiences";

export default function About() {
	return (
		<>
			<PageHead subtitle="Who I am" title="About me" />
			<div className="pt-32 px-16 md:px-32 lg:px-72 max-w-screen-2xl m-auto text-center">
				<p className="dark:text-[#b0b0b0]">
					Welcome! <br /> I'm a versatile creative professional with 7+ years of graphic design expertise. Recently, I've rekindled my love for web development, and I'm now proficient in crafting seamless websites that are both aesthetically stunning and functionally outstanding!
				</p>

				<p className="dark:text-[#b0b0b0]">Beyond the screen, my hands are the canvas for my boundless creativity. I find joy in bringing beautiful things to life—sewing clothes and dolls, crafting Jesmonite objects, designing stationery, building event decor and leaving my mark through screen and block printing... There are no limits to what my hands can create!</p>
			</div>
			<SectionHead subtitle="What I do" title="Services" />
			<Services />

			<SectionHead subtitle="What I use" title="Tools" />
			<Tools />

			<SectionHead subtitle="Where I worked" title="Experiences" />
			<Experiences />
		</>
	);
}

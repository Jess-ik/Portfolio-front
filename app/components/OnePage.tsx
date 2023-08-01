import React from "react";
import SectionHead from "../components/SectionHead";
import { Yeseva_One } from "next/font/google";
import Services from "./Services";
import Skills from "./Skills";
import Tools from "./Tools";
import { Link } from "react-router-dom";
import Projects from "./Projects";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function OnePage() {
	return (
		<section className="onepage-section">
			<div className="container pt-32 flex justify-between">
				<div className="w-4/12">
					<h5 className={yeseva.className}>Who I am</h5>
					<h2 className="leading-none dark:text-[#e7e6e2]">Creative Developer Crafter</h2>
				</div>
				<div className="w-6/12 pt-10 pl-10 flex flex-col gap-10 justify-center items-start">
					
				
					<p>Hi! I’m Jess, newly front-end <strong>developer</strong>. Also <strong>creative</strong> designer for 7+ years with experiences in agencies, in-house and freelance. Oh, and I'm a born <strong>crafter</strong>, so I love to create things from scratch... by hands!
					</p>
					<h6 className="-mt-5 font-medium">Available for front-end developer opportunities !</h6>
					<a href="/about" className="-mt-5 text-[#c0ccbb] dark:text-[#e7e6e2] text-right">Learn more</a>
					
					
				</div>
			</div>
			<Skills />
			<div className="container pt-32 flex justify-between">
				<div className="w-6/12">
					<h5 className={yeseva.className}>What I do</h5>
					<h2 className="leading-none  dark:text-[#e7e6e2]">Latest works</h2>
				</div>
				<div className="w-10/21 pl-10 flex flex-col gap-10 justify-end items-start">
	
					<button className="dark:text-[#e7e6e2]">See my works</button>
				</div>
				
			</div>
			<Projects />
			<div className=" home-contact mt-32 p-32 flex flex-col justify-center items-center ">
				<div className="w-6/12 text-center">
					<h5 className={`text-[#e7e6e2] ${yeseva.className}`}>Get in touch</h5>
					<h2 className="leading-none dark:text-[#e7e6e2]">Want to chat ?</h2>
					<button className="dark:text-[#e7e6e2] pt-32">Send me an email</button>
				</div>
				
				
			</div>
		</section>
	);
}

import React from "react";

import Skills from "./Skills";
import Projects from "./Projects";

export default function OnePage() {
	return (
		<section className="onepage-section">
			{/* Who I am */}
			<div className="max-w-screen-2xl m-auto px-6 md:px-10 lg:px-16 xl:px-32 pt-32 flex flex-col lg:flex-row justify-between">
				<div className="lg:w-5/12">
					<h5 className={`yeseva dark:text-[#c0ccbb]`}>Who I am</h5>

					<section className="h-1/3 animation">
						<div className="first">
							<h2 className="leading-none dark:text-[#e7e6e2]">
								Creative <br />
								Designer
							</h2>
						</div>
						<div className="second">
							<h2 className="leading-none dark:text-[#e7e6e2]">
								{" "}
								Web <br /> Developer{" "}
							</h2>
						</div>
						<div className="third">
							<h2 className="leading-none dark:text-[#e7e6e2]">
								Passionate <br />
								Crafter
							</h2>
						</div>
					</section>
				</div>
				<div className="lg:w-6/12 pt-6 md:pt-10 lg:pl-10 flex flex-col gap-10 justify-center items-start">
					<p className="dark:text-[#b0b0b0]">Hey there! I'm Jess, a newly-minted front-end developer with 7+ years of creative design experience in agencies, in-house, and freelance. But that's not all—I'm also a born crafter, channeling my passion into creating unique handmade gems.</p>
					<h6 className="-mt-5 font-medium dark:text-[#e7e6e2]">Let's connect and create something special together!</h6>
					<a href="/about" className="button dark:dark-button">
						Get to know me
					</a>
				</div>
			</div>

			{/* Skills */}
			<Skills />

			{/* Selected works */}
			<div className="max-w-screen-2xl m-auto px-6 md:px-10 lg:px-16 xl:px-32 pt-32 flex flex-col md:flex-row justify-between">
				<div className="w-6/12">
					<h5 className={`yeseva dark:text-[#c0ccbb]`}>What I do</h5>
					<h2 className="leading-none  dark:text-[#e7e6e2]">Latest works</h2>
				</div>
				<div className="md:w-10/21 pt-10 flex flex-col gap-10 justify-end items-start">
					<a href="/projects" className="button dark:dark-button ">
						See all works
					</a>
				</div>
			</div>
			<Projects />

			{/* CTA Contact */}
			<div className=" home-contact mt-32 py-32 px-6 md:px-10 lg:px-16 xl:px-32 flex flex-col justify-center items-center ">
				<div className="md:w-6/12 text-center">
					<h5 className={`text-[#17515C] yeseva`}>Get in touch</h5>
					<h2 className="leading-none ">Want to chat ?</h2>
					<p className="button mt-12">
						<a href="/contact" className="py-2.5 px-4 ">
							Send me an email
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

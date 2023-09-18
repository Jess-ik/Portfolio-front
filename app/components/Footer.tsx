import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="bg-gradient-to-b from-[#DFDED9] dark:from-[#0B282E]">
			<section className="max-w-screen-2xl m-auto footer-section px-6 md:px-10 lg:px-16 xl:px-32  py-5 flex flex-col md:flex-row justify-between items-center">
				<div>
					<p className="text-xs dark:text-[#e7e6e2]">Designed and developed by Jessica Louvel - 2023</p>
				</div>
				<div className="py-5 md:py-0 flex gap-6">
					<Link href={"https://www.linkedin.com/in/jesslouvel/"} aria-label="Go to my Linkedin profile" target="_blank" rel="noopener noreferrer">
						<FaLinkedinIn className="dark:text-[#e7e6e2]" aria-hidden="true"/>
					</Link>
					<Link href={"https://github.com/Jess-ik"} aria-label="Go to my GitHub page" target="_blank" rel="noopener noreferrer">
						<FaGithub className="dark:text-[#e7e6e2]" aria-hidden="true"/>
					</Link>
					<Link href={"https://www.instagram.com/jess_louvel/"} aria-label="Go to my Instagram profile" target="_blank" rel="noopener noreferrer">
						<FaInstagram className="dark:text-[#e7e6e2]" aria-hidden="true"/>
					</Link>
				</div>
			</section>
		</footer>
	);
}

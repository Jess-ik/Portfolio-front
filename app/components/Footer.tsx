import Link from "next/link";
import React from "react";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
	return (
		<footer className="">

			<section className="footer-section px-32  py-5 flex justify-between items-center">
				<div><p className="text-xs">Designed and developed by Jessica Louvel - 2023</p></div>
				<div className="flex gap-6">
					<Link href={'https://www.linkedin.com/in/jesslouvel/'}><FaLinkedinIn className="dark:text-[#e7e6e2]"/></Link>
					<Link href={'https://github.com/Jess-ik'}><FaGithub className="dark:text-[#e7e6e2]"/></Link>
                    <Link href={'https://www.instagram.com/jess_louvel/'}><FaInstagram className="dark:text-[#e7e6e2]"/></Link>
                    
					
					
				</div>
			</section>
		</footer>
	);
}

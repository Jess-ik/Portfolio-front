"use client";

import React, { useState } from "react";

import hamburguer from "../../assets/hamburguer.svg";
import { BsXLg, BsList } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
	const pathname = usePathname();
	const [open, setOpen] = useState(false);

	const handleClick = () => setOpen(!open);

	const handleLinkClick = () => {
		if (open) {
		  setOpen(false);
		}
	  };

	/*
https://medium.com/@sidbentifraouine/responsive-animated-top-navigation-bar-with-react-transition-group-fd0ccbfb4bbb
*/

	return (
		<nav className="navbar flex justify-between items-center min-h-80  py-2 px-6 md:px-10 lg:px-16 xl:px-32 bg-[#e7e6e2] dark:bg-[#0d2c32]">
			<Link href="/" className="logo">
				<NavLogo />
			</Link>

			<button className="nav-toggle-btn" onClick={handleClick}>
				{open ? <BsXLg className="h-5 w-5 text-[#0d2c32] dark:text-[#e7e6e2]" /> : <BsList className="h-5 w-5 text-[#0d2c32] dark:text-[#e7e6e2]" />}{" "}
			</button>

			<div className={open ? "nav-links active bg-[#e7e6e2] dark:bg-[#0d2c32] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]" : "nav-links"}>
				<ul className="ml-auto flex items-center gap-10 text-xs font-medium tracking-wide font-sm dark:text-white">
					<li className="nav-item">
						<Link href="/projects" onClick={handleLinkClick} className={pathname === "/projects" ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
							Projects
						</Link>
					</li>

					<li className="nav-item">
						<Link href="/about" onClick={handleLinkClick} className={pathname === "/about" ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
							About
						</Link>
					</li>

					<li className="nav-item">
						<Link href="/contact" onClick={handleLinkClick} className={pathname === "/contact" ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
							Contact
						</Link>
					</li>
					<li><ThemeButton /></li>
				</ul>
			</div>
		</nav>
	);
}

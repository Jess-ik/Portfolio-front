"use client";

import React, { useState } from "react";
import { Locale } from '@/i18n.config'

import { BsXLg, BsList } from "react-icons/bs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLogo from "./NavLogo";
import ThemeButton from "./ThemeButton";
import LanguageButton from "./LanguageButton";

export default function Navbar({ lang }: { lang: Locale }) {
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
			<Link href={`/${lang}`} className="logo">
				<NavLogo/>
			</Link>

			<button className="nav-toggle-btn px-6 py-2" onClick={handleClick} aria-label="Mobile menu">
				{open ? <BsXLg className="h-5 w-5 text-[#0d2c32] dark:text-[#e7e6e2]" /> : <BsList className="h-5 w-5 text-[#0d2c32] dark:text-[#e7e6e2]" />}{" "}
			</button>

			<div className={open ? "nav-links block active bg-[#e7e6e2] dark:bg-[#0d2c32] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.1)]" : "nav-links !hidden md:!block"}>
				<ul className="ml-auto flex items-center gap-10 text-xs font-medium tracking-wide font-sm dark:text-white">
					<li className="nav-item">
						<Link href={`/${lang}/projects`} onClick={handleLinkClick} className={pathname === `/${lang}/projects` ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
						{lang === "en" ? "Projects" : "Projets"}
						</Link>
					</li>

					<li className="nav-item">
						<Link href={`/${lang}/about`} onClick={handleLinkClick} className={pathname === `/${lang}/about` ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
						{lang === "en" ? "About" : "À propos"}
						</Link>
					</li>

					<li className="nav-item">
						<Link href={`/${lang}/contact`} onClick={handleLinkClick} className={pathname === `/${lang}/contact` ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
							Contact
						</Link>
					</li>
					<li onClick={handleLinkClick}>
						<ThemeButton />
					</li>
					<li onClick={handleLinkClick}>
						<LanguageButton />
					</li>
				</ul>
			</div>
		</nav>
	);
}

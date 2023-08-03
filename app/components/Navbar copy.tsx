"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { BsList, BsXLg } from "react-icons/bs";
import ThemeButton from "./ThemeButton";
import NavLogo from "./NavLogo";
import { useState } from "react";

export default function Navbar() {
	const pathname = usePathname();
	let [open, setOpen] = useState(false);

	return (
		<nav className="px-6 md:px-10 lg:px-16 xl:px-32 bg-[#e7e6e2] dark:bg-[#0d2c32]">
			<div className="flex justify-between items-center min-h-80  py-2">
				<Link href="/" className="logo">
					<NavLogo />
				</Link>
				<div onClick={()=>setOpen(!open)} className='cursor-pointer md:hidden'>
					{open ? <BsXLg className="h-5 w-5 text-white]" /> : <BsList className="h-5 w-5 text-[#0f0316]" />}
				</div>
				<div className="">
					<ul className={`flex flex-col md:flex-row md:items-center md:ml-auto md:gap-10 text-xs font-medium tracking-wide  dark:text-white
					      md:pb-0 pb-12 absolute md:static bg-[#e7e6e2] dark:bg-[#0d2c32]  left-0 w-full md:pl-0 pl-9 transition-position duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
						<li className="nav-item  md:my-0 my-5">
							<Link href="/projects" className={pathname === "/projects" ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
								Projects
							</Link>
						</li>

						<li className="nav-item  md:my-0 my-5">
							<Link href="/about" className={pathname === "/about" ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
								About
							</Link>
						</li>

						<li className="nav-item  md:my-0 my-5">
							<Link href="/contact" className={pathname === "/contact" ? "font-semibold" : "text-[#0d2c32] dark:text-[#e7e6e2] dark:hover:text-[#c0ccbb]"}>
								Contact
							</Link>
						</li>
						<li>
							<ThemeButton />
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}




'use client'
 
import { usePathname } from 'next/navigation'
import Link from "next/link";

import { BsSun } from "react-icons/bs";
import ThemeButton from "./ThemeButton";
import NavLogo from "./NavLogo";

export default function Navbar() {
	const pathname = usePathname();

	
	return (
		<nav className="px-32 bg-[#e7e6e2] dark:bg-[#0d2c32]">
			<div className="flex justify-between items-center min-h-80  py-2">
				<Link href="/" className="logo">
					<NavLogo />
				</Link>
				<div className="flex">
					<ul className="navbar-nav ml-auto flex items-center gap-10 text-xs font-medium tracking-wide font-sm dark:text-white">
						<li className="nav-item">
							<Link href="/projects" className={pathname === '/projects' ? 'text-[#c0ccbb]': 'text-[#0d2c32] dark:text-[#e7e6e2]'}>
								Projects
							</Link>
						</li>

						<li className="nav-item">
							<Link href="/about" className={pathname === '/about' ? 'text-[#c0ccbb]': 'text-[#0d2c32] dark:text-[#e7e6e2]'}>
								About
							</Link>
						</li>

						<li className="nav-item">
							<Link href="/contact" className={pathname === '/contact' ? 'text-[#c0ccbb]': 'text-[#0d2c32] dark:text-[#e7e6e2]'}>
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


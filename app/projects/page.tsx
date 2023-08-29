"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { Yeseva_One } from "next/font/google";
import PageHead from "../components/PageHead";
import getProjects from "../lib/getProjects";
import Filter from "../components/Filter";
import Filtertest from "../components/FilterTest";
import { motion, AnimatePresence } from "framer-motion";

// export const yeseva = Yeseva_One({
// 	weight: ["400"],
// 	style: ["normal"],
// 	subsets: ["latin"],
// });

interface FilterProps {
	setActiveFilter: (activeFilter: string) => void;
	activeFilter: string;
	setFiltered: (filtered: string[]) => void;

  }

export default function Projects() {
	const [portfolio, setPortfolio] = useState([]);
	const [filtered, setFiltered] = useState<FilterProps[]>([]);
	const [activeFilter, setActiveFilter] = useState("");

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchProjects = async () => {
		const data = await fetch("http://127.0.0.1:1337/api/projects?populate=*&sort=order", { cache: "no-store" });
		const projects = await data.json();
		setPortfolio(projects.data);
		setFiltered(projects.data);
	};

	// const projectsData = await getProjects();

	return (
		<>
			<PageHead subtitle="My works" title="Portfolio" />
			<section className="portfolio-section md:pt-16">
				<div className="px-4 md:px-9 lg:px-15 xl:px-28">
					{/* Filter */}
					<Filtertest
  portfolio={portfolio}
  setFiltered={(filtered) => setFiltered(filtered)}
  activeFilter={activeFilter}
  setActiveFilter={setActiveFilter}
/>


					{/* Gallery Grid */}
					<motion.div layout className="projects pt-10 flex flex-col md:flex-row flex-wrap ">
						<AnimatePresence>
							{filtered?.toReversed().map((project) => (
								<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout id={project.id} key={project.id} className={`items mb-10 px-5  ${project.attributes.size}`}>
									<div className="cover">
										<Link href={`/projects/[slug]`} as={`/projects/${project.attributes.slug}`}>
											<img src={`http://127.0.0.1:1337${project.attributes.heroImage.data.attributes.url}`} alt={project.attributes.heroImage.data.attributes.alternativeText} />
										</Link>
									</div>
									<div className="pt-4 flex flex-col justify-between items-center">
										<h3 className="dark:text-[#E7E6E2]">{project.attributes.title}</h3>
										<span className=" dark:text-[#c0ccbb]">{project.attributes.category}</span>
									</div>
								</motion.div>
							))}
						</AnimatePresence>
					</motion.div>
				</div>
			</section>
		</>
	);
}

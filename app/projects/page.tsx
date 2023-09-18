"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import PageHead from "../components/PageHead";
import { motion, AnimatePresence } from "framer-motion";
import Filter from "../components/Filter";

interface Project {
	id: string;
	attributes: {
		slug: string;
		title: string;
		filter: string;
		category: string;
		size: string;
		coverImage: {
			data: {
				attributes: {
					url: string;
					alternativeText: string;
				};
			};
		};
		showcaseImage: {
			data: {
				attributes: {
					url: string;
					alternativeText: string;
				};
			};
		};
	};
}

export default function Projects() {
	const [portfolio, setPortfolio] = useState<Project[]>([]);
	const [filtered, setFiltered] = useState<Project[]>([]);
	const [activeFilter, setActiveFilter] = useState<string>("");

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchProjects = async () => {
		try {
			const data = await fetch(`${process.env.API_URL}/projects?populate=*&sort=order:desc`, { cache: "no-store" });
			const projects = await data.json();
			setPortfolio(projects.data);
			setFiltered(projects.data);
		} catch (error) {
			console.error("Error fetching projects:", error);
		}
	};

	const memoizedSetFiltered = useCallback((filteredProjects: Project[]) => {
		setFiltered(filteredProjects);
	}, []);

	return (
		<>
			<PageHead subtitle="My works" title="Portfolio" />
			<section className="max-w-screen-2xl m-auto portfolio-section md:pt-16">
				<div className="px-4 md:px-9 lg:px-15 xl:px-28">
					<Filter
						setActiveFilter={setActiveFilter}
						activeFilter={activeFilter}
						setFiltered={memoizedSetFiltered} 
						portfolio={portfolio}
					/>{" "}
					<motion.div layout className="projects pt-10 flex flex-col md:flex-row flex-wrap ">
						<AnimatePresence>
							{filtered?.map((project) => (
								<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout id={project.id} key={project.id} className={`items mb-10 px-5 ${project.attributes.size}`}>
									<div className="cover cursor-pointer">
										<Link href={`/projects/[slug]`} as={`/projects/${project.attributes.slug}`} aria-label={`Hero photo for ${project.attributes.title} project`}>
											<img width={480} height={480} src={`${process.env.IMAGES_URL}${project.attributes.coverImage.data.attributes.url}`} alt={project.attributes.coverImage.data.attributes.alternativeText} />
										</Link>
									</div>
									<div className="pt-4 flex flex-col justify-between items-center cursor-pointer">
										<h3 className="dark:text-[#E7E6E2]">{project.attributes.title}</h3>
										<span className="dark:text-[#c0ccbb]">{project.attributes.category}</span>
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

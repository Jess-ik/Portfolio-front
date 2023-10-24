"use client";
import React, { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";

import { motion, AnimatePresence } from "framer-motion";

import PageHead from "../components/PageHead";
import Filter from "../components/Filter";

// On défini les types des attribus d'un Projet
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

export default function Projects({ params: { lang } }: { params: { lang: Locale } }) {
	// On décalre les états pour stocker les projets, les projets filtrés et le filtre actif
	const [portfolio, setPortfolio] = useState<Project[]>([]);
	const [filtered, setFiltered] = useState<Project[]>([]);
	const [activeFilter, setActiveFilter] = useState<string>("");

	let apiUrl: string;

	if (lang === "en") {
	  apiUrl = `${process.env.API_URL}/projects?populate=*&sort=order:desc`;
	} else {
	  apiUrl = `${process.env.API_URL}/projects?locale=fr&populate=*&sort=order:desc`;
	}

	// On utilise useEffect pour charger les projets au moment du montage du composant
	useEffect(() => {
		fetchProjects();
	}, []);

	// On récupère les projets via l'API
	const fetchProjects = async () => {
		try {
			const data = await fetch(apiUrl, { cache: "no-store" });
			const projects = await data.json();
			// On stocke tous les projets dans Portfolio
			setPortfolio(projects.data);
			// On stocke les projets filtrés dans Filtered
			setFiltered(projects.data);
		} catch (error) {
			console.error("Error fetching projects:", error);
		}
	};

	// On utilise useCallback pour mémoriser la fonction de mise à jour des projets filtrés
	const memoizedSetFiltered = useCallback((filteredProjects: Project[]) => {
		setFiltered(filteredProjects);
	}, []);

	return (
		<>
			{lang === "en" ? <PageHead subtitle="My works" title="Portfolio" /> : <PageHead subtitle="Mon travail" title="Portfolio" />}

			<section className="max-w-screen-2xl m-auto portfolio-section md:pt-16">
				<div className="px-4 md:px-9 lg:px-15 xl:px-28">
					{/* On appelle le composant Filter avec ses props, qui permet la sélection de projets par catégorie */}
					<Filter lang={lang} setActiveFilter={setActiveFilter} activeFilter={activeFilter} setFiltered={memoizedSetFiltered} portfolio={portfolio} />

					<motion.div layout className="projects pt-10 flex flex-col md:flex-row flex-wrap ">
						<AnimatePresence>
							{/* On mappe les projets filtrés (voir composant Filter) et affiche chaque projet */}
							{filtered?.map((project) => (
								<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} exit={{ opacity: 0 }} layout id={project.id} key={project.id} className={`items mb-10 px-5 ${project.attributes.size}`}>
									<div className="cover cursor-pointer">
										<Link rel="preload" href={`/${lang}/projects/[slug]`} as={`/${lang}/projects/${project.attributes.slug.replace('-fr', '')}`} aria-label={`Hero photo for ${project.attributes.title} project`}>
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

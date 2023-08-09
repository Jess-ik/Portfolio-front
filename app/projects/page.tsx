"use client"

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import PageHead from "../components/PageHead";
import getProjects from "../lib/getProjects";
import Filter from "../components/Filter";
import Filtertest from "../components/FilterTest";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});



export default function Projects() {
	

	
	// const [data, setData] = useState(null);
	const [projects, setProjects] = useState([]);
	const [filtered, setFiltered] = useState([]);
	const [activeFilter, setActiveFilter] = useState('*');

	useEffect(() => {
	  const getProjects = async () => {
		try {
		  const response = await fetch('http://127.0.0.1:1337/api/projects?populate=*', { cache: "no-store" });
		  const projects = await response.json();
			// setData(projects.data);
			setProjects(projects.results)
			setFiltered(projects.results)
			console.log(projects)
		} catch (error) {
		  console.error('Erreur lors du chargement des données', error);
		}
	  };
  
	  getProjects();
	}, []);

	// const projectsData = await getProjects();
	

	
	return (
		<>
			<PageHead subtitle="My works" title="Portfolio" />
			<section className="portfolio-section pt-16">
				<div className="px-4 md:px-9 lg:px-15 xl:px-28">
					{/* Filter */}
					<Filtertest projects={projects} setFiltered={setFiltered} activeFilter={ activeFilter} setActiveFilter={setActiveFilter} />
					{/* Gallery Grid */}
					<div className="projects  pt-20 flex flex-col md:flex-row flex-wrap ">
						{filtered?.map((project) => (
							<div  id={project.id} key={project.id} className={`items mb-10 px-5  ${project.attributes.size}`}>
								<div className="cover">
									<Link href={`/projects/[slug]`} as={`/projects/${project.attributes.slug}`}>
										<img src={`http://127.0.0.1:1337${project.attributes.heroImage.data.attributes.url}`} alt={project.attributes.heroImage.data.attributes.alternativeText} />
									</Link>
								</div>
								<div className="flex justify-between items-center">
									<h3 className="dark:text-[#E7E6E2]">{project.attributes.title}</h3>
									<span className="dark:text-[#c0ccbb]">{project.attributes.filter}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}

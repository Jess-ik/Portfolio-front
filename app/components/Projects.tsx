"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import { Yeseva_One } from "next/font/google";
import PageHead from "../components/PageHead";
import getProjects from "../lib/getProjects";

interface Project {
	id: string;
	attributes: {
		size: string;
		title: string;
		filter: string;
		heroImage: {
			data: {
				attributes: {
					url: string;
					alternativeText: string;
				};
			};
		};
		slug: string;
		// Autres attributs
	};
}

// export const yeseva = Yeseva_One({
// 	weight: ["400"],
// 	style: ["normal"],
// 	subsets: ["latin"],
// });

export default function Projects() {
	const [data, setData] = useState<Project[] | null>(null);
  
	useEffect(() => {
	  const getProjects = async () => {
		try {
		  const response = await fetch(`${process.env.API_URL}/api/projects?populate=*&sort=order:desc`, { cache: "no-store" });
		  const data = await response.json();
		  setData(data.data);
		} catch (error) {
		  console.error("Erreur lors du chargement des données", error);
		}
	  };
  
	  getProjects();
	}, []);
  
	return (
	  <div className="projects px-4 md:px-9 lg:px-15 xl:px-28 pt-20 flex flex-col md:flex-row flex-wrap ">
		{data?.slice(0, 6).map((project) => (
		  <div id={project.id} key={project.id} className={`items mb-10 px-5 ${project.attributes.size}`}>
			<div className="cover">
			  <Link href={`/projects/[slug]`} as={`/projects/${project.attributes.slug}`}>
				{project.attributes.heroImage.data ? (
				  <img src={`${process.env.API_URL}${project.attributes.heroImage.data.attributes.url}`} alt={project.attributes.heroImage.data.attributes.alternativeText} />
				) : (
				  <img src="" alt="" /> // Placeholder or fallback image
				)}
			  </Link>
			</div>
			<div className="flex justify-between items-center">
			  <h3 className="dark:text-[#E7E6E2]">{project.attributes.title}</h3>
			  <span className="dark:text-[#c0ccbb]">{project.attributes.filter}</span>
			</div>
		  </div>
		))}
	  </div>
	);
  }
  
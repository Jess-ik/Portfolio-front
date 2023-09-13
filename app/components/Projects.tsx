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
		showcaseImage: {
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
				const response = await fetch(`${process.env.API_URL}/projects?populate=*&sort=order:desc`, { cache: "no-store" });
				const data = await response.json();
				setData(data.data);
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		getProjects();
	}, []);

	return (
		<div className="projects max-w-screen-2xl m-auto md:px-9 lg:px-15 xl:px-28 pt-12 md:pt-20 flex flex-col md:flex-row flex-wrap ">
			{data?.slice(0, 6).map((project) => (
				<div id={project.id} key={project.id} className={`items mb-10 px-5 ${project.attributes.size}`}>
					<div className="cover cursor-pointer">
						<Link href={`/projects/[slug]`} as={`/projects/${project.attributes.slug}`} aria-label={`Hero photo for ${project.attributes.title} project`}>
							
								<img src={`${process.env.IMAGES_URL}${project.attributes.showcaseImage.data.attributes.url}`} alt={project.attributes.showcaseImage.data.attributes.alternativeText} />
							
						</Link>
					</div>
					<div className="flex justify-between items-center cursor-pointer">
						<h3 className="dark:text-[#E7E6E2]">{project.attributes.title}</h3>
						<span className="dark:text-[#c0ccbb]">{project.attributes.filter}</span>
					</div>
				</div>
			))}
		</div>
	);
}

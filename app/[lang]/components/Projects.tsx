"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Locale } from "@/i18n.config";

interface Project {
	id: string;
	attributes: {
		size: string;
		title: string;
		filter: string;
		coverImage: {
			data: {
				attributes: {
					url: string;
					alternativeText: string;
				};
			};
		};
		slug: string;
	};
}

interface Params { 
	lang: string;
}

export default function Projects({ lang }: Params) {
	const [data, setData] = useState<Project[] | null>(null);
	let apiUrl: string;

	if (lang === "en") {
	  apiUrl = `${process.env.API_URL}/projects?populate=*&sort=order:desc`;
	} else {
	  apiUrl = `${process.env.API_URL}/projects?locale=fr&populate=*&sort=order:desc`;
	}
	useEffect(() => {
		const getProjects = async () => {
			try {
				const response = await fetch(apiUrl, { cache: "no-store" });
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
						<Link rel="preload" href={`/${lang}/projects/[slug]`} as={`/${lang}/projects/${project.attributes.slug.replace('-fr', '')}`} aria-label={`Hero photo for ${project.attributes.title} project`}>
							<img width={480} height={480} src={`${process.env.IMAGES_URL}${project.attributes.coverImage.data.attributes.url}`} alt={project.attributes.coverImage.data.attributes.alternativeText} />
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

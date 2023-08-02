import React from "react";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import PageHead from "../components/PageHead";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

async function getProjects() {
	const res = await fetch(`http://127.0.0.1:1337/api/projects?populate=*`, { cache: "no-store" });
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Projects() {
	const data = await getProjects();
	return (
		<div className="projects px-4 md:px-9 lg:px-15 xl:px-28 pt-20 flex flex-col md:flex-row flex-wrap ">
            {data.data.slice(0, 5).map((project) => (
                <div id={project.id} key={project.id} className={`items mb-10 px-5 ${project.attributes.size}` }>
					<div className="cover">
						<Link href="/project-details/project-details-dark">
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
	);
}

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
		<>
			<PageHead subtitle="My works" title="Portfolio" />
			<section className="portfolio-section pt-16">
				<div className="container">
					{/* Filter */}
					<div className="row pt-32 justify-end filtering dark:text-[#E7E6E2]">
						<span data-filter="*" className="active">
							All
						</span>
						<span data-filter=".brand">Web Development</span>
						<span data-filter=".web">Creative Design</span>
						<span data-filter=".graphic">Craft</span>
					</div>
					{/* Gallery Grid */}
					<div className="projects container pt-20 flex flex-row flex-wrap content-between gap-10">
            {data.data.map((project) => (
                <div id={project.id} key={project.id} className={`items  ${project.attributes.size}` }>
					<div className="cover">
						<Link href="/project-details/project-details-dark">
							<img src={`http://127.0.0.1:1337${project.attributes.heroImage.data.attributes.url}`} alt={project.attributes.heroImage.data.attributes.alternativeText} />
						</Link>
                        </div>
					<div className="flex justify-between items-center">
						<h3 className="dark:text-[#E7E6E2]">{project.attributes.title}</h3>
						<span>{project.attributes.filter}</span>
					</div>
				</div>
			))}
		</div>
				</div>
			</section>
		</>
	);
}

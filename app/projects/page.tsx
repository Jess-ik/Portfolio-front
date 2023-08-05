import React from "react";
import Link from "next/link";
import { Yeseva_One } from "next/font/google";
import PageHead from "../components/PageHead";
import getProjects from "../lib/getProjects";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});



export default async function Projects() {
	const projectsData = await getProjects();
	return (
		<>
			<PageHead subtitle="My works" title="Portfolio" />
			<section className="portfolio-section pt-16">
				<div className="px-4 md:px-9 lg:px-15 xl:px-28">
					{/* Filter */}
					<div className="row pt-32 justify-end filtering">
						<span data-filter="*" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">
							All
						</span>
						<span data-filter=".brand" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">Web Development</span>
						<span data-filter=".web" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">Creative Design</span>
						<span data-filter=".graphic" className="after:bg-[#17515c] dark:after:bg-[#c0ccbb] text-[#555555] dark:text-[#E7E6E2] active:text-[#17515c] dark:active:text-[#c0ccbb]">Craft</span>
					</div>
					{/* Gallery Grid */}
					<div className="projects  pt-20 flex flex-col md:flex-row flex-wrap ">
						{projectsData.data.map((project) => (
							<div id={project.id} key={project.id} className={`items mb-10 px-5  ${project.attributes.size}`}>
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

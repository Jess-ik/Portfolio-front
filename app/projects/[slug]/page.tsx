import getOneProject from "@/app/lib/getOneProject";
import { Yeseva_One } from "next/font/google";

type Params = {
	params: {
		slug: string;
	};
};

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export default async function ProjectDetails({ params: { slug } }: Params) {
	const projectData = await getOneProject(slug);
	console.log(projectData);

	return (
		<>
			<section className={`detail-hero w-full pt-32 `}>
				<div className="pt-20 px-6 md:px-10 lg:px-16 xl:px-32">
					<h5 className={`${yeseva.className} dark:text-[#c0ccbb]`}>{projectData.data.attributes.subtitle}</h5>
					<h1 className="dark:text-[#e7e6e2]">{projectData.data.attributes.title}</h1>
					<ul className="py-10 w-6/12 flex justify-between dark:text-[#e7e6e2]">
						<li>
							<span>Category</span>
							<p className="dark:text-[#999]">{projectData.data.attributes.category}</p>
						</li>
						<li className="flex flex-col">
							<span>Tech</span>
							<div className="tech flex gap-4 items-center">
								{projectData.data.attributes.tools.data.map((tech) => (
									<img src={`https://cdn.simpleicons.org/${tech.attributes.iconShort}/17515c/c0ccbb`} />
								))}
							</div>
						</li>
						<li>
							<span>Links</span>
							<div className=" flex gap-10 cursor-pointer mt-2.5 ">
								<a href={projectData.data.attributes.link1}>
									<p className="m-0 dark:text-[#999] dark:hover:text-[#0d2c32]">{projectData.data.attributes.link1Name}</p>
								</a>
								<a href={projectData.data.attributes.link2}>
									<p className="m-0 dark:text-[#999] dark:hover:text-[#0d2c32]">{projectData.data.attributes.link2Name}</p>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<img className="w-full" src={`http://127.0.0.1:1337${projectData.data.attributes.heroImage.data.attributes.url}`} />
			</section>
			<section className="detail-description pt-20 px-6 md:px-10 lg:px-16 xl:px-32">
				<div className="lg:flex lg:flex-row pb-10">
					<div className="lg:w-4/12">
						<div className="flex flex-col lg:flex-row lg:items-baseline">
							<div className="lg:w-10/12">
								<h4 className="dark:text-[#E7E6E2]">Description</h4>
							</div>
						</div>
					</div>
					<div className=" lg:w-8/12 mt-10 lg:mt-0 mb-30">
						<div className="text">
							<p className="dark:text-[#999]">{projectData.data.attributes.description}</p>
						</div>
					</div>
				</div>
			</section>
			<section className="detail-gallery pt-20 ">
				<div className="flex">
					{projectData.data.attributes.gallery.data.slice(0, 2).map((image) => (
						<img className="w-1/2" src={`http://127.0.0.1:1337${image.attributes.url}`} />
					))}
                </div>
                <div className="flex flex-wrap">
					{projectData.data.attributes.gallery.data.slice(2,10).map((image) => (
						<img className="w-1/3" src={`http://127.0.0.1:1337${image.attributes.url}`} />
					))}
				</div>
			</section>
		</>
	);
}

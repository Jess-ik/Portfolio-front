"use client";

import getOneProject from "@/app/lib/getOneProject";
import { useEffect, useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
import useSWR from "swr";

type Params = {
	params: {
		slug: string;
	};
};

export default function ProjectDetails({ params }: Params) {
	const { slug } = params; // Extract the slug
	const fetcher = async (url: string) => {
		const response = await fetch(url);
		return response.json();
	};

	const { data, error } = useSWR(`${process.env.API_URL}/projects/${slug}`, fetcher);

	if (error) {
		return <div>Erreur lors du chargement des données</div>;
	}

	if (!data) {
		return <div>Chargement...</div>;
	}

	// const projectData = await getOneProject(slug);
	// console.log(projectData)

	return (
		<>
			<section className={`detail-hero w-full pt-32 `}>
				<div className="max-w-screen-2xl m-auto pt-20 px-6 md:px-10 lg:px-16 xl:px-32">
					{/* <h5 className={`${yeseva.className} dark:text-[#c0ccbb]`}>{data?.data.attributes.subtitle}</h5> */}
					
					<Link className="flex flex-nowrap align-center" href="/projects" aria-label="Go back to all projects">
					<BsArrowLeftShort /> Back to all projects
					</Link>
					
					<h5 className={`yeseva dark:text-[#c0ccbb]`}>{data?.data.attributes.subtitle}</h5>
					<h1 className="dark:text-[#e7e6e2]">{data?.data.attributes.title}</h1>
					<ul className="py-10   flex flex-col md:flex-row flex-wrap justify-between dark:text-[#e7e6e2]">
						<li>
							<span>Category</span>
							<p className="dark:text-[#999]">{data?.data.attributes.category}</p>
						</li>
						<li className="flex flex-col  pt-6 md:pt-0">
							<span>Tech</span>
							<div className="tech flex gap-4 pt-2 items-center">
								{data?.data.attributes.tools.data.map((tech: { id: string; attributes: { iconShort: string; iconName: string } }) => (
									<img key={tech.id} src={`https://cdn.simpleicons.org/${tech.attributes.iconShort}/17515c/c0ccbb`} alt={`${tech.attributes.iconName} icon`} />
								))}
							</div>
						</li>
						<li className="py-12 md:py-0 ">
							<span>Links</span>
							<div className="links flex gap-10 cursor-pointer mt-2.5 ">
								<a href={data?.data.attributes.link1}>
									<p className="m-0 dark:text-[#999] dark:hover:text-[#0d2c32]">{data?.data.attributes.link1Name}</p>
								</a>
								<a href={data?.data.attributes.link2}>
									<p className="m-0 dark:text-[#999] dark:hover:text-[#0d2c32]">{data?.data.attributes.link2Name}</p>
								</a>
							</div>
						</li>
					</ul>
				</div>
				<img className="w-full max-w-screen-2xl m-auto" src={`${process.env.IMAGES_URL}${data?.data.attributes.heroImage.data.attributes.url}`} alt={data?.data.attributes.heroImage.data.attributes.alternativeText} />
			</section>
			<section className="max-w-screen-2xl m-auto detail-description pt-20 px-6 md:px-10 lg:px-16 xl:px-32">
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
							<ReactMarkdown className="dark:text-[#999]">{data?.data.attributes.description}</ReactMarkdown>
						</div>
					</div>
				</div>
			</section>
			<section className="max-w-screen-2xl m-auto detail-gallery pt-20 ">
				<div className="flex flex-wrap md:flex-nowrap gap-2">
					{data?.data.attributes.gallery.data.slice(0, 2).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/2" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-2 mt-2">
					{data?.data.attributes.gallery.data.slice(2, 5).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/3" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-2 mt-2">
					{data?.data.attributes.gallery.data.slice(5, 8).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/3" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-2 mt-2">
					{data?.data.attributes.gallery.data.slice(8, 10).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/2" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
				<div className="flex flex-wrap md:flex-nowrapgap-2 mt-2">
					{data?.data.attributes.gallery.data.slice(10, 13).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/3" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-2 mt-2">
					{data?.data.attributes.gallery.data.slice(13, 16).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/3" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
				<div className="flex flex-wrap md:flex-nowrap gap-2 mt-2">
					{data?.data.attributes.gallery.data.slice(16, 19).map((image: { id: string; attributes: { url: string; alternativeText: string } }) => (
						<img key={image.id} className="w-full md:w-1/3" src={`${process.env.IMAGES_URL}${image.attributes.url}`} alt={image.attributes.alternativeText} />
					))}
				</div>
			</section>
		</>
	);
}

// const [data, setData] = useState(null);

// 	useEffect(() => {
// 	  const getOneProject = async () => {
// 		try {
// 		  const response = await fetch('http://127.0.0.1:1337/api/projects/${slug}', { cache: "no-store" });
// 		  const data = await response.json();
// 			setData(data.data);
// 			console.log(data)
// 		} catch (error) {
// 		  console.error('Erreur lors du chargement des données', error);
// 		}
// 	  };

// 	  getOneProject();
// 	}, [slug]);

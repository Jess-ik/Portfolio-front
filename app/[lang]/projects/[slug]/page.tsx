"use client";

import { BsArrowLeft } from "react-icons/bs";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Link from "next/link";
import useSWR from "swr";
import React, { useEffect, useState } from "react";

interface ProjectData {
	data: {
		attributes: {
			subtitle: string;
			title: string;
			heroImage: {
				data: {
					attributes: {
						url: string;
						alternativeText: string;
					};
				};
			};
			category: string;
			tools: {
				data: {
					id: string;
					attributes: {
						iconShort: string;
						iconName: string;
					};
				}[];
			};
			link1?: string;
			link2?: string;
			link1Name?: string;
			link2Name?: string;
			description: string;
			gallery: {
				data: {
					id: string;
					attributes: {
						url: string;
						alternativeText: string;
					};
				}[];
			};
		};
	};
}

type Params = {
	params: {
		lang: string;
		slug: string;
	};
};

export default function ProjectDetails({ params }: Params) {
	const { lang, slug } = params; // Extract the slug
	const [data, setData] = useState<ProjectData | null>(null); // Initial state with correct type

	useEffect(() => {
		const fetcher = async (url: string) => {
			const response = await fetch(url);
			return response.json();
		};

		const apiUrl = lang === "en" ? `${process.env.API_URL}/projects/${slug}` : `${process.env.API_URL}/projects/${slug}-fr`;

		const fetchData = async () => {
			try {
				const result = await fetcher(apiUrl);
				setData(result); // Met à jour l'état avec les données récupérées
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		fetchData(); // Appel de la fonction pour récupérer les données au montage du composant
	}, [slug]); // Le tableau vide signifie que cela ne s'exécute qu'au montage

	return (
		<>
			{/* Details */}
			<section className={`detail-hero w-full px:2 pt-24 md:pt-32 `}>
				<div className="max-w-screen-2xl m-auto pt-20 px-6 md:px-10 lg:px-16 xl:px-32">
					<Link className="flex flex-nowrap items-center gap-2 dark:text-[#b0b0b0]" href={`/${lang}/projects`} aria-label="Go back to all projects">
						<BsArrowLeft /> {lang === "en" ? "Back to all projects" : "Retour aux projets"}
					</Link>

					<h5 className={`yeseva dark:text-[#c0ccbb] pt-6`}>{data?.data.attributes.subtitle}</h5>
					<h1 className="dark:text-[#e7e6e2]">{data?.data.attributes.title}</h1>

					<img width={1920} height={1080} className="w-full max-w-screen-2xl m-auto md:!hidden pt-4" src={`${process.env.IMAGES_URL}${data?.data.attributes.heroImage.data.attributes.url}`} alt={data?.data.attributes.heroImage.data.attributes.alternativeText} />

					<ul className="py-10 flex flex-col md:flex-row flex-wrap justify-between dark:text-[#e7e6e2]">
						<li>
							<span>{lang === "en" ? "Category" : "Catégorie"}</span>
							<p className="dark:text-[#b0b0b0]">{data?.data.attributes.category}</p>
						</li>
						<li className="flex flex-col  pt-6 md:pt-0">
							<span>Tech</span>
							<div className="tech flex gap-4 pt-2 items-center">
								{data?.data.attributes.tools.data.map((tech: { id: string; attributes: { iconShort: string; iconName: string } }) => (
									<img width={40} height={40} key={tech.id} src={`https://cdn.simpleicons.org/${tech.attributes.iconShort}/17515c/c0ccbb`} alt={`${tech.attributes.iconName} icon`} title={`${tech.attributes.iconName}`} />
								))}
							</div>
						</li>
						{data?.data.attributes.link1 || data?.data.attributes.link2 ? (
							<li className="py-12 md:py-0 ">
								<span>{lang === "en" ? "Links" : "Liens"}</span>
								<div className="links flex gap-10 cursor-pointer mt-2.5 ">
									{data?.data.attributes.link1 && (
										<a href={data?.data.attributes.link1} target="_blank" rel="noopener noreferrer">
											<p className="m-0 dark:text-[#b0b0b0] dark:hover:text-[#0d2c32]">{data?.data.attributes.link1Name}</p>
										</a>
									)}
									{data?.data.attributes.link2 && (
										<a href={data?.data.attributes.link2} target="_blank" rel="noopener noreferrer">
											<p className="m-0 dark:text-[#b0b0b0] dark:hover:text-[#0d2c32]">{data?.data.attributes.link2Name}</p>
										</a>
									)}
								</div>
							</li>
						) : null}
					</ul>
				</div>
				<img width={1920} height={1080} className="!hidden md:!block w-full max-w-screen-2xl m-auto" src={`${process.env.IMAGES_URL}${data?.data.attributes.heroImage.data.attributes.url}`} alt={data?.data.attributes.heroImage.data.attributes.alternativeText} />
			</section>
			{/* Description */}
			<section className="max-w-screen-2xl m-auto detail-description pt-20 px-6 md:px-10 lg:px-16 xl:px-32">
				<div className="lg:flex lg:flex-row pb-10">
					<div className="lg:w-4/12">
						<div className="flex flex-col lg:flex-row lg:items-baseline">
							<div className="lg:w-10/12">
								<h4 className="dark:text-[#E7E6E2]">{lang === "en" ? "Description" : "Déscription"}</h4>
							</div>
						</div>
					</div>
					<div className=" lg:w-8/12 mt-10 lg:mt-0 mb-30">
						<div className="text">
							{data && ( // Vérifiez si data est défini
								<ReactMarkdown className="dark:text-[#b0b0b0]">{data.data.attributes.description}</ReactMarkdown>
							)}
						</div>
					</div>
				</div>
			</section>
			{/* Gallery */}
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
				<div className="flex flex-wrap md:flex-nowrap gap-2 mt-2">
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

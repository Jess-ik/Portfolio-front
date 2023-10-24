"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import classNames from "classnames";
import { Locale } from "@/i18n.config";

import { FaLocationDot } from "react-icons/fa6";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

interface Experience {
	lang: string;
	id: string;
	attributes: {
		date: string;
		jobTitle: string;
		company: string;
		location: string;
		description: string;
	};
}

interface Params { 
	lang: string;
}

export default function Experiences({ lang }: Params) {
	let apiUrl: string;

	if (lang === "en") {
	  apiUrl = `${process.env.API_URL}/experiences?sort=order:desc`;
	} else {
	  apiUrl = `${process.env.API_URL}/experiences?locale=fr&sort=order:desc`;
	}
	const [data, setData] = useState<Experience[] | null>(null);
	const [openDetails, setOpenDetails] = useState<string | null>(null);

	const toggleJobDetails = (itemId: string) => {
		setOpenDetails((prevOpenDetails) => (prevOpenDetails === itemId ? null : itemId));
	};

	useEffect(() => {
		const getExperiences = async () => {
			try {
				const response = await fetch(apiUrl, { cache: "no-store" });
				const data = await response.json();
				setData(data.data);
				// console.log(data);
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		getExperiences();
	}, []);

	return (
		<section className="max-w-screen-2xl m-auto experiences-section  pt-32 px-6 md:px-10 lg:px-16 xl:px-32">
			{data?.map((item) => (
				<div key={item.id} className=" lg:flex lg:flex-row pb-10 lg:pb-32 md:px-16">
					{/* Job info */}
					<div className="flex flex-col lg:w-1/3">
						<p className={`text-[#17515c] dark:text-[#c0ccbb]  yeseva`}>{item.attributes.date}</p>
						<h4 className="dark:text-[#E7E6E2] pr-4">{item.attributes.jobTitle}</h4>
						<h6 className="dark:text-[#E7E6E2]">{item.attributes.company}</h6>
						<div className="flex flex-row flex-nowrap ">
							<span className="text-[#17515c] dark:text-[#c0ccbb] mt-1 mr-1">
								<FaLocationDot className="h-5 w-5" />
							</span>
							<h6 className="text-[#17515c] dark:text-[#c0ccbb] mt-1">{item.attributes.location}</h6>
						</div>
					</div>
					{/* Job details */}
					<div className="pt-6 lg:pt-0 lg:w-2/3 lg:pl-12 mb-30">
						<button className="lg:!hidden !flex items-center button dark:dark-button cursor-pointer mb-2" onClick={() => toggleJobDetails(item.id)}>
						{lang === "en" ? "Job details" :"Détails du poste"} {openDetails === item.id ? <BsChevronUp className="ml-2" /> : <BsChevronDown className="ml-2" />}
						</button>
						<div className={classNames("collapsible-content text text-[#555] dark:text-[#b0b0b0]", { open: openDetails === item.id })}>
							<ReactMarkdown>{item.attributes.description}</ReactMarkdown>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

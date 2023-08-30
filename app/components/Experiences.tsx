"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// import { Yeseva_One } from "next/font/google";
import getExperiences from "../lib/getExperiences";
import { FaLocationDot } from "react-icons/fa6";

// export const yeseva = Yeseva_One({
// 	weight: ["400"],
// 	style: ["normal"],
// 	subsets: ["latin"],
// });

interface Experience {
	id: string;
	attributes: {
		date: string;
		jobTitle: string;
		company: string;
		location: string;
		description: string;
	};
}

export default function Experiences() {
	const [data, setData] = useState<Experience[] | null>(null);

	useEffect(() => {
		const getExperiences = async () => {
			try {
				const response = await fetch(`${process.env.API_URL}/experiences?sort=order:desc`, { cache: "no-store" });
				const data = await response.json();
				setData(data.data);
				// console.log(data);
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		getExperiences();
	}, []);

	// const data = await getExperiences();
	return (
		<section className="experiences-section px-6 md:px-10 lg:px-16 xl:px-32">
			{data?.map((item) => (
				<div key={item.id} className="pt-32 lg:flex lg:flex-row pb-10 px-16">
					<div className="flex flex-col lg:w-1/3">
						<div className="flex flex-row ">
							{/* <p className={`text-[#17515c] dark:text-[#c0ccbb]  ${yeseva.className}`}>{item.attributes.date}</p> */}

							<p className={`text-[#17515c] dark:text-[#c0ccbb]  yeseva`}>{item.attributes.date}</p>
						</div>

						<div className="">
							<h4 className="dark:text-[#E7E6E2] pr-4">{item.attributes.jobTitle}</h4>
							<h6 className="dark:text-[#E7E6E2]">{item.attributes.company}</h6>
							<div className="flex flex-row flex-nowrap ">
								<h6 className="text-[#17515c] dark:text-[#c0ccbb] mt-1 mr-1">
									<FaLocationDot className="h-5 w-5" />
								</h6>
								<h6 className="text-[#17515c] dark:text-[#c0ccbb] mt-1">{item.attributes.location}</h6>
							</div>
						</div>
					</div>

					<div className="lg:w-2/3 pl-12   mb-30">
						<div className="text text-[#555]  dark:text-[#999]">
							<ReactMarkdown className="">{item.attributes.description}</ReactMarkdown>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

"use client";

import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

// import { Yeseva_One } from "next/font/google";
import getExperiences from "../lib/getExperiences";
import { FaLocationDot } from "react-icons/fa6";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";

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
	const [openDetails, setOpenDetails] = useState<string | null>(null);

  const toggleJobDetails = (itemId: string) => {
    setOpenDetails((prevOpenDetails) => (prevOpenDetails === itemId ? null : itemId));
  };

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
		<section className="experiences-section  pt-32 px-6 md:px-10 lg:px-16 xl:px-32">
			{data?.map((item) => (
				<div key={item.id} className=" lg:flex lg:flex-row pb-10 md:px-16">
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

					<div className="pt-6 md:pt-0 lg:w-2/3 md:pl-12 mb-30">
            <button
              className="md:hidden flex items-center text-[#0d2c32] dark:text-[#e7e6e2] mb-2"
              onClick={() => toggleJobDetails(item.id)}
            >
              Job details{" "}
              {openDetails === item.id ? (
                <BsChevronUp className="ml-2" />
              ) : (
                <BsChevronDown className="ml-2" />
              )}
            </button>
            <div className={`collapsible-content text text-[#555]  dark:text-[#999] ${openDetails === item.id ? "open" : ""}`}>
              <ReactMarkdown>{item.attributes.description}</ReactMarkdown>
            </div>
          </div>


				</div>
			))}
		</section>
	);
}

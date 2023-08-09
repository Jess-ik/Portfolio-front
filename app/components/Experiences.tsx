"use client"

import React, { useEffect, useState } from "react";

import { Yeseva_One } from "next/font/google";
import getExperiences from "../lib/getExperiences";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});



export default  function Experiences() {

	const [data, setData] = useState(null);

	useEffect(() => {
	  const getExperiences = async () => {
		try {
		  const response = await fetch('http://127.0.0.1:1337/api/services', { cache: "no-store" });
		  const data = await response.json();
			setData(data.data);
			console.log(data)
		} catch (error) {
		  console.error('Erreur lors du chargement des données', error);
		}
	  };
  
	  getExperiences();
	}, []);

	// const data = await getExperiences();
	return (
		<section className="experiences-section px-6 md:px-10 lg:px-16 xl:px-32">
			{data?.map((item) => (
				<div className="pt-32 lg:flex lg:flex-row pb-10">
					<div className="lg:w-4/12">
						<div className="flex flex-col lg:flex-row lg:items-baseline">
							<div className="lg:w-2/12">
								<p className={`text-[#17515c] dark:text-[#c0ccbb] ${yeseva.className}`}>{item.attributes.date}</p>
							</div>

							<div className="lg:w-10/12">
								<h4 className="dark:text-[#E7E6E2]">{item.attributes.jobTitle}</h4>
								<h6 className="dark:text-[#E7E6E2]">{item.attributes.company}</h6>
							</div>
						</div>
					</div>
					<div className=" lg:w-8/12 mt-10 lg:mt-0 mb-30">
						<div className="text">
							<p className="dark:text-[#999]">{item.attributes.description}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

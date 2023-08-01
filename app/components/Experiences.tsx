import React from "react";

import { Yeseva_One } from "next/font/google";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

async function getExperiences() {
	const res = await fetch(`http://127.0.0.1:1337/api/experiences`, { cache: "no-store" });
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Experiences() {
	const data = await getExperiences();
	return (
		<section className="experiences-section p-32">
			
			{data.data.map((item) => (
				<div className="row pb-10">
					<div className="w-4/12">
						<div className="job-title">
							<div className="w-2/12">
								<p className={`text-[#c0ccbb] ${yeseva.className}`}>{item.attributes.date}</p>
							</div>

							<div className="w-10/12">
								<h4 className="dark:text-[#E7E6E2]">{item.attributes.jobTitle}</h4>
								<h6 className="dark:text-[#E7E6E2]">{item.attributes.company}</h6>
							</div>
						</div>
					</div>
					<div className="w-8/12  mb-30">
						<div className="text">
							<p className="extra-text">{item.attributes.description}</p>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

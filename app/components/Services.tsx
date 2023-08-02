import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Yeseva_One } from "next/font/google";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

async function getServices() {
	const res = await fetch(`http://127.0.0.1:1337/api/services`, { cache: "no-store" });
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Services() {
	const data = await getServices();
	return (
		<div className="px-6 md:px-10 lg:px-16 xl:px-32 pt-32 flex flex-col lg:flex-row gap-8">
			{data.data.map((feature, index) => (
				<div className="service lg:w-4/12 p-10 flex flex-col" key={feature.id}>
					<FontAwesomeIcon className="my-icon pb-5" icon={require("@fortawesome/free-solid-svg-icons")[feature.attributes.icon]} />

					<div className=" text-center">
						<h3 className="">{feature.attributes.title}</h3>
						<p>{feature.attributes.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

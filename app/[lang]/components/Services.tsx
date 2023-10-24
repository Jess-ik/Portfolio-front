"use client";
import React, { useEffect, useState } from "react";
import { Locale } from "@/i18n.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Service {
	
	id: string;
	attributes: {
		title: string;
		description: string;
		icon: string;
	};
}

interface Params { 
	lang: string;
}



export default function Services({ lang }: Params) {
	const [data, setData] = useState<Service[]>([]);
	
	let apiUrl: string;

	if (lang === "en") {
	  apiUrl = `${process.env.API_URL}/services`;
	} else {
	  apiUrl = `${process.env.API_URL}/services?locale=fr&sort=id:desc`;
	}
	useEffect(() => {
		const getServices = async () => {
			try {
				const response = await fetch(apiUrl, { cache: "no-store" });
				const data = await response.json();
				setData(data.data);
				// console.log(data);
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		getServices();
	}, []);

	return (
		<div className="px-6 md:px-10 lg:px-16 xl:px-32 max-w-screen-2xl m-auto pt-32 flex flex-col  lg:flex-row gap-8">
			{data?.map((feature, index) => (
				<div className="service lg:w-4/12 p-10 flex flex-col" key={feature.id}>
					<FontAwesomeIcon className="my-icon pb-5" icon={require("@fortawesome/free-solid-svg-icons")[feature.attributes.icon]} />

					<div className="text-center">
						<h3 className="">{feature.attributes.title}</h3>
						<p>{feature.attributes.description}</p>
					</div>
				</div>
			))}
		</div>
	);
}

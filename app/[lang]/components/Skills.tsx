"use client";

import React, { useEffect, useState } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Skill {
	id: number;
	attributes: {
		skillName: string;
	};
}

interface Params { 
	lang: string;
}

export default function Skills({ lang }: Params) {
	const [data, setData] = useState<Skill[]>([]);

	let apiUrl: string;

	if (lang === "en") {
	  apiUrl = `${process.env.API_URL}/skills`;
	} else {
	  apiUrl = `${process.env.API_URL}/skills?locale=fr`;
	}

	useEffect(() => {
		const getSkills = async () => {
			try {
				const response = await fetch(apiUrl, { cache: "no-store" });
				const responseData = await response.json();
				setData(responseData.data);
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		getSkills();
	}, []);

	//Slider settings
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 1000,
		cssEase: "linear",
		row: 1,
		variableWidth: true,
	};
	return (
		<div className="hidden md:block skills-container mt-32 p-10">
			<Slider {...settings} className="max-w-screen-2xl m-auto">
				{data.map((skill) => (
					<div key={skill.id} className="item text-center">
						<h4 className="uppercase font-light tracking-widest text-lg text-[#17515c]">{skill.attributes.skillName}</h4>
					</div>
				))}
			</Slider>
		</div>
	);
}

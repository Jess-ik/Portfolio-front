"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Sélectionnez les balises <link> correspondantes
const cssLinks = document.querySelectorAll('link[href^="slick-carousel/slick/"]');

// Ajoutez l'attribut `as` à chaque balise <link>
cssLinks.forEach((linkTag) => {
  linkTag.setAttribute('as', 'style');
});
interface Tool {
	id: string;
	attributes: {
		iconShort: string;
		iconName: string;
	};
}

async function getToolsData() {
	try {
		const response = await fetch(`${process.env.API_URL}/tools`, { cache: "no-store" });
		if (!response.ok) {
			throw new Error("Failed to fetch data");
		}
		const responseData = await response.json();
		return responseData.data;
	} catch (error) {
		console.error("Error loading data", error);
		return [];
	}
}
export default function Tools() {
	const [toolsData, setToolsData] = useState<Tool[]>([]); // Explicitly define the type here

	useEffect(() => {
		async function fetchData() {
			const fetchedData = await getToolsData();
			setToolsData(fetchedData);
		}
		fetchData();
	}, []);

	//Slider settings
	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		cssEase: "cubic-bezier(0.61, 1, 0.88, 1)",
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 4,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					initialSlide: 3,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
		],
	};
	return (
		<div className="tools-container mt-32 px-4 p-10">
			<Slider {...settings} className="max-w-screen-2xl m-auto">
				{toolsData.map((tool) => (
					<div key={tool.id} className="item text-center px-4">
						<img width={40} height={40} src={`https://cdn.simpleicons.org/${tool.attributes.iconShort}/17515c`} alt={`Icon of ${tool.attributes.iconName}`} />
						<p className="tech">{tool.attributes.iconName}</p>
					</div>
				))}
			</Slider>
		</div>
	);
}

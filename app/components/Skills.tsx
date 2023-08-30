"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getSkills from "../lib/getSkills";
import { get } from "http";

interface Skill {
	id: number;
	attributes: {
		skillName: string;
		// Add other attribute types if needed
	};
}

export default function Skills() {
	const [data, setData] = useState<Skill[]>([]);

	useEffect(() => {
		const getSkills = async () => {
			try {
				const response = await fetch(`${process.env.API_URL}/skills`, { cache: "no-store" });
				const responseData = await response.json();
				setData(responseData.data);
			} catch (error) {
				console.error("Erreur lors du chargement des données", error);
			}
		};

		getSkills();
	}, []);

	// const data = await getSkills();

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

/* <div className="w-8/12">
				<div className="mt-5  grid grid-cols-8 justify-between">
					{data.data.map((item) => (
						<div key={item.id} className="mb-9 ">
							<div className="item flex justify-center items-center dark:border-white">
								<div className="img ">
									<img src={`https://cdn.simpleicons.org/${item.attributes.iconShort}/235347/white`} />
									<p className="tech">{item.attributes.iconName}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div> */

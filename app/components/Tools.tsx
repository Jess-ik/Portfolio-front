"use client";

import React from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

async function getTools() {
	const res = await fetch(`http://127.0.0.1:1337/api/tools`, { cache: "no-store" });
	// The return value is *not* serialized
	// You can return Date, Map, Set, etc.

	// Recommendation: handle errors
	if (!res.ok) {
		// This will activate the closest `error.js` Error Boundary
		throw new Error("Failed to fetch data");
	}

	return res.json();
}

export default async function Tools() {
	const data = await getTools();

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 1000,
		cssEase: "linear",
	};
	return (
		<div className="tools-container mt-32 p-10">
			<Slider {...settings}>
				{data.data.map((tool) => (
					<div className="item text-center">
						<img src={`https://cdn.simpleicons.org/${tool.attributes.iconShort}/235347/white`} />
						<p className="tech">{tool.attributes.iconName}</p>
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

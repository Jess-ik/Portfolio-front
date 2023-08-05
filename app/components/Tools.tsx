"use client";

import React from "react";
import axios from "axios";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import getTools from "../lib/getTools";



export default async function Tools() {
	const data = await getTools();
	

	const settings = {
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 5,
		autoplay: true,
		speed: 2000,
		autoplaySpeed: 4000,
		cssEase:  'cubic-bezier(0.61, 1, 0.88, 1)',
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
				slidesToShow: 4,
				slidesToScroll: 4,
			  }
			},
			{
				breakpoint: 768,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 3,
				  initialSlide: 3
				}
			  },
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 2,
				slidesToScroll: 2,
				initialSlide: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}
		  ]
	};
	return (
		<div className="tools-container mt-32 px-4 p-10">
			<Slider {...settings}>
				{data.data.map((tool) => (
					<div className="item text-center px-4">
						<img src={`https://cdn.simpleicons.org/${tool.attributes.iconShort}/17515c`} />
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

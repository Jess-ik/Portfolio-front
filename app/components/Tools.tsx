"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

async function getTools() {
  const response = await fetch("http://127.0.0.1:1337/api/tools", { cache: "no-store" });
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await response.json();
  return data.data;
}

export default function Tools() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const toolsData = await getTools();
        setData(toolsData);
      } catch (error) {
        console.error("Error loading data", error);
      }
    }
    fetchData();
  }, []);

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
			{data.map((tool) => (
			  <div key={tool.id} className="item text-center px-4">
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

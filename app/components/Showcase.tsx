"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
// import ShowcassesFullScreenData from "../data/showcase.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Navigation, Parallax } from "swiper/modules";

//font awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import LandingLogo from "./LandingLogo";
import { NavigationOptions } from "swiper/types";

// Define a type for your project data
interface Project {
	id: string;
	attributes: {
		showcase: boolean;
		showcaseImage: {
			data: {
				attributes: {
					url: string;
					alt: string;
				};
			};
		};
		title: string;
		slug: string;
		// ... other attributes
	};
	// ... other fields
}

export default function App() {
	const [ShowcaseProjects, setShowcaseProjects] = useState<Project[]>([]);

	useEffect(() => {
		async function fetchData() {
			// You can await here
			const response = await fetch(`${process.env.API_URL}/projects?populate=*`, { cache: "no-store" });
			// ...
			const data = await response.json();
			// console.log(data);
			setShowcaseProjects(data.data);
		}
		fetchData();
	}, []); // Or [] if effect doesn't need props or state

	const [load, setLoad] = React.useState(true);
	React.useEffect(() => {
		setTimeout(() => {
			setLoad(false);
		});
	}, []);
	const navigationPrevRef = React.useRef(null);
	const navigationNextRef = React.useRef(null);
	return (
		<section className="showcase-section h-screen">
			<div className="h-full test flex justify-center items-center">
				{!load ? (
					<Swiper
						modules={[Autoplay, Navigation, Parallax]}
						loop={true}
						speed={1000}
						mousewheel={true}
						parallax={true}
						centeredSlides={true}
						slidesPerView={1}
						autoplay={true}
						spaceBetween={500}
						navigation={{
							prevEl: navigationPrevRef.current,
							nextEl: navigationNextRef.current,
						}}
						onBeforeInit={(swiper) => {
							const navigation = swiper.params.navigation as NavigationOptions;
							navigation.prevEl = navigationPrevRef.current;
							navigation.nextEl = navigationNextRef.current;
						}}
						breakpoints={{
							0: {
								spaceBetween: 0,
							},
							640: {
								spaceBetween: 0,
							},
							768: {
								spaceBetween: 30,
							},
							1024: {
								spaceBetween: 500,
							},
						}}
						className="swiper-wrapper flex justify-center items-center"
					>
						{/* LANDING SLIDE */}
						<SwiperSlide className="h-full slide" data-swiper-autoplay="3000">
							<div className="blob">
								<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
									<defs>
										<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
											<stop offset="10%" stopColor="#32DFC0">
												<animate attributeName="stop-color" values="#32DFC0; #C585F8; #32DFC0" dur="4s" repeatCount="indefinite"></animate>
											</stop>

											<stop offset="90%" stopColor="#C585F8">
												<animate attributeName="stop-color" values="#C585F8; #32DFC0; #C585F8" dur="5s" repeatCount="indefinite"></animate>
											</stop>
										</linearGradient>
									</defs>
									<path
										d="M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5Z;
"
										id="blob"
										fill="url(#gradient)"
									>
										<animate
											attributeName="d"
											dur="15s"
											repeatCount="indefinite"
											values="
    M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5;
    M455.5,311.5Q420,373,367.5,411.5Q315,450,257.5,427Q200,404,142.5,387Q85,370,82,310Q79,250,91.5,197Q104,144,142,90Q180,36,247,44Q314,52,357,96.5Q400,141,445.5,195.5Q491,250,455.5,311.5;
    M406.5,307Q406,364,357.5,398Q309,432,252,426Q195,420,133,400Q71,380,42.5,315Q14,250,32,177.5Q50,105,116.5,74.5Q183,44,250.5,42Q318,40,383,73Q448,106,427.5,178Q407,250,406.5,307;
    M428,307.5Q408,365,352.5,380Q297,395,239.5,426.5Q182,458,148,403.5Q114,349,70,299.5Q26,250,53.5,188.5Q81,127,139,106.5Q197,86,256.5,66.5Q316,47,355.5,96Q395,145,421.5,197.5Q448,250,428,307.5;
    M417.5,309.5Q413,369,368.5,422.5Q324,476,249,480Q174,484,149,413Q124,342,86,296Q48,250,83.5,202.5Q119,155,159.5,126Q200,97,260.5,63.5Q321,30,372.5,76.5Q424,123,423,186.5Q422,250,417.5,309.5;
    M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5;
  "
										/>
									</path>
								</svg>
							</div>
							<LandingLogo />
						</SwiperSlide>

						{/* SHOWCASE PROJECTS SLIDES FROM STRAPI */}
						{ShowcaseProjects.filter((project) => project.attributes.showcase === true).map((project) => (
							<SwiperSlide key={project.id} className="h-full slide" data-swiper-autoplay="3000">
								<Link href={`/projects/[slug]`} as={`/projects/${project.attributes.slug}`}>
									<div className="slide">
										<div className="blob">
											<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" width="100%" id={`blobSvg${project.id}`}>
												<defs>
													<pattern id={project.id} patternUnits="userSpaceOnUse" width="500" height="500">
														<image className="backdrop-opacity-10 bg-white/30 dark:brightness-75 dark:bg-none" href={`${process.env.IMAGES_URL}${project.attributes.showcaseImage.data.attributes.url}`} x="0" y="0" />
													</pattern>
												</defs>
												<path
													d="M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5Z;
"
													id={project.id}
													fill={`url(#${project.id})`}
												>
													<animate
														attributeName="d"
														dur="15s"
														repeatCount="indefinite"
														values="
    M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5;
    M455.5,311.5Q420,373,367.5,411.5Q315,450,257.5,427Q200,404,142.5,387Q85,370,82,310Q79,250,91.5,197Q104,144,142,90Q180,36,247,44Q314,52,357,96.5Q400,141,445.5,195.5Q491,250,455.5,311.5;
    M406.5,307Q406,364,357.5,398Q309,432,252,426Q195,420,133,400Q71,380,42.5,315Q14,250,32,177.5Q50,105,116.5,74.5Q183,44,250.5,42Q318,40,383,73Q448,106,427.5,178Q407,250,406.5,307;
    M428,307.5Q408,365,352.5,380Q297,395,239.5,426.5Q182,458,148,403.5Q114,349,70,299.5Q26,250,53.5,188.5Q81,127,139,106.5Q197,86,256.5,66.5Q316,47,355.5,96Q395,145,421.5,197.5Q448,250,428,307.5;
    M417.5,309.5Q413,369,368.5,422.5Q324,476,249,480Q174,484,149,413Q124,342,86,296Q48,250,83.5,202.5Q119,155,159.5,126Q200,97,260.5,63.5Q321,30,372.5,76.5Q424,123,423,186.5Q422,250,417.5,309.5;
    M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5;
  "
													/>
												</path>
											</svg>
										</div>

										<h2 data-swiper-parallax="-2000" className="text-6xl px-16 md:text-7xl lg:text-8xl text-center capitalize absolute dark:text-[#e7e6e2]">{project.attributes.title}</h2>
										<h2 data-swiper-parallax="-2000" className="text-6xl px-16 md:text-7xl lg:text-8xl text-center capitalize absolute dark:text-[#e7e6e2] top dark:dark-outline">{project.attributes.title}</h2>
									</div>
								</Link>
							</SwiperSlide>
						))}
					</Swiper>
				) : null}
				<div className="showcase-nav">
					<div ref={navigationNextRef} className="item right-10 dark:text-[#e7e6e2]">
						{/* <span>Next Slide</span> */}

						<i className="ml-2.5">
							<FontAwesomeIcon icon={faChevronRight} />
						</i>
					</div>
					<div ref={navigationPrevRef} className="item left-10 dark:text-[#e7e6e2]">
						<i className="mr-2.5">
							<FontAwesomeIcon icon={faChevronLeft} />
						</i>

						{/* <span>Prev Slide</span> */}
					</div>
				</div>
									<div className="mouse bottom-28 md:bottom-16 dark:border-white dark:before:bg-white"></div>

			</div>
		</section>
	);
}
{
	/* 
						SHOWCASE PROJECT SLIDES FROM JSON
						{ShowcassesFullScreenData.map((slide) => (
							<SwiperSlide key={slide.id} className="h-full slide">
								<Link href={"/projects"}>
									<div className="slide">
										<div className="blob">
											<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlns-xlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
												<defs>
													<pattern id={slide.id} patternUnits="userSpaceOnUse" width="500" height="500">
														<image href={`${slide.image}`} x="0" y="0" />
													</pattern>
												</defs>
												<path id="blob" fill={`url(#${slide.id})`}>
													<animate
														attributeName="d"
														dur="10s"
														repeatCount="indefinite"
														values="
    M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5;
    M455.5,311.5Q420,373,367.5,411.5Q315,450,257.5,427Q200,404,142.5,387Q85,370,82,310Q79,250,91.5,197Q104,144,142,90Q180,36,247,44Q314,52,357,96.5Q400,141,445.5,195.5Q491,250,455.5,311.5;
    M406.5,307Q406,364,357.5,398Q309,432,252,426Q195,420,133,400Q71,380,42.5,315Q14,250,32,177.5Q50,105,116.5,74.5Q183,44,250.5,42Q318,40,383,73Q448,106,427.5,178Q407,250,406.5,307;
    M428,307.5Q408,365,352.5,380Q297,395,239.5,426.5Q182,458,148,403.5Q114,349,70,299.5Q26,250,53.5,188.5Q81,127,139,106.5Q197,86,256.5,66.5Q316,47,355.5,96Q395,145,421.5,197.5Q448,250,428,307.5;
    M417.5,309.5Q413,369,368.5,422.5Q324,476,249,480Q174,484,149,413Q124,342,86,296Q48,250,83.5,202.5Q119,155,159.5,126Q200,97,260.5,63.5Q321,30,372.5,76.5Q424,123,423,186.5Q422,250,417.5,309.5;
    M439.5,309.5Q413,369,361.5,401.5Q310,434,251.5,430.5Q193,427,159.5,383.5Q126,340,105.5,295Q85,250,78.5,185Q72,120,131,93.5Q190,67,255.5,49.5Q321,32,367.5,81.5Q414,131,440,190.5Q466,250,439.5,309.5;
  "
													/>
												</path>
											</svg>
										</div>

										<h2 className="text-center absolute">{slide.title}</h2>
										<h2 className="top">{slide.title}</h2>
									</div>
								</Link>
							</SwiperSlide>
						))} */
}

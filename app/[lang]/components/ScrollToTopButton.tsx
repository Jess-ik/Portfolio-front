"use client";

import { useEffect, useState } from "react";
import { BsArrowUpCircle } from "react-icons/bs";

const ScrollToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			// if the user scrolls down, show the button
			window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
		};
		// listen for scroll events
		window.addEventListener("scroll", toggleVisibility);

		// clear the listener on component unmount
		return () => {
			window.removeEventListener("scroll", toggleVisibility);
		};
	}, []);

	// handles the animation when scrolling to the top
	const scrollToTop = () => {
		isVisible &&
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});
	};

	return (
		<button aria-label="Scroll to top button" className={`fixed bottom-6 right-6 transition-opacity duration-200 cursor-pointer ${isVisible ? "opacity-100" : "opacity-0"}`} onClick={scrollToTop}>
			<BsArrowUpCircle className="h-6 w-6 text-[#0d2c32] dark:text-[#e7e6e2]" />
		</button>
	);
};

export default ScrollToTopButton;

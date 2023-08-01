import React from "react";
import { Yeseva_One } from "next/font/google";

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export default function ServicesHead(props) {
	return (
		<div className="px-32 pt-40 text-center">
			<h5 className={yeseva.className}>{props.subtitle}</h5>
			<h2 className="dark:text-[#E7E6E2]">{props.title}</h2>
		</div>
	);
}

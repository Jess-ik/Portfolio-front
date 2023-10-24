import React from "react";

interface PageHeadProps {
	subtitle: string;
	title: string;
  }

export default function ServicesHead(props: PageHeadProps) {
	return (
		<div className="px-4 md:px-32 pt-40 text-center">
			<h5 className={`yeseva dark:text-[#c0ccbb]`}>{props.subtitle}</h5>
			<h2 className="dark:text-[#E7E6E2]">{props.title}</h2>
		</div>
	);
}

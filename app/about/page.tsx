import React from "react";

import PageHead from "../components/PageHead";
import SectionHead from "../components/SectionHead";

import Services from "../components/Services";
import Tools from "../components/Tools";
import Experiences from "../components/Experiences";


export default function About() {
	return (
		<>
			<PageHead subtitle="Who am I" title="About me" />
			<p className="text-center pt-32 px-72">We develop creative solutions for small and big brands alike, build authentic product identities and much more.Lorem ipsum dolor sit amet, consectetur adipiscing elit sit non facilisis vitae eu. Ultrices ut diam morbi risus dui, nec eget at lorem in id tristique in elementum leo nisi eleifend placerat magna lacus elementum ornare vehicula odio posuere quisque ultrices tempus cras id blandit maecenas in ornare quis dolor tempus risus vitae feugiat fames aliquet sede.</p>

			<SectionHead subtitle="What I do" title="Services" />
			<Services />

			<SectionHead subtitle="What I use" title="Tools" />
			<Tools />

			<SectionHead subtitle="Where I worked" title="Experiences" />
			<Experiences />
		</>
	);
}

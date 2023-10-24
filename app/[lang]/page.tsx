import React from "react";
import { Locale } from "@/i18n.config";
import Showcase from "./components/Showcase";
import OnePage from "./components/OnePage";

export default function Home({ params: { lang } }: { params: { lang: Locale } }) {
	return (
		<>
      <Showcase />
      <OnePage lang={lang}/>
		</>
	);
}

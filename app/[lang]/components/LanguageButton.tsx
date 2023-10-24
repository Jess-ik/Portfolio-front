"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { i18n } from "@/i18n.config";
import { useState } from "react";
import { useRouter } from "next/router";
interface Params {
	lang: string;
}
export default function LanguageButton({ lang }: Params) {
	const pathName = usePathname();
	const [language, setLanguage] = useState("en"); // Initialize the theme state

	const redirectedPathName = (lang: string) => {
		if (!pathName) return "/";
		const segments = pathName.split("/");
		segments[1] = lang;
		return segments.join("/");
	};

	return (
		<div className="pb-10 md:pb-0">
			<Link href={redirectedPathName(lang === "en" ? "fr" : "en")} className="text-base">
				{lang === "en" ? `\ud83c\uddeb\ud83c\uddf7` : `\ud83c\uddfa\ud83c\uddf8`}
			</Link>
		</div>
	);
}

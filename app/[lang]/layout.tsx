import React, { Suspense } from "react";

import "./globals.css";
import { Locale, i18n } from '@/i18n.config'
import type { Metadata } from "next";
//font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import Providers from "./providers";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton";
import Head from "next/head";
import Analytics from "./components/Analytics";

export const metadata = {
	title: "Jess • Creative + Developer",
	description: "Portfolio of Jess Louvel - Creative & Developer",
	keywords: ["portfolio", "creative", "developer", "web design", "web development", "graphic designer"],

	openGraph: {
		title: "Jess • Creative + Developer",
		description: "Portfolio of Jess Louvel - Creative & Developer",
		url: "https://jess-louvel.com",
		siteName: "Portfolio of Jess Louvel",
		images: [
			{
				url: "https://jess-louvel.com/jess-louvel-preview.webp",
				width: 800,
				height: 600,
			},
			{
				url: "https://jess-louvel.com/jess-louvel-preview.webp",
				width: 1800,
				height: 1600,
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Jess • Creative + Developer",
		description: "Portfolio of Jess Louvel - Creative & Developer",
		images: ["https://jess-louvel.com/jess-louvel-preview.webp"],
	},
};

const sitedata = {
	"@context": "https://schema.org/",
	"@type": "Person",
	name: "Jess Louvel",
	url: "https://jess-louvel.com",
	image: "https://jess-louvel.com/jess-louvel-preview.webp",
	jobTitle: "Creative + Web Developer",
	sameAs: ["https://www.linkedin.com/in/jesslouvel/", "https://github.com/Jess-ik", "https://www.instagram.com/jess_louvel/"],
};

interface RootLayoutProps {
	children: React.ReactNode; // Define the type of children
}

export async function generateStaticParams() {
	return i18n.locales.map(locale => ({ lang: locale }))
  }

export default function RootLayout({ children, params }: { children: React.ReactNode; params: { lang: Locale } }) {
	return (
		<html lang={params.lang} suppressHydrationWarning>
			<body lang={params.lang} className={` dark:bg-[#0d2c32]`}>
				<Suspense>
					<Analytics />
				</Suspense>
				<script key="schema-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitedata, null, "\t") }} />
				<Providers >
					
						<Navbar lang={params.lang}/>

						{children}
						<ScrollToTopButton />
						<Footer />
					
				</Providers>
			</body>
		</html>
	);
}

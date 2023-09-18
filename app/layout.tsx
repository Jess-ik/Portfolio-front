import "./globals.css";
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

interface CustomMetadata extends Metadata {
	author: string;
	image: string;
	url: string;
	siteName: string;
	type: string;
	locale: string;
	twitterUsername: string;
	description: string;
	keywords: string[];
	title: string;
}

export const metadata: CustomMetadata = {
	title: "Jess • Creative + Developer",
	description: "Portfolio of Jess Louvel - Creative & Developer",
	author: "Jess Louvel",
	keywords: ["portfolio", "creative", "developer", "web design", "web development", "graphic designer"],
	image: "https://jess-louvel.com/logo-landing-black.webp", // Lien vers une image représentative
	url: "https://jess-louvel.com", // URL de la page
	siteName: "Portfolio of Jess Louvel", // Le nom de votre site
	type: "portfolio", // Type de contenu (peut être "website", "article", etc.)
	locale: "en_US", // Locale de la page
	twitterUsername: "@Jess___ik", // Nom d'utilisateur Twitter
};



const sitedata = { 
  "@context": "https://schema.org/",
	"@type": "Person",
	name: "Jess Louvel",
	url: "https://jess-louvel.com",
	image: "https://jess-louvel.com/logo-landing-black.webp",
	jobTitle: "Creative + Web Developer",
	sameAs: ["https://www.linkedin.com/in/jesslouvel/", "https://github.com/Jess-ik", "https://www.instagram.com/jess_louvel/"],
  }; 

interface RootLayoutProps {
	children: React.ReactNode; // Define the type of children
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<Head>
				<meta charSet="UTF-8" />
        <script 
      type="application/ld+json" 
      dangerouslySetInnerHTML={{ __html: JSON.stringify(sitedata) }} 
      /> 				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<meta name="description" content={metadata.description} />
				<meta name="author" content={metadata.author} />
				<meta name="keywords" content={metadata.keywords.join(", ")} />
				<meta property="og:title" content={metadata.title} />
				<meta property="og:description" content={metadata.description} />
				<meta property="og:image" content={metadata.image} />
				<meta property="og:url" content={metadata.url} />
				<meta property="og:site_name" content={metadata.siteName} />
				<meta property="og:type" content={metadata.type} />
				<meta property="og:locale" content={metadata.locale} />
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:creator" content={metadata.twitterUsername} />
				<meta name="twitter:description" content={metadata.description} />
				<meta name="twitter:title" content={metadata.title} />
				<title>{metadata.title}</title>
			</Head>
			<body className={` dark:bg-[#0d2c32]`}>
				<Providers>
					<Navbar />
					{children}
					<ScrollToTopButton />
					<Footer />
				</Providers>
			</body>
		</html>
	);
}

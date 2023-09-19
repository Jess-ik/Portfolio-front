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
import Script from "next/script";


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
				url: "https://jess-louvel.com/logo-landing-black.webp",
				width: 800,
				height: 600,
			},
			{
				url: "https://jess-louvel.com/logo-landing-black.webp",
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
		images: ["https://jess-louvel.com/logo-landing-black.webp"],
	},
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
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(sitedata) }} />
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-WMNV7PW9');
        `}
      </Script>

      <body className={` dark:bg-[#0d2c32]`}>

<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WMNV7PW9"
height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>

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

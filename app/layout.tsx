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


interface RootLayoutProps {
	children: React.ReactNode; // Define the type of children
}

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

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
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
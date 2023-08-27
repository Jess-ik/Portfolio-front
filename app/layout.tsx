import "./globals.css";
import type { Metadata } from "next";
//font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { Poppins, Yeseva_One } from "next/font/google";
import Providers from "./providers";
import Link from "next/link";
import ThemeButton from "./components/ThemeButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";



export const poppins = Poppins({
	weight: ["200", "300", "400", "500", "600", "700"],
	style: ["normal", "italic"],
	subsets: ["latin"],
	preload: false,
});

export const yeseva = Yeseva_One({
	weight: ["400"],
	style: ["normal"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Jess • Creative + Developer",
	description: "Portfolio of Jess Louvel - Creative & Developer",
};





export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
		  <body className={ `${poppins.className} dark:bg-[#0d2c32]` } >
        <Providers>
				  <Navbar />
				  {children}
				  <Footer />
        </Providers>
      </body>
    </html>
  )
}

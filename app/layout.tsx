import "./globals.css";
import type { Metadata } from "next";
//font awesome
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

// import { Poppins, Yeseva_One } from "next/font/google";
import Providers from "./providers";
import Link from "next/link";
import ThemeButton from "./components/ThemeButton";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ScrollToTopButton from "./components/ScrollToTopButton"


export const metadata: Metadata = {
	title: "Jess • Creative + Developer",
	description: "Portfolio of Jess Louvel - Creative & Developer",
};

interface RootLayoutProps {
	children: React.ReactNode; // Define the type of children
  }



export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' suppressHydrationWarning>
		  <body className={ ` dark:bg-[#0d2c32]` } >
        <Providers>
				  <Navbar />
          {children}
          <ScrollToTopButton />
				  <Footer />
        </Providers>
      </body>
    </html>
  )
}

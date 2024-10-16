
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";

import { GlobalStateProvider } from "@/context/GlobalStateContext";
import Script from "next/script";

const roboto = Roboto({
	subsets: ["latin"],
	weight: ["100", "300", "400", "500", "700", "900"], // Specify the available font weights here
});


export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${roboto.className} antialiased flex flex-col min-h-screen`}>
				<GlobalStateProvider>
					<Navbar />
					{children}
					<Footer />
				</GlobalStateProvider>
				<Script strategy="beforeInteractive" src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_CAPTCHA_SITE_KEY}`} />

			</body>
		</html>
	);
}

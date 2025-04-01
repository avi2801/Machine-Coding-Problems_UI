import "@/styles/globals.css";
import type { AppProps } from "next/app";
import TabsComponent from "../components/tabsComponent/Tabs";

export default function App({ Component, pageProps }: AppProps) {
	const tabsList = [
		{ name: "Home", link: "/" },
		{ name: "About", link: "/about" },
		{ name: "Experience", link: "/experience" },
	];
	return (
		<>
			<TabsComponent tabsList={tabsList} />
			<Component {...pageProps} />
		</>
	);
}

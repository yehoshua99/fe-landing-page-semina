import "../styles/globals.css";
import "../styles/main.css";
import Head from "next/head";

import { ToastContainer } from "react-toastify"; //yang berfungsi utk menampilkan messagenya
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Component {...pageProps} />
			<ToastContainer position="top-right" />
		</>
	);
}

export default MyApp;

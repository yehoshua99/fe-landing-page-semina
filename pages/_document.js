import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />

				<Script
					src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
					integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
					crossorigin="anonymous"
					strategy="beforeInteractive"
				></Script>
				<Script
					src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
					integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
					crossorigin="anonymous"
					strategy="beforeInteractive"
				></Script>
			</body>
		</Html>
	);
}

/**
 * File _document.js pada Next.js digunakan untuk meng-customize tampilan HTML yang digenerate oleh server pada setiap permintaan dari client. Dokumen HTML yang dihasilkan pada setiap permintaan dari client berbeda dengan dokumen HTML yang dihasilkan pada saat build aplikasi. Hal ini dikarenakan Next.js menggunakan server-side rendering, sehingga setiap permintaan yang masuk akan membangun dokumen HTML yang baru.
Untuk meng-customize tampilan dokumen HTML, kita dapat membuat file _document.js pada folder pages di aplikasi Next.js kita. Pada file ini, kita dapat menambahkan metadata, stylesheet, script, atau bahkan custom element yang ingin ditampilkan pada setiap halaman aplikasi.
 * Didalam menggunakan nextJS, kita tidak bisa import file seperti cdn kedalam next js langsung,
jadi kita harus membuat file terpisah, seperti case ssaat ini membuat file baru dengan nama _document
lalu masukan script yang didapat dari 'next/script' dan 
membutuhkan NextScript dari 'next/document' yang digunakan agar dapat membaca seluruh script yang ada, 
 * Dan harus menambahkan strategy pada <Script>, ini wajib ada, karena jika tidak ada ini maka nanti tidak akan terbaca 
script nya
	
 * <Main /> menjalankan _app.js
 */

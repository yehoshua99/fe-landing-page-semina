import { toast } from "react-toastify";

export default function errorHandler(error) {
	// console.log("error");
	// console.log(error);
	if (error) {
		let message;
		if (error.response) {
			message = error.response.data.msg;

			if (typeof message === "string") toast.error(message);

			return Promise.reject(error);
		}
	}
}

/**
 * Pola logic dari kode tersebut adalah sebagai berikut:

1. Deklarasi sebuah function bernama errorHandler dengan satu parameter error.
2. Pengecekan apakah error memiliki nilai atau tidak menggunakan conditional statement if (error).
3. Jika error terdefinisi maka akan dilakukan pengecekan apakah error.response juga terdefinisi atau tidak menggunakan conditional statement if (error.response).
4. Jika error.response terdefinisi maka akan diambil pesan error yang dikirimkan oleh server dan disimpan ke dalam variabel message.
5. Selanjutnya dilakukan pengecekan tipe data dari variabel message menggunakan typeof message === "string".
6. Jika tipe data dari variabel message adalah string, maka akan ditampilkan pesan error tersebut menggunakan library toast.
7. Terakhir, function akan mengembalikan Promise.reject(error).

Kegunaan dari function errorHandler adalah untuk menangani error pada saat melakukan request ke server. Function tersebut akan menampilkan pesan error menggunakan library toast jika tipe data dari pesan error yang diterima dari server adalah string. Selain itu, function juga akan mengembalikan Promise.reject(error) agar error bisa ditangani pada bagian lain dari kode program.
 */

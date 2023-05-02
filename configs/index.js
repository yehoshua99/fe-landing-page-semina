import axios from "axios";

import errorHandler from "./errorHandler";

const instance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API,
});

instance.interceptors.response.use((response) => response.data, errorHandler);

export default instance;
/**
 * Kagunaan dari dari 
 * instance.interceptors.response.use((response) => response.data, errorHandler);
Ibaratnya waktu kita menggunakan sperti get, put, delete dll akan masuk ke dalam (response), lalu ketika sukses akan mengembalikan response.data, 
dan kalau ada error makan akan mengembalikan nilai eror dari errorHandler. Dengan cara yang seperti ini, saat ada error, kita akan menerimanya selalu 
didalam cache

* yang biasanya kita saat mengambil api menggunakan axios dengan req.data.data, disini kita ckup dengan response.data,
karena dari configs kita sudah menyiapkan response.data yg artinya kita sudah mengambil data nya menggunakan response.data
misal ada yang mengyiapkan data API yang datanya diambil dari category maka di custom respon.data.category

 */

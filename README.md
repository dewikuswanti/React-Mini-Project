# Dokumentasi React-Project-Mini

Aplikasi yang dibangun adalah sebuah Single Page Application (SPA) dengan menggunakan API Public dari [Reqres](https://reqres.in/). Untuk membangun aplikasi ini, digunakan teknologi React JS + Vite, Tailwind CSS, Headless UI. Berikut adalah penjelasan singkat mengenai aplikasi dan alat yang digunakan:

## Deskripsi Aplikasi

Aplikasi yang dibangun adalah sebuah SPA yang menampilkan data pengguna dari API Reqres. Pengguna dapat melihat daftar pengguna. Aplikasi ini memberikan pengalaman pengguna yang baik, dengan menggunakan desain yang modern menggunakan Tailwind CSS dan Headless UI.

## Alat dan Teknologi yang Digunakan

1. **React JS**

2. **Vite**

3. **Tailwind CSS**

4. **Headless UI**

## Cara Menjalankan Aplikasi

Berikut adalah langkah-langkah untuk menjalankan aplikasi ini secara lokal:

1. Pastikan Anda telah menginstal Node.js di komputer Anda.

2. Clone repositori aplikasi dari [URL Repositori](https://github.com/dewikuswanti/React-Mini-Project.git)

3. Buka terminal dan arahkan ke direktori aplikasi.

4. Instal semua dependensi dengan menjalankan perintah berikut:

```bash
yarn install / yarn add
```

5. Setelah instalasi selesai, jalankan perintah berikut untuk memulai server pengembangan:

```bash
yarn dev
```

6. Jalankan aplikasi di URL yang sudah tersedia pada terminal.

7. Buka browser dan masuk ke alamat di atas untuk mengakses aplikasi.

## Test Case

Berikut adalah beberapa halaman utama yang dibuat pada aplikasi:

### **A. Login Page**

Halaman ini merupakan halaman pertama yang akan ditampilkan saat pengguna mengunjungi aplikasi. Untuk masuk ke halaman ini, pengguna harus memasukkan email dan password yang sesuai dengan ketentuan berikut:

**path: /**

1. **Email (wajib diisi)**.
   - email: eve.holt@reqres.in 
   - Pengguna dapat mengganti email dengan email yang sudah terdaftar dan tersedia pada [Reqres](https://reqres.in/).

2. **Password (wajib diisi)**.
   - Passwod: 123654
   .

**Cara Menggunakan Default Value atau Custom Value**

Untuk menggunakan nilai default email dan password, pengguna tidak perlu melakukan apa pun. Secara otomatis, email dan password default akan digunakan ketika halaman pertama kali dimuat.

Jika pengguna ingin menggunakan nilai kustom untuk email, cukup mengganti nilai di kolom input email dengan email yang sesuai dari [Reqres](https://reqres.in/).

**Contoh Penggunaan:**
1. Default Value:
   - Email: eve.holt@reqres.in (tidak perlu mengisi, langsung terisi secara default).
   - Password: cityslicka (tidak perlu mengisi, langsung terisi secara default).

2. Custom Value:
   - Email: contohuser@gmail.com (diganti dengan email terdaftar di [Reqres](https://reqres.in/)).
   - Password: cityslicka (tidak dapat diganti, harus tetap menggunakan password default).

**Catatan:**
- Pastikan pengguna memasukkan email yang valid jika menggunakan nilai kustom.
- Password tidak dapat diubah atau disesuaikan, harus menggunakan password default "cityslicka" untuk masuk ke aplikasi.

### **B. Users List Page**

Halaman ini adalah halaman yang dapat diakses setelah pengguna berhasil diautentikasi. Di halaman ini terdapat beberapa fitur, antara lain:

**Path: /users**

1. **Menampilkan Daftar Pengguna**: Halaman ini akan menampilkan daftar pengguna yang tersedia dengan menggunakan data dari API Reqres. Daftar ini biasanya berupa daftar kartu yang menampilkan informasi singkat tentang setiap pengguna, seperti nama, gambar profil, dan lainnya.

2. **Navigasi ke User Detail Page**: Pengguna dapat mengklik salah satu pengguna dari daftar untuk melihat informasi secara lebih detail. Ketika pengguna mengklik pengguna tertentu, mereka akan diarahkan ke halaman detail pengguna yang sesuai.

3. User Detail Page**

Halaman ini adalah halaman yang menampilkan informasi detail dari salah satu pengguna yang telah dipilih oleh pengguna.


## Kesimpulan

Dokumentasi di atas memberikan gambaran singkat tentang aplikasi dan teknologi yang digunakan, serta langkah-langkah untuk menjalankan aplikasi secara lokal.
## 🏥 Soal 4 (Kompleks): Manajemen Premi Asuransi Digital

### 🎯 Deskripsi Umum:
Sebuah perusahaan asuransi digital ingin membangun aplikasi **dashboard sederhana** untuk mengelola data nasabah dan menghitung **premi bulanan** berdasarkan **usia nasabah**.

Program harus mendukung fitur berikut:

1. **Menambahkan (CREATE)** data nasabah yang berisi:
   - Nama nasabah
   - Umur nasabah
   - Premi bulanan (dihitung berdasarkan umur)

2. **Melihat (READ)** daftar seluruh nasabah beserta umur dan premi masing-masing.

3. **Menghapus (DELETE)** nasabah berdasarkan nama.

4. **Menghitung premi tertinggi dan terendah** dari seluruh nasabah yang sudah terdaftar, menggunakan **built-in function `Math.max` dan `Math.min`**.

---

### 📌 Ketentuan Premi Berdasarkan Umur:

| Umur         | Premi/bulan |
|--------------|-------------|
| < 18 tahun   | Rp 50.000   |
| 18–40 tahun  | Rp 100.000  |
| 41–60 tahun  | Rp 150.000  |
| > 60 tahun   | Rp 200.000  |

---

### Catatan Teknis:

- Gunakan Array.push() untuk menambahkan data nasabah ke list.
- Gunakan Array.filter() atau splice() untuk menghapus nasabah dari list.
- Gunakan Array.map() untuk mengekstrak semua premi ke dalam array premi.
- Gunakan Math.max(...array) dan Math.min(...array) untuk mencari nilai premi tertinggi/terendah.
- Program berbasis browser sederhana (HTML + JS) atau berbasis console juga diperbolehkan.


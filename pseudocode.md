## PSEUDOCODE
1. Siapkan array kosong untuk kita simpan data nasabah
2. Tampilkan opsi:
    a. Tambah Nasabah = input nama dan umur
    b. Lihat seluruh data nasabah beserta preminya
    c. Hapus nasabah berdasarkan nama
    d. Hitung dan Tampilkan premi tertinggi dan terendah
3. Tambah Nasabah:
    a. BACA nama dan umur
    b. HITUNG PREMI sesuai umur:
        - Jika UMUR < 18 = 50000
        - Jika UMUR 18 - 40 = 100000
        - Jika UMUR 41 - 60 = 150000
        - Jika UMUR > 60 = 200000
    c. Tambahkan data nasabah ke array (push)
4. Lihat data nasabah
5. Hapus Nasabah:
    a. BACA nama
    b. CARI data dalam aray
    c. HAPUS data dari array jika namanya cocok (filter/slice)
6. Hitung Premi Tertinggi dan Terendah:
    a. AMBIL seluruh data premi dari array
    b. CARI nilai premi tertinggi dan terendah (Math.max dan Math.min)
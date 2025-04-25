// 1. Siapkan array kosong untuk kita simpan data nasabah
let nasabahList = [];

// 3. Tambah Nasabah:
// b. HITUNG PREMI sesuai umur:
// - Jika UMUR < 18 = 50000
// - Jika UMUR 18 - 40 = 100000
// - Jika UMUR 41 - 60 = 150000
// - Jika UMUR > 60 = 200000
function hitungPremi(umur) {
    if (umur < 18) return 50000;
    if (umur <= 40) return 100000;
    if (umur <= 60) return 150000;
    return 200000;
}

// a. BACA nama dan umur
function tambahNasabah(event) {
    event.preventDefault();

    // ditambahkan .trim() untuk menghindari duplikat
    const nama = document.getElementById("nama").value.trim();
    const umur = parseInt(document.getElementById("umur").value);

    // Validasi input
    if (!nama || isNaN(umur)) {
        document.getElementById("output").innerText = "Nama dan umur harus diisi dengan benar.";
        tampilkanOutput();
        return;
    }

    // Cek duplikasi nama (opsional)
    const sudahAda = nasabahList.some(n => n.nama.toLowerCase() === nama.toLowerCase());
    if (sudahAda) {
        document.getElementById("output").innerText = `Nasabah dengan nama "${nama}" sudah terdaftar.`;
        tampilkanOutput();
        return;
    }

    const premi = hitungPremi(umur);
    // c. Tambahkan data nasabah ke array (push)
    nasabahList.push({ nama, umur, premi });

    document.getElementById("output").innerText = `Nasabah ${nama} berhasil ditambahkan.`;

    tampilkanOutput();

    // Bersihkan input
    document.getElementById("nama").value = '';
    document.getElementById("umur").value = '';
}

function formatRupiah(angka) {
    return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

// 4. Lihat data nasabah
function lihatData() {
    if (nasabahList.length === 0) {
        document.getElementById("output").innerText = "Belum Ada Data Nasabah";
        return;
    }

    let hasil = "Daftar Nasabah:\n";
    nasabahList.forEach(n => {
        hasil += `${n.nama} (Umur: ${n.umur}) - Premi: ${formatRupiah(n.premi)}\n`;
    });

    document.getElementById("output").innerText = hasil;

    tampilkanOutput();
}

// 5. Hapus Nasabah:
// a. BACA nama
// b. CARI data dalam aray
// c. HAPUS data dari array jika namanya cocok (filter/slice)
function hapusNasabah() {
    const nama = document.getElementById("nama").value;
    if (!nama) {
        document.getElementById("output").innerText = "Silakan masukkan nama yang ingin dihapus.";
        tampilkanOutput();
        return;
    }

    const awal = nasabahList.length;
    // cara yang mudah untuk menyimpan semua item
    nasabahList = nasabahList.filter(n => n.nama.toLowerCase() !== nama.toLowerCase());

    const akhir = nasabahList.length;
    const pesan = awal === akhir ? `Nasabah ${nama} tidak ditemukan.` : `Nasabah ${nama} berhasil dihapus`;
    document.getElementById("output").innerText = pesan;

    tampilkanOutput();

    // Bersihkan input
    document.getElementById("nama").value = '';
    document.getElementById("umur").value = '';
}

// 6. Hitung Premi Tertinggi dan Terendah:
// a. AMBIL seluruh data premi dari array
// b. CARI nilai premi tertinggi dan terendah (Math.max dan Math.min)
function cekMaxMin() {
    if (nasabahList.length === 0) {
        document.getElementById("output").innerText = "Data Kosong";
        return;
    }

    const premiArray = nasabahList.map(n => n.premi);
    const max = Math.max(...premiArray);
    const min = Math.min(...premiArray);

    document.getElementById("output").innerText = `Premi Tertinggi: ${formatRupiah(max)} \n Premi Terendah: Rp. ${formatRupiah(min)}`;

    tampilkanOutput();
}

function updateNasabah() {
    const nama = document.getElementById("nama").value;
    const umurBaru = parseInt(document.getElementById("umur").value);

    let ditemukan = false;

    // Cari dan update nasabah
    nasabahList.forEach(n => {
        if (n.nama.toLowerCase() === nama.toLowerCase()) {
            n.umur = umurBaru;
            n.premi = hitungPremi(umurBaru); // hitung ulang premi
            ditemukan = true;
        }
    });

    const output = ditemukan
        ? `Data nasabah ${nama} berhasil diperbarui.`
        : `Nasabah dengan nama ${nama} tidak ditemukan.`;

    document.getElementById("output").innerText = output;
}

function tampilkanOutput() {
    const outputBox = document.querySelector('.container-output');
    outputBox.style.display = 'flex';
    outputBox.scrollIntoView({ behavior: 'smooth' });
}
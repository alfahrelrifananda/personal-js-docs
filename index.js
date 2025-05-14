let namaLengkap = "Fahrel";

document.getElementById("t1").textContent = "Hai, " + namaLengkap;

let angka = 30;

angka = angka + 1;
// ? Shortcut
angka += 1;


// ? Hitung Diskon
const submitHitung = document.getElementById("submitHitung");

const hargaAwal = document.getElementById("hargaAwal");
const diskon = document.getElementById("diskon");
const potonganHarga = document.getElementById("potonganHarga");
const hargaAkhir = document.getElementById("hargaAkhir");
const error = document.getElementById("error");

submitHitung.onclick = function () {

    let inputHarga = document.getElementById("inputHarga").value;
    let inputDiskon = document.getElementById("inputDiskon").value;

    inputHarga = Number(inputHarga);
    inputDiskon = Number(inputDiskon);



    if (inputHarga == false || inputDiskon == false) {
        error.textContent = "Input tidak boleh kosong!";
    } else if (inputHarga < 0) {
        error.textContent = "Harga tidak valid!";
    } else if (inputDiskon < 0 || inputDiskon > 100) {
        error.textContent = "Diskon tidak valid!";
    } else {
        let hitungPotonganHarga = inputHarga / 100 * inputDiskon;
        let hitungHargaAkhir = inputHarga - hitungPotonganHarga;

        error.textContent = "";

        hargaAwal.textContent = "Harga Awal : Rp. " + inputHarga + ",00";
        diskon.textContent = "Diskon : " + inputDiskon + "%";
        potonganHarga.textContent = "Potongan Harga : Rp. " + hitungPotonganHarga + ",00";
        hargaAkhir.textContent = "Harga Akhir : Rp. " + hitungHargaAkhir + ",00";
    }






}

// ? SLOT GACOR
let slotSatu = document.getElementById("slot1");
let slotDua = document.getElementById("slot2");
let slotTiga = document.getElementById("slot3");
let slotEmpat = document.getElementById("slot4");
let slotLima = document.getElementById("slot5");
const slotButton = document.getElementById("slotBtn");
let min = 0;
let max = 2;

slotButton.onclick = function () {
    hasil1 = Math.floor(Math.random() * max + min);
    hasil2 = Math.floor(Math.random() * max + min);
    hasil3 = Math.floor(Math.random() * max + min);
    hasil4 = Math.floor(Math.random() * max + min);
    hasil5 = Math.floor(Math.random() * max + min);

    slotSatu.textContent = hasil1;
    slotDua.textContent = hasil2;
    slotTiga.textContent = hasil3;
    slotEmpat.textContent = hasil4;
    slotLima.textContent = hasil5;

}


// ? Checked
const berlanggananBtn = document.getElementById("berlanggananBtn");
const shopeepayBtn = document.getElementById("shopeepayBtn");
const gopayBtn = document.getElementById("gopayBtn");
const danaBtn = document.getElementById("danaBtn");
const ovoBtn = document.getElementById("ovoBtn");
const berlanggananSubmitBtn = document.getElementById("berlanggananSubmitBtn");
const berlanggananOp = document.getElementById("berlanggananOp");
const paymentOp = document.getElementById("paymentOp");


berlanggananSubmitBtn.onclick = function () {
    if (berlanggananBtn.checked) {
        if (gopayBtn.checked || shopeepayBtn.checked || danaBtn.checked || ovoBtn.checked) {
            berlanggananOp.textContent = "Kamu berhasil berlangganan";
            if (gopayBtn.checked) {
                paymentOp.textContent = "Menggunakan Gopay";
            } else if (shopeepayBtn.checked) {
                paymentOp.textContent = "Menggunakan Shopeepay";
            } else if (danaBtn.checked) {
                paymentOp.textContent = "Menggunakan Dana";
            } else if (ovoBtn.checked) {
                paymentOp.textContent = "Menggunakan Ovo";
            }
        } else {
            berlanggananOp.textContent = "Berlangganan gagal";
            paymentOp.textContent = "Tolong Pilih metode pembayaran";
        }
    } else {
        berlanggananOp.textContent = "Tolong check kotak berlangganan";
        paymentOp.textContent = "";
    }
}

// ? PENGGUNAAN CEK SPASI UNTUK USERNAME
let usernameCek = "Nabillio Alfahrel";
usernameCek = usernameCek.includes(" ");

if (usernameCek) {
    console.log("Username tidak boleh berisi spasi");
}


// ? Ternary operator
// const umur = prompt("Masukkan Umur Kamu");
const umur = 20;
const umurOp = document.getElementById("test");
const cukupUmur = umur > 17 ? "Kamu sudah dewasa" : "Kamu masih terlalu dini";

// umurOp.textContent = cukupUmur;

// ? PENGGUNAAN SWITCH CASE TERBAIK
const jam = 24;
let kondisi;

switch (true) {
    case jam >= 1 && jam <= 9:
        kondisi = "Selamat pagi";
        break;
    case jam >= 9 && jam <= 15:
        kondisi = "Selamat siang";
        break;
    case jam >= 15 && jam <= 19:
        kondisi = "Selamat sore";
        break;
    case jam >= 19 && jam <= 24:
        kondisi = "Selamat malam";
        break;
    default:
        kondisi = "jam tidak valid!";
        break;
}

console.log(kondisi);


// ? MEMOTONG / MEMISAH STRING
let nama = "NABILLIO ALFAHREL";

let namadepan = nama.slice(0, nama.indexOf(" "));
console.log(namadepan);


// ? PENGGUNAAN PERBANDINGAN SAMA DENGAN
// / = MEMBERI VALUE pada variabel
// / == MEMBANDINGKAN VALUE jika sama
// / === MEMBANDINGKAN VALUE + TIPE DATA jika sama
// / != MEMBANDINGKAN VALUE jika tidak sama
// / == MEMBANDINGKAN VALUE + TIPE DATA jika tidak sama

let tahun = 2025;

if (tahun == "2025") {
    console.log("SAMA");
} else {
    console.log("TIDAK SAMA")
}

if (tahun != "2025") {
    console.log("TIDAK SAMA");
} else {
    console.log("SAMA")
}



// ? PENGGUNAAN DO WHILE

let username;

do {
    // LAKUKAN INI TERLEBIH DAHULU
    // username = prompt("masukkan username");

    // JIKA KONDISI WHILE INI TERPENUHI
} while (username === "" || username === null)


console.log(username)
console.log(Boolean(username));

// ? FOR LOOP

for (let index = 0; index < 3; index++) {
    console.log("INI AKAN TERULANG 3 KALI");
}

// ? GAME TEBAK TEBAK KAN

let minimal = 33;
let maksimal = 99;
let jawaban = Math.floor(Math.random() * (maksimal - minimal) + minimal);

let upaya = 0;
let tebakan;
let berjalan = true;
berjalan = false;

while (berjalan) {

    tebakan = prompt("Tebak Angka antara " + minimal + " - " + maksimal);
    tebakan = Number(tebakan);

    if (isNaN(tebakan) || tebakan > maksimal || tebakan < minimal) {
        alert("Masukkan jawaban yang valid!");
    } else {
        upaya++
        if (tebakan > jawaban) {
            alert("Terlalu besar");
        } else if (tebakan < jawaban) {
            alert("Terlalu kecil");
        } else {
            alert("Benar! Jawabannya adalah " + tebakan + " Kamu berhasil menebak dengan benar setelah " + upaya + " upaya");
            berjalan = false;
        }
    }

}

// ? FUNCTION

// PENEMPATAN URUTAN PARAMETER PENTING!
function happyBirthday(nama, umur) {
    console.log("Happy birthday to you!");
    console.log("Happy birthday to you!");
    console.log("Happy birthday dear " + nama);
    console.log("You are now " + umur + " Years old");
}

happyBirthday("Fahrel", 20)


let hasil;

// PENGGUNAAN RETURN
function tambah(y, z) {
    let hasil = y + z;
    return hasil;
}

hasil = tambah(2, 3);
console.log(hasil)

function apakahGanjils(x) {
    if (x % 2 === 0) {
        return false
    } else {
        return true
    }
}

console.log(apakahGanjils(21))

// ? OPERATOR SUHU
const inputSuhu = document.getElementById("inputUnit")
const radioFahrenheit = document.getElementById("keFahrenheit")
const radioCelcius = document.getElementById("keCelcius")
const hasilSuhu = document.getElementById("hasilSuhu")
let unit
let temp

function hitungSuhu() {
    if (radioFahrenheit.checked) {
        unit = Number(inputSuhu.value)
        temp = (unit * 9 / 5) + 32
        hasilSuhu.textContent = temp + " Fahrenheit"
    } else if (radioCelcius.checked) {
        unit = Number(inputSuhu.value)
        temp = (unit - 32) * 9 / 5
        hasilSuhu.textContent = temp + " Celcius"
    } else {
        hasilSuhu.textContent = "Tolong pilih salah satu opsi diatas"
    }
}

// ? ARRAY
let arrays = ["satu", "dua", "tiga"];
let array

for (array of arrays) {
    console.log(array)
}
// ? SPREAD OPERATOR (...) Memisahkan array
const makanans = ["ayam goreng", "sambal goreng", "tempe penyet"]

console.log(...makanans)
// ? REST PARAMETER (...) Menjadi array
function bukaKardus(...barang) {
    return barang
}

const barang1 = "buku"
const barang2 = "kartu"
const barang3 = "laptop"

console.log(bukaKardus(barang1, barang2, barang3))
// ? GAME ACAK DADU
function acakDadu() {

    const jumlahDadu = document.getElementById("jumlahDadu").value
    const hasilJumlahDadu = document.getElementById("hasilJumlahDadu")
    const hasilDaduImage = document.getElementById("hasilDaduImage")
    const nilaiDadu = []
    const nilaiDaduImage = []

    for (let index = 0; index < jumlahDadu; index++) {
        const nilai = Math.floor(Math.random() * 6) + 1;
        nilaiDadu.push(nilai)
        nilaiDaduImage.push(`<img src="img/${nilai}.png">`)

    }

    hasilJumlahDadu.textContent = `Angka Dadu = ${nilaiDadu.join(", ")}`;
    hasilDaduImage.innerHTML = nilaiDaduImage.join(" ")
}
// ? PASSWORD GENERATOR



function passGen(panjangPass, hurufKecil, hurufBesar, angka, simbol) {
    const listHurufKecil = "abcdefghijklmnopqrstuvwxyz"
    const listHurufBesar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    const listAngka = "1234567890"
    const listSimbol = "!@#$%^&*()"

    let karakterYgBoleh = ""
    let password = ""

    console.log(hurufKecil)
    console.log(hurufBesar)
    console.log(angka)
    console.log(simbol)

    karakterYgBoleh += hurufKecil ? listHurufKecil : ""
    karakterYgBoleh += hurufBesar ? listHurufBesar : ""
    karakterYgBoleh += angka ? listAngka : ""
    karakterYgBoleh += simbol ? listSimbol : ""

    console.log(karakterYgBoleh)
    if (panjangPass <= 0) {
        return `(Password harus lebih dari 1)`
    } else if (karakterYgBoleh.length === 0) {
        return `(Harus ada yang di check)`
    }
    for (let index = 0; index < panjangPass; index++) {
        const randomIndex = Math.floor(Math.random() * karakterYgBoleh.length)
        password = password + karakterYgBoleh[randomIndex]
    }
    return password;
}

const btnGenerate = document.getElementById("generatePass")
const TogghurufKecil = document.getElementById("hurufKecil")
const TogghurufBesar = document.getElementById("hurufBesar")
const ToggAngka = document.getElementById("angka")
const ToggSimbol = document.getElementById("simbol")
const hasilGenPass = document.getElementById("hasilGenPass")




btnGenerate.onclick = function () {

    const panjangPass = document.getElementById("panjangPass").value

    let isTogghurufKecil = TogghurufKecil.checked;
    let isTogghurufBesar = TogghurufBesar.checked;
    let isToggAngka = ToggAngka.checked;
    let isToggSimbol = ToggSimbol.checked;

    const password = passGen(panjangPass, isTogghurufKecil, isTogghurufBesar, isToggAngka, isToggSimbol)

    hasilGenPass.textContent = `${password}`;
}

// ? CALLBACK = menaruh function di parameter function yang lain agar function yang memiliki parameter berjalan terlebih dahulu, karena javascript itu async

hello(goodbye)

function hello(callback) {
    console.log("Hello")

    // IBARATKAN SEBAGAI goodbye()
    callback()
}

function goodbye() {
    console.log("Goodbye");
}

// ?  FOREACH =  Memisah-misah array dan memasukkan nya ke sebuah function sebagai callback
const angkaList = [1, 2, 3, 4, 5, 6, 7, 8, 9]
angkaList.forEach(angk)

function angk(element) {
    console.log(element)
    console.log("============")
}

// ? MAP = Sama seperti forEach namun bedanya ini tidak mengubah array awal namun mengembalikannya sebagai array baru
const angkaList2 = [3, 4, 6, 7, 8, 9, 0]
const angkaList2Map = angkaList2.map(ank)


function ank(element) {
    console.log(element)
}


// ? FILTER = Untuk memfilter array
const angka3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const angkaGenap = angka3.filter(apakahGenap)
const angkaGanjil = angka3.filter(apakahGanjil)

console.log(angkaGenap)
console.log(angkaGanjil)

function apakahGenap(element) {
    return element % 2 === 0
}

function apakahGanjil(element) {
    return element % 2 !== 0
}


// ? REDUCE = MEREDUCE ARRAY MENJADI 1 ELEMENT
const angka4 = [1, 2, 3, 4, 5]
const totalangka4 = angka4.reduce(hitungTotal)

console.log(totalangka4);


function hitungTotal(accumulator, element) {
    return accumulator + element;
}

// ? FUNCTION EXPRESSION = DEKLARASI FUNCTION SEBAGAI ARGUMEN
// contoh jika menggunakan function declaration
function hellos() {
    console.log("Halo")
}
// contoh jika menggunakan function expression
const halo = function () {
    console.log("HALO")
}
const sampaiJumpa = function () {
    console.log("Sampai Jumpa!")
}

hellos()
halo()
// menggunakan SETTIMEOUT dengan function declaration
setTimeout(sampaiJumpa, 0)
// menggunakan SETTIMEOUT dengan function expression
setTimeout(function () {
    console.log("SAMPAI JUUMPAAA")
}, 0)

// ? ARROW FUNCTION = DEKLARASI FUNCTION DENGAN MUDAH DAN SEDERHANA
// contoh jika menggunakan function declaration
function apaKabar() {
    console.log("Apa Kabar?")
}
// contoh jika menggunakan arrow function
const apaKabarBro = () => console.log("Apa Kabar Bro!")


apaKabar()
apaKabarBro()

// ! OBJECT
const orang1 = {
    nama: "Spongebob",
    makanan: "Krabby Patty",
    umur: 27,
}

console.log(orang1.nama);
// ? THIS = UNTUK MEREFER SUATU VALUE KE OBJECT ITU SENDIRI
const orang2 = {
    nama: "patrick",
    makanan: "Hotdog",
    sedangApa: function () {
        console.log(`${this.nama} sedang memakan ${this.makanan}`)
    }
}

console.log(orang2.sedangApa())
// ! CONSTRUCTOR = METHOD TERBAIK UNTUK DEKLARASI MULTIPLE OBJECT AGAR TIDAK BERULANG
function ponsel(brand, model, tahun, warna, harga) {
    this.brand = brand;
    this.model = model;
    this.tahun = tahun;
    this.warna = warna;
    this.harga = harga;
}

const hp1 = new ponsel("Samsung", "Galaxy 2", 2012, "Silver", 1200000)
const hp2 = new ponsel("Xiaomi", "Note 5 Pro", 2017, "Hitam", 1500000)
const hp3 = new ponsel("Google Pixel", "6a", 2022, "Hijau", 2800000)

console.log(hp1.brand)
console.log(hp1.model)
console.log(hp1.tahun)
console.log(hp1.warna)
console.log(`Harga = Rp. ${hp1.harga.toFixed(2)}`)

console.log(hp2.brand)
console.log(hp2.model)
console.log(hp2.tahun)
console.log(hp2.warna)
console.log(`Harga = Rp. ${hp2.harga.toFixed(2)}`)

console.log(hp3.brand)
console.log(hp3.model)
console.log(hp3.tahun)
console.log(hp3.warna)
console.log(`Harga = Rp. ${hp2.harga.toFixed(2)}`)

// ! CLASS = METHOD TERBAIK UNTUK MENDEKLARASI CONSTRUCTOR
class linuxDistro {
    constructor(nama, versiKernel, propeitary) {
        this.nama = nama;
        this.versiKernel = versiKernel;
        this.propeitary = propeitary;
    }

    tampilkanDistro() {
        console.log(`Nama Distro = ${this.nama}`)
        console.log(`Nama Distro = ${this.versiKernel}`)
        console.log(`Propeitary = ${this.propeitary}`)
    }
}


const nixOs = new linuxDistro("NixOS", 6.6, false)

nixOs.tampilkanDistro();


// ? STATIC = BELONG TO CLASS
class forum {

    static userCounter = 0

    constructor(username) {
        this.username = username
        // penulisan / pemanggilan static itu seperti ini karena ia terikat oleh class bukan object global
        forum.userCounter++
    }

    static jumlahUser() {
        console.log(`Jumlah user yang ada berjumlah ${forum.userCounter} user`)
    }

    listUser() {
        console.log(`${this.username} adalah user`)
    }
}

const userForum1 = new forum("User1");
const userForum2 = new forum("User312");
const userForum3 = new forum("User13124");


// MEMANGGIL FUNCTION DARI CLASS
userForum1.listUser()
userForum2.listUser()
userForum3.listUser()

// MEMANGGIL STATIC DARI CLASS
forum.jumlahUser()

// ! EXTENDS = berlaku sebagai child class dari class parent 
class Hewan {
    hidup = true
    constructor(nama, bergerak) {
        this.nama = nama
        this.bergerak = bergerak
    }
}

class Tupai extends Hewan {
    caraBergerak() {
        console.log(`${this.nama} bergerak dengan cara ${this.bergerak}`)
    }
}

class Ikan extends Hewan {
    caraBergerak() {
        console.log(`${this.nama} bergerak dengan cara ${this.bergerak}`)
    }
}

class Elang extends Hewan {
    caraBergerak() {
        console.log(`${this.nama} bergerak dengan cara ${this.bergerak}`)
    }
}

const tupai = new Tupai("Tupai", "Melompat")
const ikan = new Ikan("Ikan", "Berenang")
const elang = new Elang("Elang", "Terbang")

tupai.hidup = false
console.log(tupai.hidup)
console.log(tupai.nama)
console.log(tupai.bergerak)


tupai.caraBergerak()
ikan.caraBergerak()
elang.caraBergerak()

// ! SUPER() = BERFUNGSI UNTUK MEMANGGIL CONSTRUCTOR DARI CLASS PARENT KE CLASS CHILD
class HewanLagi {
    constructor(namaHewan, bergerak) {
        this.namaHewan = namaHewan
        this.bergerak = bergerak
    }
    caraGerak() {
        console.log(`${this.namaHewan} bergerak dengan cara ${this.bergerak} dan dengan kecepatan ${this.kecepatan}Km/j`)
    }
}

class Kucing extends HewanLagi {
    constructor(namaHewan, bergerak, kecepatan) {
        super(namaHewan, bergerak)
        this.kecepatan = kecepatan
    }
}

class Ular extends HewanLagi {
    constructor(namaHewan, bergerak, kecepatan) {
        super(namaHewan, bergerak)
        this.kecepatan = kecepatan
    }
}
class Kelabang extends HewanLagi {
    constructor(namaHewan, bergerak, kecepatan) {
        super(namaHewan, bergerak)
        this.kecepatan = kecepatan
    }
}
const kucing = new Kucing("Kucing", "Berlari", 30)
const ular = new Ular("Ular", "Melata", 35)
const kelabang = new Kelabang("Kelabang", "Merayap", 20)

kucing.caraGerak()
ular.caraGerak()
kelabang.caraGerak()

// ! SETTER DAN GETTER
// ? SETTER = WRITEABILITY
// ? GETTER = READABILITY
// Biasanya digunakan untuk memvalidasi tipe data dari value yang dikirim kedalam constructor / object

class Kotak {
    constructor(lebar, tinggi) {
        this.lebar = lebar
        this.tinggi = tinggi
    }

    // SETTER
    set lebar(newLebar) {
        if (typeof newLebar === "number" && newLebar > 0) {
            // Underscore (_) berarti private value
            this._lebar = newLebar
        } else {
            console.error("Lebar harus berupa angka positif");
        }
    }
    set tinggi(newTinggi) {
        if (typeof newTinggi === "number" && newTinggi > 0) {
            // Underscore (_) berarti private value
            this._tinggi = newTinggi
        } else {
            console.error("Tinggi harus berupa angka positif");
        }
    }

    get lebar() {
        return this._lebar
    }
    get tinggi() {
        return this._tinggi
    }
}

const kotak1 = new Kotak(3, 4)

console.log(kotak1.lebar)
console.log(kotak1.tinggi)

// ! DESTRUCTURING
// ? 1. Swap variabel
// tanda ; penting setelah variabel
let o = 1;
let p = 2;

[o, p] = [p, o]

console.log(o)
console.log(p)

// ? 2. SWAP ARRAY
// tanda ; penting setelah variabel
let warna = ["merah", "kuning", "hijau"];
[warna[0], warna[2]] = [warna[2], warna[0]]

console.log(warna)

// ? 3. ARRAY KE VARIABEL
let motor = ["Honda", "Suzuki", "Yamaha"]
let [motor1, motor2, motor3] = motor

console.log(motor1)
console.log(motor2)
console.log(motor3)

// ? 4. SWAP OBJECT
let orang3 = {
    namaa: "spuncbub",
    umurr: 30,
    pekerjaann: "koki",
}

let orang4 = {
    namaa: "pet",
    umurr: 35,
}

const { namaa, umurr, pekerjaann = "nganggur" } = orang4;

console.log(namaa)
console.log(umurr)
console.log(pekerjaann)

// ? 5. SEBAGAI FUNCTION PARAMETER
function orangs({ namadep, namabel, umur, pekerjaan }) {
    console.log(`Nama: ${namadep} ${namabel}`)
    console.log(`Umur: ${umur}`)
    console.log(`Pekerjaan: ${pekerjaan}`)
}

const orang5 = {
    namadep: "Squidward",
    namabel: "Tentacles",
    umur: 38,
    pekerjaan: "Kasir",
}

orangs(orang5)

// ! NESTED OBJECT
const mrkrab = {
    nama: "Mr Krab",
    umur: 70,
    alamat: {
        jalan: "Jl 123",
        kota: "Bikini Bottom",
        negara: "Laut Internasional",
    }
}

console.log(mrkrab.nama)
console.log(mrkrab.umur)
console.log(mrkrab.alamat.jalan)
console.log(mrkrab.alamat.kota)
console.log(mrkrab.alamat.negara)

// ? Menggunakan Class
class Identitas {
    constructor(namadepan, namabelakang, ...alamat) {
        this.namadepan = namadepan
        this.namabelakang = namabelakang
        this.alamat = new Alamat(...alamat)
    }
}

class Alamat {
    constructor(jalan, kota, negara) {
        this.jalan = jalan
        this.kota = kota
        this.negara = negara
    }
}

const sandy = new Identitas("sandy", "cheeks", "32 st", "Texas", "USA")

console.log(sandy.namadepan)
console.log(sandy.namabelakang)
console.log(sandy.alamat.jalan)
console.log(sandy.alamat.kota)
console.log(sandy.alamat.negara)

// ? OBJECT DIDALAM ARRAY
const buah = [{ nama: "Pisang", warna: "Kuning", Kalori: 100 },
{ nama: "Semangka", warna: "Hijau", Kalori: 40 },
{ nama: "Apel", warna: "Merah", Kalori: 50 },
{ nama: "Jeruk", warna: "Orange", Kalori: 40 }]

buah.push({ nama: "salak", warna: "coklat", kalori: 30 })
buah.forEach(element => {
    console.log(element.nama)
});

// ? SORT() Mengurutkan
const angkaLagi = [2, 3, 5, 1, 4, 8, 0, 6, 10, 9, 7]
angkaLagi.sort((a, b) => a - b)
console.log(angkaLagi);


// ? YIELTS ALGORITHM (SHUFFLE)
const deckRemi = ["AS", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"]
Shuffle(deckRemi)

function Shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
        const random = Math.floor(Math.random() * (index));
        [array[0], array[random]] = [array[random], array[0]]
    }
}

console.log(deckRemi)

// ? DATE() = tanggal
// new Date(Tahun, bulan, tanggal, jam, menit, detik, milidetik)
const tanggal = new Date()
const tahunBaru = new Date(2026, 0, 1, 0, 0, 0, 0)
console.log(tanggal)

const currentTahun = tanggal.getFullYear()
const currentBulan = tanggal.getMonth()
const currentTanggal = tanggal.getDate()
const currentHari = tanggal.getDay()
const currentJam = tanggal.getHours()
const currentMenit = tanggal.getMinutes()
const currentDetik = tanggal.getSeconds()
const currentMiliDetik = tanggal.getMilliseconds()

console.log(currentTahun)
console.log(currentBulan)
console.log(currentTanggal)
console.log(currentHari)
console.log(currentJam)
console.log(currentMenit)
console.log(currentDetik)
console.log(currentMiliDetik)

console.log(tahunBaru);

if (tahunBaru < tanggal) {
    alert("Selamat Tahun Baru!")
}

// ? CLOSURE = INNER FUNCTION = inner function mampu membaca variabel di outer function yang dimana area tersebut disebut closure

// CONTOH SEDERHANA
function outer() {
    let x = 1
    function inner() {
        console.log(x)
    }
    inner()
}

outer()

// CONTOH COUNTER
function counter() {

    let counter = 0
    function tambahCounter() {
        counter++
        console.log(`Counter = ${counter}`)
    }

    // OBJECT
    return { tambahCounter }
}

const counterF = counter()
counterF.tambahCounter()
counterF.tambahCounter()
counterF.tambahCounter()

// CONTOH GAME
function poinGame() {

    let skor = 0

    function tambahPoin(poin) {
        skor += poin
        console.log(`+${skor}pts`)
    }
    function kurangPoin(poin) {
        skor -= poin
        console.log(`-${poin}pts`)
    }
    function ambilPoin() {
        console.log(`Poin Akhir = ${skor}pts`)
    }

    return { tambahPoin, kurangPoin, ambilPoin }
}

const gameP = poinGame()
gameP.tambahPoin(10)
gameP.kurangPoin(4)
gameP.ambilPoin()

// ? SETTIMEOUT & CLEARTIMEOUT
let timerId

function startTimer(params) {
    timerId = setTimeout(() => {
        alert("Halo")
    }, 3000);
    console.log("STARTED");
}

function clearTimer(params) {
    clearTimeout(timerId)
    console.log("CANCELED");
}

// ? PROGRAM JAM DIGITAL
function Jam() {

    const tanggal = new Date()
    let jam = tanggal.getHours()

    const ampm = jam >= 12 ? "PM" : "AM"
    jam = jam % 12 || jam === 0
    jam = jam.toString().padStart(2, 0)
    const menit = tanggal.getMinutes().toString().padStart(2, 0)
    const detik = tanggal.getSeconds().toString().padStart(2, 0)

    const jamDigital = `${jam}:${menit}:${detik} ${ampm}`

    const jamElement = document.getElementById("jam")

    jamElement.textContent = jamDigital
}

setInterval(Jam)

// ? PROGRAM STOPWATCH

const stopwatch = document.getElementById("stopwatch-container")
let timer = null
let startTime = 0
let elapsedTime = 0
let isRunning = false

function startStopwatch() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime
        timer = setInterval(displayStopwatch)
        isRunning = true
    }
}
function stopStopwatch() {
    if (isRunning) {
        startTime = Date.now() - elapsedTime
        clearInterval(timer)
        isRunning = false
    }

}
function resetStopwatch() {
    clearInterval(timer)
    startTime = 0
    elapsedTime = 0
    isRunning = false
    stopwatch.textContent = `00:00:00:00`;
}
function displayStopwatch() {

    let currentTime = Date.now()
    elapsedTime = currentTime - startTime

    let jam = Math.floor(elapsedTime / (1000 * 60 * 60))
    let menit = Math.floor(elapsedTime / (1000 * 60) % 60)
    let detik = Math.floor(elapsedTime / 1000 % 60)
    let milidetik = Math.floor(elapsedTime / (1000 / 10))

    jam = String(jam).padStart(2, 0)
    menit = String(menit).padStart(2, 0)
    detik = String(detik).padStart(2, 0)
    milidetik = String(milidetik).padStart(2, 0)

    stopwatch.textContent = `${jam}:${menit}:${detik}:${milidetik}`
}

// ! ES6 = File js yang bisa di import ke js lain (bisa berupa variabel function class dll)
// import { testEs6, hitungLuas } from "./persegi.js";

// console.log(testEs6)
// console.log(hitungLuas(3,4))

// ?  Synkronus dan Asynkronus
// Contoh Synkronus = Menunggu dulu baru lanjut
function fun1(callback) {
    setTimeout(() => {
        console.log("Tugas 1")
        callback()
    }, 3000);
}
function fun2() {
    console.log("Tugas 2")
    console.log("Tugas 3")
    console.log("Tugas 4")
    console.log("Tugas 5")
}

fun1(fun2)
// Contoh Asynkronus = Sekiranya lama lanjut aja
setTimeout(() => {
    console.log("Tugas 1 Nih")
}, 3000);
console.log("Tugas 2 Nih")
console.log("Tugas 3 Nih")
console.log("Tugas 4 Nih")
console.log("Tugas 5 Nih")


// ! ERROR
// ? try, catch, finaly
try {
    console.log(m)
    throw new Error("");
} catch (error) {
    console.error(error)
} finally {
    console.log("Ini akan selalu dieksekusi")
}

console.log("====== Ini setelah error ========")

// ? PROGRAM KALKULATOR
const tampilkanNilai = document.getElementById("kalkulator-display")

function appendToDisplay(input) {
    tampilkanNilai.value = tampilkanNilai.value + input
}
function clearDisplay(input) {
    tampilkanNilai.value = ""
}
function Kalkulasi(input) {

    try {
        tampilkanNilai.value = eval(tampilkanNilai.value)
    } catch (error) {
        tampilkanNilai.value = "Terjadi kesalahan"
    }
}

// ! DOM = Document Object Model
document.body.style.backgroundColor = "white"


// ? SELECTOR

// ? 1. document.getElementById = Element || null
const h2Buah = document.getElementById("h2Buah")
h2Buah.style.backgroundColor = "lightgreen"


// ? 2. document.getElementsByClassName = HTML Collection (No ForEach)
// const buahBuahan = document.getElementsByClassName("buah")

// for (const buahaja of buahBuahan) {
//     buahaja.style.backgroundColor = "lightgreen"
// }

// // Jika ingin menggunakan foreach
// Array.from(buahBuahan).forEach(buahaja => {
//     buahaja.style.backgroundColor = "lightgreen"
// })


// ? 3. document.getElementsByTagName = HTML Collection (No ForEach)
// const ulElements = document.getElementsByTagName("ul")

// for (const ulElement of ulElements) {
//     ulElement.style.backgroundColor = "cyan"
// }

// ? 4. document.querySelector = Element Pertama || null
// const h2Element = document.querySelector("h2")

// ? 5. document.querySelectorAll= Nodelist
// const liElements = document.querySelectorAll("li")


// liElements.forEach(liElement => {
//     liElement.style.backgroundColor = "lightblue"
// });

// ? DOM NAVIGATION = Memudahkan navigasi struktur html
// ? ------------- firstElementChild ------------------
const parent1 = document.getElementById("parent1")
const child1p1 = parent1.firstElementChild
child1p1.style.backgroundColor = "red"

// ? ------------- lastElementChild ------------------
const parent2 = document.getElementById("parent2")
const child1p2 = parent2.lastElementChild
child1p2.style.backgroundColor = "gray"

// ? ------------- nextElementSibling ------------------
const child2p3 = document.getElementById("child2p3")
const child3p3 = child2p3.nextElementSibling
child3p3.style.backgroundColor = "blue"

// ? ------------- previousElementSibling ------------------
const child2p2 = document.getElementById("child2p2")
const child1p2New = child2p2.previousElementSibling
child1p2New.style.backgroundColor = "blue"

// ? ------------- parentElement  ------------------
const child1p3 = document.getElementById("child1p3")
const parent3 = child1p3.parentElement
parent3.style.backgroundColor = "green"

// ? ------------- children  ------------------
const parent1new = document.getElementById("parent1")
const parent1newAllChild = parent1new.children

for (let parent1newChild of parent1newAllChild) {
    parent1newChild.style.backgroundColor = "lightgreen"
}

// ? MENAMBAH, MENGUBAH, DAN MENGHAPUS ELEMENT HTML
// ? ------------- createElement ------------------
const liBaru = document.createElement("li")
// ? ------------- Memberi Atribut / Properti ------------------
liBaru.id = "nix"
liBaru.textContent = "NixOS"
liBaru.style.color = "blue"
// ? ------------- Meng-Append / Menambah nya ke DOM------------------
// document.body.prepend(liBaru)
// document.body.append(liBaru)
const linuxDistros = document.getElementById("linux-distro")
const archDistros = document.getElementById("arch")
const debianDistros = document.getElementById("debian")
const suseDistros = document.getElementById("suse")
linuxDistros.append(liBaru)
// document.body.insertBefore(liBaru, archDistros)
linuxDistros.insertBefore(liBaru, suseDistros)
// ? ------------- Menghapus Element -----------------
// document.body.removeChild(liBaru)
// linuxDistros.removeChild(liBaru)

// ? ------------- EventListener -----------------
// addEventListener(event, callback)
const thisBox = document.getElementById("thisbox")

// CLICK
// function clickBox(event) {
//     console.log(event)
//     event.target.style.backgroundColor = "orange"
//     event.target.textContent = "Ouch!"
// }
// thisBox.addEventListener("click", clickBox)
// Jika menggunakan arrow function
thisBox.addEventListener("click", event => {
    event.target.style.backgroundColor = "red"
    event.target.textContent = "Ouch!"
})

// MOUSEOVER
function mouseOverBox(event) {
    event.target.style.backgroundColor = "yellow"
    event.target.textContent = "Don't do it!"
}
thisBox.addEventListener("mouseover", mouseOverBox)

// MOUSELEAVE
function mouseLeaveBox(event) {
    event.target.style.backgroundColor = "lightgreen"
    event.target.textContent = "CLick Me!"
}
thisBox.addEventListener("mouseleave", mouseLeaveBox)

// ? ------------- document.AddEventListener -----------------
// keydown, keyup
// KEYDOWN
document.addEventListener("keydown", event => {
    console.log(event.key)
})

// KEYUP
document.addEventListener("keyup", event => {
    console.log(event.key)
})


// ? ------------- SIMPLE MOVING GAME -----------------
const thebox = document.getElementById("thisisbox")
let move = 10
let y = 0
let x = 0

// document.addEventListener("keydown", event => {
//     if (event.key.startsWith("Arrow")) {

//         switch (event.key) {
//             case "ArrowUp":
//                 y = y - move
//                 break;
//             case "ArrowDown":
//                 y = y + move
//                 break;
//             case "ArrowLeft":
//                 x = x - move
//                 break;
//             case "ArrowRight":
//                 x = x + move
//                 break;
//             default:
//                 break;
//         }

//         thebox.style.top = `${y}px`
//         thebox.style.left = `${x}px`
//     }
// })

// SHOWING AND HIDING ELEMENT (TOGGLE)
const thisImg = document.getElementById("thisImg")
const thisButton = document.getElementById("thisButton")

thisButton.addEventListener("click", event => {
    if (thisImg.style.visibility === "hidden") {
        thisImg.style.visibility = "visible"
        thisButton.textContent = "Hide"
    } else {
        thisImg.style.visibility = "hidden"
        thisButton.textContent = "Show"
    }
})

// ? ------------- NodeList -----------------
// Static Collection
// Seperti Array tanpa (map, filter, dan reduce)
let buttons = document.querySelectorAll(".buttons")
const nButton = document.getElementById("n-container")

buttons.forEach(button => {
    button.addEventListener("click", event => {
        button.style.backgroundColor = "lightgreen"
    })
});

// Buat Element
const button5 = document.createElement("button") // STEP 1
button5.classList = "buttons" // STEP 2
button5.textContent = "Button 5" // STEP 3
nButton.append(button5) // STEP 4


// Karena nodelist statis maka buttons harus di assign ulang
buttons = document.querySelectorAll(".buttons")
console.log(buttons)


// ? ------------- ClassList -----------------
// add()
// remove()
// toggle()
// replace(oldclass, newclass)
// contains()
const dieButton = document.getElementById("dieButton")

dieButton.classList.add("bg-blue")
dieButton.classList.remove("bg-blue")

dieButton.addEventListener("click", event => {
    event.target.classList.toggle("color-red")

    setTimeout(() => {
        if (event.target.classList.contains("color-red")) {
            event.target.classList.replace("color-red", "color-green")
        }
    }, 3000);
})


// ! GAME BATU GUNTING KERTAS
const bgkPilihan = ["batu", "gunting", "kertas"]
const bgkHasilDisplay = document.getElementById("bgk-hasil")
const bgkPilihanPlayerDisplay = document.getElementById("pilihanPlayer")
const bgkPilihanBotDisplay = document.getElementById("pilihanBot")
let bgkHasil = ""

const bgkSkorPlayerDisplay = document.getElementById("skorPlayer")
const bgkSkorBotDisplay = document.getElementById("skorBot")
let bgkSkorPlayer = 0
let bgkSkorBot = 0

function batuGuntingKertas(pilihanPlayer) {
    let pilihanBot = bgkPilihan[Math.floor(Math.random() * 3)]

    if (pilihanPlayer === pilihanBot) {
        bgkHasil = "WADUH SERI!"
    } else {
        switch (pilihanPlayer) {
            case "batu":
                if (pilihanBot === "gunting") {
                    bgkHasil = "YAY KAMU MENANG!"
                } else {
                    bgkHasil = "KAMU KALAH!"
                }
            case "gunting":
                if (pilihanBot === "kertas") {
                    bgkHasil = "YAY KAMU MENANG!"
                } else {
                    bgkHasil = "KAMU KALAH!"
                }
            case "kertas":
                if (pilihanBot === "batu") {
                    bgkHasil = "YAY KAMU MENANG!"
                } else {
                    bgkHasil = "KAMU KALAH!"
                }
                break;
            default:
                break;
        }
    }

    bgkPilihanPlayerDisplay.textContent = `Player : ${pilihanPlayer}`
    bgkPilihanBotDisplay.textContent = `Bot : ${pilihanBot}`
    bgkHasilDisplay.textContent = bgkHasil

    switch (bgkHasil) {
        case "YAY KAMU MENANG!":
            bgkHasilDisplay.classList.remove("bg-red-lose")
            bgkHasilDisplay.classList.remove("bg-grey-draw")
            bgkHasilDisplay.classList.add("bg-green-win")
            bgkSkorPlayer++
            bgkSkorPlayerDisplay.textContent = bgkSkorPlayer
            break;
        case "KAMU KALAH!":
            bgkHasilDisplay.classList.remove("bg-grey-draw")
            bgkHasilDisplay.classList.remove("bg-green-win")
            bgkHasilDisplay.classList.add("bg-red-lose")
            bgkSkorBot++
            bgkSkorBotDisplay.textContent = bgkSkorBot
            break;
        default:
            bgkHasilDisplay.classList.add("bg-grey-draw")
            bgkHasilDisplay.classList.remove("bg-green-win")
            bgkHasilDisplay.classList.remove("bg-red-lose")
            break;
    }
}

// ! IMAGE SLIDER
const imageElement = document.querySelectorAll(".slides img")
let imageIndex = 0;
let intervalId = null;

// Menunggu agar DOM 100% dimuat
document.addEventListener("DOMContentLoaded", initializeDisplay)

function initializeDisplay() {
    if (imageElement.length > 0) {
        imageElement[imageIndex].classList.add("showSlide")
        intervalId = setInterval(nextSlide, 300000)
    }
}

function showSlider(index) {
    if (index >= imageElement.length) {
        imageIndex = 0
    } else if (index < 0) {
        imageIndex = imageElement.length - 1
    }
    console.log(imageIndex)
    console.log(index)
    console.log(imageElement)

    imageElement.forEach(derImage => {
        derImage.classList.remove("showSlide")
    })
    imageElement[imageIndex].classList.add("showSlide")
}

function prevSlide() {
    clearInterval(intervalId)
    imageIndex--
    showSlider(imageIndex)
}
function nextSlide() {
    imageIndex++
    showSlider(imageIndex)
}

// ? CALLBACK HELL = callback yang terlalu banyak hingga sulit dibaca
function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 is completed")
        callback()
    }, 400);
}
function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 is completed")
        callback()
    }, 500);
}
function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 is completed")
        callback()
    }, 300);
}
task1(() => {
    task2(() => {
        task3(() => {
            console.log("All Task Finished!")
        })
    })
})

// ! PROMISE = promise to return something (Untuk menghindari Callback hell)
// ? promise((resolve, reject))
function feedTheCat() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const catIsFeeded = true
            if (catIsFeeded) {
                resolve("You're Cat is Feeded!")
            } else {
                reject("You DIDNT feed your cat!")
            }
        }, 6500);
    });

}

function cleanBedroom() {


    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const bedroomIsCleaned = false
            if (bedroomIsCleaned) {
                resolve("You're bedroom is cleaned! nice")
            } else {
                reject("You DIDNT clean your bedroom!")
            }
        }, 7500);
    });

}

function takeTheTrash() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trashIsOut = true
            if (trashIsOut) {
                resolve("The Trash has been taken")
            } else {
                reject("The Trash Is still INSIDE!")
            }
        }, 6500);
    });

}

// feedTheCat().then((result) => {console.log(result); return cleanBedroom()})
//             .then((result) => {console.log(result); return takeTheTrash()})
//             .then((result) => {console.log(result); console.log("GOOD!")})
//             .catch((err) => {console.error(err)})


// ! ASYNC/AWAIT = harus digunakan bersamaan
// ? Async = return a promise
// ? Await = make a async function to return a promise
async function kegiatan() {

    try {
        const feedTheCatResult = await feedTheCat()
        console.log(feedTheCatResult)

        const cleanBedroomResult = await cleanBedroom()
        console.log(cleanBedroomResult)

        const takeTheTrashResult = await takeTheTrash()
        console.log(takeTheTrashResult)

        console.log("WELL DONE!")
    } catch (error) {
        console.error(error)
    }

}

kegiatan()


// ! JSON (JavaScript Object Notation)= Used to exchange data beetween web and server biasanya berupa array dan object
// ? JSON.stringify = convert json into single long string
// ? JSON.parse = convert json into js Object

const namaJson = [
    "Spongebob",
    "Patrick",
    "Squidward"
];

const parseNamaJson = `[
    {
        "Nama": "Patrick",
        "Age": 34,
        "isEmployed": false,
        "Hobbies": [
            "Eat",
            "Sleep",
            "Jellyfishing"
        ]
    }
]`;

// Stringify
const stringNamaJson = JSON.stringify(namaJson)
console.log(stringNamaJson)

// Parse
const parseNamaJsonResult = JSON.parse(parseNamaJson)
console.log(parseNamaJsonResult)

// Fetch
fetch("orang.json").then(response => response.json())
    .then(values => values.forEach(value => console.log(value.Nama)))
    .catch(err => console.log(err))


// ! fetch() = digunakan untuk berinteraksi dengan API
// ? Penggunaan sederhana
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => console.log(response))
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// ? Throw Error
// fetch("https://pokeapi.co/api/v2/pokemon/ditto")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Data tidak ditemukan (404 Not Found)");
//         } else {
//             // Konversi ke json
//             response.json()
//             console.log(response)
//         }
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

// ? Jika menggunakan Async/Await
FetchData()

async function FetchData() {

    // await
    const response = await fetch("https://api.thecatapi.com/v1/images/search")

    if (!response.ok) {
        throw new Error("Data tidak ditemukan (404 Not Found)")       
    } else {

        // await
        const data = await response.json()
        console.log(data[0].url)
        const dataImage = data[0].url

        const randomCatImg = document.getElementById("catRandomImg")

        randomCatImg.src = dataImage
        randomCatImg.style.display = "block"
        randomCatImg.style.width = "400px"

    }

    console.log(error)
}

// ! CUACA
const cuacaForm = document.querySelector(".cuaca-form")
const cuacaInput = document.getElementById("kota-form")

const card = document.querySelector(".cuaca-card")
const errorMsg = document.getElementById("cuaca-card-error")

const apiKey = "eb235674bb746629cb773fb77ba13c75"


cuacaForm.addEventListener("submit", async event => {

    event.preventDefault()
    const kota = cuacaInput.value


    if (kota) {
        card.style.display = "block"
        errorMsg.style.display = "none"
        try {
            const takeData = `http://api.openweathermap.org/data/2.5/weather?q=${kota}&appid=${apiKey}`

            // const cekApi = `https://api.openweathermap.org/data/2.5/weather?q=peshawar&appid=${apiKey}`
            
            const response = await fetch(takeData)
            const data = await response.json()
            ambilDataCuaca(data)
            
            
        } catch (error) {
            alert(error)
        }
    } else {
        card.style.display = "none"
        errorMsg.style.display = "block"
    }

})


async function ambilDataCuaca(kota) {
    // const {}
    console.log(kota)

    const namaKota = kota.name
    const suhu = kota.main.temp
    const suhuTerasa = kota.main.feels_like
    const kelembapan = kota.main.humidity
    const deskripsi = kota.weather[0].description

    const suhuCelcius = KonversiCelcius(suhu)
    const suhuTerasaCelcius = KonversiCelcius(suhuTerasa)

    const suhuCelciusFormat = suhuCelcius.toFixed(0)
    const suhuTerasaCelciusFormat = suhuTerasaCelcius.toFixed(0)

    function KonversiCelcius(kelvin) {
        return kelvin - 273.15
    }

    console.log(namaKota)
    console.log(`${suhuCelciusFormat}°C`)
    console.log(`Terasa Seperti : ${suhuTerasaCelciusFormat}°C`)
    console.log(`${kelembapan}%`)
    console.log(`${deskripsi}`)

    tampilkanCuaca(namaKota, suhuCelciusFormat, suhuTerasaCelciusFormat, kelembapan, deskripsi)
}

function tampilkanCuaca(nama, suhu, terasa, kelembapan, deskripsi) {
    const tampilkanNama = document.getElementById("cuaca-card-kota")
    const tampilkanSuhu = document.getElementById("cuaca-card-suhu")
    const tampilkanTerasa = document.getElementById("cuaca-card-terasa")
    const tampilkanKelembapan = document.getElementById("cuaca-card-kelembapan")
    const tampilkanDeskripsi = document.getElementById("cuaca-card-deskripsi")

    tampilkanNama.textContent = nama
    tampilkanSuhu.textContent = `${suhu}°C`
    tampilkanTerasa.textContent = `Terasa Seperti : ${terasa}°C`
    tampilkanKelembapan.textContent = `Kelembapan : ${kelembapan}%`
    tampilkanDeskripsi.textContent = deskripsi
}
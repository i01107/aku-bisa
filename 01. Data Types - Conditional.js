// # DATA TYPES
// Number
let num = 5 // deklarasi + assignment ~ insisasi

// String
let str = 'belajar' // deklarasi + assignment ~ insisasi

// Boolean
let isBoolean = true // deklarasi + assignment ~ insisasi

// console.log(num, typeof num)
// console.log(str, typeof str)
// console.log(isBoolean, typeof isBoolean)

// # CONDITIONALS
// if (condition) {
//   // blok kode
// }
/*
condition harus bernilai TRUE ketika di evaluasi

contoh yang bernilai TRUE :
truthy :
- true
- number, selain 0
- string, kalau length > 0

!falsy :
- false
- number, hanya 0
- string, kalau length === 0
- undefined
- NaN
- null

*/

// MEMANFAATKAN IF UNTUK PENGECEKAN
// coba cek, num itu ganjil bukan, kalau iya, tampilkan kalau dia ganjil

// if(num % 2 === 1) { // buat cek apakah dia ganjil
//   console.log(num, "adalah ganjil")
// }

// num = 4
// if(num % 2 === 1) { // buat cek apakah dia ganjil
//   console.log(num, "adalah ganjil")
// }

// MANFAATKAN IF UNTUK MEMBATASI
// kalau angkanya ganjil dia harus memanggil fungsi hitung1, dan kalau genap dia harus memanggil fungsi hitung2
// function hitung1() {
//   return 'ha'
// }

// function hitung2() {
//   return 'ah'
// }

// if (num % 2 === 1) {
//   hitung1()
// } else { // auto genap
//   hitung2()
// }

// HAL DASAR CONDITIONAL ( ATURAN MAIN )

// if (condition) {
  
// } else if (condition2) {
  
// } else {

// }

// 1. jangan campur kasusnya jika memang tidak simpel
// contoh : siswa lulus jika nilainya 70 ke atas, dan absen maksimal 3
let nilai = 80
let absen = 2

// langkah 1
// if (nilai >= 70) { // if di sini khusus untuk cek nilai
//   console.log(nilai, "lulus")
// } else { // else di sini khsusus untuk cek nilai
//   console.log(nilai, "tidak lulus")
// }

// langkah 2
// if (absen <= 3) {
//   console.log(absen, "lulus")
// } else {
//   console.log(absen, "tidak lulus")
// }

// langkah 3 : disatukan langkah 1 & 2
// if (nilai >= 70) { // if di sini khusus untuk cek nilai
//   if (absen <= 3) {
//     console.log(absen, "lulus")
//   } else {
//     console.log(absen, "tidak lulus")
//   }
// } else { // else di sini khsusus untuk cek nilai
//   console.log(nilai, "tidak lulus")
// }

// langkah 4 : penyesuaian
// if (nilai >= 70) { // if di sini khusus untuk cek nilai
//   if (absen <= 3) {
//     console.log(nilai, absen, "lulus")
//   } else {
//     console.log(nilai, absen, "tidak lulus")
//   }
// } else { // else di sini khsusus untuk cek nilai
//   console.log(nilai, "tidak lulus")
// }

// // langkah 5 : refactoring
// if (nilai >= 70 && absen <= 3) {
//   console.log(nilai, absen, "lulus")
// } else { // else di sini khsusus untuk cek nilai
//   console.log(nilai, "tidak lulus")
// }

// let isAtlit = true // kalo atlit outo lulus

// if (nilai >= 70) { // if di sini khusus untuk cek nilai
//   if (absen <= 3 || isAtlit) {
//     console.log(nilai, absen, "lulus")
//   } else {
//     console.log(nilai, absen, "tidak lulus")
//   }
// } else { // else di sini khsusus untuk cek nilai
//   console.log(nilai, "tidak lulus")
// }



// # SWITCH CASE
// 1. opsi nya udh lebih dari 2 atau 3
// 2. opsi nya berupa sebuah value BUKAN RANGE !!!
// contoh range : nilai 80 - 100 = A => TIDAK BISA MASUK SWITCH CASE
/*
  contoh soal 1 : setiap value punya case masing2
  nilai A, "PERFECT"
  nilai B, "GOOD"
  nilai C, "OK"
  nilai D, "BAD"
  nilai E, "WORST"
  selain semua yang di atas, "INVALID"
*/

nilai = 'E'

switch (nilai) {
  case 'A':
    console.log("PERFECT")
    break;
  case 'B':
    console.log("GOOD")
    break;
  case 'C':
    console.log("OK")
    break;
  case 'D':
    console.log("BAD")
    break;
  case 'E':
    console.log("WORST")
    break;
  default:
    console.log("INVALID")
    break;
}

/*
  contoh soal 2 : beberapa kasus yang case nya sama
  diberikan sebuah huruf, untuk huruf vocal nanti keluar tulisan "vokal", dan "konsonan" untuk huruf selain huruf vocal
  
  vokal : a i u e o
*/
let karakter = 'e'

switch (karakter) {
  case 'a':
  case 'i':
  case 'u':
  case 'e':
  case 'o':
    console.log('vokal yang lain')
    break;
  default:
    console.log('konsonan')
    break;
}
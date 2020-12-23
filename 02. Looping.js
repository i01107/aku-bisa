// Looping itu melakukan pengulangan
// Dalam for loop, ada variable yang dapat kita manfaatkan, kita sebut ini dengan variable looping
// Dan, kita sering memanfaatkan pengulangan ini untuk iterasi / penelusuran string atau array

let arr = [1, 2, 3, 4, 5]

// for (/* INISIASI */; /* VALIDITAS & STOP COND. */; /* INCREMENT */) {
//   // blok kode
// }

// # INISIASI
// biasanya berupa deklarasi dengan let, variabel biasanya 1 huruf aja, dan kita namakan variable looping
// start point, tidak harus 0, tapi biasanya diisi 0 jika akan melakukan penelusuran terhadap string atau array

// let i = 5

// # VALIDITAS & STOP COND.
// VALIDITAS = apakah masih memenuhi syarat berjalannya pengulangan
// STOP COND. = apakah variable looping sudah keluar dari nilai yang valid

// i < 10, stop condition => 10

// # INCREMENT
// bagaimana kita ingin varible itu maju
// jika maju per 1 angka, biasanya kita pake ++
// jika maju per n angka, kita pake += n

// for (let i = 5; i < 10; i++) {
//   console.log(i);
// }

// console.log("==");

// for (let i = 5; i < 10; i += 3) {
//   console.log(i);
// }

// FOR LOOP terbagi 2 :
// 1. butuh keteraturan, biasanya variable loopingnya kita akan pakai
// 2. tidak butuh keteraturan, kita ga peduli sama variable loopingnya, yang penting jumlah pengulangannya yang kita perhatikan

// 1. butuh keteraturan
// tampilkan angka dari 1 - 20
// for (let i = 1; i <= 20; i++) {
//   console.log(i)
// }
// console.log("==")
// // tampilkan angka dari 90 s/d 80
// for (let i = 90; i >= 80; i--) {
//   console.log(i)
// }
// console.log("==")
// // tampilkan angka dari 10 s/d 0, decrement 3 angka
// for (let i = 10; i >= 0; i -= 3) {
//   console.log(i)
// }

// 2. tidak butuh keteraturan
// tampilkan tulisan hacktiv8 sebanyak 10 kali
// for(let i = 1000; i > 900; i -= 10) {
//   console.log(i, 'hacktiv8')
// }

// ####

// # WHILE

// bisa dipakai seperti for, untuk hal yg teratur
let angka = 10

while (angka > 0) {
  console.log(angka)
  angka--
}
console.log("==");
// lebih sering digunakan untuk kondisi increment atau decrement yang tidak teratur, biasanya karena memakai formula / rumus
let x = 1
while (x < 1000) {
  // f(x) = x2 + 2x + 1 => formula
  x = ( x * x ) + ( 2 * x ) + 1
  console.log(x)
}
console.log(x, " > di luar loop")

console.log("==") // pembatas

// 1. menggunakan for, tampilkan angka dari 100 s/d 110
// cara 1 :
for (let i = 100; i <= 110; i++) {
  console.log(i);
}

console.log("==") // pembatas

// cara 2 (perhatikan dmn beda nya):
for (let i = 100; i < 111; i++) {
  console.log(i);
}

console.log("==") // pembatas

// 2. menggunakan for, tampilkan angka dari 100 s/d 150, maju per 3 angka
// salah satu caranya :
for (let foo = 100; foo < 151; foo += 3) {
  console.log(foo)
}

console.log("==") // pembatas

// 3. menggunakan for, tampilkan angka dari 78 s/d 45, mundur per 7 angka
// salah satu caranya :
for (let bla = 78; bla >= 45; bla -= 7) {
  console.log(bla)
}

console.log("==") // pembatas

// 4. bikin no 1 versi while
// salah satu caranya :
let a1 = 100
while (a1 < 111) {
  console.log(a1)
  a1++
}

console.log("==") // pembatas

// 5. bikin no 3 versi while
// salah satu caranya :
let a2 = 78
while (a2 >= 45) {
  console.log(a2)
  a2 -= 7
}
/*
******
*****
****
***
**
*
*/

let angka = 5 // jumlah karakter yang akan di print

// // FORMULA MENAMPILKAN PER BARIS
// let temp = '' // penampung yang akan di print per baris

// for (let j = 1; j <= angka; j++) {
//   temp += '*'
// }

// console.log(temp)
// // ./FORMULA

// for (let i = 1; i <= angka; i++) {
//   console.log(temp) // => harus digantin dengan hasil FORMULA
// }

// LANGKAH2 PENYELESAIAN
// 1. selesaikan :
// *****

// // FORMULA MENAMPILKAN PER BARIS
// let temp = '' // penampung yang akan di print per baris

// for (let j = 1; j <= angka; j++) {
//   temp += '*'
// }

// console.log(temp)
// // ./FORMULA

// 2. selesaikan :
/*
*
*
*
*
*
*/
// for (let i = 1; i <= angka; i++) {
//   console.log('*') // FORMULA
// }

// 3. selesaikan :
/*
*****
*****
*****
*****
*****
*/
// for (let i = 1; i <= angka; i++) {
//   // FORMULA MENAMPILKAN PER BARIS
//   let temp = '' // penampung yang akan di print per baris

//   for (let j = 1; j <= angka; j++) {
//     temp += '*'
//   }

//   console.log(temp)
//   // ./FORMULA
// }

// 4. selesaikan :
/*
******
*****
****
***
**
*
*/
for (let i = 0; i < angka; i++) {
  // FORMULA MENAMPILKAN PER BARIS
  let temp = '' // penampung yang akan di print per baris

  for (let j = 1; j <= (angka - i); j++) {
    temp += '*'
  }

  console.log(temp)
  // ./FORMULA
}
let num = 7 // input

//output yang diharapkan
/*
    x
   xox
  xoxox
 xoxoxox
xoxoxoxox
*/
// 1. selesaikan semua perhitungannya:
/*
3 => 5
5 => 9
6 => 11
*/
let batas = (num * 2) - 1

// 2. selesaikan (x sebanyak batas ke kanan):
// FORMULA
// let temp = ''
// for (let i = 1; i <= batas; i++) {
//   temp += 'x'
// }
// console.log(temp)
// ./FORMULA

// 3. selesaikan (x sebanyak num ke bawah):
// for (let j = 1; j <= num; j++) {
//   console.log('x')
// }

// 4. gabungkan 2 & 3
/*
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
*/
for (let j = 1; j <= num; j++) {
  // console.log('x')
  
  let temp = ''
  for (let i = 1; i <= batas; i++) {
    temp += 'x'
  }

  console.log(temp)
}

console.log('=====')

// 5. kurangi jumlah x dengan rumus
/*
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
*/
for (let j = 1; j <= num; j++) {
  // console.log('x')
  let batas = (j * 2) - 1 
  // bentuk awal => let batas = (num * 2) - 1
  // ganti num dengan j, agar dinamis. num tidak bernilai dinamis karena num bukan merupakan variabel looping, 
  //sehingga nilainya tidak akan berubah jika nilai input num tidak berubah

  let temp = ''
  for (let i = 1; i <= batas; i++) {
    temp += 'x'
  }
  
  console.log(temp)
}

console.log('=====')

// 6. masukin spasi dengan rumus
/*
    x
   xxx
  xxxxx
 xxxxxxx
xxxxxxxxx
*/
for (let j = 1; j <= num; j++) {
  // console.log('x')

  let temp = ''
  // cetak spasi
  for (let k = 0; k < (num - j); k++) {
    // (num - j), digunakan, karena letak spasi sesuai dengan urutan perulangan (4,3,2,1,0)
  
    temp += ' '
  }

  let batas = (j * 2) - 1 
  for (let i = 1; i <= batas; i++) {
    temp += 'x'
  }
  
  console.log(temp)
}

console.log('=====')

// 7. ganti x dengan o di posisi yang seharusnya
/*
    x
   xox
  xoxox
 xoxoxox
xoxoxoxox
*/
for (let j = 1; j <= num; j++) {
  // console.log('x')
  
  let temp = ''
  // cetak spasi
  for (let k = 0; k < (num - j); k++) {
    temp += ' '
  }

  let batas = (j * 2) - 1
  for (let i = 1; i <= batas; i++) {
    // temp += 'x'

    // ganti x, dengan o jika i genap
    if(i % 2 === 0) {
      temp += 'o'
    } else {
      temp += 'x'
    }
  }
  
  console.log(temp)
}
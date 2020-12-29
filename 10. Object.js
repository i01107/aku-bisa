// // OBJECT

// let mhs = {
//   nama: 'Fiqi',
//   jurusan: 'Kp. Melayu - Lbk Bulus',
//   nilai_akhir: 90
// }

// let student = {
//   nama: 'Rama',
//   batch: 'Helsinki',
//   nilai_challenge: [100, 90, 98, 95, 100]
// }

// let obj = {}

// // contoh soal : hitung vokal, konsonan, jumlah huruf dari kalimat berikut
// let str = 'di depan orang tuamu kau hancurkan diriku 123 ***'

// let hasil = {
//   huruf: {
//     vokal: 1,
//     konsonan: 0
//   },
//   kalimat: str,
//   total: str.length
// }

// let kamus = 'aiueo'

// for (let i = 0; i < str.length; i++) {
//   // str[i] = 'a'
//   let isVokal = false
//   // iterasi kamus, cek apakah karakter yang sekarang a
//   for (let j = 0; j < kamus.length; j++) { // a - o
//     // cek per huruf kamus apakah sama dengan str saat ini
//     if (kamus[j] === str[i]) {
//       hasil.huruf.vokal++
//       isVokal = true
//       break
//     }
//   }

//   if(!isVokal) { // jika vokal blm ketemu
//     // cek apakah dia konsonan ? 

//     hasil.huruf.konsonan++
//   }
// }

// for (let i = 0; i < str.length; i++) {
//   switch (str[i]) {
//     case 'a':
//     case 'i':
//     case 'u':
//     case 'e':
//     case 'o':
//       hasil.huruf.vokal++
//       break;
//     default:
//       // - sudah pasti str[i] bukan vokal
//       // cek apakah dia konsonan ?
//       if (str[i].toLowerCase() !== str[i].toUpperCase()) {
//         // - sudah pasti str[i] bukan vokal DAN bukan karakter salain huruf
//         hasil.huruf.konsonan++
//       }
//       break;
//   }
// }

let obj = {}

let arr = ['a', 'b', 'c', 'd', 'a', 'b', 'c', 'd', 'a', 'b', 'c', 'd']

for (let i = 0; i < arr.length; i++) {
  let key = arr[i]
  if (obj[key] === undefined) {
    obj[key] = 0
  }

  obj[key]++
}

console.log(obj)

/*
Buatlah fungsi dengan nama kompilasi, dengan parameter input array 2 dimensi seperti pada contoh. 
Fungsi bertugas untuk membuat rekap data dalam bentuk object, 
dimana semua data akan dikelompokkan berdasarkan jurusan. Bentukan output dapat dilihat pada contoh
Contoh :
[
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]
output : 
{
  Biologi: ['Jonas', 'Barbosz', 'Edmund'],
  Fisika: ['Ulrich', 'Claudia'],
  Akuntansi: ['Hannah']
}
*/
let arr_input = [
  ['Biologi', 'Jonas'],
  ['Fisika', 'Ulrich'],
  ['Akuntansi', 'Hannah'],
  ['Biologi', 'Barbosz'],
  ['Fisika', 'Claudia'],
  ['Biologi', 'Edmund'],
]

function kompilasi(arr) {
  let hasil = {}

  for(let b = 0; b < arr.length; b++) {
    // console.log(arr[b])
    let key = arr[b][0]
    let value = arr[b][1]

    if(hasil[key] === undefined) {
      hasil[key] = []
    }

    hasil[key].push(value)
  }

  return hasil 
}

console.log(kompilasi(arr_input))


// # TOKO X
function countProfit(shoppers) {
  let listBarang = [
    ['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
  ]
  // you can only write your code here!
  let hasil = []

  //UNIQUE CASE
  if(shoppers.length === 0) {
    return hasil
  } 
  //buat object, isi dengan informasi yg sudah diketahui
  for(let a = 0; a < listBarang.length; a++) {
    object = {
      'product': listBarang[a][0],
      'shoppers': [],
      'leftOver': listBarang[a][2],
      'totalProfit': 0
    }

    for(let b = 0; b < shoppers.length; b++) {
      // console.log(shoppers[b])
      // console.log(b, 'ini indeks b')
      //push ke shoppers, kalo produk sama dengan obj.prod dan amount<=leftover
      if(shoppers[b].product === object.product && shoppers[b].amount <= object.leftOver) {
        object.shoppers.push(shoppers[b].name)
        //update leftOver
        object.leftOver = (object.leftOver - shoppers[b].amount)
      }
      //isi total profit, kalo arr shoppers tidak kosong
      //buat penampung untuk total item per produk
      //totalProfit = total item * harga barang
      if(object.shoppers.length !== 0) {
        let totalAmount = 0
        totalAmount += shoppers[b].amount
        // console.log(totalAmount)
        object.totalProfit = (totalAmount * listBarang[a][1])
      }
    }
    // console.log(object)
    hasil.push(object)
  }
  return hasil
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
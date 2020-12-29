// ARRAY

// let arr_num = [1, 2, 3, 4, 5]
// let arr_str = ['a', 'aha', 'b']
// let arr_bol = [true, false, false, true]

// let arr = []
// arr.push(1)
// arr[1] = 2
// // foo :
// // - penyimpanan data bertipe Number
// // - penyimpanan hasil perhitungan
// let foo = 2
// arr[foo] = 5

// console.log(arr)
// console.log(arr[1])

// let str = 'hacktiv8'
// str[0] = 'l'

// console.log(str)

// arr_str[1] = 'ciciw'
// console.log(arr_str)

// for (let i = 0; i < arr_num.length; i++) {
//   console.log(arr_num[i])
// }


let arr2 = [
  [1, 2, 3],
  [4, 5],
  [9, 8, 4]
]

// // 1. buat array dengan 1 element dari soal, biasanya index 0
// let temp = [
//   [1, 2, 3]
// ]

// // FORMULA
// for (let i = 0; i < temp[0].length; i++) {
//   console.log(temp[0][i])
// }
// // ./FORMULA

// // 2. buat iterasi array utama
// for (let j = 0; j < arr2.length; j++) {
//   console.log(arr2[j])
// }

// // 3. gabungkan FORMULA ke dalam step 2, mengganti console.log
// for (let j = 0; j < arr2.length; j++) {
//   // FORMULA
//   for (let i = 0; i < temp[0].length; i++) {
//     console.log(temp[0][i])
//   }
//   // ./FORMULA
// }

// // 4. bikin penyesuaian ( varible, dll)
// for (let j = 0; j < arr2.length; j++) {
//   // FORMULA
//   for (let i = 0; i < arr2[j].length; i++) {
//     console.log(arr2[j][i])
//   }
//   // ./FORMULA
// }

// 36

// 5. sisipkan langkah untuk menjumlahkan :
/*
- siapkan variable penampung hasil penjumlahan
- langsung tambahin console.log di akhir, beri jeda beberapa baris kosong
- copy paste hasil no 4, SESUAIKAN dengan cara mencari baris yang ada console.log nya di dalem nested
- ganti console.log nya dengan penjumlahan nya
*/
// let total = 0

// for (let j = 0; j < arr2.length; j++) {
//   // FORMULA
//   for (let i = 0; i < arr2[j].length; i++) {
//     total += arr2[j][i]
//   }
//   // ./FORMULA
// }

// console.log(total)




// SOAL 1 :
let str = '395628'

/*
333
999999999
55555
666666
22
88888888
*/

// 1. selesaikan untuk menampilkan seluruh isi str
// for (let i = 0; i < str.length; i++) {
//   console.log(str[i])
// }

// # buat proses untuk mengganti console.log

// 2. selesaikan untuk menampilkan angka sejumlah angka itu sendiri ke bawah
// let angka = Number(str[0])
// for (let j = 0; j < angka; j++) {
//   console.log(str[0])
// }

// 3. selesaikan untuk menampilkan angka tersebut ke KANAN
// // FORMULA
// let angka = Number(str[0])
// let temp = ''
// for (let j = 0; j < angka; j++) {
//   temp += str[0]
// }
// console.log(temp)
// // ./FORMULA

// 4. ganti console.log di langkah 1 dengan FORMULA
// for (let i = 0; i < str.length; i++) {
//   // FORMULA
//   let angka = Number(str[0])
//   let temp = ''
//   for (let j = 0; j < angka; j++) {
//     temp += str[0]
//   }
//   console.log(temp)
//   // ./FORMULA
// }

// 5. buat penyesuaian
for (let i = 0; i < str.length; i++) {
  // FORMULA
  let angka = Number(str[i])
  let temp = ''
  for (let j = 0; j < angka; j++) {
    temp += str[i]
  }
  console.log(temp)
  // ./FORMULA
}

console.log(total)

// SOAL 1 :
let str = '395628'

/*
333
999999999
55555
666666
22
88888888
*/

// PENYELESAIAN
/*
1. selesaikan formula cetak str ke samping
2. selesaikan cetak str ke bawah
3. gabungkan 1 dan 2
4. cetak output sesuai permintaan
*/

// EKSEKUSI
// 1. selesaikan formula cetak str ke samping
let temp = ''

for(let a = 0; a < str.length; a++) {
  temp += str[a]
}
console.log(temp)
console.log('=====')

// 2. selesaikan cetak str ke bawah
for(let b = 0; b < str.length; b++) {
  console.log(str[b])
}
console.log('=====')

// 3. gabungkan 1 dan 2
for(let b = 0; b < str.length; b++) {
  // console.log(str[b])

  let temp = ''

  for(let a = 0; a < str.length; a++) {
    temp += str[a]
  }

  console.log(temp)
}
console.log('=====')

// 4. cetak output sesuai permintaan
for(let b = 0; b < str.length; b++) {
  // console.log(str[b])

  let temp = ''

  for(let a = 0; a <= b; a++) {
    temp += str[a]
  }

  console.log(temp)
}
console.log('=====')

// SOAL 2 :
let arr = [
  [1, 2, 3],
  [4, 5],
  [9, 8, 4],
  [13, 8, 10, 100, 55]
]

/*
Mengeluarkan 3 output :
- jumlah total
- jumlah total dari bilangan yang GENAP saja
- jumlah total dari bilangan yang GANJIL saja
- jumlah total dari bilangan yang GENAP DAN di bawah 10 saja
*/

// PENYELESAIAN
/*
1. buat array dengan 1 element dari soal, biasanya index 0
2. buat iterasi array utama
3. gabungkan FORMULA ke dalam step 2, mengganti console.log
4. bikin penyesuaian ( varible, dll)
5. sisipkan langkah untuk menjumlahkan (sesuai output) :

- siapkan variable penampung:
  - hasil penjumlahan seluruhnya
  - hasil penjumlahan bilangan GENAP 
  - hasil penjumlahan bilangan GANJIL
  - hasil penjumlahan bilangan GENAP di bawah 10
- langsung tambahin console.log di akhir, beri jeda beberapa baris kosong
- copy paste hasil no 4, SESUAIKAN dengan cara penjumlahan yang di dalem nested :
  - penjumlahan seluruhnya
  - penjumlahan bilangan GENAP :
    - cek dengan kondisi, jika indeks % 2 = 0, maka jumlahkan, selain itu, jumlahkan ke var jumalah bil.GANJIL
  - penjumlahan bilangan GANJIL
  - penjumlahan bilangan GENAP di bawah 10 :
    - cek dengan kondisi, jika indeks genap && indeks < 10
- ganti console.log nya dengan variable penampung

*/

// EKSEKUSI

// 1. buat array dengan 1 element dari soal, biasanya index 0
let temp = [
  [1, 2, 3]
]
console.log('=====')

// FORMULA
for (let i = 0; i < temp[0].length; i++) {
  console.log(temp[0][i])
}
// ./FORMULA

// 2. buat iterasi array utama
for (let j = 0; j < arr.length; j++) {
  console.log(arr[j])
}
console.log('=====')

// 3. gabungkan FORMULA ke dalam step 2, mengganti console.log
for (let j = 0; j < arr.length; j++) {
  // FORMULA
  for (let i = 0; i < temp[0].length; i++) {
    console.log(temp[0][i])
  }
  // ./FORMULA
}
console.log('=====')

// 4. bikin penyesuaian ( varible, dll)
for (let j = 0; j < arr.length; j++) {
  // FORMULA
  for (let i = 0; i < arr[j].length; i++) {
    console.log(arr[j][i])
  }
  // ./FORMULA
}
console.log('=====')

// 5. sisipkan langkah untuk menjumlahkan (sesuai output) :
/*
- siapkan variable penampung:
- hasil penjumlahan seluruhnya
- hasil penjumlahan bilangan GENAP 
- hasil penjumlahan bilangan GANJIL
- hasil penjumlahan bilangan GENAP di bawah 10
- langsung tambahin console.log di akhir, beri jeda beberapa baris kosong
- copy paste hasil no 4, SESUAIKAN dengan cara penjumlahan yang di dalem nested :
- penjumlahan seluruhnya
- penjumlahan bilangan GENAP :
  - cek dengan kondisi, jika indeks % 2 = 0, maka jumlahkan, selain itu, jumlahkan ke var jumalah bil.GANJIL
- penjumlahan bilangan GANJIL
- penjumlahan bilangan GENAP di bawah 10 :
  - cek dengan kondisi, jika indeks genap && indeks < 10
- ganti console.log nya dengan variable penampung
*/

let total = 0
let totalGenap = 0
let totalGanjil = 0
let totalGenap1 = 0

for (let j = 0; j < arr.length; j++) {
  // FORMULA
  for (let i = 0; i < arr[j].length; i++) {
    total += arr[j][i]

    if(arr[j][i] % 2 === 0) {
      totalGenap += arr[j][i]
    } else {
      totalGanjil += arr[j][i]
    }

    if(arr[j][i] % 2 === 0 && arr[j][i] < 10) {
      totalGenap1 += arr[j][i]
    }
  }
  // ./FORMULA
}

console.log(total)
console.log(totalGenap)
console.log(totalGanjil)
console.log(totalGenap1)
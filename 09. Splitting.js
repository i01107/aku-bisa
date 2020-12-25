function splitting(str, splitter) {
  let hasil = []

  let temp = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== splitter) {
      temp += str[i]
    }

    // push ke array kalau :
    // 1. ketemu splitter
    // 2. ketemu karakter terakhir
    if (str[i] === splitter || i === str.length - 1) {
      hasil.push(temp)
      temp = ''
    }
  }

  return hasil
}


let input = 'saya suka kamu, tapi kamu ko gitu; saya cape ah; maju mundur, ih'

console.log(splitting(input, ','))
// ['saya suka kamu', 'tapi kamu ko gitu; saya cape ah; maju mundur', 'ih']

console.log(splitting(input, ';'))
// ['saya suka kamu, tapi kamu ko gitu', 'saya cape ah', 'maju mundur, ih']

console.log(splitting(input, ' '))



// step 1 : siapin penampung hasil dan return
// function splitting(str, splitter) {
//   let hasil = []

//   return hasil
// }

// step 2 : cek apakah kita sudah bisa iterasi dengan looping for dengan benar
// function splitting(str, splitter) {
//   let hasil = []

//   for (let i = 0; i < str.length; i++) {
//     console.log(str[i])
//   }

//   return hasil
// }

// step 3 : tampilkan karakter HANYA kalau ketemu splitter nya aja
// function splitting(str, splitter) {
//   let hasil = []

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === splitter) {
//       console.log(str[i])
//     }
//   }

//   return hasil
// }

// step 4 : adaptasi teknik print ke kanan, concat ke variabel temp kalau BUKAN splitter
// function splitting(str, splitter) {
//   let hasil = []

//   let temp = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== splitter) {
//       temp += str[i]
//     }

//     // if (str[i] === splitter) {
//     //   console.log(str[i])
//     // }
//   }

//   console.log(temp)

//   return hasil
// }

// step 5 : hasil temp kita push ke array hasil dengan memperhatikan syarat untuk push ke array, hilangkan semua console.log
// function splitting(str, splitter) {
//   let hasil = []

//   let temp = ''
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== splitter) {
//       temp += str[i]
//     }

//     // push ke array kalau :
//     // 1. ketemu splitter
//     // 2. ketemu karakter terakhir
//     if (str[i] === splitter || i === str.length - 1) {
//       hasil.push(temp)
//       temp = ''
//     }
//   }

//   return hasil
// }

// console.log(splitting('1, 2, 3, 4, 5, 6', ','))
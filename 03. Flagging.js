// Membenderakan / menandakan
// membutuhkan implementasi flagging jika :
// ada sebuah syarat untuk menjalankan 1 atau beberapa proses yang HANYA TERJADI SEMENTARA
// penanda kapan 1 atau beberapa proses dijalankan, DAN TIDAK BERLANGSUNG TERUS MENERUS
// penanda akan muncul di awal dan di akhir proses tersebut di trigger atau di matikan
// ada saatnya memeriksa 1 kondisi, ada saatnya tidak

// contoh yg tidak perlu pakai flag :
// - dari angka 1 - 10, tampilkan angka yang genap
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i)
//   }
// }
// TIDAK PERLU FLAGGING, karena syarat aksi di baris 10 ada di baris 9, DAN SYARAT INI BERLAKU DI SEPANJANG LOOPING


// // looping angka dari 1 - 10,,, dari 6 - 8, print tulisan "aha"
// // jika ketemu angka 6, kita mulai print "aha"
// // jika ketemu angka 9, kita stop print "aha"

// // 1. sediakan flag DI LUAR LOOPING
// let flag = false
// for (let x = 1; x <= 10; x++) {
//   // 2. tentukan kondisi flag berubah
//   if (x === 6) {
//     flag = true
//   }

//   // 3. tentukan kondisi flag kembali ke nilai asal, kalau diperlukan
//   if (x === 9) {
//     flag = false
//   }
  
//   // 4. apa yang akan kamu lakukan terhadap kondisi flag
//   if (flag) {
//     console.log(x, "aha")
//   } else {
//     console.log(x)
//   }
// }

// // CARA LAIN :
// for (let x = 1; x <= 10; x++) {
//   if (x >= 6 && x <= 8) {
//     console.log(x, "aha")
//   } else {
//     console.log(x)
//   }
// }



// contoh harus pake flag :
// ada email, disuruh ambil domain
// fiqi@gmail.com => gmail
// a@b.com => b

let email = 'fiqi@gmail.com'

// start ambil setelah @
// stop ambil ketika ketemu .
// yang kita periksa : @, ., selain @ dan .
// @ : rubah flag jadi true
// . : rubah flag jadi false
// selain di @ dan . : ambil KALAU flag nya true
// if (@) {
  
// } else if (.) {

// } else {
//   // ambil KALAU flag nya true
// }

// 1. bikin flag
let flag = false

// 2. bikin penampung si domain yang mau diambil
let domain = ''

// for (let i = 0; i < email.length; i++) {
//   // kondisi yang merubah flag jadi true
//   if (email[i] === '@') {
//     flag = true
//   } else if (email[i] === '.') {
//     flag = false
//   } else {
//     if (flag) { // cek apakah saya boleh concat ke domain
//       domain += email[i]
//     }
//   }
// }

// for (let i = 0; i < email.length; i++) {
//   if (email[i] === '@') {
//     flag = true
//   }

//   if (email[i] === '.') {
//     flag = false
//   }

//   if (email[i] !== '@' && email[i] !== '.') {
//     if (flag) { // cek apakah saya boleh concat ke domain
//       domain += email[i]
//     }
//   }
// }

for (let i = 0; i < email.length; i++) {
  if (email[i] === '@') {
    flag = true
  }

  if (email[i] === '.' && flag) {
    break
  }

  if (email[i] !== '@' && email[i] !== '.') {
    if (flag) { // cek apakah saya boleh concat ke domain
      domain += email[i]
    }
  }
}

console.log(domain)


// KASUS DARI RAMA

let str = 'blah bloh'

let count = 0

for (let i = 0; i < str.length; i++) {
  let angka = Number(str[i])
  if (angka >= 0 && angka <= 9) {
    count += angka
  }
}

if (count > 0) {
  console.log(count)
} else {
  console.log("tidak ada angka")
}

let num = 'm'

if (num.toLowerCase() !== num.toUpperCase()) {
  console.log(num, "adalah huruf")
}

// butuh memproses num sebagai string
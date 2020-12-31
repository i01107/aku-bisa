/*
Buatlah 2 buah fungsi :
1. decimalToBinary => untuk merubah sebuah ANGKA desimal menjadi string binary
2. binaryToDecimal => untuk merubah sebuah STRING binary menjadi angka desimal
CATATAN : input selalu ada dan valid
*/

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
function decimalToBinary(angka) {
  // your code here
  if (angka === 0) {
    return '0'
  }

  let hasil = ''
  let temp = ''
  while (angka > 0) {
    // hitung remaindernya
    let remainder = angka % 2

    // concat remainder ke temp
    temp += remainder

    // angka kita bagi dengan 2 dan dibulatkan ke bawah untuk langkah selanjutnya
    angka = Math.floor(angka / 2)
  }

  // setelah temp terbentuk, kita akan reverse si temp ke dalam variable hasil
  for (let i = temp.length - 1; i >= 0; i--) {
    hasil += temp[i]
  }

  return hasil
}

console.log(decimalToBinary(0))  // 0
console.log(decimalToBinary(1))  // 1
console.log(decimalToBinary(2))  // 10
console.log(decimalToBinary(5))  // 101
console.log(decimalToBinary(20)) // 10100

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/binary-to-decimal.html
function binaryToDecimal(binary) {
  // your code here
  // reverse string binary nya
  let reversed = ''
  for (let i = binary.length - 1; i >= 0; i--) {
    reversed += binary[i]
  }

  // siapin variable hasil untuk di akumulasi
  let hasil = 0

  for (let i = 0; i < reversed.length; i++) {
    // menghitung hanya ketika binary[i] nya 1
    if (reversed[i] === '1') {
      hasil += Math.pow(2, i) // 2 pangkat i
    }
  }

  return hasil
}

console.log(binaryToDecimal('0'))     // 0
console.log(binaryToDecimal('1'))     // 1
console.log(binaryToDecimal('101'))   // 5
console.log(binaryToDecimal('11011')) // 27
console.log(binaryToDecimal('10100')) // 20
/*
Buatlah 2 buah fungsi :
1. decimalToBinary => untuk merubah sebuah ANGKA desimal menjadi string binary
2. binaryToDecimal => untuk merubah sebuah STRING binary menjadi angka desimal
CATATAN : input selalu ada dan valid
*/

// Algoritma bisa dilihat di https://www.rapidtables.com/convert/number/decimal-to-binary.html
function decimalToBinary(angka) {
  // your code here
  /*
  1. Divide the number by 2.
     5/2 = 1
  2. Get the integer quotient for the next iteration.
  3. Get the remainder for the binary digit.
  4. Repeat the steps until the quotient is equal to 0.
  */
  let hasil = ''
  let temp = angka
  //no.4
  while (temp > 0) {
    if(temp % 2 === 0) {
      hasil = 0 + hasil
      // console.log(hasil, 'ini hasil')
    } else {
      hasil = 1 + hasil
    }
    temp = Math.floor(temp/2)
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
  let hasil = 0
  let counter = 0
  let tampung = 0

  for(let i = 0; i < binary.length; i++) {
    // console.log(binary[i])
    counter++
    // let pow = Math.pow(2, counter) 
    // if(binary[i] === 1) {
    //   tampung = binary[i] * pow
    // } else {
    //   tampung += binary[i]
    // }
  
    console.log(counter)
    console.log(i, 'ini counter')
    console.log(tampung)
    console.log(i, 'ini tampung')
  }
  return hasil
}

console.log(binaryToDecimal('0'))     // 0
console.log(binaryToDecimal('1'))     // 1
console.log(binaryToDecimal('101'))   // 5
console.log(binaryToDecimal('11011')) // 27
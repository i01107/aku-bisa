let num = 5

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
// let batas = (num * 2) - 1

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
let batas = (num * 2) - 1

// 2. selesaikan (x sebanyak batas ke kanan):
// FORMULA
let temp = ''
for (let i = 1; i <= batas; i++) {
  temp += 'x'
}
console.log(temp)
// ./FORMULA

// 3. selesaikan (x sebanyak num ke bawah):
for (let j = 1; j <= num; j++) {
  console.log('x')
}

// 4. gabungkan 2 & 3
/*
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
*/
// for (let j = 1; j <= num; j++) {
//   let temp = ''
//   for (let i = 1; i <= batas; i++) {
//     temp += 'x'
//   }
//   console.log(temp)
// }

// 5. kurangi jumlah x dengan rumus
/*
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
*/
// for (let j = 1; j <= num; j++) {
//   let batas = (j * 2) - 1
//   let temp = ''
//   for (let i = 1; i <= batas; i++) {
//     temp += 'x'
//   }
//   console.log(temp)
// }


// 6. masukin spasi dengan rumus
/*
    x     
   xxx    
  xxxxx   
 xxxxxxx  
xxxxxxxxx 
*/
// for (let j = 1; j <= num; j++) {
//   let batas = (j * 2) - 1
//   let temp = ''
//   for (let i = 1; i <= batas; i++) {
//     if (i <= (num - i)){
//       temp += ' '
//     }else{
//       temp += 'x'
//     }
//   }
//   console.log(temp)
// }
  // for (let j = 1; j <= num; j++) {
  //   let temp = ''
  //   let batas = (j * 2) - 1
  //   for (let k = num; k > j; k--){
  //       temp += ' '
  //   }
  //   for (let i = 1; i <= batas; i++) {
  //     temp += 'x'
  //   }
  //   console.log(temp)
  // }
  


// 7. ganti x dengan o di posisi yang seharusnya
/*
    x
   xox
  xoxox
 xoxoxox
xoxoxoxox
*/

for (let j = 1; j <= num; j++) {
  let temp = ''
  let batas = (j * 2) - 1
  
  for (let k = num; k > j; k--){
      temp += ' '
  }
  for (let i = 1; i <= batas; i++) {
    if (i%2 === 1){
      temp += 'x'
    }else{
      temp += 'o'
    }
  }
  console.log(temp)
}

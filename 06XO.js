
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
let num = 6
let batas = (num * 2) - 1

// 2. selesaikan (x sebanyak batas ke kanan):
// FORMULA
let temp = ''
for (let i = 1; i <= batas; i++) {
  temp += 'x'
}
console.log(temp)
// ./FORMULA

// // 3. selesaikan (x sebanyak num ke bawah):
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

for (let i = 1; i <= num; i++) {
  let temp = ''
  for (let j = 1; j <= batas; j++) {
    temp += 'x'
  }
  console.log(temp);
}

// 5. kurangi jumlah x dengan rumus
/*
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
*/

for (let i = 1; i <= num; i++) {
  let temp = ''
  for (let j = 1; j <= (i*2-1); j++) {
    temp += 'x' 
  }
  console.log(temp);
}

// 6. masukin spasi dengan rumus
/*
    x
   xxx
  xxxxx
 xxxxxxx
xxxxxxxxx
*/


for (let i = 1; i <= num; i++) {
  let temp = ''
  for (let j = num; j >= i; j--) {
    temp += ' ' 
  }
  for (let k = 1; k <= (i*2-1); k++) {
    temp += 'x'
  }
  console.log(temp);
}

// 7. ganti x dengan o di posisi yang seharusnya
/*
    x
   xox
  xoxox
 xoxoxox
xoxoxoxox
*/


for (let i = 1; i <= num; i++) {
  let temp = ''
  for (let j = num; j >= i; j--) {
    temp += ' ' 
  }
  for (let k = 1; k <= (i*2-1); k++) {
    if (k % 2 === 0) {
      temp+='o'
    } else {
      temp+='x'
    }
  }
  console.log(temp);
}
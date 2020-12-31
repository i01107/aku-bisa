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
let batas = (num * 2) - 1

// 2. selesaikan (x sebanyak batas ke kanan):
// FORMULA
let temp = ''
for (let i = 1; i <= batas; i++) {
  temp += 'x'
}
console.log(temp)
// ./FORMULA
console.log('============================')
// 3. selesaikan (x sebanyak num ke bawah):
for (let j = 1; j <= num; j++) {
  console.log('x')
}
console.log('============================')
// 4. gabungkan 2 & 3
/*
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
*/
for (let j = 1; j <= num; j++) {
  // FORMULA
let temp = ''
for (let i = 1; i <= batas; i++) {
  temp += 'x'
}
console.log(temp)
// ./FORMULA
}
console.log('============================')
// 5. kurangi jumlah x dengan rumus
/*
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
*/

for (let j = 1; j <= num; j++) {
  // FORMULA
let temp = ''
for (let i = 1; i <= (j * 2) - 1; i++) {
  temp += 'x'
}
console.log(temp)
// ./FORMULA
}

console.log('============================')
// 6. masukin spasi dengan rumus
/*
    x
   xxx
  xxxxx
 xxxxxxx
xxxxxxxxx
*/

for (let j = 1; j <= num; j++) {
  // FORMULA
let temp = ''
for (let k = num; k > j; k--) {
  temp += ' '
}
for (let i = 1; i <= (j * 2) - 1; i++) {
  temp += 'x'
}
console.log(temp)
// ./FORMULA
}
console.log('============================')
// 7. ganti x dengan o di posisi yang seharusnya
/*
    x
   xox
  xoxox
 xoxoxox
xoxoxoxox
*/

for (let j = 1; j <= num; j++) {
  // FORMULA
let temp = ''
for (let k = num; k > j; k--) {
  temp += ' '
}
for (let i = 1; i <= (j * 2) - 1; i++) {
  if (i % 2 !== 0) {
    temp += 'x'
  } else {
    temp += 'o'
  }
}
console.log(temp)
// ./FORMULA
}
console.log('============================')

// merapikan

for (let i = 1; i <= num; i++) {
  let results = ''
  for (let j = num; j > i; j--) {
    results += '#'
  }
  for (let k = 0; k < (i * 2) - 1; k++) {
    if (k % 2 === 0) {
      results += 'x'
    } else {
      results += 'o'
    }
  }
  console.log(results)
}

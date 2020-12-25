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

// 5. kurangi jumlah x dengan rumus
/*
x
xxx
xxxxx
xxxxxxx
xxxxxxxxx
*/

// 6. masukin spasi dengan rumus
/*
    x
   xxx
  xxxxx
 xxxxxxx
xxxxxxxxx
*/

// 7. ganti x dengan o di posisi yang seharusnya
/*
    x
   xox
  xoxox
 xoxoxox
xoxoxoxox
*/
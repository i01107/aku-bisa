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
// ./FORMULA

// let temp = ''
// for (let i = 1; i <= batas; i++) {
//   temp += 'x'
// }
// console.log(temp)


// 3. selesaikan (x sebanyak num ke bawah):
// for (let j = 1; j <= num; j++) {
// console.log('x')
// }

// 4. gabungkan 2 & 3


// for (let j = 1; j <= num; j++) {
//   let temp = ''
//   for (let i = 1; i <= batas; i++) {
//     temp += 'x'
//   }
//   console.log(temp)
  
// }

/*
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
xxxxxxxxx
*/

// 5. kurangi jumlah x dengan rumus

// let a = batas -1 

// for (let j = 1; j <= num; j++) {          // : 1 
//   let temp = ''                           // : 1 - 11
//   for (let i = 1; i <= batas-a; i++) {        //batas = 11
//     temp += 'x'
//   }
//   a=a-2
//   console.log(temp)
  
// }

/*
x                 //1     - 8
xxx               //3     - 6
xxxxx             //5     - 4
xxxxxxx           //7     - 2
xxxxxxxxx         //9     - 0
*/





// 6. masukin spasi dengan rumus

// let a = batas -1 
// let spasi = ' '

// for (let j = 1; j <= num; j++) {          // : 1 
//   let temp = ''                           // : 1 - 11
//   for (let i = 1; i <= batas-a; i++) {        //batas = 11
//     temp += 'x'
//   }

//   let temp2 = ''
//   for(let k = num; k > j; k--){
//     temp2+= " "
//   }
//   // console.log(temp2)
//   let spasi = temp2+temp
//   console.log(spasi)
//   a=a-2
  // console.log(temp)
  
// }


/*
    x               //4
   xxx             //3 
  xxxxx            //2
 xxxxxxx          //1
xxxxxxxxx
*/

// 7. ganti x dengan o di posisi yang seharusnya





let a = batas -1 
let spasi = ' '

for (let j = 1; j <= num; j++) {          // : 1 
  let temp = ''                           // : 1 - 11
  for (let i = 1; i <= batas-a; i++) {        //batas = 11
    
    if(i%2!==0){
    temp += 'x'
    }else{
      temp += 'o'
    }
  }

  let temp2 = ''
  for(let k = num; k > j; k--){
    temp2+= " "
  }
  // console.log(temp2)
  let spasi = temp2+temp
  console.log(spasi)
  a-=2
  // console.log(temp)
  
}
/*
    x           // 1 = x  , ganjil = o
   xox          //2 = o   , ganjil = x
  xoxox         // 3 = x  , ganjil = o
 xoxoxox        //4 = o   , ganjil = x
xoxoxoxox        //5 = x   , ganjil = o
*/
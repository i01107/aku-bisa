/*
===
Battle Stats
===
Diberikan array 2 dimensi yang merupakan rangkuman hasil dari pertempuran 2 kelompok pasukan. 
Di tiap pasukan, terdapat pasukan-pasukan kecil yang dipimpin oleh Jendralnya masing-masing.
Jika angka Jendral positif, maka di sebuah pertempuran, pasukan Jendral tersebut menang sebanyak angka tersebut
Jika angka Jendral negatif, maka di sebuah pertempuran, pasukan Jendral tersebut kalah sebanyak angka tersebut
Tugas kamu untuk mengeluarkan statistik hasil pertempuran seperti contoh
Contoh :
let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]
console.log(battleStats(battle))
Output :
{
  "Hwang Shi Mok": {
    "Kalah": 1,
    "Menang": 3
  },
  "Savants": {
    "Kalah": 0,
    "Menang": 6
  },
  "Legolas": {
    "Kalah": 30,
    "Menang": 10
  },
}
*/

let battle = [
  ["Hwang Shi Mok", -1],
  ["Savants", 1],
  ["Hwang Shi Mok", 2],
  ["Hwang Shi Mok", 1],
  ["Savants", 5],
  ["Legolas", 10],
  ["Legolas", -20],
  ["Legolas", -10],
]

function battleStats (arr) {
  //output final nya obj dlm obj
  let hasil = {}

  for(let i = 0; i < arr.length; i++) {
    console.log(arr[i])
    let key = arr[i][0]   //tentukan key obj hasil (nama jendral)
    if(hasil[key] === undefined) { //bentuk obj ke2 sesuai output
      hasil[key] = {
        'Kalah': 0,
        'Menang': 0
      }
    }
    //isi value untuk key kalah dan menang
    if(arr[i][1] < 0) {  //angka negatif, untuk kalah
      hasil[key].Kalah += Math.abs(arr[i][1])  //math.abs, agar semua angka bernilai positif
    } else if(arr[i][1] > 0) { //angka positif untuk menang
      hasil[key].Menang += arr[i][1]
    }
  }
  return hasil
}
console.log(battleStats(battle))
//Output :
// {
//   "Hwang Shi Mok": {
//     "Kalah": 1,
//     "Menang": 3
//   },
//   "Savants": {
//     "Kalah": 0,
//     "Menang": 6
//   },
//   "Legolas": {
//     "Kalah": 30,
//     "Menang": 10
//   },
// }

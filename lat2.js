/**
 * KOMPILASI NOMOR INSTRUKTUR
 * ==========================
 * 
 * Untuk suatu keperluan, H8 melakukan pendataan dan pengelompokkan nomor telepon para instruktur.
 * Nomor-nomor telepon yang terkumpul kemudian dikelompokkan berdasarkan 4 digit pertama.
 * Berikut adalah daftar pola nya. D1 adalah digit ke 1, D2 adalah digit ke 2, dst
 * [
 *   ['D1', 'D2', 'D3', 'D4', 'Operator'],
 *   ['0' , '8' , '1' , '2' , 'SimTapi'],
 *   ['0' , '8' , '1' , '5' , 'Menrati'],
 *   ['0' , '8' , '5' , '6' , 'IM5'],
 *   ['0' , '8' , '1' , '7' , 'X-R'],
 *   ['0' , '8' , '3' , '8' , 'Axios'],
 * ]
 * 
 * Buatlah fungsi kompilasi dengan parameter pola dan data hasil pengumpulan nomor telepon, dan hasilkan
 * output objek seperti contoh di bawah
 */

function kompilasi(pola, data) {
  // Your code here
  let hasil = {}
  
  //unique case
  if(data.length === 0) {
    return 'Tidak ada data untuk diolah'
  }
  //buat obj penampung, untuk hasil loop arr pattern
  let operator = {}
  //loop arr pattern, untuk medapatkan nama operator, lalu jadikan objek
  //mulai loop dari indeks 1, karena indeks 0 tidak dibutuhkan
  for(let a = 1; a < pola.length; a++) {
    // console.log(pattern[a])
    let key = pola[a][0] + pola[a][1] + pola[a][2] + pola[a][3]
    let value = pola[a][4] // membuat obj hasil dengan value nama operator
    
    operator[key] = value
    // console.log(operator)
  }

  for(let b = 0; b < data.length; b++){
    // console.log(data[b])
    // buat var penampung, untuk 4 digit angka no hp,
    let digit = data[b].hp[0] + data[b].hp[1] + data[b].hp[2] + data[b].hp[3]
    // console.log(digit)
    //isi obj hasil
    let key = operator[digit]
    let nama = data[b].nama

    //isi key obj, kalo key nya ada,
    if(hasil[key] === undefined) {
      hasil[key] = []
    }
    hasil[key].push(nama)
  }
  // console.log(hasil)
  return hasil
}

let pattern = [
  ['D1', 'D2', 'D3', 'D4', 'Operator'],
  ['0', '8', '1', '2', 'SimTapi'],
  ['0', '8', '1', '5', 'Menrati'],
  ['0', '8', '5', '6', 'IM5'],
  ['0', '8', '1', '7', 'X-R'],
  ['0', '8', '3', '8', 'Axios'],
];

let input = [
  {
    nama: 'Fiqi',
    hp: '08123456789'
  },
  {
    nama: 'Daniel',
    hp: '0856542187'
  },
  {
    nama: 'Zulkifli',
    hp: '08153456789'
  },
  {
    nama: 'Afifah',
    hp: '08123456789'
  },
  {
    nama: 'Devita',
    hp: '08173456789'
  },
];

console.log(kompilasi(pattern, input));
// {
//   SimTapi: [ 'Fiqi', 'Afifah' ],
//   IM5: [ 'Daniel' ],
//   Menrati: [ 'Zulkifli' ],
//   'X-R': [ 'Devita' ]
// }

input = [];

console.log(kompilasi(pattern, input));
// Tidak ada data untuk diolah
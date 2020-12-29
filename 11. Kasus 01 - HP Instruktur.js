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
  if (data.length === 0) {
    return 'Tidak ada data untuk diolah'
  }

  let hasil = {}

  let provider = {}

  // membentuk object provider
  for (let i = 1; i < pola.length; i++) {
    // key = '0812'
    // value = 'SimTapi'
    let key = pola[i][0] + pola[i][1] + pola[i][2] + pola[i][3]
    let value = pola[i][4]

    provider[key] = value
  }

  for (let i = 0; i < data.length; i++) {
    // mendapatkan 4 digit pertama dari no hp
    let first_4_digit = data[i].hp[0] + data[i].hp[1] + data[i].hp[2] + data[i].hp[3]
    // mendapatkan nama operator sesuai dari first_4_digit
    let operator = provider[first_4_digit]
    // mendapatkan nama yang akan dimasukkan ke object
    let nama = data[i].nama

    // jika di object hasil key ( provider ) belum ada, maka dibikin, dan di isi
    if (hasil[operator] === undefined) {
      hasil[operator] = []
    }

    // push nama dari input ke hasil
    hasil[operator].push(nama)
  }

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
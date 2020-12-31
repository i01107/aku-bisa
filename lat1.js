/**
 * GOTTA GROUP THEM ALL
 * ====================
 * 
 * Terdapat fungsi gottaGroupEmAll yang menerima satu parameter berupa array of object, 
 * pada tiap object terdapat 3 key yaitu name, status dan type.
 * Fungsi ini akan mengeluarkan output berupa object dan mengelompokkan tiap pokemon sesuai dengan typenya, 
 * untuk lebih jelasnya silahkan lihat contoh dibawah ini.
 * 
 * Contoh:
 *   - Input: [
 *       {
 *         name: 'Beedrill',
 *         status: { attack: 72, hp: 73, defense: 75 },
 *         type: 'Flying'
 *       },
 *       {
 *         name: 'Gliscor',
 *         status: { attack: 70, hp: 95, defense: 85 },
 *         type: 'Flying'
 *       },
 *       {
 *         name: 'Caterpie',
 *         status: { attack: 30, hp: 45, defense: 55 },
 *         type: 'Bug'
 *       }
 *     ]
 *   - Proses: Mengelompokkan berdasarkan type dan juga mencari pokemon dengan overall status terbaik di tiap kategorinya.
 *   - Output: {
 *        Flying: {
 *          list: [ 'Beedrill', 'Gliscor' ],
 *          bestStatus: { name: 'Gliscor', overallStat: 250 }
 *        },
 *        Bug: {
 *          list: [ 'Caterpie' ],
 *          bestStatus: { name: 'Caterpie', overallStat: 130 }
 *        }
 *      }
 * 
 * RULES:
 *   - Dilarang menggunakan built-in function ES6 map, reduce, filter.
 */

function gottaGroupEmAll(pokemonList) {
  // Your code here
  //output soal >= object di dalam object
  let hasil = {}

  //buat key object luar
  for(let x = 0; x < pokemonList.length; x++) {
    // console.log(pokemonList[x])
    let keys = pokemonList[x].type  //ini key nya
    if(hasil[keys] === undefined) {  // buat obj yg di tengah sesuai output
      hasil[keys] = {
        'list': [],
        'bestStatus': {'name': '', 
        'overallStat': 0}
      }
    }
    //isi list(obj yg di tengah) dengan nama pokemon
    let name = pokemonList[x].name
    //push ke arr list (obj yg di tengah)
    hasil[keys].list.push(name)

    //isi bestStatus(ini adalah obj yg ada di dlm objek tengah)
    //buat var tampung untuk penjumlahan seluruh status
    let score = pokemonList[x].status.attack + pokemonList[x].status.hp + pokemonList[x].status.defense
    //isi overAllstat dengan nilai score tertinggi, krn overAllstat sudah di declare = 0,
    //tidak perlu membuat var pembanding lagi, gunakan overAllstat sebagai var pembanding
    if(hasil[keys].bestStatus.overallStat < score) { 
      hasil[keys].bestStatus.overallStat = score 
      hasil[keys].bestStatus.name = name
    }
  }
  return hasil
}

var pokemonList = [
  {
    name: 'Charizard',
    status: { attack: 84, hp: 78, defense: 78 },
    type: 'Flying'
  },
  {
    name: 'Talonflame',
    status: { attack: 81, hp: 78, defense: 71 },
    type: 'Flying'
  },
  {
    name: 'Gengar',
    status: { attack: 65, hp: 60, defense: 60 },
    type: 'Ghost'
  },
  {
    name: 'Grimer',
    status: { attack: 80, hp: 80, defense: 50 },
    type: 'Poison'
  },
  {
    name: 'Arbok',
    status: { attack: 95, hp: 60, defense: 69 },
    type: 'Poison'
  }
];
console.log(gottaGroupEmAll(pokemonList));
// {
//   Flying: {
//     list: [ 'Charizard', 'Talonflame' ],
//     bestStatus: { name: 'Charizard', overallStat: 240 }
//   },
//   Ghost: {
//     list: [ 'Gengar' ],
//     bestStatus: { name: 'Gengar', overallStat: 185 }
//   },
//   Poison: {
//     list: [ 'Grimer', 'Arbok' ],
//     bestStatus: { name: 'Arbok', overallStat: 224 }
//   }
// }

var pokemonList2 = [
  {
    name: 'Beedrill',
    status: { attack: 72, hp: 73, defense: 75 },
    type: 'Flying'
  },
  {
    name: 'Gliscor',
    status: { attack: 70, hp: 95, defense: 85 },
    type: 'Flying'
  },
  {
    name: 'Caterpie',
    status: { attack: 30, hp: 45, defense: 55 },
    type: 'Bug'
  }
];
console.log(gottaGroupEmAll(pokemonList2));
// {
//   Flying: {
//     list: [ 'Beedrill', 'Gliscor' ],
//     bestStatus: { name: 'Gliscor', overallStat: 250 }
//   },
//   Bug: {
//     list: [ 'Caterpie' ],
//     bestStatus: { name: 'Caterpie', overallStat: 130 }
//   }
// }

module.exports = gottaGroupEmAll;
/*
====
Balada Tuan Tanah
====
Tuan Postoro adalah tuan tanah dengan aset properti yang sangat banyak yang tersebar di banyak komplek. Kali ini dia menugaskan anak buahnya untuk berkeliling dan menuliskan laporan pendapatan dan pengeluaran dari semua properti nya, per komplek. Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya.
Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
Angka negatif : harus membayar pajak sebesar 20 dollar per properti
Angka nol     : semua properti di komplek itu sedang kosong
Contoh :
input = [1, 0, -1]
output :
Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong
input = [1, 1, 1]
output :
Tuan Postoro mendapat 300 dollar, harus membayar pajak sebesar 0 dollar, dan ada 0 komplek yang kosong
input = [1, -2, 3, 0, 5]
output :
Tuan Postoro mendapat 900 dollar, harus membayar pajak sebesar 40 dollar, dan ada 1 komplek yang kosong
*/

/*
FACTS
- Sang anak buah memberikan laporan berupa array, dan akunting Tuan Postoro akan mengkompillasi laporan nya
- Angka positif : mendapatkan pembayaran sewa sebesar angka dikali harga sewa properti, yaitu sebesar 100 dollar per properti
- Angka negatif : harus membayar pajak sebesar 20 dollar per properti
- Angka nol     : semua properti di komplek itu sedang kosong
- Contoh :
input = [1, 0, -1]
output :
Tuan Postoro mendapat 100 dollar, harus membayar pajak sebesar 20 dollar, dan ada 1 komplek yang kosong

RE-ARRANGE / SUMMARY
- input berupa array, ouput berupa kalimat
- angka positif : total pendapatan += jumlah laporan * 100
- angka negatif : total pengeluaran -= jumlah laporan * 20
- angka nol : total komplek ++


INPUT / DEKLARASI
input = [1, 0, -1]
variable penampung pendapatan
variable penampung pengeluaran
variable penampung komplek

PROSES
+ iterasi input terus implementasi perhitungan di SUMMARY
  - kalau positif, pendapatan += element array * 100
  - kalau negatif, pengeluaran += element array * 20 * -1
  - kalau nol, komplek ++

OUTPUT
"Tuan Postoro mendapat [pendapatan] dollar, harus membayar pajak sebesar [pengeluaran] dollar, dan ada [komplek] komplek yang kosong"
*/

// # MELEE RANGED

/*
Diberikan 2 function:

meleeRangedGrouping yang menerima 1 parameter berupa string. Implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta. Format string yang diberikan adalah <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ... sedangkan output yang diharapkan adalah [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]. Jika input adalah string kosong ('') maka return array kosong

Untuk memisahkan nama hero dan tipenya, implementasikan function splitting yang telah diberikan dimana hasil dari function tersebut adalah array satu dimensi. Jika input yang diberikan adalah 'QOP-Ranged,Anti Mage-Melee' maka output yang diharapkan adalah ['QOP-Ranged', 'Anti Mage-Melee']
*/

function splitting(str) {
  //your code here
}

function meleeRangedGrouping (str) {
  //your code here
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []
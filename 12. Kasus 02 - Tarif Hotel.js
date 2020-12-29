/*
Hotel Bintang 5, kelasnya Melati

Kelas2 kamar :
1. Suites
- per malam = Rp. 5.000.000

2. Deluxe
- per malam = Rp. 3.000.000

3. Superior
- per malam = Rp. 1.000.000

4. Economi
- per malam = Rp. 500.000

Semua tipe kamar, maksimal tamu adalah 2 orang. Jika lebih, maka kelebihan tamu akan dihitung sebagai overcharge dengan nilai 10% dari harga kamar per malam

Hitung total billing dari input penyewaan kamar di bawah ini
*/

function billing(rekap_tamu) {
  // your code here
}

let input = {
  kamar: 'Superior',
  tamu: 5,
  durasi: 4, // 4 malam
}

console.log(billing(input))
// Anda menginap di kamar dengan tipe Superior selama 4 malam, dengan jumlah tamu sebanyak 5. Total billing Anda adalah 26000000

input = {
  kamar: 'Deluxe',
  tamu: 5,
  durasi: 4, // 4 malam
}

console.log(billing(input))
// Anda menginap di kamar dengan tipe Deluxe selama 4 malam, dengan jumlah tamu sebanyak 5. Total billing Anda adalah 15600000

input = {
  kamar: 'Economi',
  tamu: 5,
  durasi: 4, // 4 malam
}

console.log(billing(input))
// Anda menginap di kamar dengan tipe Economi selama 4 malam, dengan jumlah tamu sebanyak 5. Total billing Anda adalah 2600000
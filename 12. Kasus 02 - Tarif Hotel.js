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
  // memanfaatkan object untuk keperluan perhitungan
  let tarif = {
    'Suites': [5000000, 500000],
    'Deluxe': [3000000, 300000],
    'Superior': [1000000, 100000],
    'Economi': [500000, 50000]
  }

  let key = rekap_tamu.kamar
  let harga_kamar = tarif[key][0] * rekap_tamu.durasi
  let overcharge = 0

  if (rekap_tamu.tamu > 2) {
    let kelebihan_tamu = rekap_tamu.tamu - 2
    overcharge = kelebihan_tamu * rekap_tamu.durasi * tarif[key][1]
  }
  let total_billing = harga_kamar + overcharge

  return `Anda menginap di kamar dengan tipe ${rekap_tamu.kamar} selama ${rekap_tamu.durasi} malam, dengan jumlah tamu sebanyak ${rekap_tamu.tamu}. Total billing Anda adalah ${total_billing}`
}

let input = {
  kamar: 'Superior',
  tamu: 5,
  durasi: 4, // 4 malam
}

console.log(billing(input))
// Anda menginap di kamar dengan tipe Superior selama 4 malam, dengan jumlah tamu sebanyak 5. Total billing Anda adalah 5200000

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
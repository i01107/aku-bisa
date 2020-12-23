/**
 * ISI BENSIN
 * ==========
 *
 * Buatlah sebuah sistem yang akan menentukan berapa jumlah liter yang akan didapatkan sebuah mobil
 * sesuai dengan uang yang dimiliki pengguna mobil tersebut.
 *
 * Ketika sebuah mobil tidak memiliki 'tipe bensin' atau 'uang' maka tampilkan 'Tidak ada tipe bensin dan uang'.
 *
 * Ketika 'tipe bensin' mobil tersebut adalah 'solar' maka biaya pengisian bensinnya adalah 5000 setiap liternya,
 * Ketika 'tipe bensin' mobil tersebut adalah 'premium' maka biaya pengisian bensinnya adalah 7500 setiap liternya.
 * Ketika 'tipe bensin' mobil tersebut adalah 'pertamax' maka biaya pengisian bensinnya adalah 10000 setiap liternya.
 *
 * Ketika jumlah liter yang didapat tidak bulat, maka hanya tampilkan satu angka dibelakang koma.
 *
 * Contoh 1:
 *   - tipe bensin : solar
 *   - uang        : 30000
 *   - Output      : Mobil anda telah terisi solar sebanyak 6 lt
 * 
 * Contoh 2:
 *   - tipe bensin : premium
 *   - uang        : 35000
 *   - Output      : Mobil anda telah terisi premium sebanyak 4.7 lt
 * 
 * Hint: boleh menggunakan built-in function toFixed().
 */

var tipeBensin = 'pertamax'; // isi value sesuai keinginanmu
var uang = 35000; // isi value sesuai keinginanmu

// Your code here
let tipeSolar = 5000
let tipePremium = 7500
let tipePertamax = 10000
let totalBensin = 0

if (tipeBensin === undefined && uang === 0){
    console.log('Tidak ada tipe bensin dan uang');
} else {
    if (tipeBensin === 'solar'){
        totalBensin = uang / tipeSolar
        totalBensin = totalBensin.toFixed(1)
    }
    else if (tipeBensin === 'premium'){
        totalBensin = uang / tipePremium
        totalBensin = totalBensin.toFixed(1)
    }
    else if (tipeBensin === 'pertamax'){
        totalBensin = uang / tipePertamax
        totalBensin = totalBensin.toFixed(1)
    }
}
console.log(`Mobil anda telah terisi ${tipeBensin} sebanyak ${totalBensin} lt`);
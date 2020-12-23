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

var tipeBensin = 'premium'; // isi value sesuai keinginanmu
var uang = 50000; // isi value sesuai keinginanmu

// Your code here

let literSolar = 5000
let literPremium = 7500
let literPertamax = 10000

if (!tipeBensin || !uang) {
    console.log('Tidak ada tipe bensin dan uang');
} else {
    if (tipeBensin === 'solar') {
        console.log(`Mobil anda telah terisi solar sebanyak ${(uang/literSolar).toFixed(1)} lt`);
    }
    if (tipeBensin === 'premium') {
        console.log(`Mobil anda telah terisi solar sebanyak ${(uang/literPremium).toFixed(1)} lt`);
    }
    if (tipeBensin === 'pertamax') {
        console.log(`Mobil anda telah terisi solar sebanyak ${(uang/literPertamax).toFixed(1)} lt`);
    }
}

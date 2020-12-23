/*
 * Sebuah wahana bermain 'Disney Island' akan memberikan tarif sesuai dengan tinggi dan umur anak
 * dengan ketentuan sebagai berikut:
 *   - Umur 1 tahun ke bawah: Tampilkan 'Dilarang masuk'
 *   - Umur 2-3 tahun: Rp 30.000. Jika tinggi anak umur 2-3 tahun lebih dari 70cm maka tarif akan bertambah Rp. 10.000.
 *   - Umur 4-7 tahun: Rp 40.000. Jika tinggi anak umur 4-7 tahun lebih dari 120cm maka tarif akan bertambah Rp. 15.000.
 *   - Umur 8-10 tahun: Rp 50.000. Jika tinggi anak umur 8-10 tahun lebih dari 150cm maka tarif akan bertambah Rp. 20.000.
 *   - Umur diatas 10 tahun : Rp 80.000.
 * 
 * Tampilkan tarif harga sesuai umur dan tinggi seorang anak!
 */



let umur = 0;
let tinggi =80;
let harga;


if ( umur <= 1 ){
        console.log('dilarang masuk')
}else if (umur >= 2 && umur <= 3) {
        harga = 30000
        if(tinggi > 70){
        harga += 10000
        }
}else if (umur >= 4 && umur <=7 ){
        harga = 40000 
        if(tinggi > 120){
        harga += 15000
        }
}else if (umur >= 8 && umur <=10 ){
        harga = 50000
        if(tinggi > 150){
        harga += 20000
        }
}else if (umur > 10){
        harga = 80000
}
console.log (harga)



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

var tipeBensin = 'solar'; // isi value sesuai keinginanmu
var uang = 30000; // isi value sesuai keinginanmu

// Your code here


if (!tipeBensin && !uang){
    console.log('Tidak ada tipe bensin dan uang')
    
}

if (tipeBensin === 'solar'){
    console.log(`Mobil anda telah terisi ${tipeBensin} sebanyak ${uang / 50000} Lt` )   
}else if (tipeBensin === 'premium'){
    console.log(`Mobil anda telah terisi ${tipeBensin} sebanyak ${uang / 7500} Lt` )
}else if (tipeBensin === 'pertamax'){
    console.log(`Mobil anda telah terisi ${tipeBensin} sebanyak ${uang / 10000} Lt` )
}
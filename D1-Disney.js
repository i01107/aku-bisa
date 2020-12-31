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

 let age = 8;
 let height = 30
 let price = 0

 if (age <= 1) {
     console.log('Dilarang masuk');
 } else {
    if (age >= 2 && height <= 70) {
        price = 30000 
    }   
    else if (height > 70) {
        price = 40000
    }
    if (age >= 4 && height <= 120) {
        price = 40000 
    }   
    else if (height > 120) {
        price = 55000
    }
    if (age >= 8 && height <= 150) {
        price = 50000 
    }   
    else if (height > 150) {
        price = 70000
    }
    if (age >= 10) {
        price = 80000 
    }   
    console.log(price);
 }
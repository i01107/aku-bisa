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

 // Your code here

 let umurAnak = 10
 let tarif = 0
 let tinggiAnak = 151

 if (umurAnak <= 1){
     console.log('Dilarang masuk');
 }else{
    if (umurAnak <= 3){
        tarif = 30000
        if (tinggiAnak > 70){
            console.log(`Rp. ${tarif + 10000}`);
        }else{
            console.log(`Rp. ${tarif}`);
        }
    }
    else if (umurAnak <= 7){
       tarif = 40000
       if (tinggiAnak > 120){
           console.log(`Rp. ${tarif + 15000}`);
       }else{
           console.log(`Rp. ${tarif}`);
       }
   }
   else if (umurAnak <= 10){
       tarif = 50000
       if (tinggiAnak > 150){
           console.log(`Rp. ${tarif + 20000}`);
       }else{
           console.log(`Rp. ${tarif}`);
       }
   }else {
       console.log('Rp. 80000');
   }
 }
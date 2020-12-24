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

 let umur = 1
 let tinggi 
 let harga 

//  if(umur <= 1) {
//    console.log('Dilarang masuk')
//  } else if(umur >= 2 && umur <= 3) {
//   harga = 30000
//   if(tinggi > 70) {
//     harga += 10000
//   }
//  } else if(umur >= 4 && umur <= 7) {
//   harga = 40000
//   if(tinggi > 120) {
//     harga += 15000
//   }
//  } else if(umur >= 8 && umur <= 10) {
//   harga = 50000
//   if(tinggi > 150) {
//     harga += 20000
//   }
//  } else if(umur > 10) {
//   harga = 80000
//  }
//  console.log(harga)

if(umur <= 1) {
  console.log('Dilarang masuk')
}

if(umur >= 2 && umur <= 3) {
  harga = 30000
  if(tinggi > 70) {
    harga += 10000
  }
  console.log(harga)
}

if(umur >= 4 && umur <= 7) {
  harga = 40000
  if(tinggi > 120) {
    harga += 15000
  }
  console.log(harga)
}

if(umur >= 8 && umur <= 10) {
  harga = 50000
  if(tinggi > 150) {
    harga += 20000
  }
  console.log(harga)
}

if(umur > 10) {
  harga = 80000
  console.log(harga)
}
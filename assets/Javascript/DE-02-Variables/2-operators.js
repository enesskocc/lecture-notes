// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const sucuk = 100;
const sakiz = 5;
const kola = 10;

let toplamFiyat = sucuk + sakiz + kola;
console.log(toplamFiyat);


// Bir arttır
toplamFiyat++
console.log(toplamFiyat);

// 10 arttır
toplamFiyat+=10
console.log(toplamFiyat);

//? + operatörü String Concatination işlemi de yapar.
const ad = "ahmet";
const soyAd = "Can";
console.log(ad + " " + soyAd);

//* String Concatination
const s1 = 5,
  s2 = "3";

//   cikarma yapar(string ve number'da cikarma islemi uygulanirsa)

console.log(s1-s2);
console.log(s2-s1);
const s3="iki"

console.log(s2-s3); // not a Number(Nan)

const dogumtarihi=1993;
const isim="Enes"
console.log(isim + " " + (2022-1993) + " " + "yasindadir.");

//! Template literals

console.log(`${isim} ${2022-dogumtarihi} yasindadir.`);

//*ARTIRMA- AZALTMA

let a=5;

 console.log(a++); 
console.log(a);
console.log(++a);
console.log(a);

console.log("*****************");
let b=5; 
 console.log(b--);
 console.log(b);
 console.log(--b);
 console.log(b);

 console.log("*****************");
 let d=--b;
 console.log(d);
 console.log(b);
 
 d=b--;
  console.log(d);
  console.log(b);
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

  let e=5;
  console.log(e*10);


  // * =======================================================
// *                 KARŞILAŞTIRMA OPERATÖRLERİ
// * =======================================================


const sayi1=4;
console.log(sayi1==4);
console.log(sayi1=="4");
console.log(sayi1==="4");
console.log(sayi1!=4);
console.log(sayi1!=5);

 //* ÇAPRMA VE ÜS ALMA
//*--------------------------------------
const pi = 3.14;
const r = 3;
const alan = pi * r ** 2; //?Us alma (**)
const cevre = 2 * pi * r;
console.log(`ÇEVRE: ${cevre} ALAN:${alan}`);

// !---------------MOD ALMA---------

const number=456;

const birler=number%10;
const onlar=Math.floor(number/10)%10;
const yüzler=Math.ceil(number/100);

console.log(birler, onlar, yüzler);

//?Bazı fonksiyonlar
// Math.floor();  //* her zaman en yakın alt tamsayıya yuvarlar
// Math.ceil();  //* her zaman en yakın üst tam sayıya yuvarlar
// Math.trunc(); //* sayının tam kısmını alır.
// Math.round(); //* en yakın tam sayıya yuvarlar.
// Math.random(); //* 0 ve 1 arasında rasgele sayı üretir.


//! MANTIKSAL OPERATÖRLER

//? TRUE
console.log(Boolean(5));//true
console.log(Boolean(-5));//true
console.log(Boolean(-15.5));//true

//? 5 falsy
console.log(Boolean(0)); //false
console.log(Boolean(null));//false
console.log(Boolean(""));//false
console.log(Boolean(undefined));//false
console.log(Boolean(NaN));//false

const v1= false || 0 || 12.6 ||true || false || null;
console.log(v1); //12.6-- bulduğu ilk true değeri döndürür

const v2= false || 0 || null || undefined || NaN;
console.log(v2); // NaN-- cevap false olacaksa son falsy değeri döndürür

const v3= 5 && true && true && 0 && "" ;
console.log(v3);

const v4= 6 && true && 12.5 && 7;
console.log(v4);

//!DEĞİL !

const v5= true;
const v6= 7;

console.log(!v5, !v6);


//! TIP DONUSUMLERI

// const para=Number("1000") + Number("900")
// console.log(para);
// yukarida ve asagidaki ayni
const para=parseInt("1000") + parseInt("900")
console.log(para);


console.log(Number("0x11")); // 17 x=hexa=16
console.log(Number("0b101")); // 5 b=binary 2lik taban
console.log(Number("0o11")); // 9 o=opal=8
console.log(Number("sayi")); //NAN

//* -------- NULLISH COALESCING OPERATOR----------- */
//?  Bir ifadenin null veya undefined olması durumuna göre seçim yapmamıza olanak sağlayan bir operatördür.eğer kullanıcı input a null girer yada hiçbişey (undefined) girmezse, belirteceğim ifadeyi (noname) kabul et
const isim1 = null; // ?null
const defaultIsim = "noname";
const islem1 = isim1 ?? defaultIsim;

console.log(islem1); //noname 
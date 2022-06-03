// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// !3.YÖNTEM  : ARROW FUNCTIONS
// !-----------------------------------------------------------

console.log("****** 3- ARROW FUNCTIONS ******");

//* Örnek1:
//*************************************************************/

const topla=(a,b) => a+b;
console.log(topla(3,5));

//* Örnek2:
//*************************************************************/

const usal=(t,ü)=> t**ü
console.log(usal(2,4));

//* Örnek3: Cift mi tek mi kontrol fonskiyon
//*************************************************************/

const tekcift=(x)=> x%2==0 ? "Cifttir" : "tektir";
console.log(tekcift(5)); 
console.log(tekcift(18)); 

//* Örnek4: Menu fonksiyon
//*************************************************************/

// ok(arrow) fonksiyonunda birden fazla ifade varsa, fonkiyonda süslü parantez kullanmaliyiz.

const menu=()=> {
    console.log("=====================");
    console.log("JavaScript dersi");
    console.log("=====================");
}

menu();

//* Örnek5: Bilgi ver fonkiyonu                 
//*************************************************************/

const bilgiver=(ad,soyad,dogum)=>
{
  const bilgi=  `adim: ${ad}, soyadim:${soyad} ve yas: ${2022-dogum}`
  return bilgi;
}

console.log(bilgiver("Enes", "Koc", 1993));
// !2. yol
// `adim: ${ad}, soyadim:${soyad} ve yas: ${2022-dogum}`;
// console.log(bilgiver("Enes", "Koc", 1993));

//* Örnek6: Silindirin hacmini hesaplayan fonksiyon                
//*************************************************************/

const r= +prompt("Yaricap giriniz")
const h= +prompt("Yükseklik giriniz")

const hacimhesapla=(r,h)=> Math.PI*r*r*h

console.log(Math.round( hacimhesapla(r,h)));

//!toFixed(x): virgülden sonra x adet sayi gösterir.
console.log(hacimhesapla(r,h).toFixed(2));


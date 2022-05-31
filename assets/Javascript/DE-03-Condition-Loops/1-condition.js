// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************

//! Dort İslem Hesap Makinası
//!------------------------------------------------------------

//? Prompt fonskiyonu ile console ortamında kullanıcıdan veri almak mümkündür.
// console.log("-------------------------------------");
// console.log(" *****==IF-ELSE IF== 4 Islem Hesap Makinesi ****** ");
// console.log("-------------------------------------");



// if(islem=="+"){
//     sonuc= s1+s2;
// }

// else if(islem=="-"){
    
//     sonuc= s1-s2;
// }

// else if(islem=="*"){
//     sonuc= s1*s2;
// }

// else if(islem=="/"){

// if(s2==0){
//     alert("bölen 0 olamaz")
//     }
// else
//     sonuc= s1/s2;
// }

// else{
//     alert("yanlis islem sectiniz")
// }

// console.log(sonuc);

// ***** ORNEK ***

// const yas=20; //17 olursa askerlikten muaf
// const cinsiyet="erkek";
// const saglik=true;

// if(yas>=18 && cinsiyet=="erkek" && saglik){
// console.log("askerlik yapabilir");
// }
// else
// console.log("askerlikten muaf");



// *******SWITCH-CASE******

// console.log("-------------------------------------");
// console.log(" *****==SWİTCH-CASE== 4 Islem Hesap Makinesi ****** ");
// console.log("-------------------------------------");
// const n1 = Number(prompt("1.Sayiyi Giriniz:"));
// const islem1 = prompt("Islemi giriniz: +,-,*, /");
// const n2 = +prompt("2.Sayiyi Giriniz:");

// let sonuc1=0;


// switch (islem1) {
//   case "+":
//     sonuc1=n1 + n2;
//     break;

//   case "-":
//    sonuc1= n1 - n2;
//     break;

//   case "*":
//    sonuc1= n1 * n2;
//     break;

//   case "/":
//    sonuc1= n1 / n2;
//     break;

//   default:
//    alert("yanlış işlem girdiniz")
//     break;
// }
// console.log(` ${n1} ${islem1} ${n2} = ${sonuc1} `);


// *******TERNARY******

// ornek: maasiniz askeri ücretten düsek ve esitse masassiniza %25 zam yapilsin, degilse maasiniza %10 zam yapilsin.

// const asgariücret=4250;
// const maas=   +(prompt("maasinizi giriniz..:"));
// const zamlimaas= maas<= asgariücret ? maas*1.25 : maas*1.1;
// console.log(zamlimaas);

//* Ornek: maasınız borcunuzdan 5000 ve üstü kadar fazlaysa kredi alabilirsiniz, aksi durumda alamazsınız

const schuld = Number(prompt("borcunuzu giriniz..:"));
const gehalt = Number(prompt("Maasinizi giriniz..:"));

const kredi= gehalt-schuld >= 5000 ? "kredi alabilir" : "kredi alamaz"
console.log(kredi);
// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// for(let i=1; i<=10; i++){
//     console.log("merhaba", i);
// }

// 1'den N'e kadar olan tam sayilarin toplamini bulan kodu yaziniz.

// const n = +prompt("N icin kullanilacak sayiyi girini..:");
// let sayi = 0;
// for (let i = 1; i <= n; i++) {
//   sayi = sayi + i;
//   // console.log(sayi);
// }

// console.log(sayi);


// //? ÖRNEK: Dışarıdan girilen sayının Asal olup olmadığını tespit ederek sonucu yazdıran programı yazınız.

// const sayi=   +prompt("ASAL kontrolü için bir sayı giriniz");
// let asal =true;

// for(let i=2; i < sayi; i++) {

// if(sayi % i==0 ) {asal=false; break}

// }
// console.log(asal==true?"asal sayıdır " :"asal sayı değildir");

// //******************** WHILE ******************
// //Ornek1: WHİLE İÇİN 0-100 arasında bir not giriniz, aksi durumlarda error msjı verip, tekrar not isteyiniz

// let nots=  +prompt("WHİLE İÇİN 0-100 ARASI SAYI GİRİNİZ")
// while (nots<0 || nots >100)
// {console.error("not 0-100 arasında olmalıdır") 
//  nots= +prompt("WHİLE İÇİN 0-100 ARASI SAYI GİRİNİZ");
// }

// console.log("girdiğiniz sayı 0-100 arasındadır");



//******************** DO-WHILE ******************

// let notlar;
// do{
//     notlar = +prompt("DO_WHILE icin 0-100 arasi sayi giriniz?");
//     alert(notlar);
// } while (notlar < 0 || notlar > 100);

// console.log("girdiigniz not", notlar);

// //? ORNEK1: klavyeden Q karakteri girilene kadar not girişi yapan bir programı döngü kullanarak yazınız.

// do {
//     grade= prompt("not girisi yapiniz");
//     alert("girdiigniz not", grade);
// } while( grade!="q");
// console.log(grade);




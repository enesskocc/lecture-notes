// ? ==========================================================
// ?                    FONKSİYONLAR
// ? ==========================================================

// !-----------------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !-----------------------------------------------------------
console.log("************ 1- FUNC DECLARATION *************");

//* Örnek1:
//****************************************************************/
//Fonksiyonun tanımlanması


function yazdir() {
    console.log("Enes");
}

yazdir(); //call veya invoke


//* Örnek2: parametreli fonksiyon
//****************************************************************/

function adyazdir(ad, ikinci, soyad) {
    console.log(ad, ikinci, soyad);
}

adyazdir("Ferhat", "Enes", "Sevde") //cagirma olayini fonksiyonu tanimladan öncede yapabiliriz.

//* Örnek3: parametreli (return) dönüs degerli bir fonksiyon
//****************************************************************/

function yashesap(ad, dogumtarihi) {
    const yas= 2022-dogumtarihi
    console.log(`Benim adim ${ad} ve ben ${yas} yasindayim`);
    return yas;
}

const emre= yashesap("Emre", "1990");
const enes=yashesap("Enes", "1993");
const busra=yashesap("Büsra", "1991");

console.log("3 arkadasin yaslari toplami:",(emre+enes+busra)/3);

//* Örnek4: Parametreli, Dönüş değerli
//**********************************************************/
//! Function declaration yöntemi ile  fonksiyonun tanımlanması çağrılmasında önce veya sonra olabilir.

a= tekciftsayi(5);
console.log(a);
console.log(tekciftsayi(4));

function tekciftsayi(x) {
   return x%2==1 ? `${x} sayisi Tektir`  : `${x} sayisi Ciftir`
}

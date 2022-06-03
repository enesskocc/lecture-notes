// ? =========================================================
// ?                    FONKSİYONLAR
// ?==========================================================

//!----------------------------------------------------------
//! 2.YÖNTEM  : FUNCTION EXPRESSION
//!-----------------------------------------------------------
//* Örnek1: tek-cift kontorlu
//**********************************************************/
console.log("******** 2- EXPRESSION*******");

const tekcift= function (sayi) {
    return sayi%2==1 ? "tektir" : "ciftir"
}

console.log(tekcift(5));
console.log(tekcift(6));


//* Örnek2: en büyük sayiyi bul
//**********************************************************/

let büyükbul= function (x,y,z) {
    let enbüyük;
    if (x>y && x>z) 
    {enbüyük=x;}

    else if(y>z && y>x)
    {enbüyük=y;}

    else {enbüyük=z}
        
    // console.log(enbüyük);

    return enbüyük
}

console.log(büyükbul(3,5,9));

//* Örnek3: bir fonksiyon icerisinde baska bir fonksiyon cagirma
//**********************************************************/

const topla= function(s1,s2){
    return s1+s2
   }
    const cikar = function (s1, s2) {
      return s1 - s2;
    };
    const carp = function (s1, s2) {
      return s1 * s2;
    };
    const böl = function (s1, s2) {
      return s1 / s2;
    };
   
   const hesapla=function (islem ,s1 ,s2) {
   let sonuc;
   if(islem=="+")
   {sonuc=topla(s1,s2);}
   else if (islem=="-")
   {sonuc=cikar(s1,s2);}
   else if (islem=="*")
   {sonuc=carp(s1,s2);}
   else if(islem=="/")
   {sonuc=böl(s1,s2);}
   return sonuc;
   }
   
   alert(hesapla("*",3,5));
   
   console.log(hesapla("/",8,4));
      
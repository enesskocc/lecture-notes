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
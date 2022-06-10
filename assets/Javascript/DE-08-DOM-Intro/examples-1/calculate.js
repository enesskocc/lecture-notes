const yaricapInput = document.querySelector("#yaricap");

const buton  = document.querySelector("#btn");

buton.onclick=()=> {

    const r= yaricapInput.value;

   const alan = (Math.PI*r*r).toFixed(2)
   const cevre = (2*Math.PI*r).toFixed(2)


document.querySelector(".alan").textContent=alan;
document.querySelector(".cevre").textContent=alan;

}

// !elimiz tusa basili iken(onkeydown)
yaricapInput.onkeydown=(e)=>{
if(e.keyCode===13){
    buton.click();
}
}



yaricapInput.onmouseover=function(){
    
    
      yaricapInput.style.backgroundColor="darkgray" 
    }
    
    yaricapInput.onmouseout = function () {
      yaricapInput.style.backgroundColor = "white";
    };


//* sayfa ilk yüklendiğinde mouse (cursor) inputun içinde olsun= focus();
window.onload=()=>{
    yaricapInput.focus();
   }
document.querySelector(".menubarra").addEventListener("click", animacionmenu);

let barra1=document.querySelector(".f1");
let barra2=document.querySelector(".f2");
let barra3=document.querySelector(".f3");

function animacionmenu(){
    barra1.classList.toggle("f1animacion");
    barra3.classList.toggle("f3animacion");
    barra2.classList.toggle("f2animacion")

}
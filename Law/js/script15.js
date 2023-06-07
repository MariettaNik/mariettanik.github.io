"use strict";
let btnOpen=document.querySelectorAll(".btnOpen");
let cont=document.querySelectorAll(".content");
let faMinus=document.querySelectorAll(".fa-minus");
let faPlus=document.querySelectorAll(".fa-plus");
for(let i=0; i<btnOpen.length; i++){
btnOpen[i].addEventListener("click", function(){
    cont[i].classList.toggle("blockDiv");
faMinus[i].classList.toggle("blockDiv");
faPlus[i].classList.toggle("hidden");
})
}
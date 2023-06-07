"use strict";

AOS.init();
let faXmark=document.querySelector(".fa-xmark");
let faBars=document.querySelector(".fa-bars");
let menu=document.querySelector(".menu");
let menuBar=document.querySelector(".menuBar");
menuBar.addEventListener("click",function(){
   menu.classList.toggle("menuBlock");
   faXmark.classList.toggle("menuBlock");
   faBars.classList.toggle("hidden");
})
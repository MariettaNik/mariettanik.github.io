"use strict";

document.body.onload=function(){
  setTimeout(function(){
  let preloader=document.querySelector(".preloader");
  preloader.classList.add("hiddenLoader");
  typeWriter()
  },1000);
}

  AOS.init();

let i = 0;
let text= "Certified Front-end Developer";
var speed = 50;
let home=document.querySelector("#home");

function typeWriter() {
  if (i<text.length ){
    document.getElementById("front").innerHTML+= text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    }
  }


let client=document.querySelector(".client");
let projectsCount=document.querySelector(".projectsCount");
let support=document.querySelector(".support");
let works=document.querySelector(".works");
let facts=document.querySelector("#facts")
let progressCount=0;
let progressCountProjects=0;
let progressCountSupport=0;
let progressCountWorks=0;
setInterval(function(){
  let topFacts=facts.getBoundingClientRect().top
  if(topFacts<window.innerHeight/2){
    progressCount++;
    if(progressCount<=35){
      client.innerHTML=progressCount
    }
  }
},60)
setInterval(function(){
  let topFacts=facts.getBoundingClientRect().top
  if(topFacts<window.innerHeight/2){
    progressCountProjects++;
    if(progressCountProjects<=30){
      projectsCount.innerHTML=progressCountProjects
    }
  }
},60)
setInterval(function(){
  let topFacts=facts.getBoundingClientRect().top
  if(topFacts<window.innerHeight/2){
    progressCountSupport++;
    if(progressCountSupport<=130){
      support.innerHTML=progressCountSupport
    }
  }
},20)
setInterval(function(){
  let topFacts=facts.getBoundingClientRect().top
  if(topFacts<window.innerHeight/2){
    progressCountWorks++;
    if(progressCountWorks<=15){
      works.innerHTML=progressCountWorks
    }
  }
},60)

let skills=document.querySelector("#skills");
let skill=document.querySelector(".skill");
let percent=document.querySelector(".percent");
let percent2=document.querySelector(".percent2");
let percent3=document.querySelector(".percent3");
let percent4=document.querySelector(".percent4");
let percent5=document.querySelector(".percent5");
let percent6=document.querySelector(".percent6");
let percent7=document.querySelector(".percent7");
let percent8=document.querySelector(".percent8");
let percent9=document.querySelector(".percent9");
let percent10=document.querySelector(".percent10");
let skillProgress2=document.querySelector(".skillProgress2");
let skillProgress3=document.querySelector(".skillProgress3");
let skillProgress4=document.querySelector(".skillProgress4");
let skillProgress5=document.querySelector(".skillProgress5");
let skillProgress6=document.querySelector(".skillProgress6");
let skillProgress7=document.querySelector(".skillProgress7");
let skillProgress8=document.querySelector(".skillProgress8");
let skillProgress9=document.querySelector(".skillProgress9");
let skillProgress10=document.querySelector(".skillProgress10");
let width=1, width2=1, width3=1, width4=1, width5=1, width6=1, width7=1, width8=1, width9=1, width10=1;

let identification=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight-skills.offsetHeight){
    if(width<=95){
    skill.style.width=width + "%";
    percent.innerHTML=width + "%";
    width++;
  }else{
    clearInterval(identification);
  }}
},20)
let identification2=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width2<=95){
    skillProgress2.style.width=width2 + "%";
    percent2.innerHTML=width2 + "%";
    width2++;
  }else{
    clearInterval(identification2);
  }}
},20)
let identification3=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width3<=80){
    skillProgress3.style.width=width3 + "%";
    percent3.innerHTML=width3 + "%";
    width3++;
  }else{
    clearInterval(identification3);
  }}
},20)
let identification4=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width4<=80){
    skillProgress4.style.width=width4 + "%";
    percent4.innerHTML=width4 + "%";
    width4++;
  }else{
    clearInterval(identification4);
  }}
},20);
let identification5=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width5<=80){
    skillProgress5.style.width=width5 + "%";
    percent5.innerHTML=width5 + "%";
    width5++;
  }else{
    clearInterval(identification5);
  }}
},20);
let identification6=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width6<=95){
    skillProgress6.style.width=width6 + "%";
    percent6.innerHTML=width6 + "%";
    width6++;
  }else{
    clearInterval(identification6);
  }}
},20);
let identification7=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width7<=80){
    skillProgress7.style.width=width7 + "%";
    percent7.innerHTML=width7 + "%";
    width7++;
  }else{
    clearInterval(identification7);
  }}
},20);
let identification8=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width8<=50){
    skillProgress8.style.width=width8 + "%";
    percent8.innerHTML=width8 + "%";
    width8++;
  }else{
    clearInterval(identification8);
  }}
},20);
let identification9=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width9<=10){
    skillProgress9.style.width=width9 + "%";
    percent9.innerHTML=width9 + "%";
    width9++;
  }else{
    clearInterval(identification9);
  }}
},20);
let identification10=setInterval (function(){
  let topSkills=skills.getBoundingClientRect().top
  if(topSkills<window.innerHeight/2){
    if(width10<=95){
    skillProgress10.style.width=width10 + "%";
    percent10.innerHTML=width10 + "%";
    width10++;
  }else{
    clearInterval(identification10);
  }}
},20);
console.log(window.innerWidth)

let faXmark=document.querySelector(".fa-xmark");
let faBars=document.querySelector(".fa-bars");
let header=document.querySelector(".header");
let mobileBtn=document.querySelector(".mobileBtn");
console.log(mobileBtn)
mobileBtn.addEventListener("click",function(){
  faXmark.classList.toggle("block");
  header.classList.toggle("block");
  faBars.classList.toggle("hidden")
})
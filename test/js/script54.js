"use strict";
let quizArr=[
    {
        question:"Ո՞ր էլեմենտի միջոցով ենք կտրում տողը և անցում կատարում հաջորդ տող։",
        answers:["br","line","bl","bl"],
        correct:[1]
    },
    {
            question:"Ո՞ր էլեմենտի միջոցով ենք կտրում տողը և անցում կատարում հաջորդ տող։",
            answers:["class ատրիբուտի նույն անունը կարող է օգտագործվել մի քանի HTML էլեմենտներում։","միևնույն էլեմենտը կարող է ունենալ 1 կամ մի քանի class-ի անուններ։","class ատրիբուտի նույն անունը կարող է օգտագործվել միայն մեկ HTML էլեմենտում։","class-ի անունները մեծատառերի նկատմամբ զգայուն չեն։"],
            correct:[1,2]
        },

    {
        question:"Ո՞ր թեգի միջոցով տեքստ կարող ենք գրել շեղատառ։",
        answers:["strong","i","important","b"],
        correct:[2]
    },
    {
        question:"Որո՞նք են input էլեմենտի տիպեր",
        answers:["textarea","email","checkbox","text","select","legend"],
        correct:[2,3,4]
    },
    {
        question:"Ո՞ր թեգի միջոցով ենք ստեղծում աղյուսակ HTML-ում։",
        answers:["list","select","datalist","table"],
        correct:[4]
    },
    {
        question:"Inline տիպի էլեմենտները սովորաբար սկսվում են նոր տողից։",
        answers:["Սխալ է","Ճիշտ է"],
        correct:[1]
    },
]
let score=0;
let answerIndex=0;
let timescore=11
 let hint=document.querySelector(".hint");
 let timediv=document.querySelector(".timediv");
let ask=document.querySelector(".questionH1");

let answer=document.querySelector(".answer");
let btn=document.querySelector("#nextbtn");
let timerS
showQuestion()
function restartFunc(){
    clearQuestion();
    score=0;
    answerIndex=0;
    showQuestion();
    btn.removeEventListener("click",restartFunc);
    btn.innerHTML="Next";
}
function showQuestion(){
    timescore=11
    timerS=setInterval(timer,1000);
ask.innerHTML=quizArr[answerIndex].question;
if(quizArr[answerIndex].correct.length==1){
for(let i=0; i<quizArr[answerIndex].answers.length; i++){
    answer.innerHTML+= `
    <input type="radio" name="answer" id="answer${+i+1}" value="${i+1}"> 
<label for="answer${i+1}" >${quizArr[answerIndex].answers[i]}</label><br>
    `
}}else{
    for(let i=0; i<quizArr[answerIndex].answers.length; i++){
         answer.innerHTML+= `
         <input type="checkbox" name="answer${i+1}" id="answer${+i+1}" value="${i+1}"> 
     <label for="answer${i+1}" >${quizArr[answerIndex].answers[i]}</label><br>
         `   
}
}}
function clearQuestion(){
    ask.innerHTML="";
    answer.innerHTML="";
}
btn.addEventListener("click", nextBtnFunc)
function nextBtnFunc(){
    checkAnswer();
    answerIndex++;
    clearInterval(timerS);
     clearQuestion();
    if(answerIndex<quizArr.length){
    showQuestion();
}else{
     timediv.innerHTML="";
   if(score==quizArr.length){
    ask.innerHTML=` Congratulations!!!😍
    `
    answer.style.textAlign="center";
    answer.style.fontSize="30px";
    answer.innerHTML=`
    You have ${score} scores of ${quizArr.length}🤩.`
   
   }else if(score>quizArr.length*50/100){
    ask.innerHTML=`not bad🥰`
    answer.innerHTML=`
     You have ${score} scores of ${quizArr.length}🤩.`
   }else{
    ask.innerHTML=`bad🙃`
    answer.innerHTML=`
     You have ${score} scores of ${quizArr.length}😐.`
   
   } 
  btn.innerHTML="Restart";
   btn.addEventListener("click", restartFunc);
}}


let answerb;
function checkAnswer(){
if(answerIndex<quizArr.length){
answerb=document.querySelectorAll("input:checked");
if(answerb.length==0){
   if(timescore!=0){
    hint.innerHTML="Add your answer, please!";
 
    answerIndex-- ;
    hint.style.color="red";
}
}else{
    hint.innerHTML=""

let checkScore=0;
for(let i=0;i<answerb.length;i++){
if(answerb[i].value==quizArr[answerIndex].correct[i]){
    checkScore++; 
}  };
console.log("checkScore="+checkScore);

 if(checkScore==quizArr[answerIndex].correct.length){
    score++;
} }  
}  }  

function timer(){
 timescore--;
timediv.innerHTML=timescore+"s";

if(timescore==0){
    clearInterval(timerS);
    nextBtnFunc()
}
}
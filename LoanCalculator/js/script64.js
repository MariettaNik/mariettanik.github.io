"use strict";
let money=document.querySelector("#money");
let moneyrange=document.querySelector("#moneyrange");
money.oninput=function(){
    moneyrange.value=money.value;
}
moneyrange.oninput=function(){
    money.value=moneyrange.value
}
percent.oninput=function(){
    percentrange.value=percent.value
}
percentrange.oninput=function(){
    percent.value=percentrange.value;
}
let result=document.querySelector(".result");
let r;
let monthlyPaymant;
let interestAmount;
money.onchange=percent.onchange=
term.onchange=function(){
 r=percent.value/(12*100);
 monthlyPaymant=Math.floor(money.value*r/(1-1/((1+r)**term.value)));
result.innerHTML=monthlyPaymant;
}
let graphic=document.querySelector("#graphic");
let graph=document.querySelector(".graph");
graphic.onclick=function(){
    let loanmonthlypaymant=+money.value;
graph.classList.remove("hidden");
graph.innerHTML=monthlyPaymant;
let graphicDiv=document.createElement("div");
graphicDiv.className="graphicDiv";
graph.append(graphicDiv);
document.body.style.overflow="hidden";
let close=document.createElement("div");
close.className="close";
close.innerHTML="X";
graph.append(close);
close.addEventListener("click", function(){
    graph.classList.add("hidden");
    document.body.style.overflow="";
})
let loantable=document.createElement("table");

for(let i=0; i<=term.value; i++){
    let tr=document.createElement("tr")
    loantable.append(tr);
    if(i==0){
        for(let j=0; j<5; j++){
            let th=document.createElement("th");
            tr.append(th);
            switch(j){
                case 0:
                    th.innerHTML="Month";
                    break;
                case 1:
                    th.innerHTML="Beginning Balance";
                    break;
                case 2:
                    th.innerHTML="Principal Amount";
                    break;
                case 3: 
                        th.innerHTML="Interest Amount";
                    break;
                case 4:
                    th.innerHTML="Monthly Paymant";
                    break;
            }
        };
    }else{
        interestAmount=Math.floor(loanmonthlypaymant*r);
        let princMoney=Math.floor(monthlyPaymant-interestAmount);
        loanmonthlypaymant=Math.floor(loanmonthlypaymant-princMoney);
        for(let j=0; j<5; j++){
            let td=document.createElement("td");
            tr.append(td);
            switch(j){
                case 0:
                    td.innerHTML=i;
                    break;
                case 1:
                        if(i==term.value){
                            td.innerHTML=0;
                        }else{
                        td.innerHTML=loanmonthlypaymant;
                        }
                    break;
                case 2:
                        td.innerHTML=princMoney;
                    break;
                case 3:
                            td.innerHTML=interestAmount;
                    break;
                case 4:
                            td.innerHTML=monthlyPaymant;
                    break;
            }
        }
    }
};
graphicDiv.append(loantable);
}
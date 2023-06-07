"use strict";
function countdown(){
let d=new Date();
let dmil=d.getTime()
let newdate=new Date(2023,6,17,12,20,0);
let newdate2=newdate.getTime();
let difference=newdate2-dmil;
let days=Math.floor(difference/(1000*60*60*24));
let hours=Math.floor(difference/(1000*60*60))%24;
let minutes=Math.floor(difference/(1000*60))%60;
let seconds=Math.floor(difference/1000)%60;
document.getElementById("day1").innerHTML=days;
if(hours<10){
    document.getElementById("hour1").innerHTML="0"+hours;
}else{
    document.getElementById("hour1").innerHTML=hours;

}
if(minutes<10){
    document.getElementById("minutes1").innerHTML="0"+minutes;
}else{
    document.getElementById("minutes1").innerHTML=minutes;
}
if(seconds<10){
document.getElementById("sec").innerHTML="0"+seconds;
}else{
    document.getElementById("sec").innerHTML=seconds;

}};
setInterval(countdown,1000);
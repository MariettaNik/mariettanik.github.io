"use strict";
let faXmark=document.querySelector(".fa-xmark");
let faBars=document.querySelector(".fa-bars");
let menu=document.querySelector(".menu");
let menuBar=document.querySelector(".menuBar");
menuBar.addEventListener("click",function(){
   menu.classList.toggle("menuBlock");
   faXmark.classList.toggle("menuBlock");
   faBars.classList.toggle("hidden");
})


let search=document.querySelector(".search");
let vector3=document.querySelector(".vector3")
search.onfocus=function(){
    vector3.style.backgroundColor="#81D8D0"
}
AOS.init({
   duration: 1500,

});
search.onblur=function(){
    vector3.style.backgroundColor="transparent"
};
let second=document.querySelector(".second")
let btn9=document.querySelector(".btn9");
btn9.addEventListener("click", function(){
    window.scrollTo(0,0)
})
window.addEventListener("scroll", function(){
if(second.getBoundingClientRect().top<window.innerHeight/2){
    btn9.classList.remove("hide");
}else{
    btn9.classList.add("hide");
}
})
let four1=document.querySelector(".four1");
let next=document.querySelector(".next");
let prev=document.querySelector(".prev");
let left
let right
next.addEventListener("click", function(){
   if(four1.getBoundingClientRect().right<document.documentElement.clientWidth){
      left=four1.getBoundingClientRect().left
   }else{
      left=four1.getBoundingClientRect().left-200
   }
   four1.style.transform=`translate(${left}px)`
    left=left-200;
  prev.classList.add("menuBlock");
})
prev.addEventListener("click",function(){
  if(four1.getBoundingClientRect().left<0){
   right=four1.getBoundingClientRect().left+200
  }else{
   right=0
  }
   four1.style.transform=`translate(${right}px)`
      right=right+200;
})
let langArr={
    "Jewellery":{
       "hy":"Զարդեր",
       "en":"Jewellery",
       "ru":"Украшения",
    },
    "gifts":{
        "hy":"Նվերներ",
        "en":"Gifts",
        "ru":"Подарки",
     },
     "about":{
        "hy":"Մեր մասին",
        "en":"About",
        "ru":"О нас",
     },
     "shop":{
        "hy":"Գնել հիմա",
        "en":"Shop now",
        "ru":"Купить сейчас",
     },
     "text1":{
        "hy":"Կապույտը սիրո գույնն է",
        "en":"Blue is the color of love",
        "ru":"Синий-это цвет любви",
     },
     "text2":{
        "hy":"Վալենտինի օրվա լավագույն նվերն այն է, որը գալիս է փոքրիկ կապույտ տուփով:",
        "en":"The best Valentine’s Day gift is the one that comes in a little blue box.",
        "ru":"Лучший подарок на День святого Валентина — это тот, что упакован в маленькую синюю коробочку.",
     },
     "btn2":{
        "hy":"Բացահայտեք նվերների ուղեցույցը",
        "en":"Explore the gift guide",
        "ru":"Изучите руководство по подаркам",
},
"btn3":{
    "hy":"Գնել հիմա",
    "en":"Shop now",
    "ru":"Купить сейчас",
 },
 "textp1":{
    "hy":"Նվերներ Նրա համար",
    "en":"Gifts for Her",
    "ru":"Подарки для Неё",
 },
 "btn4":{
    "hy":"Գնել հիմա",
    "en":"Shop now",
    "ru":"Купить сейчас",
 },
 "textp2":{
    "hy":"Նվերներ Նրա համար",
    "en":"Gifts for Him",
    "ru":"Подарки для Него",
},
"btn":{
    "hy":"Գնել հիմա",
    "en":"Shop now",
    "ru":"Купить сейчас",
 },
 "thirdh1":{
    "hy":"Անվճար խորհրդատվության կարի՞ք ունեք:",
    "en":"Need a free consultation?",
    "ru":"Нужна бесплатная консультация?",
 },
 "thirdp":{
    "hy":"Դիմեք մեզ և մեր մասնագետները հնարավորինս շուտ կապ կհաստատեն Ձեզ",
    "en":"Apply us and our specialists will connect you as soon as possible",
    "ru":"Оставьте заявку и наши специалисты свяжутся с Вами в ближайшее время",
 },
 "text":{
    "hy":"Անուն",
    "en":"Your name",
    "ru":"Имя",
 },
 "tel":{
    "hy":"Ձեր հեռախոսահամարը",
    "en":"Your phone number",
    "ru":"Ваш номер телефона",
 },
 "email":{
    "hy":"Ձեր էլէկտրոնային փոստի հասցեն",
    "en":"Your E-mail",
    "ru":"Ваш адрес электронной почты",
 },
 "th1":{
    "hy":"Ուղարկեք հարցում",
    "en":"Send a request",
    "ru":"Отправить запрос",
 },
 "h1":{
    "hy":"Գնել ըստ կատեգորիայի",
    "en":"Shop by category",
    "ru":"Выбрать по категории",
 },
 "p":{
    "hy":"Փայլուն դիզայն և անզուգական վարպետություն:",
    "en":"Brilliant design and unparalleled craftsmanship.",
    "ru":"Блестящий дизайн и непревзойденное мастерство.",
 },
 "fr7":{
    "hy":"Վզնոցներ և կախազարդեր",
    "en":"Necklaces & Pendants",
    "ru":"Ожерелья и подвески",
 },
 "earrings":{
    "hy":"Ականջօղեր",
    "en":"Earrings",
    "ru":"Серьги",
 },
 "rings":{
    "hy":"Մատանիներ",
    "en":"Rings",
    "ru":"Кольца",
 },
 "bracelets":{
    "hy":"Թևնոցներ",
    "en":"Bracelets",
    "ru":"Браслеты",
 },
 "engagement":{
    "hy":"Նշանադրության մատանիներ",
    "en":"Engagement Rings",
    "ru":"Обручальные кольца",
 },
 "decor":{
    "hy":"Տան դեկոր",
    "en":"Home Decor",
    "ru":"Домашнего декора",
 },
 "all":{
    "hy":"Ամբողջ տեսականին",
    "en":"All Categories",
    "ru":"Все категории",
 },
 "val1":{
    "hy":"Պատրաստված է սիրով ",
    "en":"Made with love. Made for love.",
    "ru":"Сделано с любовью ",
 },
 "val2":{
    "hy":" Սիրո օրվա առթիվ Ձեզ հարկավոր է մեկ մատանի և մեկ հարց",
    "en":"This Valentine’s Day, one ring and one questions are all you need.",
    "ru":"В этот День святого Валентина одно кольцо и один вопрос — все, что вам нужно.",
 },
 "val3":{
    "hy":"Բացահայտեք նշանադրության մատանիները",
    "en":"Explore engagement rings",
    "ru":"Исследуйте обручальные кольца",
 },
 "diamonds":{
    "hy":"Ադամանդներ",
    "en":"Diamonds",
    "ru":"Бриллианты ",
 },
 "diam":{
    "hy":"Սկզբնաղբյուրից",
    "en":"From the source",
    "ru":"Из источника",
 },
 "handcraft":{
    "hy":"Աշխարհի լավագույն ադամանդների պատրաստումը սկսվում է իմանալուց, թե որտեղից են դրանք գալիս: Մենք հպարտորեն հետագծում ենք մեր չմշակված ադամանդների 100%-ը հայտնի հանքավայրերում և աղբյուրներում:",
    "en":"Handcrafting the world’s best diamonds starts with knowing where they come from. We proudly trace 100% od our rough diamonds to known mines and sources.",
    "ru":"Изготовление лучших бриллиантов в мире начинается со знания их происхождения. Мы с гордостью отслеживаем 100% наших необработанных алмазов до известных месторождений и источников.",
 },
 "diam2":{
    "hy":"Հետևեք ձեր ադամանդի ճամփորդությանը",
    "en":"Follow your diamond’s journey",
    "ru":"Следите за путешествием вашего бриллианта",
 },
 "exp":{
    "hy":"Tiffany-ի փորձը",
    "en":"The Tiffany experience",
    "ru":"Опыт Тиффани",
 },
 "exp11":{
    "hy":"Անվճար առաքում և վերադարձ",
    "en":"Complimentary Shipping & Returns",
    "ru":"Бесплатная доставка и возврат",
 },
 "exp111":{
    "hy":"Մենք առաջարկում ենք անվճար առաքում և վերադարձ բոլոր Tiffany պատվերների համար:",
    "en":"We offer complimentary shipping and returns on all Tiffany orders.",
    "ru":"Мы предлагаем бесплатную доставку и возврат всех заказов Tiffany.",
 },
 "exp1111":{
    "hy":"Իմանալ ավելին",
    "en":"Learn More",
    "ru":"Узнать больше",
 },
 "exp22":{
    "hy":"Tiffany-ն՝ Ձեր ծառայությունների մեջ",
    "en":"Tiffany At Your Service",
    "ru":"Тиффани к вашим услугам",
 },
 "exp222":{
    "hy":"Հաճախորդների խնամքի մեր մասնագետները միշտ այստեղ են օգնելու համար:",
    "en":"Our client care experts are always here to help.",
    "ru":"Наши специалисты по работе с клиентами всегда готовы помочь.",
 },
 "exp2222":{
    "hy":"Կապը մեզ հետ",
    "en":"Contact Us",
    "ru":"Связаться с нами",
 },
 "exp33":{
    "hy":"Ամրագրեք հանդիպում",
    "en":"Book an Appointment",
    "ru":"Записаться на прием",
 },
 "exp333":{
    "hy":"Մենք ուրախ ենք օգնել առցանց կամ վիրտուալ հարթակներում:",
    "en":"We’re happy to help with in-store or virtual appointments.",
    "ru":"Мы будем рады помочь с офлайн или виртуальными встречами.",
 },
 "exp3333":{
    "hy":"Կապը մեզ հետ",
    "en":"Contact Us",
    "ru":"Связаться с нами",
 },
 "exp44":{
    "hy":"Խորհրդանշական կապույտ տուփը",
    "en":"The Iconic Blue Box",
    "ru":"Знаменитая синяя коробка",
 },
 "exp444":{
    "hy":"Ձեր Tiffany-ի պատվերը փաթեթավորվում է մեր կապույտ տուփի մեջ:",
    "en":"Your Tiffany purchase comes wrapped in our Blue Box packaging.",
    "ru":"Ваша покупка Tiffany упакована в нашу упаковку Blue Box.",
 },
 "exp4444":{
    "hy":"Բացահայտեք բոլոր նվերները",
    "en":"Explore All Gifts",
    "ru":"Исследуйте все подарки",
 },
 "footer1":{
    "hy":"Մեր հաճախորդները <i class='fa-solid fa-angle-down'></i>",
    "en":"Client care <i class='fa-solid fa-angle-down'></i>",
    "ru":"Обслуживание клиентов <i class='fa-solid fa-angle-down'></i>",
 },
 "footer1a":{
    "hy":"Կապը մեզ հետ",
    "en":"Contact Us",
    "ru":"Связаться с нами",
 },
 "footer1b":{
    "hy":"Հետևեք ձեր պատվերին",
    "en":"Track your order",
    "ru":"Отследить ваш заказ",
 },
 "footer1c":{
    "hy":"Խնամք և վերանորոգում",
    "en":"Product care & repair",
    "ru":"Уход за изделием и ремонт",
 },
 "footer1d":{
    "hy":"Ամրագրեք հանդիպում",
    "en":"Book an Appointment",
    "ru":"Записаться на прием",
 },
 "footer1e":{
    "hy":"Հաճախ տրվող հարցեր",
    "en":"Frequently asked questions",
    "ru":"Часто задаваемые вопросы",
 },
 "footer1f":{
    "hy":"Առաքում և վերադարձ",
    "en":"Shipping & returns",
    "ru":"Доставка и возврат",
 },
 "footer2a":{
    "hy":"Մեր Ընկերությունը <i class='fa-solid fa-angle-down'></i>",
    "en":"Our company <i class='fa-solid fa-angle-down'></i>",
    "ru":"Наша компания <i class='fa-solid fa-angle-down'></i>",
 },
 "footer2b":{
    "hy":"Tiffany-ի աշխարհը",
    "en":"World of Tiffany",
    "ru":"Мир Тиффани",
 },
 "footer2c":{
    "hy":"Կայունություն",
    "en":"Sustainability",
    "ru":"Устойчивость",
 },
 "footer2d":{
    "hy":"Մատակարարման ուղիները",
    "en":"California supply chains act",
    "ru":"Линии снабжения работают",
 },
 "footer2e":{
    "hy":"Կալիֆորնիայի գաղտնիություն",
    "en":"California privacy",
    "ru":"Конфиденциальност",
 },
 "footer2f":{
    "hy":"Tiffany-ի կարիերան",
    "en":"Tiffany careers",
    "ru":"Тиффани карьера",
 },
 "footer2g":{
    "hy":"Կայքի քաղաքականություն",
    "en":"Website policies",
    "ru":"Политика веб-сайта",
 },
 "btnf1":{
    "hy":"Սովորեք Tiffany-ից <i class='fa-solid fa-angle-down'></i>",
    "en":"Learn from Tiffany <i class='fa-solid fa-angle-down'></i>",
    "ru":"Учитесь у Тиффани <i class='fa-solid fa-angle-down'></i>",
 },
 "btnf2":{
    "hy":"Եղեք առաջինը, տեղեկացեք նոր հետաքրքիր դիզայնի, խանութի հատուկ միջոցառումների մասին",
    "en":"Be the first to know about exciting new design, special events, storespecial events, store",
    "ru":"Узнавайте первыми о захватывающем новом дизайне, специальных мероприятиях, магазинеспециальных мероприятиях, магазине",
 },
 "btnf":{
    "hy":"Էլեկտրոնային փոստ",
    "en":"E-Mail",
    "ru":"Электронная почта",
 },
 "btn6":{
    "hy":"Գրանցվել",
    "en":"Sign up",
    "ru":"Зарегистрироваться",
 },
 "frontdeveloper":{
    "hy":"Կայքը պատրաստված է Մարիետա Նիկոյանի կողմից",
    "en":"by Marietta Nick",
    "ru":"от Мариетта Ник",
 },
}
let allLang=["hy","ru","en"];
let select=document.querySelector(".lang-site");
select.addEventListener("change",function(){
    let lang=select.value;
    location.href=window.location.pathname+"#"+lang;
    changeLang()
    location.reload()
})
function changeLang(){
    let hash=window.location.hash;
     hash=hash.substr(1);
     if(!allLang.includes(hash)){
        location.href=window.location.pathname+"#en";
        location.reload()
     }
select.value=hash;
for (let key in langArr){
    let elem=document.querySelector(`[data-lang=${key}]`);
    if(elem){
    if(elem.tagName=="INPUT"){
        elem.placeholder=langArr[key][hash]
    }else{
       elem.innerHTML=langArr[key][hash]
   }
}}
    }
    changeLang()
    let btnf1=document.querySelectorAll(".btnf1");
    let content=document.querySelectorAll(".content");
    let down=document.querySelectorAll(".fa-angle-down");
    for(let i=0; i<btnf1.length; i++){
    btnf1[i].addEventListener("click", function(){
        content[i].classList.toggle("blockbtn");
    down[i].classList.toggle("angle_rotate")
    })
    }


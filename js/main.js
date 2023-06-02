/* HTML teglar bn ishlash */


/*let headTag = document.head;*/
/*let bodyTag = document.body;*/
/*let havola = document.documentURI;*/
/*let formalar = document.forms;*/

/*console.log(formalar);*/

/* Events in JS (onclick,ondblclick,onchange,onfocus,onblur,oninput) */
/*function buttonniBos(){
    alert("Siz buttonni 1-bosdingiz");
}*/
/*function battonniIkkiMartaBos(){
    alert("Siz buttonni 2-bosdingiz");
}*/
/*function tanlash(event){
    alert("Siz"+ event.target.value + "ni Tanladingiz");
}*/

/*function inputgaBosish(){
    console.log("Inputga bosildi!");
}*/

/*function inputdanChiqish(){
    console.log("Inputdan chiqildi!");
}*/

/*function yozish(event){
    console.log(event.target.value);
}*/

/*
document.querySelector('classNomi').addEventListener('copy',function (event){
    console.log("Diqqat! Sizdan " + event.target.value + "nomli faylar kochirililayabti!")
});*/
function harakatlanish(e){
    console.log(e.clientX,e.clientY);
}
function kirish(){
    console.log("Hududga kirildi");
}
function chiqish(){
    console.log("Hududdan chiqildi");
}
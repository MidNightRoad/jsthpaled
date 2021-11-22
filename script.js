var foo = document.querySelector("footer");
foo.addEventListener('click', function (){
  console.count('clique')
});
//======================================================================
var seek = document.getElementById("navbarHeader")
var hide = document.querySelector('.navbar-toggler')

hide.addEventListener('click',function(){ 
  seek.classList.toggle('collapse')
});
//======================================================================
var card = document.getElementsByClassName('card mb-4 box-shadow')[0]
var button = document.getElementsByTagName('button')[2]
 button.addEventListener('click', function(){
 card.style.color ='red'

 });
 //====================================================================
 var card2 = document.getElementsByClassName('card mb-4 box-shadow')[1]
 var button = document.getElementsByTagName('button')[4]
  button.addEventListener('click', function(){
    if (card2.style.color === 'green'){
      card2.style.color = '' ;
      }
    else {
        card2.style.color ='green'
      }
  });
//=====================================================================
var nuke = document.querySelector("header");
var bomb = document.querySelector('head link');
nuke.addEventListener('dblclick',function(){
  if (bomb.disabled === true){
    bomb.disabled = false;
  }  
  else {
    bomb.disabled = true
  }
});
//======================================================================
try{
let cards_array = document.querySelectorAll("div.card");

  for (let i = 0; i <= cards_array.length; i++) {
    let currentCard = cards_array[i];
    let viewButton = currentCard.querySelector("button.btn-success");
    let paragraph = currentCard.querySelector("p.card-text");
    let img = currentCard.querySelector("img.card-img-top");
    let imgLittle = false;

    viewButton.addEventListener("mouseover", (event) => {
      if (imgLittle === false) {
        paragraph.classList.toggle("collapse");
        img.style.width = "20%";
        imgLittle = true;
      } else {
        paragraph.classList.toggle("collapse");
        img.removeAttribute("style");
        imgLittle = false;
      }
    });
  }
}catch(e) {

}
  
//================================================================================
var button = document.querySelector('section.jumbotron div.container a.btn-secondary');

var list = document.querySelector('main div.container div.row');
var child = list.children;
var first = child[0]
var last = child[5]
console.log(last)
console.log(first)
button.addEventListener('click', event =>{
  list.insertBefore(last, first );
}) 
//=============================================================================
var button = document.querySelector('section.jumbotron div.container a.btn-primary');

var list = document.querySelector('main div.container div.row');
var child = list.children;
var first = child[0]
var last = child[5]
console.log(last)
console.log(first)
button.addEventListener('click', event =>{
  button.removeAttribute('href')
  list.appendChild(first);
}) 
//=============================================================================
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
let rightButton = document.querySelector(
  "section.jumbotron div.container a.btn-secondary"
);



rightButton.addEventListener("click", event =>{
  
  let cardsWrappers = document.querySelector("main div.container div.row");

  let cardsArray2 = cardsWrappers.children

  let firstChilds = cardsArray2[0];
  let length = cardsArray2.length;
  let lastchild = cardsArray2[length -1];

  cardsWrappers.insertBefore(lastchild, firstChilds)

})




let leftButton = document.querySelector("a.btn-primary")

leftButton.href='#';


leftButton.addEventListener("click", (event) => {

  let cardsWrapper = document.querySelector("main div.container div.row");

  let cardsArray = cardsWrapper.children;

  let firstChild = cardsArray[0];

  cardsWrapper.appendChild(firstChild);
  
});

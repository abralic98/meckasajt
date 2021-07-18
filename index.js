
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});




// horizontalna plava traka

function swiperKompakt(){
  const linija=document.getElementById("testlinija"); // plava linija
  linija.style.transform="translateX(0em)";
  linija.style.width="4.8em";
}

function swiperLimuzine(){
  const linija=document.getElementById("testlinija"); // plava linija
  linija.style.transform="translateX(5em)";
  linija.style.width="4.6em";
}

function swiperKaravan(){
  const linija=document.getElementById("testlinija"); // plava linija
  linija.style.transform="translateX(10em)";
  linija.style.width="4.5em";
}

function swiperSuv(){
  const linija=document.getElementById("testlinija"); // plava linija
  linija.style.transform="translateX(15em)";
  linija.style.width="4em";
}

function swiperCoupei(){
  const linija=document.getElementById("testlinija"); // plava linija
  linija.style.transform="translateX(20em)";
  linija.style.width="3em";
}

function swiperKabrielot(){
  const linija=document.getElementById("testlinija"); // plava linija
  linija.style.transform="translateX(0em)";
  linija.style.width="11em";
}  


// login screen input

window.onload=function(){
  document.getElementById("imejl").nodeValue="kurac";
}

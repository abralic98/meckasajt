var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  

 // STVARANJE I BRISANJE POP-UPA

function stvoriPopup(){
  const popup=document.getElementById("popup");

  popup.style.display="flex";
  
    

}

function izbrisiPopup(){
  const popup=document.getElementById("popup");
  popup.style.display="none";
}
 

// PC LISTA MODELA TOCKICE ZA SVAKU TOCKICU KAD SE KLIKNE AKTIVIRA SE FUNKCIJA

click=0;

function Napomene(){
    napomenestrelica=document.getElementById("napomenestrelica");
    napomene=document.getElementById("pnapomene");
    console.log("kek");
    napomene.style.display="none";

    
    click++;
    if(click%2!=0){
        napomenestrelica.style.transform="translateX(19em) rotate(180deg)"
    }

    if (click%2==0){
        napomenestrelica.style.transform="" //vratide na normalu
        napomene.style.display="";
    }

    
    
}

// PC NAPOMENE

let broj=0;

function napomeneRemove(){
    broj++
    let test=document.getElementById("pcnapomenep");
    let test1=document.getElementById("pccrticanapomene");
    
    if(broj%2==1){
        test1.style.transform="rotate(180deg)";
        test.style.display="none";
    }
    if(broj%2==0){
        test1.style.transform="rotate(0deg)";
        test.style.display="block";
    }
    
}

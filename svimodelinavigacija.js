
 



function nav(){
    const navigacij = document.getElementById("navigacijskamodeli");
    const container=document.getElementById("kontenjer");
    const crno=document.getElementById("crno");  
    
    

    crno.style.position="fixed";
    crno.style.display="block";
    navigacij.style.display="block";
    navigacij.style.position = "fixed";
    navigacij.style.opacity="0.99";
    navigacij.style.top="10em";

    container.style.pointerEvents = "none"
    container.style.opacity=0.01;

}


function Svimodeli(){
    sviModeli.style.visibility="visible";
    electric.style.visibility="hidden";
    AMG.style.visibility="hidden";
    maybach.style.visibility="hidden";
    setTimeout(MicanjePopup, 300);
    document.getElementById("psvimodeli").innerHTML = "Svi modeli"


}

function Electric(){
    sviModeli.style.visibility="hidden";
    electric.style.visibility="visible";
    AMG.style.visibility="hidden";
    maybach.style.visibility="hidden";
    setTimeout(MicanjePopup, 300);
    document.getElementById("psvimodeli").innerHTML = "EQ Electric Intelligence"
   

}

function Amg(){
    sviModeli.style.visibility="hidden";
    electric.style.visibility="hidden";
    AMG.style.visibility="visible";
    maybach.style.visibility="hidden";
    setTimeout(MicanjePopup, 300);
    document.getElementById("psvimodeli").innerHTML = "AMG"
    

}

function Maybach(){
    
    sviModeli.style.visibility="hidden";
    electric.style.visibility="hidden";
    AMG.style.visibility="hidden";
    maybach.style.visibility="visible";
    setTimeout(MicanjePopup, 300);
    document.getElementById("psvimodeli").innerHTML = "Maybach"
    

    

}


function MicanjePopup(){

    // micanje popupa koristim id-ove umisto varijabli jer ocito radi bez varijabli a kad bi varijable stavlja mora bi u svaku funckiju varijable
    navigacijskamodeli.style.display="none";  
    crno.style.display="none";
    kontenjer.style.pointerEvents="auto";
    kontenjer.style.opacity=1;
}





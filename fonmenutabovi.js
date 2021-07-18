function desnaAnimacija(){
    const container=document.getElementById("kontenjer")  //cili kontenjer
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab

    
    container.style.position="absolute";
    desnibar.style.position="absolute";
    container.style.animation="livoNestani 1s forwards";
    desnibar.style.animation="desnoStvoriSe 1s forwards";
    desnibar.style.display="block";
    setTimeout(displayNone,1000);  //da se aktivira display none jer u keyframe ne radi iz nekog razloga

}

function displayNone(){
    const container=document.getElementById("kontenjer")  //cili kontenjer
    container.style.display="none";
}

function zatvoriSve(){
    const container=document.getElementById("kontenjer")  //cili kontenjer
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const ser=document.getElementById("desnimenufonservis"); // servis
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div
    const dijelovi=document.getElementById("desnimenufonservisdijelovi"); // dijelovi pod servisom
    const servis=document.getElementById("desnimenufonservisservis"); // servis pod servisom

    dijelovi.style.animation="desnoNestani 1s forwards";
    
    servis.style.animation="desnoNestani 1s forwards";
    
    const dig=document.getElementById("desnimenufonservisdigitalna"); // digitalna



    // zatvaramo sve barove i vracamo se na pocetnu

    desnibar.style.animation="desnoNestani 1s forwards";
    nasimodeli.style.animation="desnoNestani 1s forwards";
    kompakti.style.animation="desnoNestani 1s forwards";
    ser.style.animation="desnoNestani 1s forwards";
    dig.style.animation="desnoNestani 1s forwards";
    dijelovi.style.animation="desnoNestani 1s forwards";   
    servis.style.animation="desnoNestani 1s forwards";
    emob.style.animation="desnoNestani 1s forwards";
    
    location.reload(); //mora bit bolji nacin    
}


// OTVARANJE NASI MODELI

function nasiModeli(){
    const container=document.getElementById("kontenjer")  //cili kontenjer
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu

    container.style.display="none"; // kontenjer ne postoji
    desnibar.style.animation="livoNestani 1s forwards"; //da nestane u livo
    nasimodeli.style.animation="desnoStvoriSe 1s forwards"; //da se stvori od desno
    nasimodeli.style.display="block";
    setTimeout(desniBarDisplayNone,1000); // da nestane bar da mogu lipo kliknut strelicu nazad
    
}

function desniBarDisplayNone(){
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab
    desnibar.style.display="none";
}

function strelicaNazad(){
    const container=document.getElementById("kontenjer")  //cili kontenjer
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    desnibar.style.display="block";
    desnibar.style.animation="livoStvoriSe 1s forwards";
    nasimodeli.style.animation="desnoNestani 1s forwards";
    console.log("kek");
    setTimeout(test,1000);
}

function test(){
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    nasimodeli.style.display="none";
}

// OTVARANJE NASIMODELI KOMPAKTI

function kompakti(){
    const container=document.getElementById("kontenjer");  //cili kontenjer
    const desnibar=document.getElementById("desnimenufon"); //desni menu prvi tab
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    kompakti.style.display="block";
    kompakti.style.position="absolute";
    nasimodeli.style.position="absolute";
    nasimodeli.style.animation="livoNestani 1s forwards";
    kompakti.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nasimodeliDisplayNone,1000);
}

function nasimodeliDisplayNone(){  // da nestane nasimodeli skroz kad udjem na neku od kategorija
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    
    nasimodeli.style.display="none";

}

function strelicaNazad2(){ // u ovoj funkciji brisem kategorije i vracam se na nasimodeli
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    const karavani=document.getElementById("desnimenufonnasavozilakaravani") // karavani menu
    const suvovi=document.getElementById("desnimenufonnasavozilasuvovi"); // suvovimenu
    const coupei=document.getElementById("desnimenufonnasavozilacoupei"); // coupei menu
    const kabrioleti=document.getElementById("desnimenufonnasavozilakabrieloti"); // kabrieloti menu
    limuzine.style.animation="desnoNestani 1s forwards";
    kompakti.style.animation="desnoNestani 1s forwards";
    karavani.style.animation="desnoNestani 1s forwards";
    suvovi.style.animation="desnoNestani 1s forwards";
    coupei.style.animation="desnoNestani 1s forwards";
    kabrioleti.style.animation="desnoNestani 1s forwards";

    nasimodeli.style.display="block";
    nasimodeli.style.animation="livoStvoriSe 1s forwards";
    
    setTimeout(kompaktiDisplayNone,1000);
}


function kompaktiDisplayNone(){
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    const karavani=document.getElementById("desnimenufonnasavozilakaravani") // karavani menu
    const suvovi=document.getElementById("desnimenufonnasavozilasuvovi"); // suvovimenu
    const coupei=document.getElementById("desnimenufonnasavozilacoupei"); // coupei menu
    const kabrioleti=document.getElementById("desnimenufonnasavozilakabrieloti"); // kabrieloti menu
    


    const tech=document.getElementById("desnimenufontehnologija"); //tehnologija div
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div


    kompakti.style.display="none";
    limuzine.style.display="none";
    karavani.style.display="none";
    suvovi.style.display="none";
    coupei.style.display="none";
    kabrioleti.style.display="none";


    tech.style.display="none";
    emob.style.display="none";
    
}



// OTVARANJE NASIMODELI LIMUZINE


function limuzine(){
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    limuzine.style.display="block"; // stvaramo ih
    limuzine.style.position="absolute" // da budu gore na vrhu
    kompakti.style.display="none";
    
    nasimodeli.style.position="absolute";
    nasimodeli.style.animation="livoNestani 1s forwards";
    limuzine.style.animation="desnoStvoriSe 1s forwards";

    
    setTimeout(nasimodeliDisplayNone,1000);

    
}


// OTVARANJE NASIMODELI KARAVANI


function karavani(){
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    const karavani=document.getElementById("desnimenufonnasavozilakaravani") // karavani menu
    kompakti.style.display="none"; // mora bit ovako inace se sve sjebe
    limuzine.style.display="none"; //mora bit ovako inace se sve sjebe
    karavani.style.display="block" // stvaramo ih
    karavani.style.position="absolute" // da budu na vrhu
    nasimodeli.style.position="absolute"; // iz nekog razloga ako ova linija nije tu ode sve u kurac
    nasimodeli.style.animation="livoNestani 1s forwards";
    karavani.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nasimodeliDisplayNone,1000);
    
}

function suvovi(){
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    const karavani=document.getElementById("desnimenufonnasavozilakaravani"); // karavani menu
    const suvovi=document.getElementById("desnimenufonnasavozilasuvovi"); // suvovimenu
    suvovi.style.display="block"; // stvaramo ih
    suvovi.style.position="absolute"; // da budu na vrhu
    kompakti.style.display="none"; // mora bit ovako inace se sve sjebe
    limuzine.style.display="none"; //mora bit ovako inace se sve sjebe
    karavani.style.display="none"; //mora bit ovako inace se sve sjebe

    

    nasimodeli.style.position="absolute"; // iz nekog razloga ako ova linija nije tu ode sve u kurac
    nasimodeli.style.animation="livoNestani 1s forwards";
    suvovi.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nasimodeliDisplayNone,1000); // da obrise nasemodele

}

function coupei(){
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    const karavani=document.getElementById("desnimenufonnasavozilakaravani"); // karavani menu
    const suvovi=document.getElementById("desnimenufonnasavozilasuvovi"); // suvovimenu
    const coupei=document.getElementById("desnimenufonnasavozilacoupei"); // coupei menu

    coupei.style.display="block"; // stvaramo ih
    coupei.style.position="absolute" // da budu na vrhu
    kompakti.style.display="none"; // mora bit ovako inace se sve sjebe
    limuzine.style.display="none"; //mora bit ovako inace se sve sjebe
    karavani.style.display="none"; //mora bit ovako inace se sve sjebe
    suvovi.style.display="none";  //mora bit ovako inace se sve sjebe

    nasimodeli.style.position="absolute"; // iz nekog razloga ako ova linija nije tu ode sve u kurac
    nasimodeli.style.animation="livoNestani 1s forwards";
    coupei.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nasimodeliDisplayNone,1000); // da obrise nasemodele

}

function kabrieloti(){
    const nasimodeli=document.getElementById("desnimenufonnasavozila"); //nasimodeli menu
    const kompakti=document.getElementById("desnimenufonnasavozilakompakti"); //kompakti menu
    const limuzine=document.getElementById("desnimenufonnasavozilalimuzine"); // limuzine menu
    const karavani=document.getElementById("desnimenufonnasavozilakaravani"); // karavani menu
    const suvovi=document.getElementById("desnimenufonnasavozilasuvovi"); // suvovimenu
    const coupei=document.getElementById("desnimenufonnasavozilacoupei"); // coupei menu
    const kabrioleti=document.getElementById("desnimenufonnasavozilakabrieloti"); // kabrieloti menu

    kabrioleti.style.display="block"; // stvaramo ih
    kabrioleti.style.position="absolute" // da budu na vrhu
    kompakti.style.display="none"; // mora bit ovako inace se sve sjebe
    limuzine.style.display="none"; //mora bit ovako inace se sve sjebe
    karavani.style.display="none"; //mora bit ovako inace se sve sjebe
    suvovi.style.display="none";  //mora bit ovako inace se sve sjebe
    coupei.style.display="none"; // mora bit ovako inace se sve sjebe

    nasimodeli.style.position="absolute"; // iz nekog razloga ako ova linija nije tu ode sve u kurac
    nasimodeli.style.animation="livoNestani 1s forwards";

    kabrioleti.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nasimodeliDisplayNone,1000); // da obrise nasemodele
}



// TEHNOLOGIJA

function tehnologija(){
    const tech=document.getElementById("desnimenufontehnologija"); //tehnologija div
    const container=document.getElementById("kontenjer")  //cili kontenjer
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab

    container.style.display="none"; // kontenjer ne postoji
    desnibar.style.animation="livoNestani 1s forwards"; //da nestane u livo
    tech.style.animation="desnoStvoriSe 1s forwards"; //da se stvori od desno
    tech.style.display="block";
    setTimeout(desniBarDisplayNone,1000); // da nestane bar da mogu lipo kliknut strelicu nazad
    
}


function strelicaNazad3(){ // u ovoj funkciji brisem tech i vracam se na desnibar
   

    const tech=document.getElementById("desnimenufontehnologija"); //tehnologija div
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab

    desnibar.style.display="block"; //bar postaje vidljiv
    
    
    desnibar.style.animation="livoStvoriSe 1s forwards";
    tech.style.animation="desnoNestani 1s forwards";

    
    
    setTimeout(tehnologijaDisplayNone,1000);
}




// TEHNOLOGIJA eMOBILNOST


function emobilnost(){
    const tech=document.getElementById("desnimenufontehnologija"); //tehnologija div
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div
    
    tech.style.position="absolute";
    tech.style.animation="livoNestani 1s forwards";
    emob.style.display="block"; // da se vidi
    emob.style.position="absolute"; // da je na vrhu
    emob.style.animation="desnoStvoriSe 1s forwards";
    setTimeout(nasimodeliDisplayNone,1000); 
}

function tehnologijaDisplayNone(){ // nakon sto se vrati na desni bar da nestane tech servis itd
    const tech=document.getElementById("desnimenufontehnologija"); //tehnologija div
    const ser=document.getElementById("desnimenufonservis"); // servis
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div
    tech.style.display="none";
    ser.style.display="none";
    emob.style.display="none";
    
}

function strelicaNazad4(){ // da se vratim iz emobilnost u tehnologiju
    const tech=document.getElementById("desnimenufontehnologija"); //tehnologija div
    const desnibar=document.getElementById("desnimenufon"); //desni menu prvi tab
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div

    emob.style.animation="desnoNestani 1s forwards";
    tech.style.animation="livoStvoriSe 1s forwards";
    setTimeout(emobDisplayNone,1000); 

}

function emobDisplayNone(){
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div
    emob.style.display="none";
}


// SERVIS I OPREMA


function servis(){
    
    const container=document.getElementById("kontenjer"); //cili kontenjer
    const desnibar=document.getElementById("desnimenufon"); //desni menu prvi tab
    const ser=document.getElementById("desnimenufonservis"); // servis
  

    container.style.display="none"; // kontenjer ne postoji
    desnibar.style.animation="livoNestani 1s forwards"; //da nestane u livo
    ser.style.position="absolute";
    ser.style.animation="desnoStvoriSe 1s forwards"; //da se stvori od desno
    ser.style.display="block"; //stvaramo servis
    setTimeout(desniBarDisplayNone,1000); // da nestane bar da mogu lipo kliknut strelicu nazad
}

function strelicaNazad4(){ // u ovoj funkciji brisem servis i vracam se na desnibar
   

    const ser=document.getElementById("desnimenufonservis"); // servis
    const desnibar=document.getElementById("desnimenufon") //desni menu prvi tab
    const emob=document.getElementById("desnimenufontehnologijaemobilnost"); //emobilnost div

    desnibar.style.display="block"; //bar postaje vidljiv
    
    emob.style.animation="desnoNestani 1s forwards";
    desnibar.style.animation="livoStvoriSe 1s forwards";
    ser.style.animation="desnoNestani 1s forwards";

    
    
    setTimeout(tehnologijaDisplayNone,1000); // da nestane servis bar 
}



// servis i oprema digitalna

function digitalna(){ // da nestane servis i dodje digitalna
    const ser=document.getElementById("desnimenufonservis"); // servis
    const dig=document.getElementById("desnimenufonservisdigitalna"); // digitalna

    dig.style.display="block";
    dig.style.position="absolute";
    ser.style.animation="livoNestani 1s forwards";
    dig.style.animation="desnoStvoriSe 1s forwards";
    setTimeout(nestaniServis,1000);

}

function nestaniServis(){ // da nestane servis tab da mogu lipo vidit ostale podtabove
    const ser=document.getElementById("desnimenufonservis"); // servis
    ser.style.display="none";
}

function strelicaNazad5(){ // strelica za vracanje u na servis bar
    const ser=document.getElementById("desnimenufonservis"); // servis
    const dig=document.getElementById("desnimenufonservisdigitalna"); // digitalna
    const dijelovi=document.getElementById("desnimenufonservisdijelovi"); // dijelovi pod servisom
    const servis=document.getElementById("desnimenufonservisservis"); // servis pod servisom

    dijelovi.style.animation="desnoNestani 1s forwards";
    dig.style.animation="desnoNestani 1s forwards";
    servis.style.animation="desnoNestani 1s forwards";
    ser.style.display="block";
    ser.style.animation="livoStvoriSe 1s forwards";
    

    setTimeout(nestaniOstaliTabovi,1000);


}

function nestaniOstaliTabovi(){ // kad stisnemo strelicu5 u odjelu servis da nestaju ostali tabovi osim servisa
    const dig=document.getElementById("desnimenufonservisdigitalna"); // digitalna
    const dijelovi=document.getElementById("desnimenufonservisdijelovi"); // dijelovi pod servisom
    const servis=document.getElementById("desnimenufonservisservis"); // servis pod servisom
    dig.style.display="none";
    dijelovi.style.display="none";
    servis.style.display="none";

} 


// servis i oprema dijelovi

function dijelovi(){ // nestaje servis stvaraju se dijelovi
    const ser=document.getElementById("desnimenufonservis"); // servis
    const dijelovi=document.getElementById("desnimenufonservisdijelovi"); // dijelovi pod servisom

    ser.style.animation="livoNestani 1s forwards";
    dijelovi.style.position="absolute";
    dijelovi.style.display="block";
    dijelovi.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nestaniServis,1000);

}


// servis i oprema SERVIS

function servisServis(){ // nastaje servis pod servisom
    const ser=document.getElementById("desnimenufonservis"); // servis
    const servis=document.getElementById("desnimenufonservisservis"); // servis pod servisom

    ser.style.animation="livoNestani 1s forwards";
    servis.style.display="block";
    servis.style.position="absolute";
    servis.style.animation="desnoStvoriSe 1s forwards";

    setTimeout(nestaniServis,1000);
    
}




// LIVI MENU LOGIN


function livimenufunkcija(){ // otvaramo livi menu
    const livibar=document.getElementById("livimenufon"); 
    const container=document.getElementById("kontenjer"); // cili kontenjer

    livibar.style.display="block"; 
    livibar.style.position="absolute";
    container.style.animation="desnoNestani 1s forwards";
    livibar.style.animation="livoStvoriSe 1s forwards";

    setTimeout(displayNone,1000); // da nestane kontenjer skroz
}


function zatvorilivi(){
    const livibar=document.getElementById("livimenufon"); 
    const container=document.getElementById("kontenjer"); // cili kontenjer

    container.style.display="block";
    container.style.display="absolute";
    container.style.animation="desnoStvoriSe 1s forwards";
    livibar.style.animation="livoNestani 1s forwards";

    setTimeout(obrisilivi,1000);
}

function obrisilivi(){
    const livibar=document.getElementById("livimenufon"); 
    livibar.style.display="none";
    
    location.reload(); //mora bit bolji nacin  
}



// ANIMACIJE ZA PC POPUPOVI


function pcTabNoviModeli(){
    let tab=document.getElementById("pcnoviModeliPopup");
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");
    
    let naslov1=document.getElementById("pcnoviModeliPopupNaslov");
    naslov1.innerHTML="Nasi Modeli";
    brojHtmla=1;
    let modeli1=document.getElementsByClassName("modeli1");
    for(let i=0; i<modeli1.length; i++){
        modeli1[i].style.opacity="1";
    }

    let strelice=document.getElementsByClassName("streliceDesno");
    for(let i=0; i<strelice.length; i++){
        strelice[i].style.opacity="1";
        
    }


    test1.innerHTML="Kompakti";
    test2.innerHTML="Limuzine";
    test3.innerHTML="Karavani";
    test4.innerHTML="SUV-ovi";
    test5.innerHTML="Coupei";
    test6.innerHTML="Cabrieloti & Roadsteri";
    
    tab.style.display="block";
    tab.style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcTabKompakti(){
    brojHtmla2=1;
    let test=document.getElementsByClassName("pcnoviModeli1");
    let test1=document.getElementsByClassName("pcMenuTabModeli");
    let test2=document.getElementsByClassName("pcMenuTabModeli1opis");
    let test3=document.getElementById("nezvisekojeimedadam");
    
    if(brojHtmla==3 || brojHtmla==5){ // ZA TEHNOLOGIJU DODATNI TAB I ZA SERVIS DODATNI TAB
        if(brojHtmla==3 && brojHtmla2==1){
           
            test2[0].innerHTML="Pregled";
            test2[1].innerHTML="E-vozila";
            test2[2].innerHTML="Plug-in-Hybrid"
            test2[3].innerHTML="Punjenje";
            test2[4].innerHTML="Gorivni Clanak"
            test3.innerHTML="E-mobilnost";

            test[0].style.display="block";
            test[0].style.animation="pcDesnoStvoriSe 1s forwards";
            return;
        }
    }
    if(brojHtmla!=1){//Da ne otvara novi tab ako nisu nasi modeli
        return;
    }
    
   
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="0";
    }
    for(let i=0; i<test1.length-4; i++){
        test1[i].style.opacity="1";
    }
    test3.innerHTML="Kompakti";
    test2[0].innerHTML="A-klasa kompaktna limuzina";
    test2[1].innerHTML="B-klasa Sports Tourer";
    
    test[0].style.display="block"; 
    test[0].style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcTabLimuzine(){
    let test=document.getElementsByClassName("pcnoviModeli1");
    let test1=document.getElementsByClassName("pcMenuTabModeli");
    let test2=document.getElementsByClassName("pcMenuTabModeli1opis");
    let test3=document.getElementById("nezvisekojeimedadam");
    test3.innerHTML="Limuzine";
    
    brojHtmla2=2;
    if(brojHtmla!=1){  //Da ne otvara novi tab ako nisu nasi modeli
        return;
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="0";
    }
    for(let i=0; i<test1.length-2; i++){
        test1[i].style.opacity="1";
    }

    test2[0].innerHTML="A-klasa Limuzina";
    test2[1].innerHTML="C-klasa Limuzina";
    test2[2].innerHTML="E-klasa Limuzina";
    test2[3].innerHTML="S-klasa Limuzina";

    
    test[0].style.display="block"; 
    test[0].style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcTabKaravani(){
    let test=document.getElementsByClassName("pcnoviModeli1");
    let test1=document.getElementsByClassName("pcMenuTabModeli");
    let test2=document.getElementsByClassName("pcMenuTabModeli1opis");
    brojHtmla2=3;
    let test3=document.getElementById("nezvisekojeimedadam");
    test3.innerHTML="Karavani";
    if(brojHtmla!=1){  //Da ne otvara novi tab ako nisu nasi modeli
        return;
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="0";
    }
    for(let i=0; i<test1.length-2; i++){
        test1[i].style.opacity="1";
    }

    test2[0].innerHTML="CLA Shooting Brake";
    test2[1].innerHTML="C-klasa Karavan";
    test2[2].innerHTML="E-klasa Karavan";
    test2[3].innerHTML="S-klasa Karavan All Terrain";

    
    test[0].style.display="block"; 
    test[0].style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcTabSUV(){
    let test=document.getElementsByClassName("pcnoviModeli1");
    let test1=document.getElementsByClassName("pcMenuTabModeli");
    let test2=document.getElementsByClassName("pcMenuTabModeli1opis");
    brojHtmla2=4;
    let test3=document.getElementById("nezvisekojeimedadam");
    test3.innerHTML="SUV-ovi";
    if(brojHtmla!=1){  //Da ne otvara novi tab ako nisu nasi modeli
        return;
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="0";
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="1";
    }

    test2[0].innerHTML="G-klasa Terensko Vozilo";
    test2[1].innerHTML="GLA SUV";
    test2[2].innerHTML="GLB SUV";
    test2[3].innerHTML="GLC SUV";
    test2[4].innerHTML="GLC Coupe";
    test2[5].innerHTML="GLE SUV";

    
    test[0].style.display="block"; 
    test[0].style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcTabCoupei(){
    let test=document.getElementsByClassName("pcnoviModeli1");
    let test1=document.getElementsByClassName("pcMenuTabModeli");
    let test2=document.getElementsByClassName("pcMenuTabModeli1opis");
    brojHtmla2=5;
    let test3=document.getElementById("nezvisekojeimedadam");
    test3.innerHTML="Coupei";
    if(brojHtmla!=1){  //Da ne otvara novi tab ako nisu nasi modeli
        return;
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="0";
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="1";
    }

    test2[0].innerHTML="CLA Coupe";
    test2[1].innerHTML="C-klasa Coupe";
    test2[2].innerHTML="CLS Coupe";
    test2[3].innerHTML="E-klasa Coupe";
    test2[4].innerHTML="Mercedes-AMG GT Coupe";
    test2[5].innerHTML="Mercedes-AMG GT Coupe s 4 vrata";

    
    test[0].style.display="block"; 
    test[0].style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcTabCabrieloti(){
    let test=document.getElementsByClassName("pcnoviModeli1");
    let test1=document.getElementsByClassName("pcMenuTabModeli");
    let test2=document.getElementsByClassName("pcMenuTabModeli1opis");
    brojHtmla2=6;
    let test3=document.getElementById("nezvisekojeimedadam");
    test3.innerHTML="Cabrieloti & Roadsteri";
    if(brojHtmla!=1){  //Da ne otvara novi tab ako nisu nasi modeli
        return;
    }
    for(let i=0; i<test1.length; i++){
        test1[i].style.opacity="0";
    }
    for(let i=0; i<test1.length-2; i++){
        test1[i].style.opacity="1";
    }

    test2[0].innerHTML="SL-Roadster";
    test2[1].innerHTML="C-klasa Cabriolet";
    test2[2].innerHTML="E-klasa Cabriolet";
    test2[3].innerHTML="Mercedes AMG GT Roadster";

    test[0].style.display="block"; 
    test[0].style.animation="pcDesnoStvoriSe 1s forwards";
}

function pcBrisiTab(){
    let tab=document.getElementById("pcnoviModeliPopup");
    tab.style.animation="pcDesnoNestani 2s forwards";
    pcNazad();
    setTimeout(pcDisplayNone,1000);
}

function pcNazad(){
    let tab=document.getElementById("pcnoviModeli1");
    tab.style.animation="pcDesnoNestani 2s forwards";
    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelicaB 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelicaB 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelicaB 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelicaB 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelicaB 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelicaB 2s forwards";
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="grey";
    test2.style.color="grey";
    test3.style.color="grey";
    test4.style.color="grey";
    test5.style.color="grey";
    test6.style.color="grey";
    setTimeout(pcDisplayNone1,1000);
}

function pcDisplayNone(){ // za prvi bar
    let tab=document.getElementById("pcnoviModeliPopup");
    tab.style.display="none";

}

function pcDisplayNone1(){ // za drugi bar
    let tab1=document.getElementById("pcnoviModeli1");
    tab1.style.display="none";
}

function pcKompaktiplavo(){
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="#00b8e6";
    test2.style.color="grey";
    test3.style.color="grey";
    test4.style.color="grey";
    test5.style.color="grey";
    test6.style.color="grey";

    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelica 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelicaB 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelicaB 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelicaB 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelicaB 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelicaB 2s forwards";

    pcTabKompakti();


}

function pcLimuzineplavo(){
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="grey";
    test2.style.color="#00b8e6";
    test3.style.color="grey";
    test4.style.color="grey";
    test5.style.color="grey";
    test6.style.color="grey";

    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelicaB 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelica 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelicaB 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelicaB 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelicaB 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelicaB 2s forwards";

    pcTabLimuzine();


}

function pcKaravaniplavo(){
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="grey";
    test2.style.color="grey";
    test3.style.color="#00b8e6";
    test4.style.color="grey";
    test5.style.color="grey";
    test6.style.color="grey";

    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelicaB 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelicaB 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelica 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelicaB 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelicaB 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelicaB 2s forwards";

    pcTabKaravani();

}

function pcSUVoviplavo(){
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="grey";
    test2.style.color="grey";
    test3.style.color="grey";
    test4.style.color="#00b8e6";
    test5.style.color="grey";
    test6.style.color="grey";

    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelicaB 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelicaB 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelicaB 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelica 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelicaB 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelicaB 2s forwards";
    
    pcTabSUV();

}

function pcCoupeiplavo(){
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="grey";
    test2.style.color="grey";
    test3.style.color="grey";
    test4.style.color="grey";
    test5.style.color="#00b8e6";
    test6.style.color="grey";

    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelicaB 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelicaB 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelicaB 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelicaB 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelica 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelicaB 2s forwards";

    pcTabCoupei();
}

function pcCabrielotiplavo(){
    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.style.color="grey";
    test2.style.color="grey";
    test3.style.color="grey";
    test4.style.color="grey";
    test5.style.color="grey";
    test6.style.color="#00b8e6";

    let slika1=document.getElementById("pcKompaktStrelica")
    slika1.style.animation="strelicaB 2s forwards";
    let slika2=document.getElementById("pcLimuzinaStrelica")
    slika2.style.animation="strelicaB 2s forwards";
    let slika3=document.getElementById("pcKaravanStrelica")
    slika3.style.animation="strelicaB 2s forwards";
    let slika4=document.getElementById("pcSUVStrelica")
    slika4.style.animation="strelicaB 2s forwards";
    let slika5=document.getElementById("pcCoupeiStrelica")
    slika5.style.animation="strelicaB 2s forwards";
    let slika6=document.getElementById("pcCabrielotStrelica")
    slika6.style.animation="strelica 2s forwards";

    pcTabCabrieloti();
}


// PRONADJI I KUPI 

let brojHtmla=0;   // 1 tab sta stisnes
let brojHtmla2=0; //2 tab sta stisnes
let brojHtmla3=0; //3 tab sta stisnes
function provjeraHTML(){
    brojHtmla3=1;
    provjeraHTMLA(brojHtmla,brojHtmla2,brojHtmla3);
}
function provjeraHTML1(){
    brojHtmla3=2;
    provjeraHTMLA(brojHtmla,brojHtmla2,brojHtmla3);
}
function provjeraHTMLA(broj,drugibroj,trecibroj){
    if (broj==1 && drugibroj==1 & trecibroj==1){

        window.location.href='a-klasa-kompaktna.html?aklasa=a';
    }

    if(broj==1 && drugibroj==1 && trecibroj==2){
        window.location.href='a-klasa-kompaktna.html?bklasa=b';
    }
    console.log(brojHtmla);
    console.log(brojHtmla2);
    
}


function pcTabPronadji(){
    brojHtmla=2;
    let naslov1=document.getElementById("pcnoviModeliPopupNaslov");
    naslov1.innerHTML="Pronadjite i Kupite";
    let modeli1=document.getElementsByClassName("modeli1");
    for(let i=0; i<modeli1.length; i++){
        modeli1[i].style.opacity="1";
    }

    let strelice=document.getElementsByClassName("streliceDesno");
    for(let i=0; i<strelice.length; i++){
        strelice[i].style.opacity="0";
    }

    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.innerHTML="Aktualna ponuda i akcije";
    test2.innerHTML="Pregled modela";
    test3.innerHTML="Rabljena vozila";
    test4.innerHTML="Poslovno korisnici i upravljanje flotom";
    test5.innerHTML="Diplomatic Sales";
    test6.innerHTML="Pomagala za voznju";
    let tab=document.getElementById("pcnoviModeliPopup");
    tab.style.display="block";
    tab.style.animation="pcDesnoStvoriSe 1s forwards";

    
}

function pcTabTehnologija(){
    let naslov1=document.getElementById("pcnoviModeliPopupNaslov");
    naslov1.innerHTML="Tehnologija i Inovacije";
    brojHtmla=3;
    let modeli1=document.getElementsByClassName("modeli1");
    for(let i=0; i<modeli1.length; i++){
        modeli1[i].style.opacity="1";
    }

    let strelice=document.getElementsByClassName("streliceDesno");
    for(let i=0; i<strelice.length; i++){
        if(i==0){
            strelice[i].style.opacity="1";
        }
        else{
            strelice[i].style.opacity="0";
        }
        
    }

    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");

    test1.innerHTML="E-mobilnost";
    test2.innerHTML="MBUX Multimedijski sustav";
    test3.innerHTML="Mercedes me connect";
    test4.innerHTML="Mercedes-Benz Intellingent Drive";
    test5.innerHTML="Mercedes-AMG";
    test6.innerHTML="Konceptna vozila & Dizajn";
    let tab=document.getElementById("pcnoviModeliPopup");
    tab.style.display="block";
    tab.style.animation="pcDesnoStvoriSe 1s forwards";
 
}

function pcTabFinanciranje(){
    let naslov1=document.getElementById("pcnoviModeliPopupNaslov");
    naslov1.innerHTML="Financiranje";
    
    brojHtmla=4;

    let strelice=document.getElementsByClassName("streliceDesno");
    for(let i=0; i<strelice.length; i++){
        strelice[i].style.opacity="0";
        
    }

    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");
    let modeli1=document.getElementsByClassName("modeli1");
    for(let i=3; i<modeli1.length; i++){
        modeli1[i].style.opacity="0";
    }
    test1.innerHTML="Aktualne ponude";
    test2.innerHTML="Mercedes-Benz Leasing";
    test3.innerHTML="Leasing vozila";
    test4.innerHTML="Mercedes-Benz Intellingent Drive";
    test5.innerHTML="Mercedes-AMG";
    test6.innerHTML="Konceptna vozila & Dizajn";
    let tab=document.getElementById("pcnoviModeliPopup");
    tab.style.display="block";
    tab.style.animation="pcDesnoStvoriSe 1s forwards";
 
}

function pcTabServis(){
    let naslov1=document.getElementById("pcnoviModeliPopupNaslov");
    naslov1.innerHTML="Servis i oprema";
    
    brojHtmla=5;

    let strelice=document.getElementsByClassName("streliceDesno");
    for(let i=0; i<strelice.length; i++){     
        strelice[i].style.opacity="0";

    }

    let test1=document.getElementById("pcKompakt1");
    let test2=document.getElementById("pcLimuzina1");
    let test3=document.getElementById("pcKaravan1");
    let test4=document.getElementById("pcSuv1");
    let test5=document.getElementById("pcCoupei1");
    let test6=document.getElementById("pcCabrielot1");
    let modeli1=document.getElementsByClassName("modeli1");
    for(let i=0; i<modeli1.length; i++){
        modeli1[i].style.opacity="1";
    }
    test1.innerHTML="Aktualne ponude";
    test2.innerHTML="Mercedes me";
    test3.innerHTML="Digitalne usluge i aplikacije";
    test4.innerHTML="Servis i odrzavanje";
    test5.innerHTML="Dijelovi i dodatna oprema";
    test6.innerHTML="Upute za uporabu";
    let tab=document.getElementById("pcnoviModeliPopup");
    tab.style.display="block";
    tab.style.animation="pcDesnoStvoriSe 1s forwards";
 
}


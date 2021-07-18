// broj slike za slajdere
let brojslike=1;

// kompaktni 1 , limuzine 2 karavani 3 suvovi 4 coupei 5 cabrieloti 6 broj kojim oznacavam na sta je stisnuto

let brojKlaseModela=1;



function dugme1(){
    const dugme1=document.getElementById("dugme1");
    const dugme2=document.getElementById("dugme2");
    const dugme3=document.getElementById("dugme3");
    const dugme4=document.getElementById("dugme4");
    brojslike=1;

    dugme1.style.background="#00b8e6";
    dugme2.style.background="white";
    dugme3.style.background="white";
    dugme4.style.background="white";
   
    const slike=document.getElementsByClassName("slide");
    for(let i=0; i<slike.length; i++){
        slike[i].style.transform="translate(0%)";
    }

    const text=document.getElementsByClassName("dropdownslidertekst");
    

    let text1=text[0];
    let text2=text[1];
    text1.style.display="none";
    text2.style.display="none";

    text1.innerHTML="ALL Star 2021.";
    text2.innerHTML="> Posebna ponuda vozila dostupnih odmah. Postanite clan najboljeg tima.";
    
    setTimeout(opacityAnimacija,2000);
    
    
    
}

function dugme2(){
    const dugme1=document.getElementById("dugme1");
    const dugme2=document.getElementById("dugme2");
    const dugme3=document.getElementById("dugme3");
    const dugme4=document.getElementById("dugme4");
    brojslike=2;

    dugme1.style.background="white";
    dugme2.style.background="#00b8e6";
    dugme3.style.background="white";
    dugme4.style.background="white";

    const slike=document.getElementsByClassName("slide");
    for(let i=0; i<slike.length; i++){
        slike[i].style.transform="translate(-100%)";
    }

    const text=document.getElementsByClassName("dropdownslidertekst");
    

    let text1=text[0];
    let text2=text[1];
    text1.style.display="none";
    text2.style.display="none";

    text1.innerHTML="Mercedes-Benz SUV-ovi.";
    text2.innerHTML="> U svom elementu gotovo na svakom terenu.";

    setTimeout(opacityAnimacija,2000);
    
}

function dugme3(){
    const dugme1=document.getElementById("dugme1");
    const dugme2=document.getElementById("dugme2");
    const dugme3=document.getElementById("dugme3");
    const dugme4=document.getElementById("dugme4");
    brojslike=3;

    dugme1.style.background="white";
    dugme2.style.background="white";
    dugme3.style.background="#00b8e6";
    dugme4.style.background="white";


    const slike=document.getElementsByClassName("slide");
    for(let i=0; i<slike.length; i++){
        slike[i].style.transform="translate(-200%)";
    }

    const text=document.getElementsByClassName("dropdownslidertekst");
   

    let text1=text[0];
    let text2=text[1];
    text1.style.display="none";
    text2.style.display="none";

    text1.innerHTML="Zima u punom sjaju.";
    text2.innerHTML="> Iskoristite popuste na artikle iz nase ponude i najavite se na sezonsku provjeru Vaseg vozila u ovlastenom Mercedes-Benz servisu.";

  
    setTimeout(opacityAnimacija,2000);
}

function dugme4(){
    const dugme1=document.getElementById("dugme1");
    const dugme2=document.getElementById("dugme2");
    const dugme3=document.getElementById("dugme3");
    const dugme4=document.getElementById("dugme4");
    brojslike=4;
    
    dugme1.style.background="white";
    dugme2.style.background="white";
    dugme3.style.background="white";
    dugme4.style.background="#00b8e6";

    const slike=document.getElementsByClassName("slide");
    for(let i=0; i<slike.length; i++){
        slike[i].style.transform="translate(-300%)";
    }
    
    const text=document.getElementsByClassName("dropdownslidertekst");


    let text1=text[0];
    let text2=text[1];
    text1.style.display="none";
    text2.style.display="none";

    text1.innerHTML="Novi EQA.";
    text2.innerHTML="> Za novu generaciju";
    setTimeout(opacityAnimacija,2000);
    
}

function opacityAnimacija(){
    const text=document.getElementsByClassName("dropdownslidertekst");
    
    let text1=text[0];
    let text2=text[1];

    text1.style.display="block";
    text2.style.display="block";

    text1.style.animation="pcOpacity 3s";
    text2.style.animation="pcOpacity 3s";
}


const interval = setInterval(function() {
    brojslike++;
    if(brojslike==5){
        brojslike=1;
    }

    if(brojslike==1){
        dugme1();
    }

    if(brojslike==2){
        dugme2();
    }

    if(brojslike==3){
        dugme3();
    }

    if(brojslike==4){
        dugme4();
    }
  }, 10000);


  // PC LISTA MODELA TOCKICE ZA SVAKU TOCKICU KAD SE KLIKNE AKTIVIRA SE FUNKCIJA


  function pcKompakti(){ 
    brojKlaseModela=1;
    let ikonica=document.getElementById("model1");
    ikonica.style.transform="scale(1.2)";
    let ikonica2=document.getElementById("model2");
    ikonica2.style.transform="scale(1)";
    let ikonica3=document.getElementById("model3");
    ikonica3.style.transform="scale(1)";
    let ikonica4=document.getElementById("model4");
    ikonica4.style.transform="scale(1)";
    let ikonica5=document.getElementById("model5");
    ikonica5.style.transform="scale(1)";
    let ikonica6=document.getElementById("model6");
    ikonica6.style.transform="scale(1)";

    let model1=document.getElementById("pcmodeli1");
    model1.style.display="block";

    let model2=document.getElementById("pcmodeli2");
    model2.style.display="block";

    let model3=document.getElementById("pcmodeli3");
    model3.style.display="none";

    let model4=document.getElementById("pcmodeli4");
    model4.style.display="none";

    let model5=document.getElementById("pcmodeli5");
    model5.style.display="none";

    let model6=document.getElementById("pcmodeli6");
    model6.style.display="none";

    model1.style.animation="stvaranjeModela 2s forwards";
    model2.style.animation="stvaranjeModela 2s forwards";

    let slikaAuta1=document.getElementById("kompaktna1");
    let slikaAuta2=document.getElementById("kompaktna2");
    slikaAuta1.src="images/kompaktne/kompaktna1.webp";
    slikaAuta2.src="images/kompaktne/kompaktna2.webp";

    
    let ime=document.getElementById("pcImeModela1");
    let cijena=document.getElementById("pcCijenaModela1");
    ime.innerHTML="A-klasa kompaktna limuzina";
    cijena.innerHTML="od 187.935,00 HRK";


    let ime2=document.getElementById("pcImeModela2");
    let cijena2=document.getElementById("pcCijenaModela2");
    ime2.innerHTML="B-klasa Sports Tourer";
    cijena2.innerHTML="od 211.036,00 HRK";

    
   
  }

  function pcLimuzine(){
    brojKlaseModela=2;
    let ikonica=document.getElementById("model1");
    ikonica.style.transform="scale(1)";
    let ikonica2=document.getElementById("model2");
    ikonica2.style.transform="scale(1.2)";
    let ikonica3=document.getElementById("model3");
    ikonica3.style.transform="scale(1)";
    let ikonica4=document.getElementById("model4");
    ikonica4.style.transform="scale(1)";
    let ikonica5=document.getElementById("model5");
    ikonica5.style.transform="scale(1)";
    let ikonica6=document.getElementById("model6");
    ikonica6.style.transform="scale(1)";
    let model1=document.getElementById("pcmodeli1");
    model1.style.display="block";

    let model2=document.getElementById("pcmodeli2");
    model2.style.display="block";

    let model3=document.getElementById("pcmodeli3");
    model3.style.display="block";

    let model4=document.getElementById("pcmodeli4");
    model4.style.display="block";

    let model5=document.getElementById("pcmodeli5");
    model5.style.display="none";

    let model6=document.getElementById("pcmodeli6");
    model6.style.display="none";

    model1.style.animation="stvaranjeModela 2s forwards";
    model2.style.animation="stvaranjeModela 2s forwards";
    model3.style.animation="stvaranjeModela 2s forwards";
    model4.style.animation="stvaranjeModela 2s forwards";
    

    let slikaAuta1=document.getElementById("kompaktna1");
    let slikaAuta2=document.getElementById("kompaktna2");
    let slikaAuta3=document.getElementById("kompaktna3");
    let slikaAuta4=document.getElementById("kompaktna4");
    
    slikaAuta1.src="images/limuzine/limuzina1.webp";
    slikaAuta2.src="images/limuzine/limuzina2.webp";
    slikaAuta3.src="images/limuzine/limuzina3.webp";
    slikaAuta4.src="images/limuzine/limuzina4.webp";

    let ime=document.getElementById("pcImeModela1");
    let cijena=document.getElementById("pcCijenaModela1");
    ime.innerHTML="A-klasa limuzina";
    cijena.innerHTML="od 212.013,00 HRK";

    let ime2=document.getElementById("pcImeModela2");
    let cijena2=document.getElementById("pcCijenaModela2");
    ime2.innerHTML="C-klasa Limuzina";
    cijena2.innerHTML="od 249.120,00 HRK";

    let ime3=document.getElementById("pcImeModela3");
    let cijena3=document.getElementById("pcCijenaModela3");
    ime3.innerHTML="E-klasa Limuzina";
    cijena3.innerHTML="od 429.705,00 HRK";

    let ime4=document.getElementById("pcImeModela4");
    let cijena4=document.getElementById("pcCijenaModela4");
    ime4.innerHTML="S-klasa Limuzina";
    cijena4.innerHTML="od 934.615,00 HRK";

 
}

function pcKaravani(){
    brojKlaseModela=3;
    let ikonica=document.getElementById("model1");
    ikonica.style.transform="scale(1)";
    let ikonica2=document.getElementById("model2");
    ikonica2.style.transform="scale(1)";
    let ikonica3=document.getElementById("model3");
    ikonica3.style.transform="scale(1.2)";
    let ikonica4=document.getElementById("model4");
    ikonica4.style.transform="scale(1)";
    let ikonica5=document.getElementById("model5");
    ikonica5.style.transform="scale(1)";
    let ikonica6=document.getElementById("model6");
    ikonica6.style.transform="scale(1)";
    let model1=document.getElementById("pcmodeli1");
    model1.style.display="block";

    let model2=document.getElementById("pcmodeli2");
    model2.style.display="block";

    let model3=document.getElementById("pcmodeli3");
    model3.style.display="block";

    let model4=document.getElementById("pcmodeli4");
    model4.style.display="block";

    let model5=document.getElementById("pcmodeli5");
    model5.style.display="none";

    let model6=document.getElementById("pcmodeli6");
    model6.style.display="none";
 
    model1.style.animation="stvaranjeModela 2s forwards";
    model2.style.animation="stvaranjeModela 2s forwards";
    model3.style.animation="stvaranjeModela 2s forwards";
    model4.style.animation="stvaranjeModela 2s forwards";

    let slikaAuta1=document.getElementById("kompaktna1");
    let slikaAuta2=document.getElementById("kompaktna2");
    let slikaAuta3=document.getElementById("kompaktna3");
    let slikaAuta4=document.getElementById("kompaktna4");
    

    slikaAuta1.src="images/karavani/karavan1.webp";
    slikaAuta2.src="images/karavani/karavan2.webp";
    slikaAuta3.src="images/karavani/karavan3.webp";
    slikaAuta4.src="images/karavani/karavan4.webp";

    let ime=document.getElementById("pcImeModela1");
    let cijena=document.getElementById("pcCijenaModela1");
    ime.innerHTML="CLA Shooting Brake";
    cijena.innerHTML="od 229.848,00 HRK";

    let ime2=document.getElementById("pcImeModela2");
    let cijena2=document.getElementById("pcCijenaModela2");
    ime2.innerHTML="C-klasa Karavan";
    cijena2.innerHTML="od 261.675,00 HRK";

    let ime3=document.getElementById("pcImeModela3");
    let cijena3=document.getElementById("pcCijenaModela3");
    ime3.innerHTML="E-klasa Karavan";
    cijena3.innerHTML="od 455.790,00 HRK";

    let ime4=document.getElementById("pcImeModela4");
    let cijena4=document.getElementById("pcCijenaModela4");
    ime4.innerHTML="E-klasa All-Terrain";
    cijena4.innerHTML="od 500.615,00 HRK";
    
}

function pcSUVovi(){
    brojKlaseModela=4;
    let ikonica=document.getElementById("model1");
    ikonica.style.transform="scale(1)";
    let ikonica2=document.getElementById("model2");
    ikonica2.style.transform="scale(1)";
    let ikonica3=document.getElementById("model3");
    ikonica3.style.transform="scale(1)";
    let ikonica4=document.getElementById("model4");
    ikonica4.style.transform="scale(1.2)";
    let ikonica5=document.getElementById("model5");
    ikonica5.style.transform="scale(1)";
    let ikonica6=document.getElementById("model6");
    ikonica6.style.transform="scale(1)";
    let model1=document.getElementById("pcmodeli1");
    model1.style.display="block";

    let model2=document.getElementById("pcmodeli2");
    model2.style.display="block";

    let model3=document.getElementById("pcmodeli3");
    model3.style.display="block";

    let model4=document.getElementById("pcmodeli4");
    model4.style.display="block";

    let model5=document.getElementById("pcmodeli5");
    model5.style.display="block";

    let model6=document.getElementById("pcmodeli6");
    model6.style.display="block";

    model1.style.animation="stvaranjeModela 2s forwards";
    model2.style.animation="stvaranjeModela 2s forwards";
    model3.style.animation="stvaranjeModela 2s forwards";
    model4.style.animation="stvaranjeModela 2s forwards";
    model5.style.animation="stvaranjeModela 2s forwards";
    model6.style.animation="stvaranjeModela 2s forwards";

    let slikaAuta1=document.getElementById("kompaktna1");
    let slikaAuta2=document.getElementById("kompaktna2");
    let slikaAuta3=document.getElementById("kompaktna3");
    let slikaAuta4=document.getElementById("kompaktna4");
    let slikaAuta5=document.getElementById("kompaktna5");
    let slikaAuta6=document.getElementById("kompaktna6");
    

    slikaAuta1.src="images/suvovi/suv1.webp";
    slikaAuta2.src="images/suvovi/suv2.webp";
    slikaAuta3.src="images/suvovi/suv3.webp";
    slikaAuta4.src="images/suvovi/suv4.webp";
    slikaAuta5.src="images/suvovi/suv5.webp";
    slikaAuta6.src="images/suvovi/suv6.webp";

    let ime=document.getElementById("pcImeModela1");
    let cijena=document.getElementById("pcCijenaModela1");
    ime.innerHTML="G-klasa terensko vozilo";
    cijena.innerHTML="od 1.075.625,00 HRK";

    let ime2=document.getElementById("pcImeModela2");
    let cijena2=document.getElementById("pcCijenaModela2");
    ime2.innerHTML="GLA SUV";
    cijena2.innerHTML="od 238.437,00 HRK";

    let ime3=document.getElementById("pcImeModela3");
    let cijena3=document.getElementById("pcCijenaModela3");
    ime3.innerHTML="GLB SUV";
    cijena3.innerHTML="od 270.200,00 HRK";

    let ime4=document.getElementById("pcImeModela4");
    let cijena4=document.getElementById("pcCijenaModela4");
    ime4.innerHTML="GLC SUV";
    cijena4.innerHTML="od 413.490,00 HRK";

    let ime5=document.getElementById("pcImeModela5");
    let cijena5=document.getElementById("pcCijenaModela5");
    ime5.innerHTML="GLE SUV";
    cijena5.innerHTML="od 613.490,00 HRK";

    let ime6=document.getElementById("pcImeModela6");
    let cijena6=document.getElementById("pcCijenaModela6");
    ime6.innerHTML="GLS SUV";
    cijena6.innerHTML="od 815.405,00 HRK";

}

function pcCoupei(){
    brojKlaseModela=5;
    let ikonica=document.getElementById("model1");
    ikonica.style.transform="scale(1)";
    let ikonica2=document.getElementById("model2");
    ikonica2.style.transform="scale(1)";
    let ikonica3=document.getElementById("model3");
    ikonica3.style.transform="scale(1)";
    let ikonica4=document.getElementById("model4");
    ikonica4.style.transform="scale(1)";
    let ikonica5=document.getElementById("model5");
    ikonica5.style.transform="scale(1.2)";
    let ikonica6=document.getElementById("model6");
    ikonica6.style.transform="scale(1)";
    let model1=document.getElementById("pcmodeli1");
    model1.style.display="block";

    let model2=document.getElementById("pcmodeli2");
    model2.style.display="block";

    let model3=document.getElementById("pcmodeli3");
    model3.style.display="block";

    let model4=document.getElementById("pcmodeli4");
    model4.style.display="block";

    let model5=document.getElementById("pcmodeli5");
    model5.style.display="block";

    let model6=document.getElementById("pcmodeli6");
    model6.style.display="block";
 
    model1.style.animation="stvaranjeModela 2s forwards";
    model2.style.animation="stvaranjeModela 2s forwards";
    model3.style.animation="stvaranjeModela 2s forwards";
    model4.style.animation="stvaranjeModela 2s forwards";
    model5.style.animation="stvaranjeModela 2s forwards";
    model6.style.animation="stvaranjeModela 2s forwards";

    let slikaAuta1=document.getElementById("kompaktna1");
    let slikaAuta2=document.getElementById("kompaktna2");
    let slikaAuta3=document.getElementById("kompaktna3");
    let slikaAuta4=document.getElementById("kompaktna4");
    let slikaAuta5=document.getElementById("kompaktna5");
    let slikaAuta6=document.getElementById("kompaktna6");
    

    slikaAuta1.src="images/coupei/coupei1.webp";
    slikaAuta2.src="images/coupei/coupei2.webp";
    slikaAuta3.src="images/coupei/coupei3.webp";
    slikaAuta4.src="images/coupei/coupei4.webp";
    slikaAuta5.src="images/coupei/coupei5.webp";
    slikaAuta6.src="images/coupei/coupei6.webp";

    let ime=document.getElementById("pcImeModela1");
    let cijena=document.getElementById("pcCijenaModela1");
    ime.innerHTML="C-klasa Coupe";
    cijena.innerHTML="od 306.881,00 HRK";

    let ime2=document.getElementById("pcImeModela2");
    let cijena2=document.getElementById("pcCijenaModela2");
    ime2.innerHTML="E-klasa Coupe";
    cijena2.innerHTML="od 461.090,00 HRK";

    let ime3=document.getElementById("pcImeModela3");
    let cijena3=document.getElementById("pcCijenaModela3");
    ime3.innerHTML="CLA Coupe";
    cijena3.innerHTML="od 224.933,00 HRK";

    let ime4=document.getElementById("pcImeModela4");
    let cijena4=document.getElementById("pcCijenaModela4");
    ime4.innerHTML="CLS Coupe";
    cijena4.innerHTML="od 519.635,00 HRK";

    let ime5=document.getElementById("pcImeModela5");
    let cijena5=document.getElementById("pcCijenaModela5");
    ime5.innerHTML="Mercedes-AMG GT Coupe";
    cijena5.innerHTML="od 1.600.940,00 HRK";

    let ime6=document.getElementById("pcImeModela6");
    let cijena6=document.getElementById("pcCijenaModela6");
    ime6.innerHTML="Mercedes-AMG GT Coupe s 4 vrata";
    cijena6.innerHTML="od 913.835,00 HRK";
}

function pcCabrieloti(){
    brojKlaseModela=6;
    let ikonica=document.getElementById("model1");
    ikonica.style.transform="scale(1)";
    let ikonica2=document.getElementById("model2");
    ikonica2.style.transform="scale(1)";
    let ikonica3=document.getElementById("model3");
    ikonica3.style.transform="scale(1)";
    let ikonica4=document.getElementById("model4");
    ikonica4.style.transform="scale(1)";
    let ikonica5=document.getElementById("model5");
    ikonica5.style.transform="scale(1)";
    let ikonica6=document.getElementById("model6");
    ikonica6.style.transform="scale(1.2)";
    let model1=document.getElementById("pcmodeli1");
    model1.style.display="block";

    let model2=document.getElementById("pcmodeli2");
    model2.style.display="block";

    let model3=document.getElementById("pcmodeli3");
    model3.style.display="block";

    let model4=document.getElementById("pcmodeli4");
    model4.style.display="block";

    let model5=document.getElementById("pcmodeli5");
    model5.style.display="none";

    let model6=document.getElementById("pcmodeli6");
    model6.style.display="none";

    model1.style.animation="stvaranjeModela 2s forwards";
    model2.style.animation="stvaranjeModela 2s forwards";
    model3.style.animation="stvaranjeModela 2s forwards";
    model4.style.animation="stvaranjeModela 2s forwards";

    let slikaAuta1=document.getElementById("kompaktna1");
    let slikaAuta2=document.getElementById("kompaktna2");
    let slikaAuta3=document.getElementById("kompaktna3");
    let slikaAuta4=document.getElementById("kompaktna4");

    slikaAuta1.src="images/kabrioleti/kabrioleti1.webp";
    slikaAuta2.src="images/kabrioleti/kabrioleti2.webp";
    slikaAuta3.src="images/kabrioleti/kabrioleti3.webp";
    slikaAuta4.src="images/kabrioleti/kabrioleti4.webp";

    let ime=document.getElementById("pcImeModela1");
    let cijena=document.getElementById("pcCijenaModela1");
    ime.innerHTML="SL Roadster";
    cijena.innerHTML="od 960.919,00 HRK";

    let ime2=document.getElementById("pcImeModela2");
    let cijena2=document.getElementById("pcCijenaModela2");
    ime2.innerHTML="C-klasa Cabriolet";
    cijena2.innerHTML="od 361.843,00 HRK";

    let ime3=document.getElementById("pcImeModela3");
    let cijena3=document.getElementById("pcCijenaModela3");
    ime3.innerHTML="E-klasa Cabriolet";
    cijena3.innerHTML="od 513.780,00 HRK";

    let ime4=document.getElementById("pcImeModela4");
    let cijena4=document.getElementById("pcCijenaModela4");
    ime4.innerHTML="Mercedes-AMG GT Roadster";
    cijena4.innerHTML="od 1.719.590,00 HRK";
    
    
 
}

// PROVJERA KLASE MODELA

// "broj" je jedna od 3 slike koji ima svaki model
// "brojmodela" je broj pozicije svakog elementa u flexboxu
// "brojKlaseModela" je broj kategorije auta kompakti limuzine itd...

function provjera(broj,brojmodela){

    if(brojKlaseModela==1 && brojmodela==1){
        let model1=document.getElementById("kompaktna1");
        if(broj==1){
            model1.src="images/kompaktne/kompaktna1.webp";
        }
        if(broj==2){
            model1.src="images/kompaktne/kompaktna1_2.webp";
        }
        if(broj==3){
            model1.src="images/kompaktne/kompaktna1_3.webp";
        }
    }

    if(brojKlaseModela==1 && brojmodela==2){
        let model1=document.getElementById("kompaktna2");
        if(broj==1){
            model1.src="images/kompaktne/kompaktna2.webp";
        }
        if(broj==2){
            model1.src="images/kompaktne/kompaktna2_2.webp";
        }
        if(broj==3){
            model1.src="images/kompaktne/kompaktna2_3.webp";
        }
    }

    if(brojKlaseModela==2 && brojmodela==1){
        let model1=document.getElementById("kompaktna1");
        if(broj==1){
            model1.src="images/limuzine/limuzina1.webp";
        }
        if(broj==2){
            model1.src="images/limuzine/limuzina1_1.webp";
        }
        if(broj==3){
            model1.src="images/limuzine/limuzina1_2.webp";
        }
        
    }

    if(brojKlaseModela==2 && brojmodela==2){
        let model=document.getElementById("kompaktna2");
        if(broj==1){
            model.src="images/limuzine/limuzina2.webp";
        }
        if(broj==2){
            model.src="images/limuzine/limuzina2_1.webp";
        }
        if(broj==3){
            model.src="images/limuzine/limuzina2_2.webp";
        }
        
    }

    if(brojKlaseModela==2 && brojmodela==3){
        let model=document.getElementById("kompaktna3");
        if(broj==1){
            model.src="images/limuzine/limuzina3.webp";
        }
        if(broj==2){
            model.src="images/limuzine/limuzina3_1.webp";
        }
        if(broj==3){
            model.src="images/limuzine/limuzina3_2.webp";
        }
        
    }

    if(brojKlaseModela==2 && brojmodela==4){
        let model=document.getElementById("kompaktna4");
        if(broj==1){
            model.src="images/limuzine/limuzina4.webp";
        }
        if(broj==2){
            model.src="images/limuzine/limuzina4_1.webp";
        }
        if(broj==3){
            model.src="images/limuzine/limuzina4_2.webp";
        }
        
    }

    if(brojKlaseModela==3 && brojmodela==1){
        let model=document.getElementById("kompaktna1");
        if(broj==1){
            model.src="images/karavani/karavan1.webp";
        }
        if(broj==2){
            model.src="images/karavani/karavan1_1.webp";
        }
        if(broj==3){
            model.src="images/karavani/karavan1_2.webp";
        }
        
    }

    if(brojKlaseModela==3 && brojmodela==2){
        let model=document.getElementById("kompaktna2");
        if(broj==1){
            model.src="images/karavani/karavan2.webp";
        }
        if(broj==2){
            model.src="images/karavani/karavan2_1.webp";
        }
        if(broj==3){
            model.src="images/karavani/karavan2_2.webp";
        }
        
    }

    if(brojKlaseModela==3 && brojmodela==3){
        let model=document.getElementById("kompaktna3");
        if(broj==1){
            model.src="images/karavani/karavan3.webp";
        }
        if(broj==2){
            model.src="images/karavani/karavan3_1.webp";
        }
        if(broj==3){
            model.src="images/karavani/karavan3_2.webp";
        }
        
    }

    if(brojKlaseModela==3 && brojmodela==4){
        let model=document.getElementById("kompaktna4");
        if(broj==1){
            model.src="images/karavani/karavan4.webp";
        }
        if(broj==2){
            model.src="images/karavani/karavan4_1.webp";
        }
        if(broj==3){
            model.src="images/karavani/karavan4_2.webp";
        }
        
    }

    if(brojKlaseModela==4 && brojmodela==1){
        let model=document.getElementById("kompaktna1");
        if(broj==1){
            model.src="images/suvovi/suv1.webp";
        }
        if(broj==2){
            model.src="images/suvovi/suv1_1.webp";
        }
        if(broj==3){
            model.src="images/suvovi/suv1_2.webp";
        }
        
    }

    if(brojKlaseModela==4 && brojmodela==2){
        let model=document.getElementById("kompaktna2");
        if(broj==1){
            model.src="images/suvovi/suv2.webp";
        }
        if(broj==2){
            model.src="images/suvovi/suv2_1.webp";
        }
        if(broj==3){
            model.src="images/suvovi/suv2_2.webp";
        }
        
    }

    if(brojKlaseModela==4 && brojmodela==3){
        let model=document.getElementById("kompaktna3");
        if(broj==1){
            model.src="images/suvovi/suv3.webp";
        }
        if(broj==2){
            model.src="images/suvovi/suv3_1.webp";
        }
        if(broj==3){
            model.src="images/suvovi/suv3_2.webp";
        }
        
    }
    if(brojKlaseModela==4 && brojmodela==4){
        let model=document.getElementById("kompaktna4");
        if(broj==1){
            model.src="images/suvovi/suv4.webp";
        }
        if(broj==2){
            model.src="images/suvovi/suv4_1.webp";
        }
        if(broj==3){
            model.src="images/suvovi/suv4_2.webp";
        }
        
    }

    if(brojKlaseModela==4 && brojmodela==5){
        let model=document.getElementById("kompaktna5");
        if(broj==1){
            model.src="images/suvovi/suv5.webp";
        }
        if(broj==2){
            model.src="images/suvovi/suv5_1.webp";
        }
        if(broj==3){
            model.src="images/suvovi/suv5_2.webp";
        }
        
    }

    if(brojKlaseModela==4 && brojmodela==6){
        let model=document.getElementById("kompaktna6");
        if(broj==1){
            model.src="images/suvovi/suv6.webp";
        }
        if(broj==2){
            model.src="images/suvovi/suv6_1.webp";
        }
        if(broj==3){
            model.src="images/suvovi/suv6_2.webp";
        }
        
    }

    if(brojKlaseModela==5 && brojmodela==1){
        let model=document.getElementById("kompaktna1");
        if(broj==1){
            model.src="images/coupei/coupei1.webp";
        }
        if(broj==2){
            model.src="images/coupei/coupei1_1.webp";
        }
        if(broj==3){
            model.src="images/coupei/coupei1_2.webp";
        }
        
    }

    if(brojKlaseModela==5 && brojmodela==2){
        let model=document.getElementById("kompaktna2");
        if(broj==1){
            model.src="images/coupei/coupei2.webp";
        }
        if(broj==2){
            model.src="images/coupei/coupei2_1.webp";
        }
        if(broj==3){
            model.src="images/coupei/coupei2_2.webp";
        }
        
    }

    if(brojKlaseModela==5 && brojmodela==3){
        let model=document.getElementById("kompaktna3");
        if(broj==1){
            model.src="images/coupei/coupei3.webp";
        }
        if(broj==2){
            model.src="images/coupei/coupei3_1.webp";
        }
        if(broj==3){
            model.src="images/coupei/coupei3_2.webp";
        }
        
    }

    if(brojKlaseModela==5 && brojmodela==4){
        let model=document.getElementById("kompaktna4");
        if(broj==1){
            model.src="images/coupei/coupei4.webp";
        }
        if(broj==2){
            model.src="images/coupei/coupei4_1.webp";
        }
        if(broj==3){
            model.src="images/coupei/coupei4_2.webp";
        }
        
    }

    if(brojKlaseModela==5 && brojmodela==5){
        let model=document.getElementById("kompaktna5");
        if(broj==1){
            model.src="images/coupei/coupei5.webp";
        }
        if(broj==2){
            model.src="images/coupei/coupei5_1.webp";
        }
        if(broj==3){
            model.src="images/coupei/coupei5_2.webp";
        }
        
    }

    if(brojKlaseModela==5 && brojmodela==6){
        let model=document.getElementById("kompaktna6");
        if(broj==1){
            model.src="images/coupei/coupei6.webp";
        }
        if(broj==2){
            model.src="images/coupei/coupei6_1.webp";
        }
        if(broj==3){
            model.src="images/coupei/coupei6_2.webp";
        }
        
    }

    if(brojKlaseModela==6 && brojmodela==1){
        let model=document.getElementById("kompaktna1");
        if(broj==1){
            model.src="images/kabrioleti/kabrioleti1.webp";
        }
        if(broj==2){
            model.src="images/kabrioleti/kabrioleti1_1.webp";
        }
        if(broj==3){
            model.src="images/kabrioleti/kabrioleti1_2.webp";
        }
        
    }

    if(brojKlaseModela==6 && brojmodela==2){
        let model=document.getElementById("kompaktna2");
        if(broj==1){
            model.src="images/kabrioleti/kabrioleti2.webp";
        }
        if(broj==2){
            model.src="images/kabrioleti/kabrioleti2_1.webp";
        }
        if(broj==3){
            model.src="images/kabrioleti/kabrioleti2_2.webp";
        }
        
    }

    if(brojKlaseModela==6 && brojmodela==3){
        let model=document.getElementById("kompaktna3");
        if(broj==1){
            model.src="images/kabrioleti/kabrioleti3.webp";
        }
        if(broj==2){
            model.src="images/kabrioleti/kabrioleti3_1.webp";
        }
        if(broj==3){
            model.src="images/kabrioleti/kabrioleti3_2.webp";
        }
        
    }

    if(brojKlaseModela==6 && brojmodela==4){
        let model=document.getElementById("kompaktna4");
        if(broj==1){
            model.src="images/kabrioleti/kabrioleti4.webp";
        }
        if(broj==2){
            model.src="images/kabrioleti/kabrioleti4_1.webp";
        }
        if(broj==3){
            model.src="images/kabrioleti/kabrioleti4_2.webp";
        }
        
    }
}


// TOCKICE ZA MODELE
 
  function kompaktnatockica1(){
    let brojModela=1;
    let test=document.getElementById("kompaktna1");
    let tockica=document.getElementById("kompaktnatockica1");
    let tockica2=document.getElementById("kompaktnatockica2");
    let tockica3=document.getElementById("kompaktnatockica3");
    tockica.style.color="#00b8e6";
    tockica2.style.color="grey";
    tockica3.style.color="grey";
    const mjenjaj=provjera(1,brojModela);

 }

 function kompaktnatockica2(){
    let brojModela=1;
    let test=document.getElementById("kompaktna1");
    let tockica=document.getElementById("kompaktnatockica1");
    let tockica2=document.getElementById("kompaktnatockica2");
    let tockica3=document.getElementById("kompaktnatockica3");
    tockica.style.color="grey";
    tockica2.style.color="#00b8e6";
    tockica3.style.color="grey";
    const mjenjaj=provjera(2,brojModela);
    
    
 }

 function kompaktnatockica3(){
    let brojModela=1;
    let test=document.getElementById("kompaktna1");
    let tockica=document.getElementById("kompaktnatockica1");
    let tockica2=document.getElementById("kompaktnatockica2");
    let tockica3=document.getElementById("kompaktnatockica3");
    tockica.style.color="grey";
    tockica2.style.color="grey";
    tockica3.style.color="#00b8e6";
    const mjenjaj=provjera(3,brojModela);
    
    
 }

 function kompaktnatockica4(){
    let brojModela=2;
    let test=document.getElementById("kompaktna2");
    let tockica=document.getElementById("kompaktnatockica4");
    let tockica2=document.getElementById("kompaktnatockica5");
    let tockica3=document.getElementById("kompaktnatockica6");
    tockica.style.color="#00b8e6";
    tockica2.style.color="grey";
    tockica3.style.color="grey";
    const mjenjaj=provjera(1,brojModela);
    
    
 }
 function kompaktnatockica5(){
    let brojModela=2;
    let test=document.getElementById("kompaktna2");
    let tockica=document.getElementById("kompaktnatockica4");
    let tockica2=document.getElementById("kompaktnatockica5");
    let tockica3=document.getElementById("kompaktnatockica6");
    tockica.style.color="grey";
    tockica2.style.color="#00b8e6";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(2,brojModela);
 }
 function kompaktnatockica6(){
    let brojModela=2;
    let test=document.getElementById("kompaktna2");
    let tockica=document.getElementById("kompaktnatockica4");
    let tockica2=document.getElementById("kompaktnatockica5");
    let tockica3=document.getElementById("kompaktnatockica6");
    tockica.style.color="grey";
    tockica2.style.color="grey";
    tockica3.style.color="#00b8e6";
    
    const mjenjaj=provjera(3,brojModela);
 }

 function kompaktnatockica7(){
    let brojModela=3;
    let test=document.getElementById("kompaktna3");
    let tockica=document.getElementById("kompaktnatockica7");
    let tockica2=document.getElementById("kompaktnatockica8");
    let tockica3=document.getElementById("kompaktnatockica9");
    tockica.style.color="#00b8e6";
    tockica2.style.color="grey";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(1,brojModela);
 }
 function kompaktnatockica8(){
    let brojModela=3;
    let test=document.getElementById("kompaktna3");
    let tockica=document.getElementById("kompaktnatockica7");
    let tockica2=document.getElementById("kompaktnatockica8");
    let tockica3=document.getElementById("kompaktnatockica9");
    tockica.style.color="grey";
    tockica2.style.color="#00b8e6";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(2,brojModela);
 }
 function kompaktnatockica9(){
    let brojModela=3;
    let test=document.getElementById("kompaktna3");
    let tockica=document.getElementById("kompaktnatockica7");
    let tockica2=document.getElementById("kompaktnatockica8");
    let tockica3=document.getElementById("kompaktnatockica9");
    tockica.style.color="grey";
    tockica2.style.color="grey";
    tockica3.style.color="#00b8e6";
    
    const mjenjaj=provjera(3,brojModela);
 }

 function kompaktnatockica10(){
    let brojModela=4;
    let test=document.getElementById("kompaktna4");
    let tockica=document.getElementById("kompaktnatockica10");
    let tockica2=document.getElementById("kompaktnatockica11");
    let tockica3=document.getElementById("kompaktnatockica12");
    tockica.style.color="#00b8e6";
    tockica2.style.color="grey";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(1,brojModela);
 }
 function kompaktnatockica11(){
    let brojModela=4;
    let test=document.getElementById("kompaktna4");
    let tockica=document.getElementById("kompaktnatockica10");
    let tockica2=document.getElementById("kompaktnatockica11");
    let tockica3=document.getElementById("kompaktnatockica12");
    tockica.style.color="grey";
    tockica2.style.color="#00b8e6";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(2,brojModela);
 }
 function kompaktnatockica12(){
    let brojModela=4;
    let test=document.getElementById("kompaktna4");
    let tockica=document.getElementById("kompaktnatockica10");
    let tockica2=document.getElementById("kompaktnatockica11");
    let tockica3=document.getElementById("kompaktnatockica12");
    tockica.style.color="grey";
    tockica2.style.color="grey";
    tockica3.style.color="#00b8e6";
    
    const mjenjaj=provjera(3,brojModela);
 }

 function kompaktnatockica13(){
    let brojModela=5;
    let test=document.getElementById("kompaktna5");
    let tockica=document.getElementById("kompaktnatockica13");
    let tockica2=document.getElementById("kompaktnatockica14");
    let tockica3=document.getElementById("kompaktnatockica15");
    tockica.style.color="#00b8e6";
    tockica2.style.color="grey";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(1,brojModela);
 }
 function kompaktnatockica14(){
    let brojModela=5;
    let test=document.getElementById("kompaktna5");
    let tockica=document.getElementById("kompaktnatockica13");
    let tockica2=document.getElementById("kompaktnatockica14");
    let tockica3=document.getElementById("kompaktnatockica15");
    tockica.style.color="grey";
    tockica2.style.color="#00b8e6";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(2,brojModela);
 }
 function kompaktnatockica15(){
    let brojModela=5;
    let test=document.getElementById("kompaktna5");
    let tockica=document.getElementById("kompaktnatockica13");
    let tockica2=document.getElementById("kompaktnatockica14");
    let tockica3=document.getElementById("kompaktnatockica15");
    tockica.style.color="grey";
    tockica2.style.color="grey";
    tockica3.style.color="#00b8e6";
    
    const mjenjaj=provjera(3,brojModela);
 }

 function kompaktnatockica16(){
    let brojModela=6;
    let test=document.getElementById("kompaktna6");
    let tockica=document.getElementById("kompaktnatockica16");
    let tockica2=document.getElementById("kompaktnatockica17");
    let tockica3=document.getElementById("kompaktnatockica18");
    tockica.style.color="#00b8e6";
    tockica2.style.color="grey";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(1,brojModela);
 }
 function kompaktnatockica17(){
    let brojModela=6;
    let test=document.getElementById("kompaktna6");
    let tockica=document.getElementById("kompaktnatockica16");
    let tockica2=document.getElementById("kompaktnatockica17");
    let tockica3=document.getElementById("kompaktnatockica18");
    tockica.style.color="grey";
    tockica2.style.color="#00b8e6";
    tockica3.style.color="grey";
    
    const mjenjaj=provjera(2,brojModela);
 }
 function kompaktnatockica18(){
    let brojModela=6;
    let test=document.getElementById("kompaktna6");
    let tockica=document.getElementById("kompaktnatockica16");
    let tockica2=document.getElementById("kompaktnatockica17");
    let tockica3=document.getElementById("kompaktnatockica18");
    tockica.style.color="grey";
    tockica2.style.color="grey";
    tockica3.style.color="#00b8e6";
    
    const mjenjaj=provjera(3,brojModela);
 }



 /* STVARANJE POPUPA */


 function stvoriPopup1(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli1");
    test1.style.background="#F2FEFF";

    test[0].style.display="block";
    test[0].style.animation="modelPopup 1s forwards";
 }

 function izbrisiPopup1(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli1");
    test1.style.background="white";

    test[0].style.animation="modelPopupReverse 1s forwards";

 }
 function stvoriPopup2(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli2");
    test1.style.background="#F2FEFF";

    test[1].style.display="block";
    test[1].style.animation="modelPopup 1s forwards";
 }

 function izbrisiPopup2(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli2");
    test1.style.background="white";

    test[1].style.animation="modelPopupReverse 1s forwards";

 }
 function stvoriPopup3(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli3");
    test1.style.background="#F2FEFF";

    test[2].style.display="block";
    test[2].style.animation="modelPopup 1s forwards";
 }

 function izbrisiPopup3(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli3");
    test1.style.background="white";

    test[2].style.animation="modelPopupReverse 1s forwards";

 }
 function stvoriPopup4(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli4");
    test1.style.background="#F2FEFF";

    test[3].style.display="block";
    test[3].style.animation="modelPopup 1s forwards";
 }

 function izbrisiPopup4(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli4");
    test1.style.background="white";

    test[3].style.animation="modelPopupReverse 1s forwards";

 }
 function stvoriPopup5(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli5");
    test1.style.background="#F2FEFF";

    test[4].style.display="block";
    test[4].style.animation="modelPopup 1s forwards";
 }

 function izbrisiPopup5(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli5");
    test1.style.background="white";

    test[4].style.animation="modelPopupReverse 1s forwards";

 }
 function stvoriPopup6(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli6");
    test1.style.background="#F2FEFF";

    test[5].style.display="block";
    test[5].style.animation="modelPopup 1s forwards";
 }

 function izbrisiPopup6(){
    let test=document.getElementsByClassName("pcmodelipopup");
    let test1=document.getElementById("pcmodeli6");
    test1.style.background="white";

    test[5].style.animation="modelPopupReverse 1s forwards";

 }


 // PLAVI POPUP 

 function pcPlavi(){
     let test1=document.getElementsByClassName("plaviNav1");
     test1[0].style.animation="livoPlavi 1s forwards";
 }

 function pcPlaviB(){
    let test1=document.getElementsByClassName("plaviNav1");
    test1[0].style.animation="desnoPlavi 1s forwards";
}

function pcPlavi1(){
    let test1=document.getElementsByClassName("plaviNav2");
    test1[0].style.animation="livoPlavi 1s forwards";
}

function pcPlavi1B(){
   let test1=document.getElementsByClassName("plaviNav2");
   test1[0].style.animation="desnoPlavi 1s forwards";
}

function pcPlavi2(){
    let test1=document.getElementsByClassName("plaviNav3");
    test1[0].style.animation="livoPlavi 1s forwards";
}

function pcPlavi2B(){
   let test1=document.getElementsByClassName("plaviNav3");
   test1[0].style.animation="desnoPlavi 1s forwards";
}



 

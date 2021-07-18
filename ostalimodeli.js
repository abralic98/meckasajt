


let url = document.URL;
console.log(url);
let vrstaklase;

let opis1;
// znacajke su iste to ne treba
let posebna;
let posebnap; //paragraf
let slika;

//popup

let autiImeStranice;
let autiImeStranice2;

//swiper1

let swiper1Slika1;
let swiper1Slika2;
let swiper1Slika3;

//drugidioposebni

let posebna2;
let posebnap2;

//swiper2

let swiper2Slika1;
let swiper2Slika2;

//3posebni

let posebna3;
let posebnap3;
let posebnaa // dodatni dio

let slika2;


//listatockice

let prvalistaTockice1;
let prvalistaTockice2;
let prvalistaTockice3;

//4posebni

let posebna4;
let posebnap4;
let posebnaa2 // dodatni dio

let slika3;

//2listatockice

let drugalistaTockice1;
let drugalistaTockice2;
let drugalistaTockice3;
let drugalistaTockice4;


//4posebni

let posebna5;
let posebnap5;

let slika4;

let liste; // sve liste oni veliki mali fontovi

let slikaamg;

// velika slova lista

let lista1_1;
let lista1_2;
let lista1_3;
let lista1_4;

let lista2_1;
let lista2_2;
let lista2_3;
let lista2_4;
let lista2_5;
let lista2_6;

   

let amg;



    if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?bklasa=b"|| url=="https://abralic98.github.io/meckasajt/a-klasa-kompaktna.html?bklasa=b"){ //b klasa JEDINA KOJA RADI ZA TABLET I FON NEMAM VOLJE DA RADIM ZA TABLET I FON ZA OSTALE VEC SAMO ZA FON SAM NAPRAVIA
    // SVE JE PO OVOM PRINCIPU SA KLASAMA I FOR PETLJOM FOR IDE i<2 ZATO JER JE SAMO FON I TABLET DA SAM TIA I ZA PC BILO BI 3 

    window.onload=function(){
        autiImeStranice=document.getElementsByClassName("autiImeStranice");
        for(let i=0; i<2; i++){
            autiImeStranice[i].innerHTML="B-klasa";
        }
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="B-klasa Sports tourer"
        
        vrstaklase=document.getElementsByClassName("vrstaklase");
        for(let i=0; i<2; i++){
            vrstaklase[i].innerHTML="B-klasa"
        }
        
        opis1=document.getElementsByClassName("opis1");
        for(let i=0; i<2; i++){
            opis1[i].innerHTML="Ne opravdavaj se"
        }

        posebna=document.getElementsByClassName("posebna");
        for(let i=0; i<2; i++){
            posebna[i].innerHTML="Ponovno smo izumili obiteljski automobil.";
        }

        posebnap=document.getElementsByClassName("posebnap");
        for(let i=0; i<2; i++){
            posebnap[i].innerHTML="B-klasa: dinamicnija, udobnija i sigurnija nego ikad";
        }

        slika=document.getElementsByClassName("slikaklase");
        for(let i=0; i<2; i++){
            slika[i].src="images/kompaktneBklasa/slika1.jpg";
        }
        let tablet;
        tablet=document.getElementsByClassName("tabletslike1child");
        tablet[0].src="images/kompaktneBklasa/slika2.jpeg";
        tablet[1].src="images/kompaktneBklasa/slika3.jpeg";
        tablet[2].src="images/kompaktneBklasa/slika4.jpeg";


        swiper1Slika1=document.getElementById("swiper1slika1").src="images/kompaktneBklasa/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/kompaktneBklasa/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/kompaktneBklasa/slika4.jpeg";


        posebna2=document.getElementsByClassName("posebna2");
        for(let i=0; i<2; i++){
            posebna2[i].innerHTML="Drugi najljepsi razlog za zasnivanje obitelji.";
        }
        posebnap2=document.getElementsByClassName("posebnap2");
        for(let i=0; i<2; i++){
            posebnap2[i].innerHTML="B-klasa prikazuje se uzbudljivo sportoskom i dinamicnijom nego ikad";
        }

        swiper2Slika1=document.getElementsByClassName("eksterijerslika");
        for(let i=0; i<2; i++){
            swiper2Slika1[i].src="images/kompaktneBklasa/slika5.jpeg";
        }
        swiper2Slika2=document.getElementsByClassName("interijerslika");
        for(let i=0; i<2; i++){
            swiper2Slika2[i].src="images/kompaktneBklasa/slika6.jpeg";
        }

        posebna3=document.getElementsByClassName("posebna3");
        for(let i=0; i<2; i++){
            posebna3[i].innerHTML="Spremni za najljepse razdoblje u svom zivotu";
        }
        posebnap3=document.getElementsByClassName("posebnap3");
        for(let i=0; i<2; i++){
            posebnap3[i].innerHTML="B-klasa otvorena je za sve: otkrijte automobil koji voli isprobavati nove stvari jednako kao i Vi.";
        }
        posebnaa=document.getElementsByClassName("posebnaa");
        for(let i=0; i<2; i++){
            posebnaa[i].innerHTML="Istaknuta obiljezja komfora:";
        }

        slika2=document.getElementsByClassName("slikakomfora");

        for(let i=0; i<2; i++){
            slika2[i].src="images/kompaktneBklasa/slika3.jpeg";
        }

        prvalistaTockice1=document.getElementsByClassName("1listaTockice1");
        for(let i=0; i<2; i++){
            prvalistaTockice1[i].innerHTML="Paket ENERGIZING Plus";
        }
        prvalistaTockice2=document.getElementsByClassName("1listaTockice2");
        for(let i=0; i<2; i++){
            prvalistaTockice2[i].innerHTML="HANDS-FREE ACCESS";
        }
        prvalistaTockice3=document.getElementsByClassName("1listaTockice3");;
        for(let i=0; i<2; i++){
            prvalistaTockice3[i].innerHTML="Grijani multifunkcijski upravljac";
        }
        

        posebna4=document.getElementsByClassName("posebna4");
        for(let i=0; i<2; i++){
            posebna4[i].innerHTML="Saznajte vise o sigurnosnim sustavim na razini vise klase.";
        }
        posebnap4=document.getElementsByClassName("posebnap4");
        for(let i=0; i<2; i++){
            posebnap4[i].innerHTML="B-klasa opremljena je inteligentnim sustavima pomoci i funkcijama koji vas odsad jos bolje podupiru i rasterecuju tijekom voznje. Mogu, primjerice, automatski prepoznati opasnosti, upozoriti na njih u slucaju opasnosti ili cak intervenirati ispravljanjem smjera kretanja.";
        }
        posebnaa2=document.getElementsByClassName("posebnaa2");
        for(let i=0; i<2; i++){
            posebnaa2[i].innerHTML="Istaknuta obiljezja sigurnosti:";
        }

        slika3=document.getElementsByClassName("sigurnostslika1");
        for(let i=0; i<2; i++){
            slika3[i].src="images/kompaktneBklasa/slika7.webp";
        }

        drugalistaTockice1=document.getElementsByClassName("2listaTockice1");
        for(let i=0; i<2; i++){
            drugalistaTockice1[i].innerHTML="Paket pomoci u voznji";
        }
        drugalistaTockice2=document.getElementsByClassName("2listaTockice2");
        for(let i=0; i<2; i++){
            drugalistaTockice2[i].innerHTML="Paket za parkiranje sa kamerom od 360 stupnjeva";
        }
        drugalistaTockice3=document.getElementsByClassName("2listaTockice3");
        for(let i=0; i<2; i++){
            drugalistaTockice3[i].innerHTML="Sustav aktivne pomoci pri kocenju";
        }
        drugalistaTockice4=document.getElementsByClassName("2listaTockice4");
        for(let i=0; i<2; i++){
            drugalistaTockice4[i].innerHTML="MULTIBEAM LED";
        }

        posebna5=document.getElementsByClassName("posebna5");
        for(let i=0; i<2; i++){
            posebna5[i].innerHTML="Izdasna na prvi pogled, prostrana u voznji";
        }
        posebnap5=document.getElementsByClassName("posebnap5");
        for(let i=0; i<2; i++){
            posebnap5[i].innerHTML="Pregled svih dimenzija i tehnickih podataka B-klase";
        }

        slika4=document.getElementsByClassName("specifikacijeslika1");
        for(let i=0; i<2; i++){
            slika4[i].src="images/kompaktneBklasa/slika2.jpeg";
        }

        lista1_1=document.getElementById("lista1-1").innerHTML="Ekonomicni";
        lista1_2=document.getElementById("lista1-2").innerHTML="motori";
        lista1_3=document.getElementById("lista1-3").innerHTML="Prostrana";
        lista1_4=document.getElementById("lista1-4").innerHTML="unutrasnjost";

        // sad ono sta nema u b klasi a ima u a da obrisem

        //......................
        
        amg=document.getElementsByClassName("amgID");
        for(let i=0; i<2; i++){
            amg[i].style.display="none";
        }
        
        
    }
}

// LIMUZINE

if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?aklasalimuzina=a" || url=="https://abralic98.github.io/meckasajt/a-klasa-kompaktna.html?aklasalimuzina=a"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="A-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="A-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="A-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Bas kao ti";
        posebna=document.getElementById("posebna").innerHTML="Djeluje revolucionarno. A tako i izgleda";
        posebnap=document.getElementById("posebnap").innerHTML="A-klasa Limuzina sa sustavom MBUX i sportski trodijelnim oblikom karoserije.";
        slika=document.getElementById("slikaklase").src="images/limuzineAklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineAklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineAklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineAklase/slika4.webp";

        posebna2=document.getElementById("posebna2").innerHTML="Limuzina. Odsad i kao A-klasa";
        posebnap2=document.getElementById("posebnap2").innerHTML="Shvatilill smo to kao sportski izazov: A-klasa Limuzina s klasicnim trodijelnim oblikom karoserije.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineAklase/slika5.jpeg";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineAklase/slika6.jpeg";

        posebna3=document.getElementById("posebna3").innerHTML="Mozemo li razgovarati?";
        posebnap3=document.getElementById("posebnap3").innerHTML="O sustavu MBUX, potpuno novom nacinu upravljanja automobilom. O intuiciji i umijecu da se svaki dan nauci nesto novo. Sve dok Vas A-klsa Limuzina ne upoyna gotovo bolje od Vas samih.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora: "

        slika2=document.getElementById("slika2").src="images/limuzineAklase/slika7.jpeg";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="MBUX(Mercedes-Benz User Expirience";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Glasovno navodjenje";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Head-up zaslon";

        posebna4=document.getElementById("posebna4").innerHTML="Pricajmo o povjerenju.";
        posebnap4=document.getElementById("posebnap4").innerHTML="Vasa A-klasa Limuzina moze Vas upozoriti na sudar, pomoci Vam kod kocenja i izbjegavanja opasnih situacija ili cak samostalno aktivirati autonomno kocenje u slucaju opasnosti.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineAklase/slika8.jpeg";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket za parkiranje s kamerom od 360 stupnjeva";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="Paket pomoci u voznji";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Svjetla MULTIBEAM LED";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="Funkcija Live Traffic Information";

        posebna5=document.getElementById("posebna5").innerHTML="Zanosan nastup i skromna potrosnja";
        posebnap5=document.getElementById("posebnap5").innerHTML="Visoko razvijena tehnologija novih motora ocituje se u vecoj snazi i boljoj ucinkovitosti koje se temellje na kombinaciji najmodernijih tehnoloskih modula i brojnih detalja pojedinacnih mjera. To je osobito vidljivo na modelu A 250 e:prvom plug-in hibridu A-klase.";

        slika4=document.getElementById("slika4").src="images/limuzineAklase/slika9.jpeg";

        lista1_1=document.getElementById("lista1-1").innerHTML="Snazni";
        lista1_2=document.getElementById("lista1-2").innerHTML="motori";
        lista1_3=document.getElementById("lista1-3").innerHTML="Najnovija";
        lista1_4=document.getElementById("lista1-4").innerHTML="Tehnologija";


        slikaamg=document.getElementById("slikaamg").src="images/limuzineAklase/slika10.jpeg";

        lista2_1=document.getElementById("lista2-1").innerHTML="Okretni moment";
        lista2_2=document.getElementById("lista2-2").innerHTML="400nm";
        lista2_3=document.getElementById("lista2-3").innerHTML="Ubrzanje";
        lista2_4=document.getElementById("lista2-4").innerHTML="4.8s";
        lista2_5=document.getElementById("lista2-5").innerHTML="0-100km/h";
        lista2_6=document.getElementById("lista2-6").innerHTML="225kW";
       
        
        
    }
}

if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?cklasalimuzina=c" || url=="https://abralic98.github.io/meckasajt/a-klasa-kompaktna.html?cklasalimuzina=c"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="C-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="C-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="C-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Svaki put sve bolja.";
        posebna=document.getElementById("posebna").innerHTML="Dinamika je stav.";
        posebnap=document.getElementById("posebnap").innerHTML="Da ni u jednom trenutku ne pocivate nego uvijek iznova dokazujete snagu inovacija";
        slika=document.getElementById("slikaklase").src="images/limuzineCklase/slika1.webp";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineCklase/slika2.webp";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineCklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineCklase/slika4.jpeg";

        posebna2=document.getElementById("posebna2").innerHTML="Percepcijski jasan kao i uvijek. Dinamican i progresivan kao nikada dosad..";
        posebnap2=document.getElementById("posebnap2").innerHTML="Dizajn C-klase limuzine";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineCklase/slika6.jpeg";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineCklase/slika5.jpeg";

        posebna3=document.getElementById("posebna3").innerHTML="Udobnost je najbolji trening";
        posebnap3=document.getElementById("posebnap3").innerHTML="Iskusite komfor koji znaci vise: koji opusta, smiruje, ali takodjer aktivira i potice. Potpuno komforno pritiskom na dugme:: yahvaljujuci komfornom upravljanju ENERGIZING. Jedna od vaznijih znacajki interijera C-klase.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora: "

        slika2=document.getElementById("slika2").src="images/limuzineCklase/slika7.jpeg";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Komforno upravljanje ENERGIZING";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Zvucni sustav Burmester Surround Sound";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Head-up zaslon";

        posebna4=document.getElementById("posebna4").innerHTML="Poklonite povjerenje pomoci u voznji najnovije generacije.";
        posebnap4=document.getElementById("posebnap4").innerHTML="Brojni sustavi pomoci u voznji i sigurnosti C-klase Limuzine mogu vas osjetno rasteriti";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineCklase/slika8.jpeg";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Sustav PRE-SAFE";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="Paket za parkiranje s kamerom od 360 stupnjeva";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Sustav prilagodljivih dugih svjetala Plus";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="Paket pomoci u voznji";

        posebna5=document.getElementById("posebna5").innerHTML="Sve vozne perfomanse. Sve dimenzije. Sve o modelu C-klase limuzina";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usporedite tehnicke podatke razlicitih specifikacija";

        slika4=document.getElementById("slika4").src="images/limuzineCklase/slika9.jpeg";

        lista1_1=document.getElementById("lista1-1").innerHTML="Snazni";
        lista1_2=document.getElementById("lista1-2").innerHTML="motori";
        lista1_3=document.getElementById("lista1-3").innerHTML="Vrhunska";
        lista1_4=document.getElementById("lista1-4").innerHTML="Ubrzanja";



        slikaamg=document.getElementById("slikaamg").src="images/limuzineCklase/slika10.webp";

        lista2_1=document.getElementById("lista2-1").innerHTML="Okretni moment";
        lista2_2=document.getElementById("lista2-2").innerHTML="520Nm do 700Nm";
        lista2_3=document.getElementById("lista2-3").innerHTML="Ubrzanje";
        lista2_4=document.getElementById("lista2-4").innerHTML="4.7s do 4,0s";
        lista2_5=document.getElementById("lista2-5").innerHTML="0-100km/h";
        lista2_6=document.getElementById("lista2-6").innerHTML="287kW do 375kW";

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?eklasalimuzina=e" || url=="https://abralic98.github.io/meckasajt/a-klasa-kompaktna.html?eklasalimuzina=e"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="E-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="E-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova E-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Stvorena za pobjede.";
        posebna=document.getElementById("posebna").innerHTML="Dinamican karakter u svim segmentima.";
        posebnap=document.getElementById("posebnap").innerHTML="Spremna je s lakoćom svladati svaki izazov bez obzira koliko je velik. Otkrijte izvrsne karakteristike nove E-klase Limuzine. Dinamičnija, elegantnija i luksuznija nego ikad.";
        slika=document.getElementById("slikaklase").src="images/limuzineEklase/slika1.webp";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineEklase/slika2.webp";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineEklase/slika3.webp";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineEklase/slika4.webp";

        posebna2=document.getElementById("posebna2").innerHTML="Predvodi dinamikom";
        posebnap2=document.getElementById("posebnap2").innerHTML="Dojmljivi dizajn omogucava agilan ukupni nastup";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineEklase/slika5.jpeg";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineEklase/slika6.jpeg";

        posebna3=document.getElementById("posebna3").innerHTML="Majstor upravljanja";
        posebnap3=document.getElementById("posebnap3").innerHTML="Nova E-klasa Limuzina nudi dodatne prednosti: putem plemenitih materijala i inteligentnih inovacija.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Odabrana istaknuta obiljezja."

        slika2=document.getElementById("slika2").src="images/limuzineEklase/slika7.jpeg";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Prosirena stvarnost za navigaciju MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Paket ENERGIZING";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="AIR BODY CONTROL";

        posebna4=document.getElementById("posebna4").innerHTML="Sigurnost: kad su svi na dobitku.";
        posebnap4=document.getElementById("posebnap4").innerHTML="Moderni sustavi pomoci u novoj E-klasi Limuzini omogucavaju prije svega jedno: da se ne morate brinuti..";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Odabrana istaknuta obiljezja:"

        slika3=document.getElementById("slika3").src="images/limuzineEklase/slika8.jpeg";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Sustav aktivne pomoci pri kocenju";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="Sustav aktivne pomoci za odrzavanje sigurnosnog razmaka DISTRONIC";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zastita vozila URBAN GUARD";
        drugalistaTockice4=document.getElementById("2listaTockice4").style.display="none";

        posebna5=document.getElementById("posebna5").innerHTML="Spremna za nove vrhunske rezultate";
        posebnap5=document.getElementById("posebnap5").innerHTML="Nova E-klasa nudi visokoucinkovitu i agilnu pogonsku tehnologiju";

        slika4=document.getElementById("slika4").src="images/limuzineEklase/slika9.jpeg";

        lista1_1=document.getElementById("lista1-1").innerHTML="Snazni";
        lista1_2=document.getElementById("lista1-2").innerHTML="motori";
        lista1_3=document.getElementById("lista1-3").innerHTML="Prostrana";
        lista1_4=document.getElementById("lista1-4").innerHTML="Unutrasnjost";



        slikaamg=document.getElementById("slikaamg").src="images/limuzineEklase/slika10.webp";

        lista2_1=document.getElementById("lista2-1").innerHTML="Okretni moment";
        lista2_2=document.getElementById("lista2-2").innerHTML="520Nm do 850Nm";
        lista2_3=document.getElementById("lista2-3").innerHTML="Ubrzanje";
        lista2_4=document.getElementById("lista2-4").innerHTML="4.5s do 3,4s";
        lista2_5=document.getElementById("lista2-5").innerHTML="0-100km/h";
        lista2_6=document.getElementById("lista2-6").innerHTML="320kW do 450kW";

    }

}



if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?sklasalimuzina=s" || url=="https://abralic98.github.io/meckasajt/a-klasa-kompaktna.html?sklasalimuzina=s"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}



// SVE ISPOD SU RAZLICITI URLOVI ALI SVI ELEMENTI IZ S KLASE OVO CU ZADNJE UREDJIVAT .......


// KARAVANI



if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?karavan=1"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?karavan=2"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?karavan=3"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?karavan=4"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


// SUVOVI ...................................................................



if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?suv=1"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?suv=2"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?suv=3"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?suv=4"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?suv=5"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?suv=6"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


// COUPEI .................................................................


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?coupei=1"){
    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?coupei=2"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?coupei=3"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?coupei=4"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?coupei=5"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?coupei=6"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


// CABRIELOTI .......................................................



if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?cabrieloti=1"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?cabrieloti=2"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?cabrieloti=3"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


if(url=="http://127.0.0.1:5500/a-klasa-kompaktna.html?cabrieloti=4"){

    window.onload=function(){
        autiImeStranice=document.getElementById("autiImeStranice").innerHTML="S-klasa Limuzina"
        autiImeStranice2=document.getElementById("autiImeStranice2").innerHTML="S-klasa Limuzina"
        vrstaklase=document.getElementById("vrstaklase").innerHTML="Nova S-klasa Limuzina";
        opis1=document.getElementById("opis1").innerHTML="Brine o onome sto je vazno.";
        posebna=document.getElementById("posebna").innerHTML="Brine o onome sto je vazno.";
        posebnap=document.getElementById("posebnap").innerHTML="Nova S-klasa orijentira se na ono bitno: jedinstvene tehnologije za komfor i sigurnost na koje se možete osloniti. Bez obzira na to jeste li vozač ili putnik u stražnjem dijelu vozila. Inovativan koncept upravljanja MBUX u kombinaciji s luksuznim materijalima stvara dosad neviđeni doživljaj u vožnji.";
        slika=document.getElementById("slikaklase").src="images/limuzineSklase/slika1.jpg";

        swiper1Slika1=document.getElementById("swiper1slika1").src="images/limuzineSklase/slika2.jpeg";
        swiper1Slika2=document.getElementById("swiper1slika2").src="images/limuzineSklase/slika3.jpeg";
        swiper1Slika3=document.getElementById("swiper1slika3").src="images/limuzineSklase/slika4.jpeg";

        //dizajn

        posebna2=document.getElementById("posebna2").innerHTML="Moderna estetika i luksuzna prostranost";
        posebnap2=document.getElementById("posebnap2").innerHTML="Prepoznatljiv dizajn nove Mercedes-Benzove S-klase koncentriran je na ono najvažnije: savršene proporcije u eksterijeru i suvremeni luksuz u interijeru. Inovacije usmjerene na budućnost čine novu S-klasu jedinstvenom zbog čega joj nitko ne može odoljeti.";

        swiper2Slika1=document.getElementById("swiper2slika1").src="images/limuzineSklase/slika5.webp";
        swiper2Slika2=document.getElementById("swiper2slika2").src="images/limuzineSklase/slika6.jpeg";


        //komfor

        posebna3=document.getElementById("posebna3").innerHTML="Udjite u svoju zonu komfora";
        posebnap3=document.getElementById("posebnap3").innerHTML="Moderan luksuz i prvoklasan komfor u novoj S-klasi dosežu novu razinu. Idealno je utočište za sve one kojima će i u budućnosti vožnja automobila uvijek predstavljati puno više od samog prijevoza. Inovativne funkcije komfora stvaraju doživljaj vožnje posebne klase – od sjedala vozača do stražnjeg dijela vozila.";
        posebnaa=document.getElementById("posebnaa").innerHTML="Istaknuta obiljezja komfora."

        slika2=document.getElementById("slika2").src="images/limuzineSklase/slika7.webp";

        prvalistaTockice1=document.getElementById("1listaTockice1").innerHTML="Nova generacija sustava MBUX";
        prvalistaTockice2=document.getElementById("1listaTockice2").innerHTML="Aktivna ambijentalna rasvjeta";
        prvalistaTockice3=document.getElementById("1listaTockice3").innerHTML="Sustav Burmester High-End 4D Surround Sound";

        //Sigurnost

        posebna4=document.getElementById("posebna4").innerHTML="Pruza Vam dobar osjecaj i sigurnost";
        posebnap4=document.getElementById("posebnap4").innerHTML="Zahvaljujući najmodernijim sustavima pomoći i inovacijama za aktivnu i pasivnu sigurnost, možete se osloniti na novu S-klasu. Inovativne sigurnosne tehnologije u svakoj situaciji u vožnji razmišljaju zajedno s Vama. Tako nova S-klasa uzima u obzir i informacije izvan izravnog vidnog polja vozača.";
        posebnaa2=document.getElementById("posebnaa2").innerHTML="Istaknuta obiljezja sigurnosti:"

        slika3=document.getElementById("slika3").src="images/limuzineSklase/slika8.webp";

        drugalistaTockice1=document.getElementById("2listaTockice1").innerHTML="Paket pomoci u voznji";
        drugalistaTockice2=document.getElementById("2listaTockice2").innerHTML="DIGITAL LIGHT";
        drugalistaTockice3=document.getElementById("2listaTockice3").innerHTML="Zracni jastuk u straznjem dijelu vozila";
        drugalistaTockice4=document.getElementById("2listaTockice4").innerHTML="ATTENTION ASSIST(prosirena verzija)";

        // Specifikacije

        posebna5=document.getElementById("posebna5").innerHTML="Usporedite motore nove S-klase";
        posebnap5=document.getElementById("posebnap5").innerHTML="Usmjereni na buducnost: dosljedan daljnji razvoj visoke kulture voznje."
        slika4=document.getElementById("slika4").src="images/limuzineSklase/slika9.jpeg";

        // dodatna lista vjerovatno u ostalim je enablovana 
        liste=document.getElementById("listeSve").style.display="none";

        // AMG 
        amg=document.getElementById("amgID");
        amg.style.display="none";
        

    }

}


/* CRNI ZOOOM PC */

function crno1(){
    let test=document.getElementsByClassName("zoom1");
    
    let slika2=document.getElementById("ext");

    slika2.style.animation="pcZoomIn 1s forwards"
    test[0].style.animation="pcZoomCrno 1s forwards";
}

function crno2(){
    let test=document.getElementsByClassName("zoom2");
    let slika1=document.getElementById("int");
    

    slika1.style.animation="pcZoomIn 1s forwards"
    test[0].style.animation="pcZoomCrno 1s forwards";
}

function vrati2(){
    let test=document.getElementsByClassName("zoom2");
    let slika1=document.getElementById("int");

    slika1.style.animation="pcZoomOut 1s forwards"
    test[0].style.animation="pcZoomCrnoR 1s forwards";

}

function vrati(){
    let test=document.getElementsByClassName("zoom1");
    
    let slika2=document.getElementById("ext");

    slika2.style.animation="pcZoomOut 1s forwards"
    test[0].style.animation="pcZoomCrnoR 1s forwards";
}

function zoomSlike(){
    let test=document.getElementById("zumiraneSlike");
    let test1=document.getElementsByClassName("tablet");
    test1[0].style.display="none";
    test.style.display="block";
}

function ugasiZoom(){
    let test=document.getElementById("zumiraneSlike");
    test.style.display="none";
    let test1=document.getElementsByClassName("tablet");
    test1[0].style.display="block";
    
}

let zoomCRTA=1;
function uvelicaj1(){
    let crtica=document.getElementsByClassName("crticazoom");
    if(zoomCRTA==2 || zoomCRTA==3){
        crtica[0].style.animation="zoomLivoCrtica 1s forwards";
    }
    zoomCRTA=1;
    let velika=document.getElementById("zoomVelika");
    let mala=document.getElementById("zoomSlika1");
    
    velika.src=mala.src;
}
function uvelicaj2(){
    let crtica=document.getElementsByClassName("crticazoom");
    if(zoomCRTA==1){
        crtica[0].style.animation="zoomDesnoCrtica 1s forwards";
    }

    if(zoomCRTA==3){
        crtica[0].style.animation="zoomLivoCrtica 1s forwards";
    }
    zoomCRTA=2;
    let velika=document.getElementById("zoomVelika");
    let mala=document.getElementById("zoomSlika2");
    velika.src=mala.src;
}

function uvelicaj3(){
    let crtica=document.getElementsByClassName("crticazoom");
    if( zoomCRTA==2){
        
        crtica[0].style.animation="zoomDesnoCrtica 1s forwards";
    }
    zoomCRTA=3; 
    let velika=document.getElementById("zoomVelika");
    let mala=document.getElementById("zoomSlika3");
    
    velika.src=mala.src;
}
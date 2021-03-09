let registracijaBLOK=document.getElementById("registracija");
registracijaBLOK.addEventListener("click",removeLogin);

let loginBLOK=document.getElementById("prijava");
loginBLOK.addEventListener("click",removeRegister);

let registracija=document.getElementById("dugmeReg");

registracija.addEventListener("click",registrirajSe);

function removeLogin(){
    let blok=document.getElementsByClassName("kontenjer");
    blok[0].style.display="none";
    let blok1=document.getElementsByClassName("kontenjer1");
    blok1[0].style.display="flex";
    
}

function removeRegister(){
    let blok=document.getElementsByClassName("kontenjer");
    blok[0].style.display="flex";
    let blok1=document.getElementsByClassName("kontenjer1");
    blok1[0].style.display="none";
   
}

function registrirajSe(){
    let ime=document.getElementById("regime").value;
    let mejl=document.getElementById("regmejl").value;
    let sifra=document.getElementById("regsifra").value;

    let ime2=document.getElementById("regime");
    let mejl2=document.getElementById("regmejl");
    let sifra2=document.getElementById("regsifra");

    let inputi=[ime2,mejl2,sifra2];

    let DaNe=1;
    
    for(let i=0; i<inputi.length;i++){
        if(inputi[i].value==""){
            inputi[i].style.borderColor="red";
        }
        else{
            inputi[i].style.borderColor="#15F97F";
        }

    }

    for(let i=0; i<inputi.length; i++){
        if(inputi[i].style.borderColor=="red"){
            console.log("crveno");
            let DaNe=0;
            return;
        }
    }
    if(DaNe==1){
        setTimeout(bazaPodataka,1000);
    }

}


let json=require("./db.json");


function bazaPodataka(){
    let ime=document.getElementById("regime").value;
    let mejl=document.getElementById("regmejl").value;
    let sifra=document.getElementById("regsifra").value;

    let osoba={
        name:ime,
        email:mejl,
        password:sifra,
        id:1,
        auto:"NO"

    }
    document.write(json+JSON.stringify(osoba));
    console.log(osoba);
    
   
   
}










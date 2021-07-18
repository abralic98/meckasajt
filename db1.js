let akaunti=document.querySelector("#akauntisvi");

let htmlAccounts="";



fetch("./db.json").then(function(resp){
    return resp.json();
})
.then(function(data){
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        const akaunt = data[i];
        htmlAccounts+=
        `<tr>
            <th>${akaunt.name}</th>
            <th>${akaunt.email}</th>
            <th>${akaunt.password}</th>
            <th>${akaunt.ID}</th>
            <th>${akaunt.auto}</th>
        </tr>`
    }
    akaunti.innerHTML=htmlAccounts;

})



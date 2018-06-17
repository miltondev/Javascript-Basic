function evento(arg ){
    console.log("Me Dispare");
    console.log(arg);
}



var objeto = document.getElementById("objDemo");
console.log(objeto);
objeto.addEventListener("click",evento);
objeto.click();//istrusted = false simulacion del click por parte del usuario o autonomo false autonomo true el usuario

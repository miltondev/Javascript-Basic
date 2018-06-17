document.onmousedown = function(arg){
    console.log(arg);

    if(arg.button===2){
        alert("Click Bloqueado");
    }

    console.log("No hay Problema");
}



document.onmouseup = function(arg){
    var texto = window.getSelection().toString();
    console.log(texto);
}
function validar(){
    var nombre = document.getElementById("idNombre").value;
    var apellido = document.getElementById("idApellido").value;



    if(nombre.lenght <1)
    {
        return false;
    }
    
    if(apellido.lenght <1)
    {
        return false;
    }
    
    return true;
}

console.log(window.search);
console.log(window.location.search.split("&"));

console.log



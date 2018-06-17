function crearCookie(nombre,valor)
{
    valor = escape(valor);
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()+1);

    document.cookie = nombre+"="+valor+";expires="+hoy.toUTCString()+";";
}


function borrarCookie(nombre)
{
    
    var hoy = new Date();
    hoy.setMonth(hoy.getMonth()-1);

    document.cookie = nombre+"=x;expires="+hoy.toUTCString()+";";

}



function getCookie(nombre){
    var cookies = document.cookie;
    var cookieArr = cookies.split("; ");
    console.log("aqui"+cookieArr);

    for(var i=0;i<cookieArr.length;i++)
    {
        var parArr = cookieArr[i].split("=");
        cookieArr[i]=parArr;
        if(parArr[0]===nombre)
        {
            return unescape(parArr[1]);
        }
    }

    console.log(parArr);
    return undefined;
}



crearCookie("nombre","Juan");
crearCookie("correo","Juan133@gmail.com");
crearCookie("telefono1","78945612");
crearCookie("telefono2","78945231");


borrarCookie("telefono1");

var cookies = document.cookie;
console.log(cookies);
console.log(getCookie("correo"));
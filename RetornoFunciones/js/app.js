function obtenerAleatorio ()
{
    return Math.random();
}



function obtenerNombre()
{
    return "Juan";
}

function esMayor05()
{
    if(obtenerAleatorio()>0.5)
    {
        return true;
    }
    else
    {
        return false;
    }
}

if(esMayor05())
{
    console.log("Es mayor que 0.5");
}
else
{
    console.log("Es menor a 0.5");
}



function crearPersona (nombre,apellido)
{
     return {
         nombre:nombre,
         apellido:apellido
     }
}

var persona = crearPersona("Maria","Paz");
console.log(persona);
console.log(persona.nombre);

function crearFuncion()
{
    return function (nombre)
    {
        console.log("Me crearon !!! "+nombre);

        return function ()
        {
            console.log("Segunda Funcion");
        }
    }
}

var nuevafuncion = crearFuncion();
var segundaFuncion = nuevafuncion (persona.nombre);
segundaFuncion();
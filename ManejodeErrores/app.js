/*try{
    var a =100;
    if(a===100)
    {
        throw 'que mal'
    }
    throw 'OH OH !';
    console.log("El valor de a:",a);
}
//Si no se va a utilizar el catch se tiene que definir el finally a fuerza
catch(e)
{
    if(e=="que mal")
    {
        console.log("Error Tipo 1");
    }
    if(e==="OH OH !")
    {
        console.log("Error tipo 2");
    }
}
finally{
    console.log("Finalmente");
}*/

/*
try{
        throw new Error ('Error tipo 1');
        console.log("Esta Parte nunca se ejecuta");
}
catch (e){
console.log("parte del Inicio");
}
finally{
    console.log("Finalmente");
}*/
/*
try{
    throw {
        "nombreError":"Error tipo 1",
        "Accion":"Salir corriendo a echarle agua a la cocina",
        "Coderror":1
    }
    console.log("Esta Parte nunca se ejecuta");
}
catch (e){
console.log(e);
console.log(e.nombreError);
console.log(e.Accion);
console.log(e.Coderror);


console.log("parte del cath");
}
finally{
console.log("Finalmente");
}*/





/*


throw 'Error';

try{
    throw function(){
        console.log("Funcion del Throw");
    }
    console.log("Esta parte nunca se ejecuta");
}
catch (e){

    e();
console.log("parte del cath");
}
finally{
console.log("Finalmente");
}*/



try{
    throw new Error('Nombre Error');
}
catch (e){
    registroError(e);
   }
finally{
console.log("Finalmente");
}


function registroError(e)
{
    var ahora = new Date();
    console.log("Se registro un error:",e,"a las ",ahora.getTime());
}
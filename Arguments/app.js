var arguments = 10;
function miFuncion(a,b,c,d)
{
    console.log(arguments);

    if(arguments.length!==4)
    {
        console.error("La funcion necista 4 parametros");
        alert("La funcion necista 4 parametros");
        return;
    }
   
        console.log(a+b+c+d);
    

   
    
}

miFuncion(10,20,30,70,0,55);
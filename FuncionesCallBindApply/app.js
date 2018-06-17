/* BIND */
var carro = {
    color:"Blanco",
    marca:"Mazda",
    imprimir:function(){
        var salida = this.marca + "-"+this.color;
        return salida;
    }
}


var carro2 = {
    color:"Rojo",
    marca:"Toyota"
}


console.log(carro.imprimir());


var logCarro = function(arg1,arg2)
{
    console.log("Carro: ",this.imprimir());
    console.log("Argumentos",arg1,arg2);
    console.log("--------------------------");
}


var logMOdeloCarro = logCarro.bind(carro);

logMOdeloCarro("abc","xyz");


logMOdeloCarro.call(carro,"123","456");
logMOdeloCarro.apply(carro,["asd","qwe"]);


//Funciones Prestadas

console.log(carro.imprimir.call(carro2));
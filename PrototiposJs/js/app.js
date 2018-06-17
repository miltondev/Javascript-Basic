function Persona ()
{

    this.nombre="Jose ";
    this.apellido = "Sanchez";
    this.edad = 30;
    this.pais = "Costa Rica"
}

Persona.prototype.imprimirInfo = function ()
{
    console.log(this.nombre + " " + this.apellido+" ("+this.edad+")");
}



var fer = new Persona();
console.log(fer);
console.log(fer.imprimirInfo());

var a = "Fernando";




/*for(var i=0;i<=10;i++)
{
    if(i==5){
    break;
    }
    
    console.log(i);
}*/


var Persona = function(){
    this.nombre="Juan";
    this.apellido = "Pineda";
    this.edad=25;
};


var juan = new Persona();

Persona.prototype.direccion = "San Jose";

for (prop in juan)
{
    
    
    if(!juan.hasOwnProperty(prop)){
        continue;
    }

    




    console.log(prop,": ",juan[prop]);
}

for(num in [1,2,3,4,5,6,7,8,9])
{
    console.log(num);
}

[1,2,3,4,5,6,7,8,9,"false",false].forEach(function(val){
    console.log(val);
})
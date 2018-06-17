/*setTimeout(function(){
    console.log("Paso un Segundo");
},1000);*/
/*
var segundos=0;
var intervalo = setInterval(function(){
    segundos++;
    console.log("seg",segundos);
    if(segundos===3)
    {
        clearInterval(intervalo);
    }
  
},1000)*/



var juan={
    nombre:"Juan",
    edad:30,
    imprimir:function(){
        var self=this;
        console.log(self);
        setTimeout(function(){
            console.log(self);
            console.log(self.nombre,self.edad);
        }, 1000);
       // console.log(this.nombre,this.edad);
    }
}


juan.imprimir();
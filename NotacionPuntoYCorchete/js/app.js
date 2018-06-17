var persona = {
    nombre:"Juana",
    apellido: "Herrera",
    edad:25,
    direccion:{
        pais:"Costa Rica",
        ciudad:"San Jose",
        edificio:{
            nombre:"Edificio Principal",
            telefono:"2222-3333"
        }
    }
}


var campo ="edad";

console.log(persona[campo]);


/*
persona.direccion.zipcode= 1101;

var edificio = persona.direccion.edificio;

edificio.nopiso = "8vo Piso";

console.log(persona);*/
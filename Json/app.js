var objetoJS = {
    nombre:"Juan",
    edad:30,
    imprimir :function imprimir() {
        console.log(this.nombre,this.edad)
    }

}

console.log("Objeto Literal",objetoJS);

var jsonString = JSON.stringify(objetoJS);

console.log(jsonString);

var objetoDesdeJson  = JSON.parse(jsonString);
console.log(objetoDesdeJson);

console.log(objetoDesdeJson.nombre);
console.log(objetoDesdeJson.edad);
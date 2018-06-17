var b ="Carlos";
var a = new String("Fernando Herrera");
console.log(a);

console.log(a.toUpperCase());
console.log(a.toLowerCase());

var i = a.indexOf("Herrera");
console.log("La letra esta en la posicion ",i);

i = a.lastIndexOf("n");
console.log("la letra esta:",i);

var nombre = a.substr(0,a.indexOf(" "));
console.log(nombre);

var split = a.split(" ");
console.log(split);
console.log(split.length);

document.write("HOla mundo");

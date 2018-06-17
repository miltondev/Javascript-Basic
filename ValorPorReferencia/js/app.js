var a = 10;
var b= a;

console.log("a: ",a);
console.log("b",b);

a = 20;

console.log("a: ",a);
console.log("b",b);

var c = {
    nombre:"Juana"
}
var d = c;

console.log(c);
console.log(d);

c.nombre = "maria";
console.log(c);
console.log(d);

d.nombre = "Pedro";


console.log(c);
console.log(d);

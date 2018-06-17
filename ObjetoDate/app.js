//var hoy = new Date();
/*var fechaMilisegundos = new Date(1527982298136);
var fFija = new Date(2016,9,21,23,10,15,1);

console.log(hoy);
console.log(fechaMilisegundos);
console.log(fFija);

console.log(hoy.getFullYear());

console.log(hoy.getTime());*/

var inicio = new Date();

for (var i=0;i<15000;i++)
{
    console.log("Algo ....");
}

var fin = new Date();

var duracion = fin.getTime() - inicio.getTime();

console.log(duracion);
console.log(duracion/1000);
console.log(inicio);
console.log(fin);
var arr = [
true,
{
    nombre:"Juan",
    apellido:"Obando"
},
function ()
{
    console.log("Estoy Viviendo en un Arreglo");
},
function(persona)
{
    console.log(persona.nombre + " " + persona.apellido);
},

[
    "Platon","Euclides","Aristosteles","Alejandro",
    ["Juan",
     "Pedro",
     "Dilcia",
     function(){
         console.log(this);
     }
    ]
]
];


console.log(arr[1].nombre +" "+ arr[1].apellido);
arr[2]();

arr[3](arr[1]);


console.log(arr[4][4][1]);

var Arreglo2 = arr[4][4];
console.log(Arreglo2);

Arreglo2[1] = "Pedra";
console.log(Arreglo2);
console.log(arr);

Arreglo2[3]();
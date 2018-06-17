function crearProducto(nombre,precio){
    nombre = nombre || "Sin Nombre";
    precio = precio || 0;
    console.log("Producto:",nombre,"Precio:",precio);


}


function crearProducto100(nombre)
{
    crearProducto(nombre,100);
}


function crearProductoCamisa(precio){
    crearProducto("Camisa",precio);
}

crearProducto("Lapiz",5);
crearProducto100("Corrector");
crearProductoCamisa(75);
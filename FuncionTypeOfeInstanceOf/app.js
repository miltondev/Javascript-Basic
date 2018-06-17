function identifica(param)
{
  //  console.log(typeof param);
    console.log(typeof param);
    console.log(param instanceof Persona);

}


function Persona()
{
    this.nombre = "Juan";
    this.edad = 30;

}

var Juan = new Persona();


identifica(Juan);
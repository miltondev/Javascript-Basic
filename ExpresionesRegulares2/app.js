var texto = "La Repuesta de la Suma es:45+60 = 105";
console.log(texto);

var arr = texto.match(/\d{1,}|Repuesta/ig);
console.log(arr);
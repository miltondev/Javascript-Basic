//var reg1 = RegExp("a");
//var reg2= /a/;
// i = insensible
// g = todas apariciones
// m = multilinea
var texto = "HOlaa 9 Mundooo Hoola de Nuevoo";
console.log(texto);
//var arr = texto.match(/[aeiou]|[(ü,é,á,í,ó,ú,ñ,Ñ]/ig);//[a-zA-Z0-9]
var arr = texto.match(/o{3,4}/g);
console.log(arr);


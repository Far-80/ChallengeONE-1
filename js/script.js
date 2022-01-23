function dividirCadena(cadenaADividir) {
    var separador = " ";
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
 };

function encriptador (texto){
    var arrayPalabras = dividirCadena(texto);
    var patron = new RegExp(/a|e|i|o|u/g,);

    for (i=0; i < arrayPalabras.length; i++){
        var palabra = arrayPalabras[i];
        console.log(palabra);
        palabra = palabra.replace(patron,function(x){
            if (x == "a"){ return "ai"};
            if (x == "e"){ return "enter"};
            if (x == "i"){ return "imes"};
            if (x == "o"){ return "ober"};
            if (x == "u"){ return "ufat"};
        });

        arrayPalabras[i] = palabra;
    }
    return arrayPalabras;
}

function desencriptador (texto){
    arrayPalabras = dividirCadena(texto);
    for (i=0; i < arrayPalabras.length; i++){
        var palabra = arrayPalabras[i];

        palabra = palabra.replace(/ai/g,"a");
        palabra = palabra.replace(/enter/g, "e");
        palabra = palabra.replace(/imes/g,"i");
        palabra = palabra.replace(/ober/g, "o");
        palabra = palabra.replace(/ufat/g, "u");

        arrayPalabras[i] = palabra;
    }
    return arrayPalabras;
}
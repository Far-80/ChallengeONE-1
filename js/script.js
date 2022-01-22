function encriptador (texto){
    arrayPalabras = dividirCadena(texto);
    for (i=0; i < arrayPalabras.length; i++){
        var palabra = arrayPalabras[i];
        palabra = palabra.replace(/a/g,"ai");
        palabra = palabra.replace(/e/g, "enter");
        palabra = palabra.replace(/i/g,"imes");
        palabra = palabra.replace(/o/g, "ober");
        palabra = palabra.replace(/u/g, "ufat");

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
function encriptador (texto){
    arrayPalabras = dividirCadena(texto);
    for (i=0; i < arrayPalabras.length; i++){
        var palabra = arrayPalabras[i];
        var texto = "";
        console.log(palabra);
        for (j=0; j < palabra.length; j++){
            if (palabra[j] == "a"){
                texto = texto + "ai";
            } else if (palabra[j] == "e"){
                texto = texto + "enter";
            } else if (palabra[j] == "i"){
                texto = texto + "imes";
            } else if (palabra[j] == "o"){
                texto = texto + "ober";
            } else if (palabra[j] == "u"){
                texto = texto + "ufat";
            }else{
                texto = texto + palabra[j];
            }
        }
        arrayPalabras[i] = texto;
    }
    return arrayPalabras;
}


/* Reglas de desencriptación: 
"enter" es convertido para "e" 
"imes" es convertido para "i"
"ai" es convertido para "a"
"ober" es convertido para "o"
"ufat" es convertido para "u"
Solo letras minusculas
No se permite acentuación de palabras   
*/
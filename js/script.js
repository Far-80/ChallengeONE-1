function encriptador (arrayPalabras){
    var textoEncriptado ="";
    var patron = new RegExp(/a|e|i|o|u/g,);

    /* este codigo tambien divide textos en array de palabras
    const regexpWords = /\b\w+\b/g;
    console.log(texto.match(regexpWords));*/

    for (i=0; i < arrayPalabras.length; i++){
        arrayPalabras[i] = arrayPalabras[i].replace(patron,function(x){
            if (x == "a"){ return "ai"};
            if (x == "e"){ return "enter"};
            if (x == "i"){ return "imes"};
            if (x == "o"){ return "ober"};
            if (x == "u"){ return "ufat"};
        });

        if (i != arrayPalabras.length - 1){
            textoEncriptado = textoEncriptado + arrayPalabras[i] + " ";
        }else {
            textoEncriptado = textoEncriptado + arrayPalabras[i];
        }
    }
    console.log (textoEncriptado);
    return textoEncriptado;
}

function desencriptador (arrayPalabras){
    var textoDesencriptado ="";
    var patron = new RegExp(/ai|enter|imes|ober|ufat/g,);

    for (i=0; i < arrayPalabras.length; i++){
        arrayPalabras[i] = arrayPalabras[i].replace(patron,function(x){
            if (x == "ai"){ return "a"};
            if (x == "enter"){ return "e"};
            if (x == "imes"){ return "i"};
            if (x == "ober"){ return "o"};
            if (x == "ufat"){ return "u"};
        });

        if (i != arrayPalabras.length - 1){
            textoDesencriptado = textoDesencriptado + arrayPalabras[i] + " ";
        }else {
            textoDesencriptado = textoDesencriptado + arrayPalabras[i];
        }
    }
    return textoDesencriptado;
}
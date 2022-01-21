var encriptar = document.querySelector(".boton-encriptar");


function dividirCadena(cadenaADividir) {
    var separador = " ";
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
 };

function validarTexto (texto){
    const patron = new RegExp('^[a-z\s]');
    var valido = false;

    if (texto == "" || !patron.test(texto)){
        alert ("Texto invalido: esta vacio, contiene mayuscula, contiene acento o es algún caracter!");
    }
    else {
        valido = true;
    }
    return valido;
}

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
        console.log(texto);
        arrayPalabras[i] = texto;
    }
    return arrayPalabras;
}


encriptar.addEventListener("click", function (){
    var texto =document.querySelector("#id-texto-ingresado").value;
    var textoProcesado = document.querySelector(".texto-procesado");
    var arrayPalabras;

    if (validarTexto(texto)) {
        encriptador(texto);
    }
});

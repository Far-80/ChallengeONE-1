
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



var encriptar = document.querySelector("#btn-encriptar");

encriptar.addEventListener("click", function (evt){
    evt.preventDefault();
    var texto =document.querySelector("#input-texto").value;
    var arrayPalabras;

    if (validarTexto(texto)) {
        var mensaje = document.querySelector("#msg");
        arrayPalabras = encriptador(texto);
        var textoEncriptado ="";
        for (i=0; i < arrayPalabras.length; i++){
            textoEncriptado = textoEncriptado + arrayPalabras[i] + " ";
        }
        mensaje.value = textoEncriptado;
    }
});
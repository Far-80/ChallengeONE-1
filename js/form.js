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

function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }
  
document.querySelector("#btn-copy").addEventListener("click", copy);

function paste() {
    var pasteText = document.querySelector("#msg");
    pasteText.focus();
    document.execCommand("paste");
  }
  
  document.querySelector("#btn-copy").addEventListener("click", paste);

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

var desencriptar = document.querySelector("#btn-desencriptar");

desencriptar.addEventListener("click", function (evt){
    evt.preventDefault();
    var texto =document.querySelector("#input-texto").value;
    var arrayPalabras;

    if (validarTexto(texto)) {
        var mensaje = document.querySelector("#msg");
        arrayPalabras = desencriptador(texto);
        var textoDesencriptado ="";
        for (i=0; i < arrayPalabras.length; i++){
            textoDesencriptado = textoDesencriptado + arrayPalabras[i] + " ";
        }
        mensaje.value = textoDesencriptado;
    }
});
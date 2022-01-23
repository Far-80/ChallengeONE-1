function validarTexto (texto){
    var ul = document.querySelector("#mensajes-errores");
    const patron = new RegExp("[a-z\s]$");
    var mensajeError = "Texto invalido: vacio, contiene mayuscula, acento o es algún caracter!";
    
    var valido = false;
    ul.innerHTML = ""
    if (texto == "" || !patron.test(texto)){
        ul.textContent = mensajeError;
    }else { valido= true;}

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


var mensaje = document.querySelector("#msg");
var encriptar = document.querySelector("#btn-encriptar");

encriptar.addEventListener("click", function (evt){
    evt.preventDefault();
    var texto =document.querySelector("#input-texto").value;
    var arrayPalabras;

    if (validarTexto(texto)) {
        arrayPalabras = encriptador(texto);
        var textoEncriptado ="";
        for (i=0; i < arrayPalabras.length; i++){
            textoEncriptado = textoEncriptado + arrayPalabras[i] + " ";
        }
        mensaje.value = textoEncriptado;
    }else{ 
        mensaje.value = "";
    }
});

var desencriptar = document.querySelector("#btn-desencriptar");

desencriptar.addEventListener("click", function (evt){
    evt.preventDefault();
    var texto =document.querySelector("#input-texto").value;
    console.log (texto);
    var arrayPalabras;

    //if (validarTexto(texto)) {
        arrayPalabras = desencriptador(texto);
        var textoDesencriptado ="";
        for (i=0; i < arrayPalabras.length; i++){
            textoDesencriptado = textoDesencriptado + arrayPalabras[i] + " ";
        }
        mensaje.value = textoDesencriptado;
    /*}else{ 
        mensaje.value = "";
    }*/
});
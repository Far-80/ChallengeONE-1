var encriptar = document.querySelector(".boton-encriptar");


function dividirCadena(cadenaADividir) {
    var separador = " ";
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
 };


encriptar.addEventListener("click", function (){
    var texto =document.querySelector("#id-texto-ingresado").value;

    var validarTexto = false;
    const patron = new RegExp('^[a-z]+$');

    if (texto == ""){
        alert ("Tiene que ingresar un texto")
    }
    else {
        var arrayPalabras = dividirCadena (texto);
        console.log(arrayPalabras);
        var contador = 0;
        while ( contador <= arrayPalabras.length){
            if(!patron.test(arrayPalabras[contador])){
                alert ("el texto contiene caracteres invalidos");
                break;
            }else{
                validarTexto = true;
            }
            contador++;

        }
    }
   
    
    if (validarTexto) {
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
    }

});

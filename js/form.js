var encriptar = document.querySelector(".boton-encriptar");


function dividirCadena(cadenaADividir) {
    var separador = " ";
    var arrayDeCadenas = cadenaADividir.split(separador);
    return arrayDeCadenas;
 }


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
            }else{
                console.log("seguir trabajando con el codigo");
            }
            contador++;

        }
    }
    

});


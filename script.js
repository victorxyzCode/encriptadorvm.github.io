

const inputTexto = document.querySelector(".textoDeClase")
const mensaje = document.querySelector(".textoDeCopiar")


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


// Encriptar palabras

function btnEncriptar(){
    const TextoEncriptado = encriptar(inputTexto.value);
    mensaje.value = TextoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] ,["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];

    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0;  i<matrizCodigo.length ; i++){

        if(stringEncriptada.includes(matrizCodigo[i][0]))
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
    }
    return stringEncriptada;
}

// Desencriptar palabras

function btnDesencriptar(){
    const TextoDesencriptado = desencriptar(inputTexto.value);
    mensaje.value = TextoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""
}

function desencriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"] ,["i","imes"],["a","ai"],["o","ober"],["u","ufat"] ];

    stringEncriptada = stringEncriptada.toLowerCase();


    for(let i = 0;  i<matrizCodigo.length ; i++){

        if(stringEncriptada.includes(matrizCodigo[i][1]))
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
    }
    return stringEncriptada;
}

function copiarTexto(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.setSelectionRange(0, 99999);
    mensaje.value="";
    mensaje.style.backgroundImage = "";
}


function encriptarLetra(letra) {
    switch (letra) {
        case "a":
            return "ai";
            break;
        case "e":
            return "enter";
            break;
        case "i":
            return "imes";
            break;
        case "o":
            return "ober";
            break;
        case "u":
            return "ufat";
            break;
        default:
            return letra;
    }
}

function encriptarTexto(texto) {
    var textoEncriptado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var letraEncriptada = encriptarLetra(letra);
        textoEncriptado += letraEncriptada;
    }
    return textoEncriptado;
}

function desencriptarPalabra(letra, letraEncriptada) {
    var palabraOriginal = letra;

    if (letraEncriptada.includes(1)) {
        palabraOriginal = palabraOriginal.replace(/ai/g, "a");
    }
    if (letraEncriptada.includes(2)) {
        palabraOriginal = palabraOriginal.replace(/enter/g, "e");
    }
    if (letraEncriptada.includes(3)) {
        palabraOriginal = palabraOriginal.replace(/imes/g, "i");
    }
    if (letraEncriptada.includes(4)) {
        palabraOriginal = palabraOriginal.replace(/ober/g, "o");
    }
    if (letraEncriptada.includes(5)) {
        palabraOriginal = palabraOriginal.replace(/ufat/g, "u");
    }
    return palabraOriginal;
}

function concatenarPalabras(lista) {
    var oracion = "";
    for (var i = 0; i < lista.length; i++) {
        oracion += lista[i] + " ";
    }
    return oracion.trimEnd();
}

function validarEncriptadoPalabra(palabra) {
    var resultado = [];
    var estado = false;
    palabra.includes("ai") ? resultado.push(1) : estado = false;
    palabra.includes("enter") ? resultado.push(2) : estado = false;
    palabra.includes("imes") ? resultado.push(3) : estado = false;
    palabra.includes("ober") ? resultado.push(4) : estado = false;
    palabra.includes("ufat") ? resultado.push(5) : estado = false;
    return resultado;
}

function desencriptarTexto(texto) {
    var listaPalabras = entrada.split(" ");
    var listaPalabrasDesencriptadas = [];
    var letrasEncriptadas = [];
    for (var i = 0; i < listaPalabras.length; i++) {
        var palabra = listaPalabras[i];
        letrasEncriptadas = validarEncriptadoPalabra(palabra);
        palabra = desencriptarPalabra(palabra, letrasEncriptadas);
        listaPalabrasDesencriptadas.push(palabra);
    }
    return concatenarPalabras(listaPalabrasDesencriptadas);

}

var entrada = "No mames amigo esto es genial, lo logre vida hp";

console.log("Esta es la cadena original:")
console.log(entrada);

console.log("Esta es la cadena encriptada:")
var textoEncriptado = encriptarTexto(entrada);
console.log(textoEncriptado);

console.log("Esta es la cadena sin encriptación:")
console.log(desencriptarTexto(textoEncriptado));
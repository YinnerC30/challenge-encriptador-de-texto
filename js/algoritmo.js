//--- Obtengo los elementos HTML

function obtenerEntrada() {
    var Entrada = document.getElementById('areaEntrada');
    return Entrada;
}

function obtenerSalida() {
    var Salida = document.getElementById("areaSalida");
    return Salida;
}

//--- Creo las funciones necesarias para encriptar una cadena de texto

function encriptarLetra(letra) {
    /* 
    Se recibe una sola letra y se retorna el valor clave que corresponde de acuerdo
    a la vocal obtenida, si es consonante se retorna el mismo valor.
     */
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
    /* 
    Se recorre la cadena de texto y con ayuda de la funcion de "encriptarLetra" se
    logra encriptar cada vocal que se encuentre en el recorrido.
    Posteriormente se añade cada resultado retornado por la funcion en una nueva cadena.
     */
    var textoEncriptado = "";
    for (var i = 0; i < texto.length; i++) {
        var letra = texto[i];
        var letraEncriptada = encriptarLetra(letra);
        textoEncriptado += letraEncriptada;
    }
    return textoEncriptado;
}

//--- Creo las funciones necesarias para desencriptar una cadena de texto
function desencriptarPalabra(letra, letraEncriptada) {
    /* 
    Se recibe la palabra y de acuerdo a las conversiones obtenidas de la anterior función, se remplazan los valores por los originales en
    todas las coincidencias encontradas en la palabra.
    */
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
    /*
    Una vez completado el procesos de remplazo de valores, se reunen las palabras de la lista, para unirlas en una nueva cadena, con los
    valores correctos.
     */
    var oracion = "";
    for (var i = 0; i < lista.length; i++) {
        oracion += lista[i] + " ";
    }
    return oracion.trimEnd();
}

function validarEncriptadoPalabra(palabra) {
    /* 
    Se identifican las conversiones en la palabra, para identificar la vocal que fue afectada y retornar el codigo para este caso en particular.
    */
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
    /*
    Se separan las palabras de la cadena en una lista para luego recorrerlas, para
    validar las palabras que estan encriptadas y así desencriptarlas con la función "desencriptarPalabra"
    y almacenar la palabra en una lista, para luego concatenarlas, formando la cadena con el texto
    desencriptado.

    */
    /* var listaPalabras = entrada.split(" "); */
    var listaPalabras = texto.split(" ");
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

//--- Funciones de los botones de la pagina
function enviarTextoNormal() {
    let Entrada = obtenerEntrada();
    let Salida = obtenerSalida();
    let textoEntrada = Entrada.value;
    textoEntrada = encriptarTexto(textoEntrada);
    /* textoEntrada = desencriptarTexto(textoEntrada); */
    Salida.innerText = textoEntrada;
    console.log(textoEntrada);
}

function enviarTextoEncriptado() {
    let Entrada = obtenerEntrada();
    let Salida = obtenerSalida();
    let textoEntrada = Entrada.value;
    textoEntrada = desencriptarTexto(textoEntrada);
    /* textoEntrada = encriptarTexto(textoEntrada); */
    Salida.innerText = textoEntrada;
    console.log(textoEntrada);
}

function copiarTexto() {
    let Salida = obtenerSalida();
    Salida.select();
    navigator.clipboard.writeText(Salida.value);
}
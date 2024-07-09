function encriptar(texto) {
    let textoEncriptado = texto.replace(/e/g, "enter")
                               .replace(/i/g, "imes")
                               .replace(/a/g, "ai")
                               .replace(/o/g, "ober")
                               .replace(/u/g, "ufat");
    return textoEncriptado;
}

function desencriptar(texto) {
    let textoDesencriptado = texto.replace(/enter/g, "e")
                                  .replace(/imes/g, "i")
                                  .replace(/ai/g, "a")
                                  .replace(/ober/g, "o")
                                  .replace(/ufat/g, "u");
    return textoDesencriptado;
}

function ocultarMostrar(text, information){
    document.getElementById("respuesta").style.display = text;
    document.getElementById("respuestaBoton").style.display = text;
    document.getElementById("information").style.display = information;
}

function encriptarTexto() {
    let texto = document.getElementById("textInput").value;
    if (texto) {
        let textoEncriptado = encriptar(texto);
        console.log(textoEncriptado)
        document.getElementById("textOutput").innerText = textoEncriptado;

        ocultarMostrar("flex", "none")

    }
    else 
    {
        alert("Por favor escriba un texto");
        ocultarMostrar("none", "flex")
    }

   
}

function desencriptarTexto() {
    let inputTexto = document.getElementById("textInput").value;
    let textoDesencriptado = desencriptar(inputTexto);
    document.getElementById("textOutput").innerHTML = textoDesencriptado;
}

function copiarTexto() {
    let copyText = document.getElementById("textOutput");
    copyText.select()
    document.execCommand('copy');
    alert(copyText.value);
   
}
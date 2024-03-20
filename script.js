
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje-encriptado");


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}


//Funcion Encriptar

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i<matrizCodigo.length ; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}





function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";

}




//Funcion Desencriptar

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e", "enter"],["i","imes"],["a", "ai"],["o","ober"], ["u","ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()
    
    for(let i=0; i< matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptado
}



function copiarTexto() {
    mensaje.select();

    navigator.clipboard.writeText(mensaje.value)
    .then(() => {
        alert("¡Texto copiado!");
    })
    .catch(err => {
        console.error('Error al copiar el texto: ', err);
        alert("Hubo un error al copiar el texto. Por favor, inténtalo de nuevo.");
    });
}

import cipher from './cipher.js';
console.log(cipher);

//Declaro las variables que utilizaré :D 
const encodeButton = document.getElementById("encode-btn");
const decodeButton = document.getElementById("decode-btn");
const clearButton = document.getElementById("clear")
let encodeInput = document.getElementById("text-to-encode");
let decodeInput = document.getElementById("text-to-decode");
let offsetNumber = document.getElementById("number");
let encodedText = "";
let decodedText = "";

// Al darle click a mi flecha de codificar, ocurre esta función:
encodeButton.addEventListener("click", cifrar);
function cifrar(){
    let text = encodeInput.value;
    let number = parseInt(offsetNumber.value); 
    encodedText = cipher.encode(number,text);
    decodeInput.value = encodedText;
}
    
// Al darle click a mi flecha de decodificar, ocurre esta función:
decodeButton.addEventListener("click", descifrar);
function descifrar(){
    let text = decodeInput.value;
    let number = parseInt(offsetNumber.value);
    decodedText = cipher.decode(number,text);
    encodeInput.value = decodedText;
}

// Al darle click al botón limpiar, sucede esto: 
clearButton.addEventListener("click",() => {
    encodeInput.value="";
    decodeInput.value="";
    offsetNumber.value="";
})
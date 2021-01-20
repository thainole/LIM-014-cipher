
const cipher = 
{
  encode: function(number,text)
  {//array de las letras permitidas
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let finalString = "";
     
    /* hago mi for para definir los parámetros */
    for (let i=0; i<text.length; i++)
    {
      let word = text[i]; 
      let validWord = letters.includes(word.toUpperCase())
      /*si la palabra es válida, la convertimos a mayúsculas para encontrar la posicion ascii */
      if (validWord == true){
        let upperLetter = word.toUpperCase();
        /*para la posición ascii, aplicamos charCodeAt y luego la fórmula sgte */ 
        let asciiNumber = ((upperLetter.charCodeAt(0)-65+number)%26)+65;
        /* pasamos la posición ascii (número) a la letra correspondiente */
        let finalWord = String.fromCharCode(asciiNumber);
        finalString += finalWord;
      } 
      else
      {
       /* Si se agrega otro tipo de caracter que no sea letra, no se convierte, solo se añade */
        finalString += word; 
      }      
    }
    return finalString;   
  }, 

  decode: function(number,text)
  {
    let letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let finalString = "";

    for (let i=0; i<text.length; i++)
    {
      let word = text[i];
      console.log(word);
      let validWord = letters.includes(word.toUpperCase())

      if (validWord==true)
      {
        let upperLetter = word.toUpperCase();
        console.log(upperLetter);
        let asciiNumber = (upperLetter.charCodeAt(0)+65-number)%26+65;
        console.log(asciiNumber);
        let finalWord = String.fromCharCode(asciiNumber);
        console.log(finalWord);
        finalString += finalWord;
        console.log(finalString);
      }
      else 
      {
        finalString += word;
      }
    }
    return finalString;
  }
  
};


export default cipher;

// const {StringHelper} = require('../shared/string.helper');
import {StringHelper} from '../shared/string.helper'; // gracias a tsconfig.json 
// { ... esModuleInterop: true, moduleResolution: "Node"

export function isPalindrome(phrase: string): boolean{
    // limpiamos la frase usando helper
    const phraseClean = StringHelper.cleanPhrase(phrase);
    // creamos un array por letras usando helper
    const phraseSeparated = StringHelper.separatedWords(phraseClean);
    // compara si la frase unida es igual a la frase unida pero del revés
    return StringHelper.wordsToLargeWord(phraseSeparated) === StringHelper.wordsToLargeWordReverse(phraseSeparated);
}

var poeme = "Amor azul' Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma";



const applyFunction = isPalindrome(poeme);

const result = applyFunction == true ? "Es un palíndromo" : "no es un palíndromo"; 

console.log(result);

import { StringHelper } from '../shared/string.helper';
import { ArrayHelper } from '../shared/array.helper';
import { count } from 'console';

// buscar una palabra en una frase: findPositionOfWordInphrase()
export function findPositionOfWordInPhrase(phrase: string, search: string): number{

  let position = phrase.indexOf(search);
  if (position !== -1){
    console.log("La palabra está en la posición: ", position);
  } else {
    console.log("No encuentro lo que buscas.");
  }
  return position;
}
// sustituir todas las ocurrencias de una palabra por otra, en una frase: changeOcurrenciesOfWordInPhraseByOtherWord()
export function changeOcurrenciesOfWordInPhraseByOtherWord(phrase: string, search: string, replace: string): string {
  var position = findPositionOfWordInPhrase(phrase, search);

  // "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
  // replace="atito"
  // remplaza "ato" por "atito"
  while (position >= 0){
    phrase = phrase.slice(0, position) + replace + phrase.slice(position + search.length);
    position = phrase.indexOf(search);
  }
  console.log(phrase);
  return phrase;
}
// busca la palabra 'word' en la frase 'phrase' y retorna el numero de veces que está repetida
export function countWordInPhrase(phrase: string, search: string): number {
  let count = 0;
  const clean_phrase = StringHelper.cleanPhrase(phrase);
  const clean_search = search.toLowerCase().trim();

  const words = clean_phrase.split(" ");

  for (let index in words){
    if(words[index] == clean_search) count++;
  }

  return count;
}

// busca cada palabra de una frase y devuelve un array con las repeticiones de cada una de ellas, por ejemplo:
// en la frase: "Era una vez un gato y un pato" --> 
//   [{ era: 1 },  { una: 1 }, { vez: 1 },  { un: 2 }, { gato: 1 }, { y: 1 }, {pato: 1}]
export function wordsCount(phrase: string): any[] {
  var result: Object[] = [];
  var count = 0;

  const clean_phrase = StringHelper.cleanPhrase(phrase);
  const words: string[] = clean_phrase.split(" ");

  words.forEach(word=>{
    count = countWordInPhrase(clean_phrase, word);
    var objectWord: any = new Object(); // {}
    objectWord[word] = count; // {word: count}
    result.push(objectWord); // [{era: 1}]
  });

  result = ArrayHelper.cleanArrayOfObjectsOnlyOneParam(result);
  return result;
}
// para ello vamos a crear un arrayHelper class con las siguientes funcionalidades
// cleanArray() para quitar elementos repetidos de un array de primitivos
// cleanArrayOfObjectsOnlyOneParam() y una función que limpia un array de objetos que solo tengan un parámetro
// const wordsInPhrase = [
//   { era: 1 },  { una: 1 },
//   { vez: 1 },  { un: 3 },
//   { gato: 1 }, { y: 1 },
//   { un: 3 },   { zapato: 1 },
//   { que: 1 },  { deseaban: 1 },
//   { ser: 1 },  { amigos: 1 },
//   { de: 1 },   { un: 3 },
//   { pato: 1 }
// ]

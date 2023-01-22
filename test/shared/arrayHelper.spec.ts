
import { assert, expect } from 'chai';

import { ArrayHelper } from '../../src/shared/array.helper';

describe('SHARED: StringHelper', () => {
  it('test01: cleanArray(). limpieza array de primitivos ejemplo con números', ()=>{
  const numbers = [1, 2, 2, 3, 4, 4, 5];
  console.log("Numbers: ", numbers);
  const uniqueNumbers = ArrayHelper.cleanArray(numbers);
  console.log("unique Numbers: ", uniqueNumbers);
  const expected= [ 1, 2, 3, 4, 5 ];
  assert.deepEqual(uniqueNumbers, expected);
  });
  it('test02: cleanArray(). limpieza de primitivos ejemplo con palabras', ()=>{
    const words = ["él","yo","tú","el","tu","nosotros","vosotros","ellos","tu","tú","yo","yo"];
    console.log("Words: ", words);
    const uniqueWords = ArrayHelper.cleanArray(words);
    console.log("Unique words: ", uniqueWords);
    const expected = ["él","yo","tú","el","tu","nosotros","vosotros","ellos"];
    assert.deepEqual(uniqueWords, expected);
  });
  it('test03: cleanArray() limpieza de primitivos con utf8 icons ', ()=>{
    const fruits = ["🍏","🍓","🍒","🍏","🥝","🍓","🍏","🍒","🍇","🍉"];
    console.log("Fruits: ", fruits);
    const uniqueFruits = ArrayHelper.cleanArray(fruits);
    console.log("Unique Fruits: ", uniqueFruits);
    const expected = ["🍏","🍓","🍒","🥝","🍇","🍉"];
    assert.deepEqual(expected, uniqueFruits);
  });
  it('test03: cleanArrayOfObjectsOnlyOneParam(). limpieza de array de objetos klave = palabras en un texto,  valor = cantidad', ()=>{
    
  const wordsInPhrase = [
    { era: 1 },  { una: 1 },
    { vez: 1 },  { un: 3 },
    { gato: 1 }, { y: 1 },
    { un: 3 },   { zapato: 1 },
    { que: 1 },  { deseaban: 1 },
    { ser: 1 },  { amigos: 1 },
    { de: 1 },   { un: 3 },
    { pato: 1 }
  ]
  console.log("Wordss in phrase: ", wordsInPhrase);
  const uniqueWordsInPhrase = ArrayHelper.cleanArrayOfObjectsOnlyOneParam(wordsInPhrase);
  console.log("Unique words in phrase: ", uniqueWordsInPhrase);
  const expected = [
  { era: 1 },  { una: 1 }, { vez: 1 },  { un: 3 }, { gato: 1 }, { y: 1 },
  { zapato: 1 }, { que: 1 },  { deseaban: 1 }, { ser: 1 },  { amigos: 1 },
  { de: 1 },   { pato: 1 }
  ];
  assert.deepEqual(uniqueWordsInPhrase, expected);
  });
  it('test04: cleanArrayOfObjectsOnlyOneParam(). limpieza de array de objetos klave= "tilte of book", value = quantity ', ()=>{

    const booksInLibrary = [{ "Tom-sayer": 1 }, { "La Biblia": 3 }, { "La Biblia": 3 }, { "Marilyn Moonroe": 2 }, { "El gato con botas": 1 }, { "zapato": 1 }, { "La Biblia": 3 }, { "Marilyn Moonroe": 2 }];
    console.log("Books in biblio: ", booksInLibrary);
    const uniqueBooksInLibrary = ArrayHelper.cleanArrayOfObjectsOnlyOneParam(booksInLibrary);
    console.log("Unique books in Library: ", uniqueBooksInLibrary);
    const expected = [{ "Tom-sayer": 1 }, { "La Biblia": 3 }, { "Marilyn Moonroe": 2 }, { "El gato con botas": 1 }, { "zapato": 1 }];
    assert.deepEqual(uniqueBooksInLibrary, expected);  
  });
});

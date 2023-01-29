import { assert } from 'chai';

import { ArrayHelper } from '../../src/shared/array.helper';

describe('SHARED: StringHelper ', ()=>{
  it('test01: cleanArray(). Limpieza de un array de números, para eliminar los repetidos', ()=>{
    const numbers = [1, 2, 2, 3, 4, 4, 5];
    console.log("Numers: ", numbers);
    const uniqueNumbers = ArrayHelper.cleanArray(numbers);
    console.log("Unique numers: ", uniqueNumbers);
    const expected = [ 1, 2, 3, 4, 5 ];

    assert.deepEqual(uniqueNumbers, expected);
  });

  it('test02: cleanArray(). Limpieza de un array de strings, para eliminar los repetidos', ()=>{
    const words = ["él","yo","tú","el","tu","nosotros","vosotros","ellos","tu","tú","yo","yo"];
    console.log("Words: ", words);
    const uniqueWords = ArrayHelper.cleanArray(words);
    console.log("Unique words: ", uniqueWords);
    const expected =["él","yo","tú","el","tu","nosotros","vosotros","ellos"];

    assert.deepEqual(uniqueWords, expected);
  });

  it('test03: cleanArray(). Limpieza usando un arrray de utf8 icons',()=> {
    const fruits = ["🍏","🍓","🍒","🍏","🥝","🍓","🍏","🍒","🍇","🍉"];
    console.log('Fruits: ', fruits);
    const uniqueFruits = ArrayHelper.cleanArray(fruits);
    console.log('unique fruits: ', uniqueFruits);
    const expected = ["🍏","🍓","🍒","🥝","🍇","🍉"];
    assert.deepEqual(uniqueFruits, expected);
  });

  it('test04: cleanArrayOfObjectsOnlyOneParam(). Limpieza de arrays de objetos con un solo par de klave valor por objeto, usamos strings en la klave', ()=>{
    const wordsInPhrase = [
        { era: 1 },  { una: 1 },
        { vez: 1 },  { un: 3 },
        { gato: 1 }, { y: 1 },
        { un: 3 },   { zapato: 1 },
        { que: 1 },  { deseaban: 1 },
        { ser: 1 },  { amigos: 1 },
        { de: 1 },   { un: 3 },
        { pato: 1 }
      ];
    console.log('Words in phrase: ', wordsInPhrase);
    const uniqueWordsInPhrase = ArrayHelper.cleanArrayOfObjectsOnlyOneParam(wordsInPhrase);
    console.log('Unique words in phrase: ', uniqueWordsInPhrase);
    const expected = [
      { era: 1 },  { una: 1 }, { vez: 1 },  { un: 3 }, { gato: 1 }, { y: 1 },
      { zapato: 1 }, { que: 1 },  { deseaban: 1 }, { ser: 1 },  { amigos: 1 },
      { de: 1 },   { pato: 1 }
      ];
    assert.deepEqual(expected, uniqueWordsInPhrase);
  });

  it('test05: cleanArrayOfObjectsOnlyOneParam(). limpieza de array de objetos klave= "tilte of book", value = quantity ', ()=>{

    const booksInLibrary = [
      { "Tom-sayer": 1 }, 
      { "La Biblia": 3 }, 
      { "La Biblia": 3 }, 
      { "Marilyn Moonroe": 2 }, 
      { "El gato con botas": 1 }, 
      { "zapato": 1 }, 
      { "La Biblia": 3 }, 
      { "Marilyn Moonroe": 2 }
    ];
    console.log("Books in biblio: ", booksInLibrary);
    const uniqueBooksInLibrary = ArrayHelper.cleanArrayOfObjectsOnlyOneParam(booksInLibrary);
    console.log("Unique books in Library: ", uniqueBooksInLibrary);
    const expected = [
      { "Tom-sayer": 1 }, 
      { "La Biblia": 3 }, 
      { "Marilyn Moonroe": 2 }, 
      { "El gato con botas": 1 }, 
      { "zapato": 1 }
    ];
    assert.deepEqual(uniqueBooksInLibrary, expected);
  });
});

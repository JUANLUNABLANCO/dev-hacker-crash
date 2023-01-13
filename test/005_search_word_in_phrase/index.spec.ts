const {assert, expect} = require('chai');

import {
    findPositionOfWordInPhrase,
    changeOcurrenciesOfWordInPhraseByOtherWord,
    countWordInPhrase,
    wordsCount
} from '../../src/005_search_word_in_phrase/index';


describe('EXERCICE 005: search words in phrase', ()=>{
    it('La función findPositionOfWordInPhrase(phrase, search), devuelve la posición de esa palabra en la frase', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const search = "gato";
        const expected = 15;

        const result = findPositionOfWordInPhrase(phrase, search);
        assert.equal(result, expected);
    });
    it('La función findPositionOfWordInPhrase(phrase, search), devuelve -1 porque no va a encontrar esa palabra en esa frase', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const search = "Armagedeon";
        const expected = -1;

        const result = findPositionOfWordInPhrase(phrase, search);
        assert.equal(result, expected);
    });
    it('La función changeOcurrenciesOfWordInPhraseByOtherWord(phrase, search, replace), reemplazará todas las ocurencias "replace", en una frase "phrase", dado una palabra "search"', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const search = "ato";
        const replace= "atito";
        const expected = "Era una vez un gatito y un zapatito que deseaban ser amigos de un patito";

        const result = changeOcurrenciesOfWordInPhraseByOtherWord(phrase, search, replace);
        assert.equal(result, expected);
    });
    it('La función countWordInPhrase(phrase, search), nos devolverá el número de veces que se repite esa palabra "search"', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const search = "gato";
        const expected = 1

        const result = countWordInPhrase(phrase, search);
        assert.equal(result, expected);
    });
    it('La función countWordInPhrase(phrase, search), nos devolverá el número de veces que se repite esa palabra "search"', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const search = "un";
        const expected = 3

        const result = countWordInPhrase(phrase, search);
        assert.equal(result, expected);
    });
    it('La función countWordInPhrase(phrase, search), nos devolverá el número de veces que se repite esa palabra "search"', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const search = "Tamarindo";
        const expected = 0

        const result = countWordInPhrase(phrase, search);
        assert.equal(result, expected);
    });
    it('La función wordsCount(phrase), nos devolverá el número de veces que se repite cada palabra dentro de la frase en un array de objetos y eliminará los objetos repetidos', ()=>{
        const phrase = "Era una vez un gato y un zapato que deseaban ser amigos de un pato";
        const expected = [
            { era: 1 },      { una: 1 },
            { vez: 1 },      { un: 3 },
            { gato: 1 },     { y: 1 },
            { zapato: 1 },   { que: 1 },
            { deseaban: 1 }, { ser: 1 },
            { amigos: 1 },   { de: 1 },
            { pato: 1 }
        ];

        const result = wordsCount(phrase);
        assert.deepEqual(result, expected);
    });
});

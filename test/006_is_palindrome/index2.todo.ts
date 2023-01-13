
import { assert, expect } from 'chai';

import { isPalindrome } from '../../src/006_is_palindrome/index';
import { StringHelper } from '../../src/shared/string.helper';

describe('EXERCICE06: Palíndromo', () => {
    it('La función isPalindrome() devuelve un boolean', () => {
        const result = isPalindrome("Hello World!!");
        assert.equal(typeof result, 'boolean');
    });
    it('La función isPalindrome(phrase) limpia phrase y lo convierte a minúsculas, quitándole los acentos', () => {
        var phrase = "Esto es una-- frase compleja con signos, y MAYÚSCULAS)(/&%$$ pero sin acentos áéíÓÚ";
        const result = StringHelper.cleanPhrase(phrase);
        assert.equal(result, "esto es una frase compleja con signos y mayusculas pero sin acentos aeiou");
    });
    it('La función isPalindrome(phrase) limpia phrase y lo convierte a minúsculas, quitándole los acentos y además saca un array por palabras', () => {
        var phrase = "Esto es una-- frase compleja con signos, y MAYÚSCULAS)(/&%$$ pero sin acentos áéíÓÚ";
        const result = isPalindrome(phrase);
        assert.equal(typeof result, 'boolean');
    });
    it('La función isPalindrome(phrase) limpia phrase y lo convierte a minúsculas, quitándole los acentos y además saca un array por palabras, luego une todas las palabras en una sola palabra grande y divide por caracter, para comprobar finalmente si es o no un palíndromo', () => {
        var phrase = "aeiea";
        const result = isPalindrome(phrase);
        assert.equal(result, true);
    });
    it('La función isPalindrome(phrase) terminator, no es un palindromo', () => {
        var phrase = "Terminator";
        const result = isPalindrome(phrase);
        assert.equal(result, false);
    });
    it('La función isPalindrome(phrase) "Dábale arroz a la zorra el Abad", es un palíndromo en toda regla', () => {
        var phrase = "Dábale arroz a la zorra el Abad";
        const result = isPalindrome(phrase);
        assert.equal(result, true);
    });
    //Amor azul' Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El  como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma
    it('La función isPalindrome(poeme) "Amor azul Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma", es un palíndromo en toda regla', () => {
        var poeme = "Amor azul' Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma";
        const result = isPalindrome(poeme);
        assert.equal(result, true);
    });

});

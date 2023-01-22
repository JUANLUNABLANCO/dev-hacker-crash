
import { assert, expect } from 'chai';

import { StringHelper } from '../../src/shared/string.helper';

describe('SHARED: StringHelper', () => {
    it('La función StringHelper.cleanPhrase(phrase) limpia phrase y lo convierte a minúsculas, quitándole los acentos signos y demás', () => {
        var phrase = "Esto es una-- frase compleja con signos, y MAYÚSCULAS)(/&%$$ pero sin acentos áéíÓÚ";
        const result = StringHelper.cleanPhrase(phrase);
        assert.equal(result, "esto es una frase compleja con signos y mayusculas pero sin acentos aeiou");
    });
    it('Queremos hacer una mejora en la función StringHelper.cleanPhrase(phrase) para que además limpie los espacios en blanco sobrantes, del inicio y del final y que aquellos espacios que sean más de uno entre palabras los sustituya precisamente en un solo espacio', () => {
        var phrase = "Esto es una-- frase compleja con signos, y MAYÚSCULAS)(/&%$$ pero sin acentos áéíÓÚ, que además tiene varios espacios     en  blanco  entre palabras. ";
        const result = StringHelper.cleanPhrase(phrase);
        assert.equal(result, "esto es una frase compleja con signos y mayusculas pero sin acentos aeiou que ademas tiene varios espacios entre palabras");
    });
});

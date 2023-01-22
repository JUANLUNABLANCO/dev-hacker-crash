export class StringHelper {

    public static cleanPhrase(phrase: string):string {
        return phrase.replace(/[^a-zá-úà-ù0-9ü\s]/gi, "").toLowerCase().trim()
        .replace(/á/gi, 'a')
        .replace(/é/gi, 'e')
        .replace(/í/gi, 'i')
        .replace(/ó/gi, 'o')
        .replace(/ú/gi, 'u')
        .replace(/à/gi, 'a')
        .replace(/è/gi, 'e')
        .replace(/ì/gi, 'i')
        .replace(/ò/gi, 'o')
        .replace(/ù/gi, 'u')
        .replace(/\s+/g,' ');
    }
    public static separatedWords(phrase:string):string[] {
        return phrase.split(" ").join("").split('');
    }
    public static wordsToLargeWord(words: string[]): string {
        return words.join('');
    }
    public static wordsToLargeWordReverse(words: string[]): string {
        return words.reverse().join('');
    }
    public static noBackSpaces(phrase: string): string {
        return phrase.replace(/\s+/g,'');
    }

}

// uso de cleanPhrase
var phrase = " Tengo una FRaSE    sencilla, sin acéntos   sin comas sin espàcios en blanco sobrantes y sin signos raros @#~€&%$ cigüeña  ";

var expected = "tengo una frase sencilla sin acentos sin comas sin espacios en blanco sobrantes y sin signos raros cigüeña";

var applyFunction = StringHelper.cleanPhrase(phrase);

console.log(applyFunction);

var result = expected == applyFunction ? true : false;
console.log("resultado del test: ", result);


// juntar un array de letras en una sola palabra larga sin espacios
var arrWords = [
    't', 'e', 'n', 'g', 'o', 'u', 'n', 'a', 'f', 'r', 'a',
    's', 'e', 's', 'e', 'n', 'c', 'i', 'l', 'l', 'a', 's',
    'i', 'n', 'a', 'c', 'e', 'n', 't', 'o', 's', 's', 'i',
    'n', 'c', 'o', 'm', 'a', 's', 's', 'i', 'n', 'e', 's',
    'p', 'a', 'c', 'i', 'o', 's', 'e', 'n', 'b', 'l', 'a',
    'n', 'c', 'o', 's', 'o', 'b', 'r', 'a', 'n', 't', 'e',
    's', 'y', 's', 'i', 'n', 's', 'i', 'g', 'n', 'o', 's',
    'r', 'a', 'r', 'o', 's', 'c', 'i', 'g', 'ü', 'e', 'ñ',
    'a'
  ]

const applyFunctionwordsToLargeWord = StringHelper.wordsToLargeWord(arrWords);
expected = "tengounafrasesencillasinacentossincomassinespaciosenblancosobrantesysinsignosraroscigüeña";

result = applyFunctionwordsToLargeWord == expected ? true : false;

console.log("Hemos transformado el array de letras en una palabra larga sin espacios en blanco, resultado: ", result);


// usar noBackspace() para transformar una frse en una palabra
phrase = "tengo una frase sencilla sin acentos sin comas sin espacios en blanco sobrantes y sin signos raros cigüeña";

applyFunction = StringHelper.noBackSpaces(phrase);

expected = "tengounafrasesencillasinacentossincomassinespaciosenblancosobrantesysinsignosraroscigüeña";

result = applyFunction == expected ? true : false;

console.log("Hemos transformado la frase con espacios en una palabra larga sin espacios en blanco, resultado: ", result);


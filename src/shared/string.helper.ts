export class StringHelper {
    // static instance:StringHelper;

    // private constructor() {}
    // public static create(){
    //     if(!StringHelper.instance) {
    //         StringHelper.instance = new StringHelper();
    //     }
    //     return StringHelper.instance;
    // }
    public static cleanPhrase(phrase: string):string {
        return phrase.replace(/[^a-zá-ú0-9\s]/gi, "").toLowerCase().trim()
        .replace(/á/gi, 'a')
        .replace(/é/gi, 'e')
        .replace(/í/gi, 'i')
        .replace(/ó/gi, 'o')
        .replace(/ú/gi, 'u');
    }
    public static separatedWords(phrase:string):string[] {
        return phrase.split(" ").join("").split('');
    }
}
// console.log(StringHelper.cleanPhrase("Amor azul' Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma"));

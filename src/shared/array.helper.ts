import { resourceLimits } from "worker_threads";

export class ArrayHelper {
  // cleanArray(): limpieza de arrays de primitivos (strings, numbers, booleans, ...)
  // [1,2,3,4,4,5,3] --> [1,2,1,3,4,5]
  public static cleanArray(arr: any[]): any [] {
    // for rookies
    // let uniques: any[] = [];
    // for (var i=0; i < arr.length; i++) {
    //   const element = arr[i];
    //   if(!uniques.includes(arr[i])) {
    //     uniques.push(element);
    //   }
    // }
    const uniques = arr.filter((valorActual, indice)=>{
      return arr.indexOf(valorActual) === indice
    });
    return uniques;
  }

  // cleanArrayOfObjectsOnlyOneParam(): limpieza de array de objetos de un solo parámetro, tipo 
  // [{un: 2},{dia: 1},{llovia: 1}, {demasiado: 1},...]
  public static cleanArrayOfObjectsOnlyOneParam(originalArray: any[]): any[] {
    var uniques: any[] = [];
    var lookupObject: any  = {};


    for(var i in originalArray) {
      var times = 0;
      // objeto por objeto
      lookupObject = originalArray[i];
      // console.log(lookupObject);

      const objParam = Object.keys(lookupObject)[0]; // [{p: 1}, {p:1}] --> [{p:1}] [{a:1}{b:2}]==[{b:2}{a:1}]
      // console.log('object param: ' + objParam);

      for (var z in uniques){
        const objParam2 = Object.keys(uniques[z])[0];
        // console.log('object param 2: ' + objParam2);

        if (objParam == objParam2) { // 'un' === 'un'
          // console.log(objParam + ' = ' + objParam2);
          times++;
        }
      }
      if (times == 0) {
        uniques.push(lookupObject);
      }
    }
    return uniques;
  }
}
  // limpieza array de primitivos
  // const numeros = [1, 2, 2, 3, 4, 4, 5];
  // const uniqueNumeros = ArrayHelper.cleanArray(numeros);
  // console.log(uniqueNumeros);
  // expected: [ 1, 2, 3, 4, 5 ];

  // limpieza de array de objetos
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
  // const uniquesWordsInPhrase = ArrayHelper.cleanArrayOfObjectsOnlyOneParam(wordsInPhrase);
  // console.log(uniquesWordsInPhrase);
// [
  // { era: 1 },  { una: 1 }, { vez: 1 },  { un: 3 }, { gato: 1 }, { y: 1 },
  // { zapato: 1 }, { que: 1 },  { deseaban: 1 }, { ser: 1 },  { amigos: 1 },
  // { de: 1 },   { pato: 1 }
// ]

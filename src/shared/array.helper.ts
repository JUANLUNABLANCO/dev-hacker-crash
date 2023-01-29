export class ArrayHelper {
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
  public static cleanArrayOfObjectsOnlyOneParam(originalArray: any[]): any[] {
    // var uniques: any[] = [];
    // var lookupObject: any  = {};


    // for(var i in originalArray) {
    //   var times = 0;
    //   // objeto por objeto
    //   lookupObject = originalArray[i];
    //   // console.log(lookupObject);

    //   const objParam = Object.keys(lookupObject)[0]; // [{p: 1}, {p:1}] --> [{p:1}] [{a:1}{b:2}]==[{b:2}{a:1}]
    //   // console.log('object param: ' + objParam);

    //   for (var z in uniques){
    //     const objParam2 = Object.keys(uniques[z])[0];
    //     // console.log('object param 2: ' + objParam2);

    //     if (objParam == objParam2) { // 'un' === 'un'
    //       // console.log(objParam + ' = ' + objParam2);
    //       times++;
    //     }
    //   }
    //   if (times == 0) {
    //     uniques.push(lookupObject);
    //   }
    // }
    // return uniques;
    return originalArray.filter((obj, index) => {
      const objParam = Object.keys(obj)[0];
      return originalArray.findIndex(o => objParam === Object.keys(o)[0]) === index;
    });
  }
}

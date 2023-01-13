'use strict'

export function moreThanEightWords (stringList: string[]) : string[] | null {
  // ######## solution for dummies
  // let arrayResult = [];
  // for (let i=0; i < stringList.length; i++) {
  //   if (stringList[i].length > 8) arrayResult.push(stringList[i])
  // }
  // if (arrayResult.length === 0) return null;
  // return arrayResult;

  // ######## advanced solution
  let resultArray = [];
  resultArray = stringList.filter((word)=>{
    return word.length > 8;
  })
  return resultArray.length > 0 ? resultArray : null;
}

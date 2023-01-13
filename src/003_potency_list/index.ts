'use strict'

export function potencyList (numberList: number[], potency: number): number[] {
  // ###### solution for dummies
  // let resultArray = [];
  // for (let i = 0; i < numberList.length; i++) {
  //   resultArray.push(Math.pow(numberList[i], potency));
  // }
  // return resultArray;
  // ##### expert solution
  let resultArray = [];
  return resultArray = numberList.map((current, index)=>{
    return Math.pow(current, potency);
  });
}

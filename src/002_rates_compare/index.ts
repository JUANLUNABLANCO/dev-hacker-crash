
'use strict'

function compareTriplets(ar1: number[], ar2: number[]): number[] {
  let arrResult = [0,0];
  for (let i=0; i<3; i++ ){
    if (ar1[i] > ar2[i]) {
      arrResult[0] +=1;
    }
    if(ar2[i] > ar1[i] ) {
      arrResult[1] +=1;
    }
  }
  return arrResult;
}

export function supervisorRates(ar1: number[], ar2: number[]): number[] | false {
  if (ar1.length !== 3  || ar2.length !== 3) return false;
  let resultArray: number[] = compareTriplets(ar1, ar2);
  if(resultArray[0] > resultArray[1]) {
    console.log('Alice WINNER!');
  } else if(resultArray[1] > resultArray[0]) {
    console.log('Bob WINNER!');
  } else {
  console.log('TIE!');
  }
  return resultArray;
} 

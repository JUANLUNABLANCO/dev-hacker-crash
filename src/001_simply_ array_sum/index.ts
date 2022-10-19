'use strict';

/*
 * Complete the 'simpleArraySum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY ar as parameter.
 */

export function simpleArraySum(ar: number[]): number {
    // level dummy
    let sum=0;
    for (let x=0; x < ar.length; x++){
        sum += ar[x];
    }
    return sum;

    // return 0;
}

const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log("[1,2,3,4,5,6,7,8,9,0,10] --> must be 55: ", simpleArraySum(arrOne));
console.log("[1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1] --> must be 90: ", simpleArraySum(arrTwo));


// // const arrThree = ['hola', 2 ,3 ,4];
// console.log('"["hola", 2 ,3 ,4] --> must fail: "', simpleArraySum(arrThree));

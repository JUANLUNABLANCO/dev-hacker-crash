const { assert, expect } = require('chai');

import { simpleArraySum } from  '../../001 simply array sum/index';

const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// const arrThree = ['hola', 2 ,3 ,4];

// console.log("[1,2,3,4,5,6,7,8,9,0,10] --> must be 55: ", simpleArraySum(arrOne));
// console.log("[1,2,3,4,5,6,7,8,9,0,9,8,7,6,5,4,3,2,1] --> must be 90: ", simpleArraySum(arrTwo));

describe('Array', function() {
    describe('#001 simply Array Sum: duma de numeros desde un array', function() {
        it('"[1,2,3,4,5,6,7,8,9,0,10] --> must be 55: "', function() {
            assert.equal(simpleArraySum(arrOne), 55);
        });
        it('"[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1] --> must be 100: "', function() {
            assert.equal(simpleArraySum(arrTwo), 90);
        });
        // it('"["hola", 2 ,3 ,4] --> must fail: "', function() {
        //     assert.equal(simpleArraySum(arrThree), null);
        // });
    });
});

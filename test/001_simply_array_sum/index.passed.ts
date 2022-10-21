const { assert, expect } = require('chai');

import { simpleArraySum } from "../../src/001_simply_ array_sum/index";

const arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 10];
const arrTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const arrThree = ["hola", 3,4,5,6,7];


describe('001 simply Array sum', function () {
  it ('[1,2,3,4,5,6,7,8,9,0,10] --> must be 55: ', function () {
    assert.equal(simpleArraySum(arrOne), 55);
  });
  it ('[1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 9, 8, 7, 6, 5, 4, 3, 2, 1] --> must be 90: ', function () {
    assert.equal(simpleArraySum(arrTwo), 90);
  });
});


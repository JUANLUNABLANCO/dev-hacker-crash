const {assert, expect} = require('chai');

import { potencyList } from '../../src/003_potency_list/index'

// [1*1=1, 2*2=4, 3*3=9]
const arrOne = [1, 2, 3];
const powOne = 2;
const solutionOne = [1, 4, 9];

// [4*4*4=64, 5*5*5=125, 6*6*6= 216, 9*9*9 = 2197]
const arrTwo = [4, 5, 6, 13];
const powTwo = 3;
const solutionTwo = [64, 125, 216, 2197];

describe('003 Potency List', () => {
  it('given an array list [1,2,3] and the pow value is 2, the result must be: [1,4,9]', ()=>{
    assert.deepEqual(potencyList(arrOne, powOne), solutionOne);
  });
  it('given an array list [4,5,6,13] and the pow value is 3, the result must be: [64, 125, 216, 2197]', ()=>{
    assert.deepEqual(potencyList(arrTwo, powTwo), solutionTwo);
  });
});

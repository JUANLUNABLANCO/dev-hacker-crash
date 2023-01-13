
const {assert, expect} = require('chai');

import { supervisorRates } from '../../src/002_rates_compare/index'

// empate [0,0]
const arrAliceOne = [1, 2, 3];
const arrBobOne = [1, 2, 3]; 
// alice gana [3,0]
const arrAliceTwo = [10, 20, 30];
const arrBobTwo = [1, 2, 3]; 
// Bob gana [1,2]
const arrAliceThree = [10, 20, 30];
const arrBobThree = [20, 40, 3]; 
// false
const arrAliceFour = [1,2,3,4];
const arrBobFour = [11,22,33,44,55];

describe('002 Supervisor compare triplets', () => {
  it('Alice rates =[1,2,3], Bob Rates = [1,2,3]: ¡TIE!', ()=>{
    assert.deepEqual(supervisorRates(arrAliceOne, arrBobOne), [0,0]);
  });
  it ('Alice rates =[10,20,30], Bob Rates = [1,2,3]: Alice WINNER!', function () {
    assert.deepEqual(supervisorRates(arrAliceTwo, arrBobTwo), [3,0]);
  });
  it ('Alice rates =[1,2,3], Bob Rates = [1,2,3]: Bob WINNER!', function () {
    assert.deepEqual(supervisorRates(arrAliceThree, arrBobThree), [1,2]);
  });
  it ('Alice rates =[1,2,3,4], Bob Rates = [11,22,33,44,55]: false', function () {
    assert.equal(supervisorRates(arrAliceFour, arrBobFour), false);
  });
});

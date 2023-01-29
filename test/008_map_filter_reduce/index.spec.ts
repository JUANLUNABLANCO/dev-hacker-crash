import { assert } from 'chai';

const numbers = [1, 2, 3, 4, 5];
let result = evensDoublesSums(numbers);
    console.log(result);

import { doubles } from '../../src/008_map_filter_reduce/index';
import { evens } from '../../src/008_map_filter_reduce/index';
import { sums } from '../../src/008_map_filter_reduce/index';
import { doublesEvensSums } from '../../src/008_map_filter_reduce/index';
import { evensDoublesSums } from '../../src/008_map_filter_reduce/index';

describe('008 MAP(), FILTER(), REDUCE()', ()=>{
  it('list Numbers, double each ones', ()=>{
    let doubledNumbers = doubles(numbers);
    console.log(doubledNumbers);
    const expected = [2, 4, 6, 8, 10];
    assert.equal(expected, doubledNumbers);
  });

  it('List Numbers, filter only the peers', ()=>{
    let evenNumbers = evens(numbers);
    console.log(evenNumbers);
    const expected =  [2, 4];
    assert.equal(expected, evenNumbers);
  });

  it('List numbers, sum all of them', ()=>{
    let sum = sums(numbers);
    console.log(sum);
    const expected = 15;
    assert.equal(expected, sum);
  });

  it('List numbers, evens then double then sum', ()=>{
    let result = evensDoublesSums(numbers);
    console.log(result);
    const expected = 12;
    assert.equal(expected, result);
  })

  it('List numbers, double then evens then sum', ()=>{
    let result = doublesEvensSums(numbers);
    console.log(result);
    const expected = 30;
    assert.equal(expected, result);
  })
});

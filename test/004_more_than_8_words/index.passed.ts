const { assert, expect } = require('chai');

import { moreThanEightWords } from '../../src/004_more_than_8_words/index';

// case 1 
const arrayStringOne = ["pepe", "perez", "peluquero", "peinaba", "pelucas", "por", "pocas", "pesetas", "y", "ponía", "puas", "en", "las", "peinetas"];
const solutionOne = ["peluquero"];

// case 2
const arrayStringTwo = ["Python", "PHP", "Javascript", "C#", "Flutter", "Typescript"];
const solutionTwo = ["Javascript", "Typescript"]

// case 3 
const arrayStringThree = ["hello", "World"];
const solutionThree = null;

describe('004 More Than Eight Words', ()=>{
  it('given an string list ["pepe", "perez", "peluquero", "peinaba", "pelucas", "por", "pocas", "pesetas", "y", "ponía", "puas", "en", "las", "peinetas"], the result must be: ["peluquero"]', ()=>{
    assert.deepEqual(moreThanEightWords(arrayStringOne), solutionOne)
  });
  it('given an string list ["Python", "PHP", "Javascript", "C#", "Flutter", "Typescript"], the result must be: ["Javascript", "Typescript"]', ()=>{
    assert.deepEqual(moreThanEightWords(arrayStringTwo), solutionTwo);
  });
  it('given an string list ["Hello", "World"], the result must be: null', ()=>{
    assert.deepEqual(moreThanEightWords(arrayStringThree), solutionThree);
  });
});

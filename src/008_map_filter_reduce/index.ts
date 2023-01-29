// examples
// doubles
var numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// evens
var numbers = [1, 2, 3, 4, 5];
let evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// sums
var numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15

// evensDoublesSums
var numbers = [1, 2, 3, 4, 5];
let result1 = evensDoublesSums(numbers);
console.log(result1); // 12

// doublesEvensSums
var numbers = [1, 2, 3, 4, 5];
let result2 = doublesEvensSums(numbers);
console.log(result2); // 30







export function doubles(numbers: any[]): any[] {
  return numbers.map(number => number * 2);
}

export function evens(numbers: any[]): any[] {
  return numbers.filter(number => number % 2 === 0);
}

export function sums(numbers: any[]): number {
  return numbers.reduce((total, number) => total + number, 0);
}

export function doublesEvensSums(numbers: any[]): number {
  let result = doubles(numbers);
  result = evens(result);
  let final = sums(result);
  return final;
}

export function evensDoublesSums(numbers: any[]): number {
  let result = evens(numbers);
  result = doubles(result);
  let final = sums(result);
  return final;
}



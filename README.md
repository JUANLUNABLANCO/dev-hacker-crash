# dev-hacker-crash
ejercicios de algoritmia pertenecientes al canal gotth3way. Lista de reproducción dev hacker crash.

En esta lista de reproducción resolveré en directo, los ejercicios de algoritmia o pruebas técnicas o problemas planteados en las mejores páginas de código y las más conocidas entre los desarrolladores de js. como hacker rank, code avengers, coderbyte ...

Empezaremos por los algoritmos más fáciles e iremos subiendo de nivel en cada ejerccio.

Todos los ejercicios los subiré a un proyecto público de git hub 'dev-hacker-rank', te dejo el link en la descripción.

Usaré testing, y cuando piense que avanzamos lo haremos alrevés con TDD, primero el test y luego la solución y refactorización.

Usaré typescript, para que os vayais familiarizando y para que desarrolleis como profesionales. 

En todas o en casi todas las soluciones presentaré varias soluciones unas más básicas y otras más pensadas, más simplificadas, ...

Vamos al lío, te voy a explicar ahora todas las instalaciones y configuraciones necesarias para poder empezar a codificar 


# links en la descripcion:

gitignore generator: https://mrkandreev.name/snippets/gitignore-generator/#Node,w10,typescript
github project: https://github.com/JUANLUNABLANCO/dev-hacker-crash
## ANTES DE NADA
0. crearn un proyecto de nodejs 
    > npm init -y
    gitignore.io -->  https://mrkandreev.name/snippets/gitignore-generator/  nodejs w10 typescript

1. crear las carpetas necesarias
    > mkdir tests/exercice01 -p
    > mkdir src/exercice01 -p
    > npm install --save-dev typescript     // typescript
    > npm install -D ts-node // para ejecutar .tsc files, en desarrollo sin necesidad de ir a ./build
    > npm install -D mocha chai     // necesario para nuestros tests o jest
    > npm i -D @types/node  // para ciertas propiedades de node, desde typescript
    > npm i -D @types/mocha

2. configurar typescript
    1. inicializar
        > tsc --init    // crea el archivo por defecto de configuracion de typescript
        > tsc -v
    2. modificar el archivo tsconfig.json
        // "outDir": "./", --> "outDir": "./build",
        añadir esto tras compilerOptions{
            "target": "es6",
            "module": "commonjs",
            "moduleResolution": "Node",
            "esModuleInterop": true,
        },
        "include": ["src/**/*"],
        "exclude": ["./node_modules/", "./tests/"]

    3. modificar el package.json para hacer tests
        "test": "mocha --require ts-node/register 'test/**/*.ts'",
        "build": "npm test && tsc" // pasará los tests y si lo logra creará el build

    4. Ejecutar el transpilador de typescrit en modo watching
    > tsc -w    // creará el buils y observará cualquier cambio para reescribirlo

    5. desarrollar el 1er ejercicio
    5.1. enunciado en inglés, yo traduzco (pero poco a poco iremos introduciendo más inglés en nuestros desarrollos ya sabeis que en las empresas no importa sino sabes programar mientras que sepas inglés)
    5.2. ejercicio resuelto en index.js
      

        export function simpleArraySum(ar: number[]): number {
            // # level dummy
            let sum=0;
            for (x=0; x< ar.length; x++) {
                sum += ar[x];
            }
            return sum;

            // # level professional
            return ar.reduce((result: number, item: number): number => {
                return result + item;
            });

            <!-- return 0; -->
        }
      

    6. desarrollar el test
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

    7. Ejecutar el test
    > npm test


# EJERCICIO 002 Rates Compare
1. enunciado:
Gema Fernández de Tenerife, creó un problema para Dev Hacker Crash.
Un revisor califica dos desafíos, otorgando puntos en una escala del 1 al 100 para tres categorías: claridad del problema, originalidad y dificultad.

La calificación del desafío de Alicia es el triplete a = (a[0], a[1], a[2]), y la calificación del desafío de Bob es el triplete b = (b[0], b[1], b [2]).

La tarea es encontrar sus puntos de comparación comparando a[0] con b[0], a[1] con b[1] y a[2] con b[2].

Si a[i] > b[i], entonces Alice recibe 1 punto.
Si a[i] < b[i], Bob recibe 1 punto.
Si a[i] = b[i], entonces ninguna persona recibe un punto.
Los puntos de comparación son los puntos totales que ganó una persona.

Dados a y b, determine sus respectivos puntos de comparación.

Ejemplo

un = [1, 2, 3]
segundo = [3, 2, 1]
Para los elementos *0*, Bob recibe un punto porque a[0] .
Para los elementos iguales a[1] y b[1], no se obtienen puntos.
Finalmente, para los elementos 2, a[2] > b[2], por lo que Alice recibe un punto.
La matriz de retorno es [1, 1] con la puntuación de Alice primero y la de Bob en segundo lugar.
El ganador es: ¡Empate!

Al final, el algoritmo debe devolver los puntos de cada uno en una matriz y quién es el ganador.

Controlaremos si la longitud del array 1 o del array 2 es diferente de 3, devolviendo false

## index.ts
'use strict'

/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
function compareTriplets( ar1: number[], ar2: number[]): number[]{
  // dummy solution
  let arrResult: number[]= [0,0];
  for (let i= 0; i<3; i++){
    if (ar1[i] > ar2[i]) { 
      arrResult[0] += 1; 
  }
  if (ar2[i] > ar1[i]) {
      arrResult[1] += 1;
  }
  }
  return arrResult;

  // expert solution
  let arrResult = [0,0];
  
}

export function supervisorRates(ar1: number[], ar2: number[]): number[] | false {
  if (ar1.length !== 3 || ar2.length !==3) return false;
  let resultArray: number[] = compareTriplets(ar1, ar2);
  if (resultArray[0] > resultArray[1]) {
    console.log('Alice WINNER!');
  } else if (resultArray[0] < resultArray[1]) {
    console.log('Bob WINNER!');
  } else {
    console.log('TIE!');
  }
  return resultArray;
}

## index.spec.ts
const { assert, expect } = require('chai');

import { supervisorRates } from "../../src/002_rates_compare/index";

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


describe('002 Supervisor compare triplets', function () {
  it ('Alice rates =[1,2,3], Bob Rates = [1,2,3]: ¡TIE!', function () {
    assert.deepEqual(supervisorRates(arrAliceOne, arrBobOne), [0,0]);
  });
  it ('Alice rates =[10,20,30], Bob Rates = [1,2,3]: Alice WINNER!', function () {
    assert.deepEqual(supervisorRates(arrAliceTwo, arrBobTwo), [3,0]);
  });
  it ('Alice rates =[1,2,3], Bob Rates = [1,2,3]: Bob WINNER!', function () {
    assert.deepEqual(supervisorRates(arrAliceThree, arrBobThree), [1,2]);
  });
  it ('Alice rates =[1,2,3], Bob Rates = [1,2,3]: ¡TIE!', function () {
    assert.equal(supervisorRates(arrAliceFour, arrBobFour), false);
  });
});

# dev-hacker-crash
ejercicios de algoritmia pertenecientes al canal gotth3way. Lista de reproducción dev hacker crash.

En esta lista de reproducción resolveré en directo, los ejercicios de algoritmia o pruebas técnicas o problemas planteados en las mejores páginas de código y las más conocidas entre los desarrolladores de js. como hacker rank, code avengers, coderbyte ...

Empezaremos por los algoritmos más fáciles e iremos subiendo de nivel en cada ejerccio.

Todos los ejercicios los subiré a un proyecto público de git hub 'dev-hacker-rank', te dejo el link en la descripción.

Usaré testing, y cuando piense que avanzamos lo haremos alrevés con TDD, primero el test y luego la solución y refactorización.

Usaré typescript, para que os vayais familiarizando y para que desarrolleis como profesionales. 

En todas o en casi todas las soluciones presentaré varias soluciones unas más básicas y otras más pensadas, más simplificadas, ...

Vamos al lío, te voy a explicar ahora todas las instalaciones y configuraciones necesarias para poder empezar a codificar 

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

3. Ejecutar el transpilador de typescrit en modo watching
    > tsc -w    // creará el buils y observará cualquier cambio para reescribirlo

4. desarrollar el ejercicio
  4.1. enunciado en inglés, yo traduzco (pero poco a poco iremos introduciendo más inglés en nuestros desarrollos ya sabeis que en las empresas no importa sino sabes programar mientras que sepas inglés)
  4.2. ejercicio resuelto en index.js
      

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


      

      ### y otra al estilo profesional
      

5. desarrollar el test
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

6. Ejecutar el test
    > npm test



# links en la descripcion:

gitignore generator: https://mrkandreev.name/snippets/gitignore-generator/#Node,w10,typescript
github project: https://github.com/JUANLUNABLANCO/dev-hacker-crash



######



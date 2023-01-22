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

# EJERCICIO 001 Simple array sum
    5. desarrollar el 1er ejercicio
    5.1. enunciado en inglés, yo traduzco (pero poco a poco iremos introduciendo más inglés en nuestros desarrollos ya sabeis que en las empresas no importa sino sabes programar mientras que sepas inglés)
    5.2. ejercicio resuelto en index.js
      
```
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
```

    6. desarrollar el test
```
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
```
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
```
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
```

## index.spec.ts
 ```
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
```

# EJERCICIO 003 uso de map()
## 1. Enunciado
Dada una lista de números enteros queremos obtener otra lista con el cuadrado o cubo o lo que sea, pasado por parámetro. 
Es decir, si queremos el cuadrado recibiremos un 2, el cubo un 3, ...
las dos listas tendrán la misma longitud, la primera lista recibida será de números enteros, no debemos preocuparnos por eso.

## 2. Ejemplo

const arrayList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

deberá devolver un nuevo array como este: si por ejemplo recibimos un 2

const newArrayList = [2, 4, 9, 16, 25, 36, 49, 64, 81, 100];


## Para los tests
// [1*1=1, 2*2=4, 3*3=9]
const arrOne = [1, 2, 3];
const powOne = 2;
const solutionOne = [1, 4, 9];

// [4*4*4=64, 5*5*5=125, 6*6*6= 216, 9*9*9 = 2197]
const arrTwo = [4, 5, 6, 13];
const powTwo = 3;
const solutionTwo = [64, 125, 216, 2197];


## 3. soluciones
--- index.ts ---
```
'use strict'

export function potencyList(numberList: number[], potency: number): number[]  {
  let resultArray = [];
  for (let i=0; i < numberList.length; i++) {
    resultArray.push(Math.pow(numberList[i], potency));
  }
  return resultArray;

  // usando map()
  // let resultArray = [];
  // return resultArray = numberList.map((current) =>{
  //   return Math.pow(current, potency);
  // });
}
``` 
--- index.spec.ts ---
```
const {assert, expect} = require('chai');

import { potencyList } from '../../src/003_potency_list'

// [1*1=1, 2*2=4, 3*3=9]
const arrOne = [1, 2, 3];
const powOne = 2;
const solutionOne = [1, 4, 9];

// [4*4*4=64, 5*5*5=125, 6*6*6= 216, 9*9*9 = 2197]
const arrTwo = [4, 5, 6, 13];
const powTwo = 3;
const solutionTwo = [64, 125, 216, 2197]; 

describe('003 Potency lists', () => {
  it('given an array list [1,2,3] and the pow value is 2, the result must be: [1,4,9]', ()=>{
    assert.deepEqual(potencyList(arrOne, powOne), solutionOne);
  });
  it('given an array list [4,5,6,13] and the pow value is 3, the result must be: [64, 125, 216, 2197]', ()=>{
    assert.deepEqual(potencyList(arrTwo, powTwo), solutionTwo);
  });
});
``` 



# EXERCICE 0004 MORE THAN EIGHT LETTERS
1. Declaración
Dada una lista de cadenas, queremos obtener solo las palabras que verifican más de ocho palabras de longitud.
Si la solución es una matriz vacía, devuelve nulo.

2. Ejemplo

const arrayString = ["pepe", "perez", "peluquero", "peinaba", "pelucas", "por", "pocas", "pesetas", "y", "ponía", "puas", "en", "las", "peinetas"];

should return a new array like this:

const newArrayString = ["peluquero"];


3. Los tests que debemos pasar
// caso uno 
const arrayStringOne = ["pepe", "perez", "peluquero", "peinaba", "pelucas", "por", "pocas", "pesetas", "y", "ponía", "puas", "en", "las", "peinetas"];
const solutionOne = ["peluquero"];

// caso dos
const arrayStringTwo = ["Python", "PHP", "Javascript", "C#", "Flutter", "Typescript"];
const solutionTwo = ["Javascript", "Typescript"]

// caso tres 
const arrayStringThree = ["hello", "World"];
const solutionThree = null;

## SOLUTION 004 #####################################
--- INDEX.TS ---
```
'use strict'

export function moreThanEightWords (stringList: string[]): string[] | null{
  // ###### solution for dummies
  let resultArray = [];
  for (let i = 0; i < stringList.length; i++) {
    if (stringList[i].length > 8) resultArray.push(stringList[i]);
  }
  console.log(resultArray);
  if (resultArray.length == 0 ) return null;
  return resultArray;

  // ##### expert solution
  let resultArray = [];
  resultArray = stringList.filter((word)=>{
    return word.length > 8;
  });
  return resultArray.length >0 ? resultArray : null
}
``` 

--- INDEX.SPEC.TS ---
```
const {assert, expect} = require('chai');

import { moreThanEightWords } from '../../src/004_more_than_8_words/index'

// case 1 
const arrayStringOne = ["pepe", "perez", "peluquero", "peinaba", "pelucas", "por", "pocas", "pesetas", "y", "ponía", "puas", "en", "las", "peinetas"];
const solutionOne = ["peluquero"];

// case 2
const arrayStringTwo = ["Python", "PHP", "Javascript", "C#", "Flutter", "Typescript"];
const solutionTwo = ["Javascript", "Typescript"]

// case 3 
const arrayStringThree = ["hello", "World"];
const solutionThree = null;

describe('004 More than eigth words', () => {
  it('given an string list ["pepe", "perez", "peluquero", "peinaba", "pelucas", "por", "pocas", "pesetas", "y", "ponía", "puas", "en", "las", "peinetas"], the result must be: ["peluquero"]', ()=>{
    assert.deepEqual(moreThanEightWords(arrayStringOne), solutionOne);
  });
  it('given an string list ["Python", "PHP", "Javascript", "C#", "Flutter", "Typescript"], the result must be: ["Javascript", "Typescript"]', ()=>{
    assert.deepEqual(moreThanEightWords(arrayStringTwo), solutionTwo);
  });
  it('given an string list ["Hello", "World"], the result must be: null', ()=>{
    assert.deepEqual(moreThanEightWords(arrayStringThree), solutionThree);
  });
});
```

# EXERCICE 005 Search a word in phrase #############

Aprende a buscar palabras o valores dentro de una cadena usando el método indexOf en JavaScript. 
Esta es una tarea fundamental en programación, por que es útil para realizar validaciones o correcciones en nuestros programas. 

Sintaxis
string.indexOf(valor, posicionInicial)

El método indexOf() en una cadena o string nos devuelve la posición de la primera ocurrencia de un término de búsqueda, funciona de la siguiente manera:

valor es la palabra que deseamos encontrar.
posicionInicial es opcional e indica la posición inicial de la búsqueda. Recuerda que en JavaScript la posición inicial en starings o arrays es 0, y si no pasas este dato, la búsqueda comienza en el inicio de la cadena.

Esta rutina nos devuelve un valor numérico con la posición en la que encontró el valor indicado. Si lo encuentra devuelve la posición comenzando con 0, pero si no lo encuentra devuelve -1.

Forma correcta para validar indexOf en JavaScript
Este método nos devuelve -1 cuando el valor no se encontró en la cadena, pero recuerda que en JavaScript -1 no es igual a “-1”, así que la forma correcta de validarlo es usando el operador !==.



A continuación te muestro un ejemplo.

```
// esta es la cadena donde buscaremos
let cadena = "Este era un gato con los pies de trapo";
// esta es la palabra a buscar
let termino = "gato";
// para buscar la palabra hacemos
let posicion = cadena.indexOf(termino);
if (posicion !== -1)
    console.log("La palabra está en la posición " + posicion);
else
    console.log("No encontré lo que estás buscando");
```






## 006 is palindrome

"que pasa chicos, y bienvenidos a este tutorial de algoritmia. Hoy vamos a hablar sobre cómo utilizar la clase StringHelper y la función isPalindrome para verificar si una frase es un palíndromo.

Un palíndromo es una frase que se lee igual al derecho que al revés. Por ejemplo, la frase 'dabale arroz a la zorra el abad' es un palíndromo porque se lee igual al derecho que al revés.

Empecemos por la clase StringHelper. Esta clase proporciona varios métodos estáticos que ayudan a limpiar y procesar una frase.


El primer método es cleanPhrase, este método toma una frase como argumento y realiza varias operaciones para limpiarla. En primer lugar, elimina cualquier carácter no deseado como signos de puntuación, números y símbolos. Además, convierte todas las letras a minúsculas y elimina los espacios en blanco sobrantes. También convierte cualquier acento en su letra equivalente sin acento.

La vamos a modificar para que acepte también la ü y para que los espacios en blnco que sean más de uno, los convierta en uno solo.

El segundo método es separatedWords, este método toma una frase limpia y la convierte en un arreglo de letras individuales.

El tercer método es wordsToLargeWord, este método une las letras en una sola palabra sin espacios.

El cuarto método es wordsToLargeWordReverse, este método une las letras en una sola palabra pero en orden inverso.

Por último el método noBascpace(), limpia una frase de espacios en blanco.


// TODO expliquemos los ejemplos anteriores brevemente


Vayamos a los tests por esta vez primero, para crear un hábito denominado TDD, test driven development o desarrollo guiado por testing.

Vemos como fallan porque no tenemos implementado el código

Vamos a implementar cada cosa, paso a paso e ir pasando los tests luego refactorizaremos todo.

Ahora, pasemos a la función isPalindrome. Esta función toma una frase como argumento y utiliza los métodos de la clase StringHelper para limpiar y procesar la frase. Luego, compara si la frase unida es igual a la frase unida pero del revés. Si es igual, la función devuelve true, lo que indica que la frase es un palíndromo. Si no es igual, la función devuelve false, lo que indica que la frase no es un palíndromo.

Veamos un ejemplo de como usarlo:

```
// const {StringHelper} = require('../shared/string.helper');
import {StringHelper} from '../shared/string.helper'; // gracias a tsconfig.json 
// { ... esModuleInterop: true, moduleResolution: "Node"

export function isPalindrome(phrase: string): boolean{
    // limpiamos la frase usando helper
    const phraseClean = StringHelper.cleanPhrase(phrase);
    // creamos un array por letras usando helper
    const phraseSeparated = StringHelper.separatedWords(phraseClean);
    // compara si la frase unida es igual a la frase unida pero del revés
    return StringHelper.wordsToLargeWord(phraseSeparated) === StringHelper.wordsToLargeWordReverse(phraseSeparated);
}

var poeme = "Amor azul' Ramera, de todo te di. Mariposa colosal, sí, yo de todo te di. Poda la rosa, Venus. El átomo como tal es un evasor alado. Pide, todo te doy: isla, sol, ocaso, pirámide. Todo te daré: mar, luz, aroma";



const applyFunction = isPalindrome(poeme);

const result = applyFunction == true ? "Es un palíndromo" : "no es un palíndromo"; 

console.log(result);

```

En este ejemplo, estamos importando las clases StringHelper y utilizando la función isPalindrome para verificar si el poema es un palíndromo.

Primero limpiamos la frase usando la función cleanPhrase() que limpia todo
Después creamos un array de letras a partir de la frase limpia usando separatedWords()
Después comparamos si la frase unida es igual a la frase unida pero del revés
Y devolvemos true o false

En el caso del 'poeme' el resultado sería true, lo que indica que el poema si es un palíndromo.



Espero que este tutorial les haya sido útil. Si tienen alguna pregunta o sugerencia, por favor dejen un comentario abajo. ¡Gracias por ver y apollar este canal!




# EXERCICE 007 ARRAY HELPERS TESTING ##############

¡Bienvenidos a este tutorial de algoritimia, estás en Dev HackerCrash y yo soy Juan Luna! En este video, vamos a discutir cómo utilizar el código proporcionado para limpiar un array de primitivos y un array de objetos de un solo parámetro.

En primer lugar, hablemos de la función 'cleanArray'. Como pueden ver, esta función toma un array como parámetro y devuelve un array limpio sin elementos duplicados.

Para lograr esto, utilizamos el método 'filter' de JavaScript para iterar sobre el array original y comparar cada elemento con el índice de ese elemento en el array original. Si el índice es igual, significa que ese elemento es único y lo agregamos al array de elementos únicos.

Ahora, vamos a hablar de la función 'cleanArrayOfObjectsOnlyOneParam'. Esta función es muy similar a la anterior, pero en lugar de trabajar con arrays de primitivos, trabaja con arrays de objetos que tienen solo un parámetro.

[enseñar y explicar los ejemplos]
Para limpiar este tipo de array, utilizamos una estructura de control for para iterar sobre el array original. Luego, utilizamos el método 'Object.keys' para obtener el primer parámetro de cada objeto y compararlo con los parámetros de los objetos únicos. Si el parámetro no se encuentra en el array de objetos únicos, lo agregamos al array.

En resumen, este código proporciona dos funciones útiles para limpiar arrays de primitivos y arrays de objetos de un solo parámetro.


Ahora vamos a ver cómo utilizar el código de prueba para comprobar que las funciones 'cleanArray' y 'cleanArrayOfObjectsOnlyOneParam' funcionan correctamente.

[enseñar y explicar los ejemplos]
Como pueden ver, el código de prueba utiliza la librería 'chai' para realizar pruebas unitarias en las funciones 'cleanArray' y 'cleanArrayOfObjectsOnlyOneParam'. Estas pruebas incluyen arrays de números, palabras, iconos UTF-8 y objetos con un solo parámetro.

En cada prueba, se crea un array con elementos repetidos y se utiliza la función correspondiente para limpiarlo. Luego, se utiliza el método 'assert.deepEqual' de chai para comparar el array limpio con el resultado esperado. Si el resultado es igual, la prueba se considera exitosa.

En general, el código de prueba proporcionado es una excelente manera de asegurar que nuestras funciones 'cleanArray' y 'cleanArrayOfObjectsOnlyOneParam' están funcionando correctamente, además

El desarrollo guiado por pruebas (TDD) es un enfoque de desarrollo de software que se enfoca en escribir pruebas antes de escribir el código.

La idea es que al escribir pruebas primero, se pueden asegurar de que el código cumpla con los requisitos del sistema y que esté libre de errores. Esto permite detectar problemas temprano en el proceso de desarrollo y asegurar una mayor calidad del software final. Además, al tener pruebas automatizadas, se puede tener una mayor confianza en el código y se pueden realizar cambios sin tener miedo a causar errores.

Por otro lado, Las pruebas no solo se utilizan en el momento del desarrollo inicial, sino que pueden utilizarse como barrera de acceso a ramas, para la automatización y Continuous Deploiment, incluso en etapas tempranas, fijaros en el package.json, el script siguiente:

```
"build": "npm test && tsc"
```

En resumen, el TDD es una herramienta valiosa para desarrolladores ya que ayuda a asegurar una mayor calidad del software, detectar problemas temprano y tener una mayor confianza en el código.

Así que en la medida de lo posible haremos TDD en nuestros códigos.


Espero que te hay sido útil este contenido y si es así no olvides car a la campanita, un like un comentario, comparte mis vídeos etc. ya tu sabe mi amol, chao, gracias por ver!















# EXERCICE 00x Ordenación de arrays ###############

...
Espero que te hay sido útil este contenido y si es así no olvides car a la campanita, un like un comentario, comparte mis vídeos etc. ya tu sabe mi amol, chao, gracias por ver!
## EXERCICE 00x Ordenación de arrays ##############

Cómo ordenar arreglos en JavaScript

JavaScript ofrece una serie de métodos y funciones que nos permiten manipular y ordenar arreglos de manera sencilla. Uno de ellos es el método sort(), que permite ordenar los elementos de un arreglo de forma ascendente o descendente. Sin embargo, al trabajar con tipos de datos diferentes como cadenas y números, puede dar resultados inesperados.

Ordenar arreglos de cadenas

Para ordenar un arreglo de cadenas, podemos utilizar el método sort() de la siguiente manera:

```
const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
equipos.sort(); 
console.log(equipos); // ['Bayern Munich', 'Juventus', 'Manchester Utd', 'Real Madrid']
```

De esta manera, los elementos se ordenarán en orden ascendente (de la A a la Z) por defecto. Si deseamos ordenar el arreglo en orden descendente, podemos utilizar el método reverse() en su lugar:

```
const equipos = ['Real Madrid', 'Manchester Utd', 'Bayern Munich', 'Juventus'];
equipos.reverse();
console.log(equipos); // ['Real Madrid', 'Manchester Utd', 'Juventus', 'Bayern Munich']
Ordenar arreglos de números
```

El método sort() no funciona de la misma manera con arreglos de números, ya que JavaScript los ordena alfabéticamente. Por ejemplo, si tenemos un arreglo de números como [3, 23, 12], el método sort() los ordenaría como [12, 23, 3], lo cual es incorrecto.

Para solucionar este problema, podemos utilizar una función de comparación que determine cómo deben ser ordenados los números. Esta función debe devolver el resultado de restar un número del otro. A continuación, un ejemplo de cómo ordenar un arreglo de números en orden ascendente:

```
const numeros = [3, 23, 12];
numeros.sort(function(a, b){
    return a - b;
});
console.log(numeros); // [3, 12, 23]
```

Si deseamos ordenar el arreglo en orden descendente, debemos restar el segundo parámetro (b) del primero (a):

```
const numeros = [3, 23, 12];
numeros.sort(function(a, b){
    return b - a;
});
console.log(numeros); // [23, 12, 3]
```

Ordenar objetos por un criterio específico

Para ordenar objetos por un criterio específico, debemos proporcionar una función de comparación al método sort() que determine cómo deben ser ordenados los objetos. A continuación, te muestro un ejemplo de cómo ordenar un arreglo de objetos por un criterio específico (en este caso, el atributo "edad"):

```
const personas = [
    {nombre: "Juan", edad: 25},
    {nombre: "Maria", edad: 32},
    {nombre: "Pedro", edad: 18},
    {nombre: "Andrea", edad: 42}
];

// Ordenar en orden ascendente por edad
personas.sort(function(a, b){
    return a.edad - b.edad;
});
console.log(personas); 
// [{nombre: "Pedro", edad: 18}, {nombre: "Juan", edad: 25}, {nombre: "Maria", edad: 32}, {nombre: "Andrea", edad: 42}]

// Ordenar en orden descendente por edad
personas.sort(function(a, b){
    return b.edad - a.edad;
});
console.log(personas);
// [{nombre: "Andrea", edad: 42}, {nombre: "Maria", edad: 32}, {nombre: "Juan", edad: 25}, {nombre: "Pedro", edad: 18}]
```

En este ejemplo, la función de comparación recibe dos objetos (a, b) y devuelve la diferencia entre sus edades, lo que permite al método sort() ordenarlos correctamente. Si se desea ordenar en orden descendente, se debe restar el valor de edad del objeto b del objeto a.

Ten en cuenta que esta es solo una forma de ordenar objetos por un criterio específico, puedes crear tu propia función de comparación y usarla en sort() dependiendo de tus necesidades.

Ahora algo más complejo:

imagina un objeto como el siguiente {equipo: "Real Madrid", liga_de_campeones: 14,  ligas_españolas: 35, copas_del_rey: 19, supercopas_de_españa: 12, supercopas_de_europa: 5} 

y un array de objetos similares a este unos diez equipos, los mejores de España, toma los datos de la wikipedia y que el criterio de ordenación fuera el siguiente: 

const sort_criteria = {liga_de_campeones: 5,  ligas_españolas: 3, copas_del_rey: 2, supercopas_de_españa: 1, supercopas_de_europa: 2}; 

en base a este criterio, el número de cada uno de los parámetros del objeto sort_criteria es un multiplicador para hayar, una puntuación del equipo correspondiente, es decir, que si aplicamos este criterio al Real Madrid, el resultado sería el siguiente:

el resultado para el Real Madrid sería (14 * 5 + 35 * 3 + 19 * 2 + 12 * 1 + 5 * 2) = 235 puntos. Si aplicamos en una función este criterio de ordenación de mayor a menor en todos los equipos del array cómo quedaría la función ordenadora

Para resolver esto  podemos crear una función que calcule la puntuación de cada equipo utilizando los multiplicadores especificados en el objeto sort_criteria. Luego, utilizamos esa función de comparación en el método sort() para ordenar el arreglo de equipos. A continuación te muestro un ejemplo de cómo podría quedar esta función:

```
const equipos = [
    {equipo: "Real Madrid", liga_de_campeones: 14,  ligas_españolas: 35, copas_del_rey: 19, supercopas_de_españa: 12, supercopas_de_europa: 5},
    {equipo: "Barcelona", liga_de_campeones: 5,  ligas_españolas: 26, copas_del_rey: 30, supercopas_de_españa: 13, supercopas_de_europa: 5},
    {equipo: "Atletico Madrid", liga_de_campeones: 1,  ligas_españolas: 11, copas_del_rey: 11, supercopas_de_españa: 3, supercopas_de_europa: 3},
    // ... más equipos
];
const sort_criteria = {liga_de_campeones: 5,  ligas_españñolas: 3, copas_del_rey: 2, supercopas_de_españa: 1, supercopas_de_europa: 2};
function calculatePoints(equipo, criteria) {
	let points = 0;
	for (let key in criteria) {
		if (equipo.hasOwnProperty(key)) {
			points += equipo[key] * criteria[key];
		}
	}
	return points;
}

equipos.sort(function(a, b) {
	let aPoints = calculatePoints(a, sort_criteria);
	let bPoints = calculatePoints(b, sort_criteria);
	return bPoints - aPoints;
});

console.log(equipos);
```

La función "calculatePoints" recibe un objeto de equipo y el objeto sort_criteria, recorre cada una de las propiedades del equipo y las multiplica con el valor correspondiente en el objeto sort_criteria, finalmente devuelve la suma de todos los puntos.
La función de comparación utiliza esta función para calcular los puntos de cada equipo y los compara para determinar el orden en el que deben aparecer en el arreglo, retornando la diferencia entre los puntos del equipo b y a, para que se ordene de manera descendente.

Con esta función, el arreglo de equipos se ordenará de acuerdo al criterio especificado en el objeto sort_criteria, con el equipo con mayor puntuación en primer lugar y el equipo con menor puntuación en último lugar.  

En resumen, el método sort() en JavaScript es una herramienta poderosa para ordenar arreglos de datos, pero es importante tener en cuenta los tipos de datos que se están trabajando y utilizar funciones de comparación adecuadas para obtener resultados correctos. Con esta información, podrás ordenar tus arreglos de manera eficiente y precisa.







# EXERCICE 999 Automatic cash machine ##############
Representaremos las transacciones de un cajero automático.
Inicialmente debe recibir una cantidad x, de billetes, de 100, 50, 20, 10 y 5€, algo como [ { valor: 100, cantidad: 1000 }, { valor: 50, cantidad: 2000 }, ...].
Inicializar el cajero es averiguar cuantos billetes tiene de cada uno y el total en €.
El cajero tiene un apartado llamado caja en donde guarda ese dinero.

Un usuario tiene una cuenta en dicho cajero que inicialmente estará en 0, podrá hacer ingresos y retiradas de su dinero, un ingreso tiene el aspecto siguiente [{ valor: 100, cantidad: x }, {...}] una retirada es una cantidad entera no superior a su haber: 
ejemplo retirar 240€, habiendo 250€.
si desea retirar más de lo que tiene en su haber, se le devolverá un mensaje de error 'Operación no autorizada por falta de saldo'

Para retirar dinero debemos implementar un algoritmo que de el menor número de billetes posibles, es decir en este caso sería lago como [{ valor: 100, cantidad: 2 }, { valor: 50, cantidad:0 }, { valor: 20, cantidad: 2 }, ...] los que su cantidad sea 0 no se incluirán en el array

Al finalizar la transacción, y si esta es realizable, mostrará esa transacción y el total retirado o ingresado

cada { valor: x, cantidad: y } corresponde a una clase Billete, y un conjunto de Billetes en una operación única será 
una clase Transacción, que contiene no solo las operaciones en un array de billetes sino el usuario que las realiza y el total.
El cajero debe anotar cuanto dinero tiene en total cada cliente, para que no puedan retirar más de la cuenta.
al finalizar el día el cajero mostrará el dinero inicial del día, todas las Transacciones y el Total caja y de cada usuario. dinero inicial +- transacciones nos debe dar el dinero que hay en caja.

Usar SOLID y Patrones de diseño en la medidad de lo posible

# tenemos el código en la carpeta 999
este código está hecho mal a propósito usando mal las clases, no usando POO, SOLID ni patrones se trata de identificar 
las posibles mejoras, para que el código sea más mantenible, escalable y de calidad.
Utilizar TDD.

(solo si quieres) Usar una representación gráfica para este ejercicio simulando un cajero en pantalla, una caja de texto que recoja la cantidad de dinero a retirar y/o ingresar, simular el menú inicial:
  1. ver saldo
  2. retirar
  3. ingresar

pasar la solución a la carpeta 300, va por series:
  de la 000 a 099, código base algoritmia simple
  de 100 a 199, algoritmia compleja
  de 200 a 299, POO
  de 300 a 399, SOLID, PATRONES DE DISEÑO
...




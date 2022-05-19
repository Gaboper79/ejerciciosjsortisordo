/* var numero;
numero = 7;

console.log(numero);
console.log(typeof numero);
numero = "7";
console.log(typeof numero); */
//Ejer 10

/* function sumar(a, b) {
  return a + b;
}

console.log(sumar(1, 2)); */

//Ejer 11 referenceError

/* function saludar() {
  var msje = "hola";
  console.log(msje);
}
saludar();
console.log(msje);
 */

//Ejer 12 scope de las funciones de

/* function func1() {
  var a = 2;
  function func3() {
    var b = 5;
    function func5() {
      console.log(a, b);
    }
  }
}

function func2() {
  var a = 7;
  function func4() {}
}

func1();
func2();
 */
//Ejer 13 const es6

/* var nombre = "gabo";
let lenguaje = "js";
const pi = 3.141595;

const estudiante = { id: 6, name: "gabo" };
console.log(estudiante); */

//Ejer 14 crear y usar literales de diferentes tipos
//Ejer 15 crear y usar objetos  mediante sus constructores de
// la unica diferencia entre crear literales y conel constructor (new) es la verbodisad y mas practico el resultado es el mismo
// Ejer 16 validar variables si tiene calor asignados de
/* let a;
let b = 5;

function tienedatos(num) {
  if (num === undefined) {
    console.log(`La bariable ${num} no esta asignada`);
  } else {
    console.log("tiene valor");
  }
}

tienedatos(a);
 */

//Ejer 17 determinar si una variabel fue delcarada con la funcion typeof

/* let a; // solo definida
let b = 11; // definida y declarada "tiene un valor declarado"

console.log(typeof a);
console.log(typeof b);

typeof b === "undefined" ? console.log("undefined") : console.log("definido");
 */

//Ejer 18 Comprobar si una funcion retorna valor decl

/* function func1() {
  return;
}
function func2() {
  const A = 3;
}
function func3() {
  return 2 + 2;
}
function func4() {
  return true;
}
function func5() {
  return {};
}
let fun1 = func1();
let fun2 = func2();
let fun3 = func3();

if (fun3 === undefined) {
  console.log("no tiene valor");
} else {
  console.log("tiene valor");
}
 */

//Ejer 19 determinar si una variable e undefined or null

/* let a;
let b = null;
let rta;
b === undefined || b === null ? (rta = b) : "";

console.log("La varieable es:", rta);
 */

//Ejer20 uso === comprueba el contenido y el tipo de datos que

/* let numero = 5;
console.log(numero == 5); //true
console.log(numero == "5"); //true
console.log(numero === "5"); //false */

//Ejer21 operadores relacionales <><=>= etc
//Ejer22 dif entre null y undefined

/* let a;
let b = null;
console.log(typeof a === "undefined"); */

//Ejer23 boolean

/* console.log(Boolean(0));
let a = Boolean(new Number(0));
console.log("que dio ", a); //true
console.log(Boolean(NaN));
console.log();
console.log(Boolean("")); //false
console.log(Boolean(new String())); //true
console.log(Boolean("true")); //true
console.log(Boolean("false")); //true
console.log();

console.log(Boolean({}));
console.log(Boolean([])); */

//Ejer24 determinar si un boolean ha sido inicializado

/* let a = Boolean(true);
let b = false;
let c = "";
let d = new Number(5);

typeof d === "boolean" ? console.log("boolean") : console.log("no es boolean"); */

//Ejer25 representaciones validad de valores logicos
//Ejer26 diferentes valores promocionados a string

/* console.log(typeof String(1));
console.log(typeof String(false));
console.log(5);
let per = { nombre: "gabo", id: 1 };
console.log(String(per));
let num = [1, 2, 3, 4];
console.log(num.join(","));
let sumar = (a, b) => a + b;
console.log(String(sumar));
console.log("---");
per = { toString: () => `alo` };
console.log(String(per));
 */

//Ejer27 Averiguar si una variable es  String

/* let a = String("");
let b = "js";
let c = new Date();

function isString(dato) {
  return typeof dato === "string";
}

console.log("a-", isString(a));
console.log("b-", isString(b));
console.log("c-", isString(c)); */

//Ejer27 promocionar a numeros

/* let cadena = "1.45654";
const Constantepita = Number(cadena);
console.log(typeof Constantepita);

console.log(Number(""));
console.log(1e3);
// ejer 30 averiguar si una variable es numerica

let x = 5.3;
let y = Number("1.23");
let z = "";
let w = new Date();

console.log(typeof x === "number");
console.log(typeof y === "number");
console.log(typeof z === "number");
console.log(typeof w === "number");
 */

//ejer 31 validadciones para nana e inginito

/* let x = NaN;
let y = -Infinity;
let z = Infinity;
let w = 5;

console.log(Number.isNaN(x));
console.log(Number.isFinite(y));
console.log(Number.isFinite(z));
console.log(Number.isNaN(w));
 */

//eje 32 crear fecha

/* let fecha = new Date();
console.log(fecha);

let fecha2 = new Date("May 13,1979 03:03:17");
console.log(fecha2);

fecha = new Date(1980, 4, 16);
console.log(fecha);

fecha = new Date(1980, 4, 13, 3, 3, 18);
console.log(fecha);

console.log(fecha.getMonth());
console.log(fecha.getFullYear());
 */

//ejer 33 trabajar entre fechas

/* let t1 = Date.now();
console.log(t1);
 */

//Ejer34 Fecha a partir de cadena de dat

/* let cadena = "May 13,1979";
let fecha = new Date(cadena);
console.log(fecha);

fecha.setMonth(5);
console.log(fecha);
console.log(fecha instanceof Date);
 */

// Ejer 36
/* let computador = {};
computador.procesador = "ryden";
computador.ram = 32;
computador.marca = "asus";

console.log(computador);

//destructuracion
let { marca, ram, procesador } = computador;

console.log(marca); */

// ejer 37 determinar si uan variable es de tipo objetos

/* let x = {};
let y = "javascrit";
let z = 5;
console.log(typeof y === "object" ? "obejto" : typeof y);
 */

//ejr 38

/* let fecha = new Date();
let error = new Error();
let cadena = new String();
let objeto = new Object();

console.log(typeof fecha);
console.log(typeof error);
console.log(typeof cadena);
console.log(typeof objeto); */

//Ejer 40 objeto plano

let lenguajes = ["java", "pythoin", "javascrit", "c#"];

/* lenguajes[0] = "java-8";
console.log(lenguajes[0]);

lenguajes.map((lenguaje) => {
  console.log(lenguaje);
});

delete lenguajes[0];
lenguajes.map((lenguaje) => {
  console.log(lenguaje);
});

console.log("-----------------");

console.log(lenguajes.length); */

// ejer 43

lenguajes.forEach((element) => {
  console.log(element);
});

for (const lenguaje of lenguajes) {
  console.log("forof: " + lenguaje);
}

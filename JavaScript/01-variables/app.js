let product; // si esta variable no se declara es undefined.
product = "patatas"; // el simbbolo = es asignacion. con doble == es comparación.

let name = "Alberto"; // inicializar y asignar

let age = "35", userName = "Pepe", isStudent = true; //Declaras varia variable a la vez. Nota: a Alberto no le gusta.

//declaracion de variables
let otherAge = 35;
let otherUser = "Juan";
let isOtherStudent = true;


//------------------------

//Lenguaje JavaScript

product = "anillos";
product = 123;
//------------------------
//nombres no validos

/*let let = 1123; //no valido
let return = 123 // no valido
let name = "pepe"; //no valido
let my-name="pepe";//no valido
*/
//nombres validos
let myName = "Paco";

//--------------------------
//constantes

function showMessages(){
    let message = "Hola desde dentro de la función";
    console.log(message);
}

var message = "Hola desde fuera de la funcion";


showMessages();

let nameExt = "Juan";
function showMessages(){
    let nameGreeting = "Hola" + nameExt;
    console.log(nameGreeting);
}

console.log(nameGreeting);

showMyName();

console.log(message);//Error, message is not defined 
//hoisting recolocacion del codigo en tiempo de lectura

//----------------------
const keyboard = "teclado";

//---------------------
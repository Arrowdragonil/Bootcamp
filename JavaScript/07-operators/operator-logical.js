//Operadores logicos
//Operador OR - O -> ||  Sirve para hacer comparqaciones logicas

const soyMayorDeEdad = true;
const tengoDinero = false;

const puedoSalirDeCervezas = soyMayorDeEdad  ||  tengoDinero;
console.log(puedoSalirDeCervezas);

//Operador AND - Y -> &&

const tengoCoche = false;
const tengoCarnet = true;

const puedoConducir = tengoCoche  &&  tengoCarnet;
console.log(puedoConducir);

//Not - NO -> !
const trueNot = true;
const falseNot = false;

console.log(trueNot);
console.log(falseNot);

////////

const name = "peter";

if(name){
    console.log("hola" + name)
}else{
    console.log("No hay nombre");
}
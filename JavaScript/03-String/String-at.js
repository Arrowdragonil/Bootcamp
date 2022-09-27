//metodo es una funcion dentro de un objeto

//El metodo a te devuelve el elemento en la posicion indicada
const sentence = "yo soy el aberroncho";

let index = 5;

console.log('voy a usar el index ${index}para que me devuelva el elemento en esta posicion ${sentence.at(index)}'); 

console.log('voy a usar el index ${index}para que me devuelva el elemento en esta posicion ${sentence.at(index - 1)}'); 
//cuando a  at no le pasamos valor, por defecto es uno. si le pasamos un menos 1 es el ultimo valor.
console.log('voy a usar el index ${index}para que me devuelva el elemento en esta posicion ${sentence.at()}'); 


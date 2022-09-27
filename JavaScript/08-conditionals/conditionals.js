//condicionales

const name = "Bruce";

if(name==="Bruce"){
    console.log("Es Batman");
}else{
    console.log("No es Batman");
}

//Else if

const age = 18;

if(age >= 18){
    console.log("Eres mayor de edad");
}else if (age === 15){
    console.log("Tienes 15 años");
} else if(age > 0 && age < 15){
    console.log("Eres un niñ@");
}else {
    console.log("No has nacido");
}

//Ternario
const puedoEntrarAlConcierto = (age >= 18) ? true  : false;
console.log(puedoEntrarAlConcierto)

/*if(age >= 18){
    return true
}else {
    return false
}*/

//switch

const superhero = "Spider-Man";

if(superhero === "Spider-Man"){
    console.log("Su nombre real es Peter Parker");
}else if(superhero === "DareDevil") {
    console.log("su nombre real es Matt Murdock")
}else if(superhero === "Iron Man") {
    console.log("su nombre real es Tony Stark")
}else if(superhero === "Ant Man") {
    console.log("su nombre real es Scott Lang")
}else if(superhero === "Black widow") {
    console.log("su nombre real es Natasha Romanov")
}else{
    console.log("no se quie es");
}

//switch realiza comparaciones estrictamente igual
switch(superhero){
    case "Spider-Man":
        console.log("su nombre es Peter Parker")
        break;

    case "Iron Man":
        console.log("su nombre es Tony Stark")
        break;

    case "Black widow":
        console.log("su nombre es Natasha Romanov")
        break;
    default:
        console.log("No hay superheroes");
        break;    
}

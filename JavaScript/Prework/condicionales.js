//Condicional es aquel que da a escojer dos o mas opciones
let user = true;

if (user) {
    console.log("Bienvenido");

}else {
    console.log("Debes iniciar sesión");
}
function isLOgged(user){
    if(user){
        console.log("Bienvenido");
    }else{
        console.log("Debes iniciar sesion");
    }
}
isLOgged("Pepe");

isLOgged();

function isLOgged(user){
    if(user){
        console.log("Bienvenido");
    } if (typeof user !== "strinng"){
        console.log("Desbes tener un nombre")
    }
    else{
        console.log("Debes iniciar sesion");
    }
}
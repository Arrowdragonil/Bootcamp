function divideer(a, b) {
    if(Number.isInteger(a/b)) {
        return 'si'
    }
    return 'no'
}


console.log(divideer(10 , 5));

console.log(divideer(5 , 11));

function circunference(r) {
    if(Number.isNaN(Number.parseFloat(r))) {
        return 0;
    }else {
        return parseFloat(r) * 2.0 * Math.PI;
    }
}

console.log(circunference('4.567erfer'));

console.log(circunference('eerverfre'));
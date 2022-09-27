console.log(JSON.stringify({name: 'Jonh', age: 34}));

const myUser = {name: 'Jonh', age: 34};

console.log(myUser);

console.log(JSON.stringify(myUser));

const json = '{"name":"jonh","age":30,"city":"New York"}';

const obj = JSON.parse(json);

console.log(obj);
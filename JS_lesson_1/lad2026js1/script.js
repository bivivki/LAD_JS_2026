let phrase = "Hello World!";
console.log (phrase);
let numberExample = 7;
console.log(numberExample);
let isGood = false;
console.log(isGood);
let strengthInTheEnd = null;
console.log(strengthInTheEnd);
let blackHole;
console.log(blackHole);
let iAm = {
    firstName: "Kirill",
    secondName: "Sutyrin",
    middleName: "Alexandrovich"
}
console.log(iAm);
const symExample = Symbol('uuid');
console.log(symExample);
let delay = 12345678998765432100123456789987654321n;
console.log(delay);

// знаю про комменты, но захотел отделить в консоле следующей фразой:
console.log(" ");
console.log("Погнали дальше выводить типы данных");
console.log(" ");
console.log(typeof phrase);
console.log(typeof numberExample);
console.log(typeof isGood);
console.log(typeof strengthInTheEnd);
console.log(typeof blackHole);
console.log(typeof iAm);
console.log(typeof symExample);
console.log(typeof delay);

// знаю про комменты, но захотел отделить в консоле следующей фразой:
console.log(" ");
console.log("теперь тоже самое через функцию");
console.log(" ");
function seetype(value) {
    return typeof(value)  
}     
console.log(seetype(phrase));
console.log(seetype(numberExample));
console.log(seetype(isGood));
console.log(seetype(strengthInTheEnd));
console.log(seetype(blackHole));
console.log(seetype(iAm));
console.log(seetype(symExample));
console.log(seetype(delay));
console.log(" ");
console.log("попробуем изменить const");
const pi = 3.14;
//pi = pi * 1;
console.log("не вышло. пришлось закомментить");
console.log(" ");
console.log("попробуем изменить object обьявленную через const");
const autorExample = {
    firstName: "Kirill",
    secondName: "Sutyrin",
    middleName: "Alexandrovich"
}
autorExample.firstName = "Ivan";
console.log(autorExample);
console.log("А вот тут уже успех, а почему? а нука попробуем через let ");
let notAutorExample = autorExample;
notAutorExample.firstName = "Kirik";
console.log(notAutorExample);
console.log("Ну тут я не сомневался, что все получится, но попробуем через var ");
var thirdAutorExample = notAutorExample;
thirdAutorExample.firstName = "Olga";
console.log(thirdAutorExample);
// интересно девки пляшут)))

//github 

console.log('Test');

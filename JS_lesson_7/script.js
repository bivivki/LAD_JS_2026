// // 1. Что выведет функция?
// function f() {
// alert(this);
// }
// let user = {
// g: f.bind(null),
// };
// user.g();
console.log("\nЗадача №1 \n \n");
console.log("Всплывающее окно с Window, так как this = null.");




// 2. Можем ли мы изменить this дополнительным связыванием?
// function f() {
// alert(this.name);
// }
// f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
// f();
console.log("\nЗадача №2 \n \n");
console.log("функция с bind Привязывается 1 раз и навсегда");


// 3. В свойство функции записано значение. Изменится ли оно
// после применения bind?
// function sayHi() {
// alert( this.name );
// }
// sayHi.test = 5;
// let bound = sayHi.bind({
// name: "Вася"
// });
// alert( bound.test );

console.log("\nЗадача №3 \n \n");
console.log("выведет undefind, bind не копирует свойства функции");


// 4. Вызов askPassword() в приведённом ниже коде должен
// проверить пароль и затем вызвать user.loginOk/loginFail в
// зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'Вася',
// loginOk() {
// alert(`${this.name} logged in`);
// },
// loginFail() {
// alert(`${this.name} failed to log in`);
// },
// };
// askPassword(user.loginOk, user.loginFail);
console.log("\nЗадача №4 \n \n");
console.log( "Так как user.loginOk и user.loginFail передается в функцию askPassword без юзер - this теряет связку с user и в любом случае будет ссылатьсяя на window.name или в node.js - ошибка что переменая не определена.");



//     5. Объект user был изменён. Теперь вместо двух функций
// loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде
// ниже, чтобы она могла вызывать функцию user.login(true) как
// ok и функцию user.login(false) как fail?
// function askPassword(ok, fail) {
// let password = prompt("Password?", '');
// if (password == "rockstar") ok();
// else fail();
// }
// let user = {
// name: 'John',
// login(result) {
// alert( this.name + (result ? ' logged in' : ' failed to log in') );
// }
// };
// askPassword(?, ?);
console.log("\nЗадача №5 \n \n");
console.log("user.login.bind(user, true), user.login.bind(user, false)");



// 6. Напишите в указанном месте конструкцию с методом bind()
// так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
// const elem = {value: ‘Привет’}
// function func(surname, name) {
// alert(this.value + ', ' + surname + ' ' + name);
// }
// //Тут напишите конструкцию с bind()
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов
// Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров
// Петр'
console.log("\nЗадача №6 \n \n");
console.log("решение: func = func.bind(elem); переопределить func и она всегда будет работать в контексте elem");



// 7. Есть функция которая складывает три числа.Выполните
// каррирование.
// const sum = (a, b, c) => a + b + c

console.log("\nЗадача №7 \n \n");

function func1(a){

    return function func2(b){
        return function func3(c){
            return a + b + c;
        };
    };
};

console.log(func1(1)(2)(3));


// 8. Реализовать таймер-функцию используя замыкания. Функция
// принимает два аргумента начальное значение и значение
// завершения. Таймер движется назад.При достижении точки
// завершения в консоль выводится значение таймера и
// сообщение о завершении работы таймера

console.log("\nЗадача №8 \n \n");

function startTimer(start, end) {
    let curr = start;
    const timer = setInterval(function() {
        if (curr >= end) {
            console.log(curr);
            curr--;
            } else {
            console.log("Отсчет таймера закончен")
            clearInterval(timer);
                       
        };
    }, 1000);
};

startTimer(10, 1);
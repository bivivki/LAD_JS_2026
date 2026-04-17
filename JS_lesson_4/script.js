console.log("---------------------------Возведение в квадрат");

let number = 4;
let result = 0;
let a = 2;
let b = 3;
let c = 5;
console.log("Число ", 4);
function squaring(number){
     return number * number;
};
result = squaring(number);
console.log("Ответ ", result);

// 2 Задача
console.log("---------------------------Сумма двух чисел");
console.log("Числа ", a," и ", b);
function getSum(a,b){
    return a + b;
};
result = getSum(a,b);
console.log("Ответ ", result);

// 3 задача
console.log("-------------------------------- 3 задача  ");
// Сделайте функцию, которая отнимает от первого числа второе
// и делит на третье.

function toCalculate(a, b, c){
    return (a - b)/c;
}
result = toCalculate(a, b, c);
console.log("Ответ ", result);


// Сделайте функцию, которая принимает параметром число от 1
// до 7, а возвращает день недели на русском языке.
console.log("-------------------------------- 4 задача  ");

function chooseDay(a){
    switch(a){
        case (a = 1):
            console.log("Понедельник");
        break;
        case (a = 2):
            console.log("Вторник");
        break;
        case (a = 3):
            console.log("Среда");
        break;
        case (a = 4):
            console.log("Четверг");
        break;
        case (a = 5):
            console.log("Пятница");
        break;
        case (a = 6):
            console.log("Суббота");
        break;
        case (a = 7):
            console.log("Воскресенье");
        break;
        default: console.log("Не верный день недели");
    }
}
chooseDay(5);

// 5. Сделайте функцию, которая параметрами принимает 2 числа.
// Если эти числа равны - пусть функция вернет true, а если не
// равны - false.
console.log("-------------------------------- 5 задача  ");
function getComparison(a,b){
if( a === b){
    return true;
} else {
    return false;
};
};
result = getComparison(2,2);
console.log(result);


// 6. Сделайте функцию, которая параметрами принимает 2 числа.
// Если их сумма больше 10 - пусть вернет true, а если нет то -
// false.
console.log("-------------------------------- 6 задача  ");

function getComparisonSum(a,b){
if( a + b > 10){
    return true;
} else {
    return false;
};
};
result = getComparisonSum(8,8);
console.log(result);


// 7. Сделайте функцию, которая параметром принимает число и
// проверяет - отрицательное оно или нет. Если отрицательное -
// пусть функция вернет true, а если нет - false.

console.log("-------------------------------- 7 задача  ");

function checkNegative(a){
if( a < 0){
    return true;
} else if (a > 0){
    return false;
}else {
    return "Вы ввели 0";
};
};
result = checkNegative(-1);
console.log(result);

// 8. Сделайте функцию isNumberInRange, которая параметром
// принимает число и проверяет, что оно больше нуля и меньше
// 10. Если это так - пусть функция возвращает true, если не так -
// false.
console.log("-------------------------------- 8 задача  ");
function isNumberInRange(a){
    if( a > 0 && a < 10){
    return true;
} else {
    return false;
}
}
result = isNumberInRange(5);
console.log(result);


// 9. *Сделайте функцию getDigitsSum (digit - это цифра), которая
// параметром принимает целое число и возвращает сумму его
// цифр.
console.log("-------------------------------- 9 задача  ");

function getDigitsSum(a){
    result = 0;
    b = String(a);
    c = b.length;
    for ( let i = 0; i < c; i++ ) {
        result = result + Number(b[i]);
    }; 

    return result;
};
number = getDigitsSum(888);
console.log(number);

// 10. *Найдите все года от 1 до 2020, сумма цифр которых равна
// 13. Для этого используйте вспомогательную функцию
// getDigitsSum из предыдущей задачи.
console.log("-------------------------------- 10 задача  ");
c = 0;
for ( i = 0; i < 2020; i++){
    a = getDigitsSum(i);
    if (a === 13) {
        console.log(i);
    }
    
};

// 11. Сделайте функцию isEven() (even - это четный), которая
// параметром принимает целое число и проверяет: четное оно
// или нет. Если четное - пусть функция возвращает true, если
// нечетное - false.
console.log("-------------------------------- 11 задача  ");
a = 0;
function isEven(a) {
    if ( ( a % 2 ) === 0 ){
    return true;
    } else {
        return false;
    }
};
b=5;
console.log(isEven(b));

// 12. *Дано число. Сложите его цифры. Если сумма получилась
// более 9-ти, опять сложите его цифры. И так, пока сумма не
// станет однозначным числом (9 и менее). Можно использовать
// функцию getDigitsSum из 9 задачи
console.log("-------------------------------- 12 задача  ");
a = 199;
b = getDigitsSum(a);
 while ( b > 9) {
    b = getDigitsSum(b);

 };
console.log(b);

// 13. * Напишите стрелочную функцию, которая будет
// возвращать true если строка является палиндромом и false в
// противном случае.
console.log("-------------------------------- 13 задача  ");
let palindrome = "bmw"
console.log("в оригинале", palindrome)
let isPalindrome = (palindrome) => {
    let reversePalindrome = palindrome.split('').reverse().join('');
    console.log("Если перевернуть ", reversePalindrome);
    return reversePalindrome === palindrome;
}
console.log(isPalindrome(palindrome));

console.log("Hello people")
// Работа с if-else
// 1. Если переменная a равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("---------использование тернарного оператора-- а = 0 -------");
let a = 1;
console.log("a = 1")
let result = a === 0? "Верно":"Неверно";
console.log(result);
a = 0;
console.log("a = 0");
result = a === 0? "Верно":"Неверно";
console.log(result);
a = -3;
console.log("a = -3");
result = a === 0? "Верно":"Неверно";
console.log(result);


// 2. Если переменная a больше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("---------использование обычного if----а > 0-----");
a = 1;
console.log("a = 1")
if (a > 0) {
    console.log("Верно")
} else {
    console.log("Не верно")
}
a = 0;
console.log("a = 0");
if (a > 0) {
    console.log("Верно")
} else {
    console.log("Не верно")
}
a = -3;
console.log("a = -3");
if (a > 0) {
    console.log("Верно")
} else {
    console.log("Не верно")
}


// 3. Если переменная a меньше нуля, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("---------использование switch---- a < 0 -----");
a = 1;
console.log("a = 1")
switch(a < 0) {
    case (true):
        console.log("Верно")
    break;
    case (false):
        console.log("Не верно")
    break;
    default:
        console.log("что то пошло не так")
};

a = 0;
console.log("a = 0")
switch(a < 0) {
    case (true):
        console.log("Верно")
    break;
    case (false):
        console.log("Не верно")
    break;
    default:
        console.log("что то пошло не так")
};

a = -3;
console.log("a = -3")
switch(a < 0) {
    case (true):
        console.log("Верно")
    break;
    case (false):
        console.log("Не верно")
    break;
    default:
        console.log("что то пошло не так")
};

// 4. Если переменная a больше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.
console.log("---------Больше или равно---------")
a = 1;
console.log("a = 1")
result = a >= 0? "Верно":"Неверно";
console.log(result);
a = 0;
console.log("a = 0");
result = a >= 0? "Верно":"Неверно";
console.log(result);
a = -3;
console.log("a = -3");
result = a >= 0? "Верно":"Неверно";
console.log(result);


// 5. Если переменная a меньше или равна нулю, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 1, 0, -3.
console.log("---------Меньше  или равно---------")
a = 1;
console.log("a = 1")
result = a <= 0? "Верно":"Неверно";
console.log(result);
a = 0;
console.log("a = 0");
result = a <= 0? "Верно":"Неверно";
console.log(result);
a = -3;
console.log("a = -3");
result = a <= 0? "Верно":"Неверно";
console.log(result);

// 6. Если переменная a не равна нулю, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 1, 0, -3.
console.log("---------Не равно 0---------")
a = 1;
console.log("a = 1")
result = a != 0? "Неверно":"Верно";
console.log(result);
a = 0;
console.log("a = 0");
result = a != 0? "Неверно":"Верно";
console.log(result);
a = -3;
console.log("a = -3");
result = a != 0? "Неверно":"Верно";
console.log(result);


// 7. Если переменная a равна 'test', то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при a, равном
// 'test', 'тест', 3.
console.log("---------a равна 'test'---------")
a = 'test';
console.log("a = " + a)
result = a === 'test'? "Верно":"Неверно";
console.log(result);
a = 'тест';
console.log("a = " + 'тест');
result = a === 'test'? "Верно":"Неверно";
console.log(result);
a = 3;
console.log("a = 3");
result = a === 'test'? "Верно":"Неверно";
console.log(result);


// 8. Если переменная a равна '1' и по значению и по типу, то
// выведите 'Верно', иначе выведите 'Неверно'. Проверьте работу
// скрипта при a, равном '1', 1, 3.
console.log("---------a равна '1' и по значению и по типу---------")
a = '1';
console.log("a = '1'")
result = a === '1'? "Верно":"Неверно";
console.log(result);
a = 1;
console.log("a = " + a);
result = a === '1'? "Верно":"Неверно";
console.log(result);
a = 3;
console.log("a = " + a);
result = a === '1'? "Верно":"Неверно";
console.log(result);

// Работа с логическими переменными
// 1. Если переменная test равна true, то выведите 'Верно', иначе
// выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.

console.log("Работа с логическими переменными test равна true короткая запись")
test = true;
console.log("test = true")
result = test === true? "Верно":"Неверно";
console.log(result);
test = false;
console.log("test = false");
result = test === true? "Верно":"Неверно";
console.log(result);

console.log("Работа с логическими переменными test равна true длинная запись")
test = true;
console.log("test = true")
if (test === true) {
    console.log("Верно")
} else {
    console.log("Не верно")
}
test = false;
console.log("test = false");
if (test === true) {
    console.log("Верно")
} else {
    console.log("Не верно")
}


// 2. Если переменная test не равна true, то выведите 'Верно',
// иначе выведите 'Неверно'. Проверьте работу скрипта при test,
// равном true, false. Напишите два варианта скрипта - с короткой
// записью и с длинной.

console.log("Работа с логическими переменными test не равна true короткая запись")
test = true;
console.log("test = true")
result = test != true? "Верно":"Неверно";
console.log(result);
test = false;
console.log("test = false");
result = test != true? "Верно":"Неверно";
console.log(result);

console.log("Работа с логическими переменными test не равна true длинная запись")
test = true;
console.log("test = true")
if (test != true) {
    console.log("Верно")
} else {
    console.log("Не верно")
}
test = false;
console.log("test = false");
if (test != true) {
    console.log("Верно")
} else {
    console.log("Не верно")
}

// Работа с && (и) и || (или)
// 1. Если переменная a больше нуля и меньше 5-ти, то выведите
// 'Верно', иначе выведите 'Неверно'. Проверьте работу скрипта
// при a, равном 5, 0, -3, 2.

console.log("Работа с && (и) и || (или) -------a больше нуля и меньше 5-ти");
a = 5;
console.log("a = 5")
result = a > 0 && a < 5? "Верно":"Неверно";
console.log(result);
a = 0;
console.log("a = 0");
result = a > 0 && a < 5? "Верно":"Неверно";
console.log(result);
a = -3;
console.log("a = -3");
result = a > 0 && a < 5? "Верно":"Неверно";
console.log(result);
a = 2;
console.log("a = 2");
result = a > 0 && a < 5? "Верно":"Неверно";
console.log(result);


// 2. Если переменная a равна нулю или равна двум, то прибавьте
// к ней 7, иначе поделите ее на 10. Выведите новое значение
// переменной на экран. Проверьте работу скрипта при a, равном
// 5, 0, -3, 2.

console.log("a равна 0 или равна 2, то прибавьте к ней 7, иначе поделите ее на 10");
a = 5;
console.log("a = 5")
result = a === 0 || a === 2? a + 7: a / 10 ;
console.log(result);
a = 0;
console.log("a = 0");
result = a === 0 || a === 2? a + 7: a / 10 ;
console.log(result);
a = -3;
console.log("a = -3");
result = a === 0 || a === 2? a + 7: a / 10 ;
console.log(result);
a = 2;
console.log("a = 2");
result = a === 0 || a === 2? a + 7: a / 10 ;
console.log(result);

// 3. Если переменная a равна или меньше 1, а переменная b
// больше или равна 3, то выведите сумму этих переменных,
// иначе выведите их разность (результат вычитания). Проверьте
// работу скрипта при a и b, равном 1 и 3, 0 и 6, 3 и 5.

console.log("a <= 1, а  b >= 3 то выведите сумму этих переменных, иначе выведите их разность");
a = 1; let b = 3;
console.log("a = 1 и b = 3")
result = a <= 1 && b >= 3? a + b: a - b ;
console.log(result);
a = 0; b = 6;
console.log("a = 0 и b = 6");
result = a <= 1 && b >= 3? a + b: a - b ;
console.log(result);
a = 3; b = 5;
console.log("a = 3 и b = 5");
result = a <= 1 && b >= 3? a + b: a - b ;
console.log(result);



// 4. Если переменная a больше 2-х и меньше 11-ти, или
// переменная b больше или равна 6-ти и меньше 14-ти, то
// выведите 'Верно', в противном случае выведите 'Неверно'.

console.log("a > 2 && a < 11 || b >= 6 && b < 14  то выведите Верно, иначе Неверно");
a = 1; b = 3;
console.log("a = 1 и b = 3")
result = a > 2 && a < 11 || b >= 6 && b < 14? "Верно":"Неверно" ;
console.log(result);
a = 0; b = 6;
console.log("a = 0 и b = 6");
result = a > 2 && a < 11 || b >= 6 && b < 14? "Верно":"Неверно" ;
console.log(result);
a = 3; b = 5;
console.log("a = 3 и b = 5");
result = a > 2 && a < 11 || b >= 6 && b < 14? "Верно":"Неверно" ;
console.log(result);

// На switch-case
// 1. Переменная num может принимать 4 значения: 1, 2, 3 или 4.
// Если она имеет значение '1', то в переменную result запишем
// 'зима', если имеет значение '2' – 'весна' и так далее. Решите
// задачу через switch-case.

console.log("---------------------------На switch-case ---------------------------");
let num = 3;
console.log("num может принимать 4 значения: 1, 2, 3 или 4")
switch(num) {
    case (num = 1):
        console.log("num равен ", num);
        result = 'зима'
    break;
    case (num = 2):
        console.log("num равен ", num);
        result = 'весна'
    break;
    case (num = 3):
        console.log("num равен ", num);
        result = 'лето'
    break;
    case (num = 4):
        console.log("num равен ", num);
        result = 'осень'
    break;

    default:
        console.log("что то пошло не так")
};
console.log(result);

// Общие задачи
// 1. В переменной day лежит какое-то число из интервала от 1 до
// 31. Определите в какую декаду месяца попадает это число (в
// первую, вторую или третью).

console.log("---------------------------На if --------------------------");
let day = 12;
console.log("Определите в какую декаду месяца попадает это число")
console.log("Сегодня " + day + " число");

if (day >= 1 && day <= 10){
    result = 'Первая декада'
};

if (day >= 11 && day <= 20){
    result = 'Вторая декада'
};

if (day >= 21 && day <= 31){
    result = 'Третья декада'
};
console.log(result);


// 2. В переменной month лежит какое-то число из интервала от 1
// до 12. Определите в какую пору года попадает этот месяц
// (зима, лето, весна, осень).

console.log("---------------На if, else if по месяцу  время года -----------------");
let month = 11;
console.log(month);
if (month >= 13 || month <= 0){
    console.log("month может принимать значения только от 1 до 12")
};

if (month <= 2 && month >= 1 || month === 12){
    console.log("Зима")
} else if (month <= 5 && month >= 3){
    console.log("Весна")
} else if (month <= 8 && month >= 6){
    console.log("Лето")
} else if (month <= 11 && month >= 9){
    console.log("Осень")
} ;
    

// 3. Дана строка, состоящая из символов, например, 'abcde'.
// Проверьте, что первым символом этой строки является буква
// 'a'. Если это так - выведите 'да', в противном случае выведите
// 'нет'.
console.log("---Проверьте, что первым символом этой строки является буква 'a'----")

let word = 'abcde';
console.log("Слово ", word);
const firstchar = 'a';
if (firstchar === word[0]){
    console.log("Да")
} else { 
    console.log("Нет")
};


// Циклы while и for
// Решите эти задачи сначала через цикл while, а затем через цикл
// for.



console.log("---Решите эти задачи сначала через цикл while, а затем через цикл for.----")
// 1. Выведите столбец чисел от 1 до 100.

console.log("через while");
const countNumbers = 100;
let i = 0;
while (i < countNumbers) {
    i++;
    console.log(i);
} ;

console.log("через for");
for (i = 1; i < 101; i++){
    console.log(i);
}



console.log("2. Выведите столбец чисел от 11 до 33. через while");
i = 11;
while (i <= 33) {
        console.log(i);
        i++;
} ;


console.log("2. Выведите столбец чисел от 11 до 33. через for");

for ( i = 11; i <= 33; i++ ) {
    console.log(i);
}

// 3. Выведите столбец четных чисел в промежутке от 0 до 100.

console.log("Выведите столбец четных чисел в промежутке от 0 до 100");
i = 0;
while (i < 100) {
        i = i + 2;
        console.log(i);
        
} ;

// 4. С помощью цикла найдите сумму чисел от 1 до 100.

console.log("С помощью цикла найдите сумму чисел от 1 до 100");
let sum = 0;
for ( i = 1; i <= 100; i++ ) {
    sum= sum + i;
};
console.log(sum);


// Задачи общие.
// Дано число n=1000. Делите его на 2 столько раз, пока результат
// деления не станет меньше 50. Какое число получится? Посчитайте
// количество итераций, необходимых для этого (итерация - это
// проход цикла), и запишите его в переменную num.
console.log("Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится?");
let n = 1000;
i = 0;

do { 
    n = n / 2;
    i++;
}
while ( n > 50 );

console.log( "n = ", n );
console.log("Количество итераций = ", i );
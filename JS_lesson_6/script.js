// . Используя метод map() напишите код, который получает из 
// массива строк новый массив, содержащий их длины. 
console.log("Задача №1 \n \n")
const arr =['яблоко', "тыква", "апельсин"];
console.log(arr);
const newArr = [];
arr.map((e) => newArr.push(e.length)); 
console.log(newArr);

 
// 2. Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 
// 19]. Использую метод reduce() напишите функцию 
// currentSums(numbers), которая возвращает новый массив из 
// такого же числа элементов, в котором на каждой позиции 
// будет находиться сумма элементов массива numbers до этой 
// позиции включительно. 
console.log("\nЗадача №2 \n \n");
const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
const currentSums = (numbers) => {
    const newNumbers = [];
    numbers.reduce((a,b) => {
        const sum = (a + b);
        newNumbers.push(sum);
        return sum;
    },0);
    return newNumbers;
};
console.log(currentSums(numbers));



// 3. Напишите код, который получает из массива чисел новый 
// массив, содержащий пары чисел, которые в сумме должны 
// быть равны семи: (0:7), (1:6) и т.д.
console.log("\nЗадача №3 \n \n");

const arrNumbersSecond=[0,1,2,3,4,5,6,7];
const findSumSeven = (arr) => {
    const arrSumSeven = [];
    
    arr.forEach((element, index) => { 
        let x = arrNumbersSecond.find((el, idx) => idx > index && el + element === 7 );
        
        if (x !== undefined)
            {
                arrSumSeven.push("(" + element.toString() + ":" + x + ")");
            
        };
});
    return arrSumSeven;   
};
console.log(findSumSeven(arrNumbersSecond));


 
// 4. Напишите код, создающий массив, который будет состоять из 
// первых букв слов строки str. 
console.log("\nЗадача №4 \n \n");

const phrase = "Напишите код, создающий массив";
const getArrFirstLetter = (str) => {
    const arrFirstLetter= [];
    const arrStrWords = str.split(' ');
    const len = arrStrWords.length;
    for (i = 0; i< len; i++){
        arrFirstLetter.push(arrStrWords[i].slice(0,1));
    }
    return arrFirstLetter;
    };

console.log(getArrFirstLetter(phrase));
 
// 5. Напишите код, создающий массив, который будет состоять из 
// строк, состоящих из предыдущего, текущего и следующего 
// символа строки str. 
console.log("\nЗадача №5 \n \n");
const phrase2 = "Напишите код, создающий массив";
const getArrOfSymbols = (str) => {
    const arrNewLetters = [];
    const arrStrLetters = str.split('');
    const len2 = arrStrLetters.length;
    console.log(len2);

    for (i = 0; i < len2; i++){
        if (i === 0){
            arrNewLetters.push(arrStrLetters[i] + arrStrLetters[i+1]);
            continue;
        } else if (i === len2-1){
            arrNewLetters.push(arrStrLetters[i-1] + arrStrLetters[i]);
            continue;
        };
        arrNewLetters.push(arrStrLetters[i-1] + arrStrLetters[i] + arrStrLetters[i+1]);
    };
    return  arrNewLetters;
};

console.log(getArrOfSymbols(phrase));


// 6. Напишите код, преобразующий массив цифр, которые 
// располагаются неупорядоченно, в массив цифр 
// расположенных по убыванию их значений. 
console.log("\nЗадача №6 \n \n");

const arrRandomNumbers = [4, 2, 15, -3, 8, 3, 2, 20];
const getSortedArr = (arr) =>{
    let sortedArr = Object.assign([], arr);
    sortedArr.sort((a,b)=> b-a);
    return sortedArr;
    };

console.log(getSortedArr(arrRandomNumbers));
 
// 7. Напишите код, объединяющий три массива цифр, и 
// располагающий цифры, в полученном массиве, в порядке 
// убывания их значений через пробел. 
console.log("\nЗадача №7 \n \n");

const arrOne = [23,2,5];
const arrTwo = [18,99,36];
const arrThree = [12,8,37];


const getNewArr = (arr1, arr2, arr3) => {
const arrNew = [];
arrNew.push(...arr1, ...arr2, ...arr3);
arrNew.sort((a,b) => b-a);
return arrNew.join(' ');
};

console.log(getNewArr(arrOne, arrTwo, arrThree));




// 8. Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], 
// [6]]. Найдите сумму элементов этого массива. Массив, конечно 
// же, может быть произвольным.
console.log("\nЗадача №8 \n \n");

const arr2D = [[1, 2, 3], [4, 5], [6]];

const getSumArray2D = (arr) => {
    const newArray= [].concat(...arr);
    console.log(newArray);
    return newArray.reduce((sum, curr) => {
        return sum + curr;
    },0); 
}

console.log(getSumArray2D(arr2D));


// 9. Дан массив с числами. Не используя метода reverse 
// переверните его элементы в обратном порядке. 
console.log("\nЗадача №9 \n \n");
const arrNumbersThird=[0,1,2,3,4,5,6,7];

const getArrNewNumbersThird = (arr) => {
const arrNewNumbersThird =[];
for (i=0; i < arr.length; i++){
    
    arrNewNumbersThird.unshift(arr[i]);
    console.log(arr[i]);
    
};
return arrNewNumbersThird;
};

console.log(getArrNewNumbersThird(arrNumbersThird));

 
// 10.  Дан массив с числами. Узнайте сколько элементов с начала 
// массива надо сложить, чтобы в сумме получилось больше 
// 10-ти. 
console.log("\nЗадача №10 \n \n");

const arrTenTask = [2,6,1,7,3,8]

const getQuantity = (arr) => {
    let sum = 0;
    let pos = -1;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (sum > 10) {
            pos = i + 1;
            break;
        } else {
            continue;
        };
    };
    return pos;
  
};

console.log("Чтобы получить больше 10 в твоем массиве надо сложить первые " + getQuantity(arrTenTask).toString() + " чисел" );

 
// 11.  Напишите функцию arrayFill, которая будет заполнять 
// массив заданными значениями. Первым параметром функция 
// принимает значение, которым заполнять массив, а вторым - 
// сколько элементов должно быть в массиве. Пример: 
// arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x']. 
 
console.log("\nЗадача №11\n \n");

const arrayFill = (value, quantity) => {
    const arrElevenTask = [];
    for (i = 0; i < quantity; i++){
        arrElevenTask.push(value);
    };
    return arrElevenTask;
};

console.log(arrayFill('x',5));

// или

const arrayFill2 = (value, quantity) => {
    const arrElevenTask = new Array(quantity);
    arrElevenTask.fill(value);
    return arrElevenTask;
};

console.log(arrayFill2('y',3));



 
// Из презентации: 
// 1. Написать функцию  которая будет принимать два массива, и 
// будет сравнивать их, если они идентичны (элементы 
// совпадают по значению и по индексу) то функция возвращает 
// true, в противном случае false.  
console.log("\nЗадача из презентации 1\n \n");

const getArraysComparison = (arr1,arr2) => {
    const l1 = arr1.length;
    const l2 = arr2.length;
    if (l1 !== l2){
        console.log("Массивы разной длинны")
        return false;
    } else {
        for (i = 0; i < l1; i++){
            if (arr1[i] !== arr2[i]) {
                return false
                }; 
            };
            console.log("Массивы идентичны")
            return true
        };
    };

const arrUno = [1,2,3];
const arrDos = [1,2,3];
console.log (getArraysComparison(arrUno, arrDos));


// 2. Написать функцию  которая будет принимать n-ое 
// количество аргументов, в качестве результата функция будет 
// возвращать сумму всех четных элементов. Для решения 
// использовать цикл for (... of ...).  

console.log("\nЗадача из презентации 2\n \n");

const getEvenSumTask2 = (...arr) => {
    let evenSum = 0;
    for (let value of arr) {
        if ((arr.indexOf(value)+1) % 2 === 0){
            evenSum += value;
        } else {
            continue;
        };
    };
    return evenSum;
}

console.log(getEvenSumTask2(1,2,3,4,5,6,7,8));

// 3. Написать функцию  которая будет принимать два массива, и 
// в качестве результата будет возвращать только  те значения 
// которые есть и в первом и во втором массиве. 

console.log("\nЗадача из презентации 3\n \n");
const arrayUno = [1,4,3];
const arrayDos = [1,2,4];
const getComparisonArrays = (arr1, arr2) =>{
    const l1 = arr1.length;
    const l2 = arr2.length;
    let x = 0;
    const coincidenceArr = [];
    if (l1<=l2) {
        x = l1;
        for (i = 0; i < x; i++){
            if (arr2.includes(arr1[i]) === false){
                continue
            } else {
                coincidenceArr.push(arr1[i]);
            };
        };
    } else {
        x = l2;
        for (i = 0; i < x; i++){
            if (arr1.includes(arr2[i]) === false){
                continue
            } else {
                coincidenceArr.push(arr2[i]);
            };
        };
    };
    return coincidenceArr;
};

console.log(getComparisonArrays(arrayUno, arrayDos));





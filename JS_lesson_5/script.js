// 1.Преобразовать строку в массив слов. Напишите функцию 
// stringToarray(str), которая преобразует строку в массив слов. 
console.log("\n Задача 1 \n \n");
let str = "утро добрым не бывает";
function splitStringToWords(str){
    const wordsFromString = str.split(' ');
    return wordsFromString;
};
console.log(splitStringToWords(str));


// 2. Напишите функцию deleteСharacters(str, length), которая 
// возвращает подстроку, состоящую из указанного количества 
// символов. 
 console.log("\n Задача 2 \n \n");
let length = 0;
 function deleteСharacters(str, length){
    const lettersFromString = str.slice(0, length);
    return lettersFromString;
};
console.log(deleteСharacters(str, 6));



// 3. Напишите функцию insertDash(str), которая принимает строку 
// str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в 
// верхний регистр. 
 
console.log("\n Задача 3 \n \n");
let lengthString = str.length;
let strWithDash = "";
 function insertDash(str){
    for (i = 0; i < lengthString; i++){
        if (str[i] !== " "){
        strWithDash += str[i]
        } else {strWithDash += '-';

        };
    };
    strWithDash = strWithDash.toUpperCase();
    return strWithDash;
};

console.log(insertDash(str));


// 4. Напишите функцию, которая принимает строку в качестве 
// аргумента и преобразует регистр первого символа строки из 
// нижнего регистра в верхний. 
console.log("\n Задача 4 \n \n");

let strWithFirstLetterUpperCase
function doFirstLetterUpperCase(str){
    strWithFirstLetterUpperCase = str[0].toUpperCase() + str.slice(1)
    return strWithFirstLetterUpperCase;
}
console.log(doFirstLetterUpperCase(str));



// 5. Напишите функцию capitalize(str), которая возвращает строку, 
// в которой каждое слово начинается с заглавной буквы. 
console.log("\n Задача 5 \n \n");
str = "утро добрым не бывает";
 function capitalize(str){

    return str.split(' ').map(word => {return word[0].toUpperCase() + word.slice(1).toLowerCase()}).join(' ');
     
    };

console.log(capitalize(str));


 
// 6. Напишите функцию changeRegister(str), которая принимает в 
// качестве аргумента строку и и заменяет регистр каждого 
// символа на противоположный. Например, если вводится 
// «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ 
// оХоТнИк». 
console.log("\n Задача 6 \n \n");
str = "КаЖдЫй ОхОтНиК";
let n = str.length;

function changeRegister(str){
    let changedRegisterStr = "";
    
    for (i = 0; i < n; i++){
        if (str[i].toUpperCase() === str[i]){
            changedRegisterStr += str[i].toLowerCase() 
        } else {
            changedRegisterStr += str[i].toUpperCase()
        }
    }
    return changedRegisterStr;
};
console.log(changeRegister(str));

// 7. Напишите функцию removeChar(str), которая возвращает 
// строку, очищенную от всех не буквенно-цифровых символов. 
console.log("\n Задача 7 \n \n");
str = "123 ABC 456 DEF /.,";
n = str.length;

const removeChar = (str) => {
    let removedCharStr="";
    for (i = 0; i < n; i++){
        if ( str[i] >= "a" && str[i] <= "z" || str[i] >= "A" && str[i] <= "Z" || str[i] >= "0" && str[i] <= "9" || str[i] >= "а" && str[i] <= "я" || str[i] >= "А" && str[i] <= "Я" ) {
           removedCharStr += str[i]; 
           } else {removedCharStr += "";}
    }
    return removedCharStr;
};
console.log(removeChar(str));

 
// 8. Напишите функцию zeros(num, len), которая дополняет нулями 
// до указанной длины числовое значение с дополнительным 
// знаком «+» или «-» в зависимости от передаваемого 
// аргумента. 
console.log("\n Задача 8 \n \n");

function zeros(num, len) {
    let n = 0;
    let result = "";
    if (num >= 0){
        result = "+" + num.toString().padEnd(len, "0")
    } else {result = "-" + num.toString().padEnd(len, "0")}
    return result;
}
console.log(zeros(355, 5));


 
// 9. Напишите функцию comparison(str1, str2), которая сравнивает 
// строки без учёта регистра символов. 
console.log("\n Задача 9 \n \n");
function comparison(str1, str2){
    if (str1.toLowerCase() === str2.toLowerCase()){
        return "Строки равны";
    } else if (str1.toLowerCase() > str2.toLowerCase()){return "str1 > str2" ;
    } else if (str1.toLowerCase() < str2.toLowerCase()){return "str1 < str2" ;
    };   
};
let str1 = "АБВГД";
let str2 = "абвгд";
console.log(str1, " ", str2, " ", comparison(str1, str2));


// 10.  Напишите функцию insensitiveSearch(str1, str2), которая 
// осуществляет поиск подстроки str2 в строке str1 без учёта 
// регистра символов.
console.log("\n Задача 10 \n \n");
function insensitiveSearch(str1, str2) {
    let n = str1.toLowerCase().indexOf(str2.toLowerCase());
    if (n >= 0) {return "Подстрока найдена с позиции " + n;
    } else {return "Подстрока не найдена";

    };
};
str1 = "Человек человеку волк"
str2 = "во"
console.log("Ищем в ", str1, " подстроку ", str2, " ", insensitiveSearch(str1, str2));

 
// 11.  Напишите функцию initCap(str), которая преобразует стиль 
// написания составных слов строки в CamelCase, при котором 
// несколько слов пишутся слитно без пробелов, при этом каждое 
// слово внутри строки пишется с заглавной буквы. 
console.log("\n Задача 11 \n \n");
str = "Строка исходная задача Мутная но мы справимся с любой";
function initCap(str){
    let strAlmostCamelCase = str.split(' ').map(word => {return word[0].toUpperCase() + word.slice(1).toLowerCase()}).join('');
    let strCamelCase = strAlmostCamelCase[0].toLowerCase()+strAlmostCamelCase.slice(1);
    return strCamelCase;
}
console.log(initCap(str));

 
// 12.  Напишите функцию initSnake(str), которая преобразует 
// стиль написания составных слов строки из CamelCase в 
// snake_case, при котором несколько слов разделяются 
// символом подчеркивания (_), причём каждое слово пишется с 
// маленькой буквы.
console.log("\n Задача 12 \n \n");
str = "строкаИсходнаяЗадачаМутнаяНоМыСправимсяСЛюбой";
function initSnake(str){
    let strSnakeCase = "";
    let n = str.length;
    for (i = 0; i < n; i++){
        if (str[i] === str[i].toUpperCase()){
            strSnakeCase += "_" + str[i].toLowerCase();
        } else {strSnakeCase += str[i];
        };
    };
    return strSnakeCase;
};
console.log(initSnake(str));


// 13.  Напишите функцию repeatStr(str, n), которая возвращает 
// строку повторяемую определённое количество раз. 
console.log("\n Задача 13 \n \n");
str = "ABC";
n = 4;
const repeatStr = (str, n) => str.repeat(n);
console.log(repeatStr(str, n));
 
// 14.  Напишите функцию path(pathname), которая возвращает 
// имя файла (подстрока после последнего символа "\" ) из 
// полного пути к файлу.
console.log("\n Задача 14 \n \n");
let pathname = String.raw`C:\\Users\Admin\Documents\report.pdf`;
function path(pathname){
    return pathname.split(/[\\]/).pop();
};
console.log(path(pathname)); 
// Если вводить сразу сюда - как предусмотреть " ` " и String.raw
 
// 15.  Создайте функцию endsWith(), который сравнивает 
// подстроку str1 с окончанием исходной строки str и определяет 
// заканчивается ли строка символами подстроки. 
console.log("\n Задача 15 \n \n");
str = "строкаИсходнаяЗадачаМутнаяНоМыСправимсяСЛюбой";
str1 = "бой";
function endsWith(str,str1){
    // n = str.lenght;
    let m = str1.length;
    let strEnd = str.slice(-m);
    console.log(strEnd); 
    if (strEnd === str1){
        return "Предложение заканчивается с подстроки " + str1;
    } else {return "Предложение заканчивается с другой подстроки" }
};
console.log(endsWith(str,str1)); 

 
// 16.  Напишите функцию getSubstr(str, char, pos), которая 
// возвращает часть строки, расположенную после или до 
// указанного символа char в зависимости от параметра pos.
console.log("\n Задача 16 \n \n");
str = "Скажи-ка дядя ведь не даром, Москва спаленная пожаром, французам отдана?";
char = "М";
let pos = 3; 
function getSubstr(str, char, pos){
        let resultPos = str.indexOf(char);
        let result = 0;
        // console.log("char = ", resultPos);
        if (pos >=0){
            result = str.substr(resultPos+1, pos);
        } else if (pos < 0){
            result = str.substr(resultPos+pos, Math.abs(pos))
        }
        return result;
};
console.log(getSubstr(str, char, pos));


// 17.  Напишите функцию insert(str, substr, pos), которая вставляет 
// подстроку substr в указанную позицию pos строки str. По 
// умолчанию подстрока вставляется в начало строки.
console.log("\n Задача 17 \n \n");
str = "Скажи-ка дядя ведь не даром, Москва спаленная пожаром, французам отдана?";
let substr = "Наполеон";
pos = 29;

function insert(str, substr, pos){
    if (pos > str.length) {
        return substr + str;
    } else if (pos < str.length) {
        return str.slice(0, pos) + " " + substr + " " + str.slice(pos);
    };
};
console.log(insert(str, substr, pos));

// 18.  Напишите функцию limitStr(str, n, symb), которая обрезает 
// строку, если она длиннее указанного количества символов n. 
// Усеченная строка должна заканчиваться троеточием «...» 
// (если не задан параметр symb) или заданным символом symb.
console.log("\n Задача 18 \n \n");
str = "Скажи-ка дядя ведь не даром, Москва спаленная пожаром, французам отдана?";
n = 29;
let symb = "$";
function limitStr(str, n, symb){
    if (symb != ""){
        return str.slice(0, n) + symb;
    }else {
        return str.slice(0, n) + "...";
    };
};
console.log(limitStr(str, n, symb));
 
// 19.  Напишите функцию count(str, stringsearch), которая 
// возвращает количество символов stringsearch в строке str. 
console.log("\n Задача 19 \n \n");
str = "Скажи-ка дядя ведь не даром, Москва спаленная пожаром, французам отдана?";
let stringsearch = "а";
function count(str, stringsearch){
   return (str.split(stringsearch).length) - 1; 
};
console.log(stringsearch, " встречается в строке ", count(str, stringsearch), " раз" );

 
// 20.  Напишите функцию strip(str), которая удаляет все лишние 
// пробелы из строки str. 
console.log("\n Задача 20 \n \n");
str = "   Скажи-ка  дядя ведь не  даром, Москва   спаленная пожаром,       французам отдана?   ";
console.log("\n Задача 20 \n \n");

function strip(str){
    let result = str.trim();
    let stripedStr = "";
    let n = result.length;
    for (i = 0; i < n; i++){
        if (result[i] === " " && result[i+1] === " "){
            continue;
        } else {
            stripedStr += result[i];
        };
    };
    return stripedStr;
};
console.log(strip(str));
 
// 21.  Напишите функцию cutString(str, n), которая удаляет лишние 
// слова из строки str, оставив в ней n слов.
console.log("\n Задача 21 \n \n");

str = "Скажи-ка дядя ведь не даром, Москва спаленная пожаром, французам отдана?";
n = 7;
function cutString(str, n){
    return str.split(" ", n);
};
console.log("Ограничил str  до ", n, "слов: ", cutString(str, n));

// 22.  Напишите функцию findWord(word, str), которая проверяет, 
// существует ли в строке str слова word
console.log("\n Задача 22 \n \n");
str = "Скажи-ка дядя ведь не даром, Москва спаленная пожаром, французам отдана?";
let word = "дядя"
function findWord(word, str){
    // let n = str.length;
    // let countWord = 0;
    // for (i = 0; i < n; i++){
    //     if (str.indexOf(word, i) > 0){
    //         countWord++;
    //     } else {
    //         break
    //     };
    // };
    // return countWord;
    let countWord = 0;
    let n = str.split(" ").length;
    for (i = 0; i < n; i++)
        if (str.split(" ")[i] === word){
            countWord++;
        }
    return countWord;
};
console.log("Слово ", word, " обнаружено ", findWord(word, str), " раз");




// 1. Реализуйте класс Worker (Работник), который будет иметь
// следующие свойства: name (имя), surname (фамилия), rate
// (ставка за день работы), days (количество отработанных дней).
// Также класс должен иметь метод getSalary(), который будет
// выводить зарплату работника. Зарплата - это произведение
// (умножение) ставки rate на количество отработанных дней
// days. И метод getFullName() - имя и фамиля работника.
console.log("\nЗадача №1 \n \n");

class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}
  getSalary(){
    let salary = this.rate * this.days;
    return salary;
  };
  getFullName(){
    let fullName = `${this.name} ${this.surname}`;
    return fullName;
  };
}

const lawer = new Worker('Kirill', 'Sutyrin', 5000, 20);
console.log(lawer.getSalary());
console.log(lawer.getFullName());



// 2. Напишите новый класс Boss, этот класс наследуется от класса
// Worker и прошлого задания. Появляется новые свойство:
// workers - количество работников. И зарплата считается по
// другому: произведение (умножение) ставки rate на количество
// отработанных дней и на количество работников.
console.log("\nЗадача №2 \n \n");

class Boss extends Worker{
    constructor(name, surname, rate, days, workers){
        super(name, surname, rate, days);
        this.workers = workers;
    }
    getBossSalary(){
        return this.rate * this.days * this.workers;
    }
}

const littleBoss = new Boss ('Kirill', 'Sutyrin', 5000, 20, 6)
console.log(littleBoss.getBossSalary());

// 3. Модифицируйте класс Worker из предыдущей задачи
// следующим образом: для свойства rate и для свойства days
// сделайте и методы-сеттеры и методы-геттеры для их чтения.

console.log("\nЗадача №3 \n \n");

class Worker2 {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
}
 get rate() {
    return this._rate
 }

 set rate(value) {
    if (typeof value !== "number") {
        console.log("Вы ввели не цифровое значение ставки (Параметр 3), проверьте параметры")
        return;
    } else {
        return this._rate = value;
    }
 }

 get days() {
    return this._days
 }
 set days(value) {
    if (value > 31) {
        console.log("Рабочих дней не может быть больше 31! Проверьте параметр (4)");
        return;
    } else {
        return this._days = value;
    }
 }


  getSalary(){
    let salary2 = this.rate * this.days;
    return salary2;
  };
  getFullName(){
    let fullName = `${this.name} ${this.surname}`;
    return fullName;
  };
}

const lawer2 = new Worker2('Kirill3', 'Sutyrin3', 1000, 21);
console.log("Зарплата = " + lawer2.getSalary());
console.log("Полное имя = " + lawer2.getFullName());



// 4. Реализуйте класс MyString, который будет иметь следующие
// методы: метод reverse(), который параметром принимает
// строку, а возвращает ее в перевернутом виде, метод ucFirst(),
// который параметром принимает строку, а возвращает эту же
// строку, сделав ее первую букву заглавной и метод ucWords,
// который принимает строку и делает заглавной первую букву
// каждого слова этой строки.
console.log("\nЗадача №4 \n \n");

class MyString {
    constructor(str){
        this.str = str;
    }

    reverse(){
        const l = this.str.length;
        let strReverse = "";
        const strTemp = this.str.split('');
        for (let i = 0; i < l; i++){
            strReverse = strReverse + strTemp[l-1-i];
        }
    return strReverse;    
    }

    ucFirst(){
        let strTemp = this.str.split('');
        strTemp[0] = strTemp[0].toUpperCase();
        let firstUC = strTemp.join('');
        return firstUC;
    }

    ucWords() {
        const strTemp = this.str.split(' ');
        const l = strTemp.length;
        for (let i = 0; i < l; i++) {
            let strTemp2 = strTemp[i].split('');
            strTemp2[0] = strTemp2[0].toUpperCase();
            strTemp[i] = strTemp2.join('');
        }
        const wordsUC = strTemp.join(' ');
        return wordsUC;
    }


}

const normalStr = new MyString("а роза упала на лапу азора");
console.log("Метод reverse() = " + normalStr.reverse());
console.log("Метод ucFirst() = " + normalStr.ucFirst());
console.log("Метод ucWords() = " + normalStr.ucWords());

// 5. Реализуйте класс Validator, который будет проверять строки. К
// примеру, у него будет метод isEmail параметром принимает
// строку и проверяет, является ли она корректным емейлом или
// нет. Если является - возвращает true, если не является - то
// false. Кроме того, класс будет иметь следующие методы: метод
// isDomain для проверки домена, метод isDate для проверки
// даты и метод isPhone для проверки телефона.
console.log("\nЗадача №5 \n \n");

class Validator {
    constructor(str){
        this.str = str;
    }

    isEmail(){
        let email = this.str.trim();
        let posSobaka = email.indexOf("@", 0);
        if (posSobaka !== -1 && email.length <= 254 && email.includes(".", posSobaka + 1) && /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+$/i.test(email.substring(0, posSobaka))){
            return true;
        }; 
        return false;
    };
    
    isDomain(){
        let domain = this.str.trim().toLowerCase();
        if (domain.length > 253){
             return false;
        };
        let labels = domain.split('.');
        if (labels.length < 2){
            return false;
        };
        for (const label of labels) {
            if (label.length < 1 || label.length > 63) return false;
            if (!/^[a-z0-9-]+$/.test(label)) return false;
        };

        if (!/[a-z]/.test(labels[labels.length - 1])){
            return false;
        }; 
        return true;
    };

    isDate(){
        let date = this.str.trim().split('.');
        if (date.length !== 3){ 
            return false;
        };
        if (date[0].length < 1 || date[0].length > 2 || parseInt(date[0]) < 1 || parseInt(date[0]) > 31){
            return false;
        };
        if (date[1].length !== 2 || parseInt(date[1]) < 1 || parseInt(date[1]) > 12){
            return false;
        };
        if (date[2].length > 4){
            return false;
        };
        if (!/^\d+$/.test(date[0]) || !/^\d+$/.test(date[1]) || !/^\d+$/.test(date[2])) {
            return false;
        };
        if (parseInt(date[1]) === 4 && parseInt(date[0]) > 30  || parseInt(date[1]) === 6 && parseInt(date[0]) > 30 || parseInt(date[1]) === 9 && parseInt(date[0]) > 30 || parseInt(date[1]) === 11 && parseInt(date[0]) > 30){
            return false;
        };
        if (parseInt(date[1]) === 2 && parseInt(date[0]) > 28 && parseInt(date[2]) % 4 !== 0 || parseInt(date[1]) === 2 && parseInt(date[0]) > 29  && parseInt(date[2]) % 4 === 0 ) {
            return false;
        };
        return true; 
    };

    isPhone() {
        let phone = this.str.trim().replace(/[^\d+]/g, "").split('');
        if (phone[0] !== "8" && phone[0] !== "+" ){
            return false;
        };
        if (phone.join('').replace(/[+]/g, "").length !== 11){
            return false;
        };
         return true; 
    };
}

const validateStr = new Validator("25.10.2026");
console.log(validateStr);
console.log("Результат проверки isEmail() = " + validateStr.isEmail());
console.log("Результат проверки isDomain() = " + validateStr.isDomain());
console.log("Результат проверки isDate() = " + validateStr.isDate());
console.log("Результат проверки isPhone() = " + validateStr.isPhone());



// 6. Реализуйте класс Student (Студент), который будет
// наследовать от класса User, подобно тому, как это сделано в
// теоретической части урока. Этот класс должен иметь
// следующие свойства: name (имя, наследуется от User),
// surname (фамилия, наследуется от User), year (год
// поступления в вуз). Класс должен иметь метод getFullName()
// (наследуется от User), с помощью которого можно вывести
// одновременно имя и фамилию студента. Также класс должен
// иметь метод getCourse(), который будет выводить текущий
// курс студента (от 1 до 5). Курс вычисляется так: нужно от
// текущего года отнять год поступления в вуз. Текущий год
// получите самостоятельно с помощью new Date.
console.log("\nЗадача №6 \n \n");

class User {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        console.log(`Меня зовут ${this.name}  ${this.surname}`)
    }

};

class Student extends User{
    constructor(name, surname, year){
    super(name, surname);
    this.year = year;
    };


    getFullName(){
        super.getFullName();
    }

    getCourse(){
        const currDate = new Date();
        const course = currDate.getFullYear() - this.year;
        console.log('Текущий курс = '+ course);
    };

}

const stud = new Student('Kira', 'Пластинина', 2020)


stud.getFullName();
stud.getCourse();

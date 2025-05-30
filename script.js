//const existedUserLogin = "the_best_user";
//const existedUserPassword = 12345678;

//const userLogin = prompt ("Введите логин");
//const userPassword = prompt ("Введите пароль");
//const UserLogin = userLogin.trim();
//const UserPassword = userPassword.trim();

//if (existedUserLogin === UserLogin || existedUserPassword === UserPassword) {
  //  alert (`Добро пожаловать ${UserLogin}`)
//} else {
  //  alert ("Логин или Пароль введены неверно!")
//};


const otvet1 = 2+2;
const otvet2 = 2 * 2;
const otvet3 = 5 - 3 - 1;
const otvet4 = 10 - 2 - 1 + 5;
const otvet5 = 2 + 2 * 2;

let otvety = 0;
let neOtvety = 0;

const zad1 = prompt ("Сколько будет 2 + 2?");
const Zad1 = Number(zad1);
if (Zad1 === otvet1) {
    alert ("Ответ верный")
    otvety++;
} else {
    alert ("Ответ неверный")
    neOtvety++;
};

const zad2 = prompt ("Сколько будет 2 * 2?");
const Zad2 = Number(zad2);
if (Zad2 === otvet2) {
    alert ("Ответ верный")
    otvety++;

} else {
    alert ("Ответ неверный")
    neOtvety++;
};

const zad3 = prompt ("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?");
const Zad3 = Number(zad3);
if (Zad3 === otvet3) {
    alert ("Ответ верный")
    otvety++;
} else {
    alert ("Ответ неверный")
    neOtvety++;
};

const zad4 = prompt ("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?");
const Zad4 = Number(zad4);
if (Zad4 === otvet4) {
    alert ("Ответ верный")
    otvety++;
} else {
    alert ("Ответ неверный")
    neOtvety++;
};

const zad5 = prompt ("Сколько будет 2 + 2 * 2?");
const Zad5 = Number(zad5);
if (Zad5 === otvet5) {
    alert ("Ответ верный")
    otvety++;
} else {
    alert ("Ответ неверный")
    neOtvety++;
};

alert (`Конец теста! Правильные ответы - ${otvety}. Неправильные ответы - ${neOtvety}.`);





console.log (otvety)












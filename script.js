const existedUserLogin = "the_best_user";
const existedUserPassword = 12345678;

const userLogin = prompt ("Введите логин");
const userPassword = prompt ("Введите пароль");
const UserLogin = userLogin.trim();
const UserPassword = userPassword.trim();

if (existedUserLogin === UserLogin || existedUserPassword === UserPassword) {
    alert (`Добро пожаловать ${UserLogin}`)
} else {
    alert ("Логин или Пароль введены неверно!")
};












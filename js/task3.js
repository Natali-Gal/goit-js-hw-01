const authorization = confirm('Авторизация администратора');
console.log(authorization);

const userInput = prompt('Введите пароль');
console.log(userInput);
const ADMIN_PASSWORD = 'jqueryismyjam';
console.log(userInput === ADMIN_PASSWORD);
let message;

if (userInput === null) {
    message = 'Отменено пользователем!';
    
} else if (userInput === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!'
    
} else {
    message = 'Доступ запрещен, неверный пароль!'
    
} 
console.log(message);
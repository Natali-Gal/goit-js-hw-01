const credits = 23580;
const pricePerDroid = 3000;
const userInput = prompt('Количество дроидов');
const userInputNumber = Number(userInput);
let totalPrice;

if (userInput === null) {
    console.log('Отменено пользователем!');
}   else if (isNaN(userInputNumber)) {
    console.log(`Введите число`);
}   else {
        totalPrice = pricePerDroid*userInputNumber;
       
    if (credits >= totalPrice) {
        let rest = credits - totalPrice;
        console.log(`Вы купили ${userInputNumber} дроидов, на счету осталось ${rest} кредитов.`);
        
    } else {
        console.log ('Недостаточно средств на счету!');
    } 
}

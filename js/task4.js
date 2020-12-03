const credits = 23580;

const pricePerDroid = 3000;

const userInput = prompt('Количество дроидов');
const userInputNumber = Number(userInput);

const totalPrice = pricePerDroid*userInputNumber ;

const rest = credits - totalPrice ;

const sum = `Вы купили ${userInputNumber} дроидов, на счету осталось ${rest} кредитов.`


if (userInput === null) {
    console.log('Отменено пользователем!');
   
} else if (credits >= totalPrice) {
        console.log (sum);
        
} else {
   console.log ('Недостаточно средств на счету!');
   
}

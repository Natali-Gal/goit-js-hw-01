const credits = 23580;

const pricePerDroid = 3000;

const userInput = prompt('Количество дроидов');

const totalPrice = pricePerDroid*userInput;

const rest = credits - totalPrice ;

const sum = `Вы купили ${userInput} дроидов, на счету осталось ${rest} кредитов.`

if (userInput === null) {
    console.log('Отменено пользователем!');

} else if (credits >= totalPrice) {
        console.log (sum);
} else {
   console.log ('Недостаточно средств на счету!');
}

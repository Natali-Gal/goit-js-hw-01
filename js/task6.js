let total = 0;
while (true) {
   let input = prompt('Введите число');

   if (input === null) {
       console.log ('Отменено пользователем');
       break;
   }

   input = Number(imput);

   const notNumber = Number.isNaN(input);

   if (notNumber) {
       alert(`Было введено не число, попробуйте еще раз`);
       continue;
   }

   total += input;
}
alert(`Общая сумма чисел равна ${total}`);


/*let input;
let total = 0;
do {
  input = prompt('Введите число');
if (Number.isInteger(Number(input)) {
  total += Number(input);
} else {
  alert(`Было введено не число, попробуйте еще раз`);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);*/
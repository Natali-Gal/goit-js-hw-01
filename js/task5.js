const country = prompt ('Укажите страну доставки');
const china = 'Китай';
const chili = 'Чили';
const australia = 'Австралия';
const india = 'Индия';
const jamaica = 'Ямайка';

let price = 0;

let result =' ';
for (let i = 0; i < country.length; i++ ) {
    if (i === 0) {
        result += country[i].toUpperCase();
        continue;
    }
    result += country[i].toLowerCase();
}

switch (country) {
    case china:
        price = 100;
        break;
    case chili:
        price = 250;
        break;
    case australia:
        price = 170;
        break;
    case india:
        price = 80;
        break;
    case jamaica:
        price = 120;
        break;
    default:
        alert(`В вашей стране доставка не доступна`);
}

alert (`Доставка в ${сountry} будет стоить ${price} кредитов`);


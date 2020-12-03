const CHINA = "китай";
const CHILIE = "чили";
const AUSTRALIA = "австралия";
const INDIA = "индия";
const JAMAICA = "ямайка";
let country;
let userCountry = prompt(`Введите страну доставки`);
userCountry = userCountry.toLowerCase();
switch (userCountry) {
    case CHINA:
        country = 'Китай';
        alert(`Доставка в ${country} будет стоить 100 кредитов`);
        break;
    case CHILIE:
        country ='Чили';
        alert(`Доставка в ${country} будет стоить 250 кредитов`);
        break;
    case AUSTRALIA:
        country = 'Австралия';
        alert(`Доставка в ${country} будет стоить 170 кредитов`);
        break;
    case INDIA:
        country = 'Индия';
        alert(`Доставка в ${country} будет стоить 80 кредитов`);
        break;
    case JAMAICA:
        country = 'Ямайка';
        alert(`Доставка в ${country} будет стоить 120 кредитов`);
        break;
    default:
        alert(`В вашей стране доставка не доступна`);
}
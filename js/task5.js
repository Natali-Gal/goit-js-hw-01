const CHINA = "китай";
const CHILIE = "чили";
const AUSTRALIA = "австралия";
const INDIA = "индия";
const JAMAICA = "ямайка";
let userCountry = prompt(`Введите страну доставки`);
userCountry = userCountry.toLowerCase();
let price;
    switch (userCountry) {
        case CHINA:
            price = 100;
            break;
        case CHILIE:
            price = 250;
            break;
        case AUSTRALIA:
            price = 170;
            break;
        case INDIA:
            price = 80;
            break;
        case JAMAICA:
            price = 120;
            break;     
        default:  
        alert(`В вашей стране доставка не доступна`);   
    }
alert(`Доставка в ${userCountry} будет стоить ${price} кредитов`);




   



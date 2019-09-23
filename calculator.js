//Declarations
const propertySize = document.getElementById('property-size');
const country = document.getElementById('country');
const currency = document.getElementById('currency');
const cleaningSupplies = document.getElementById('cleaning-supplies');

const townCol = document.getElementById('col-town');
const townEcu = document.getElementById('ecu-town');
const townMex = document.getElementById('mex-town');
const townUs = document.getElementById('us-town');
let quotedPrice = document.getElementById('quote-calculation');

// welcome message
quotedPrice.innerHTML = '🖐';
currency.innerHTML = 'Hi!';


//Unitiated values
let converted

//size selector     
let sizeSelected = propertySize.value;
let priceBySize=0;


//Town selector
let priceByTown=0;
let currencySymbol ='';
const currencyExchange = (usd) =>{
    let amount
    switch (currencySymbol) {
        case ('cop'):
            amount = usd*3500;
            converted = 'cop';
            break;
        case ('mxn'):
            amount = usd*20;
            converted = 'mxn';
            break;
        default: 
            amount = usd;
            converted = 'usd';
            console.log('no change on currency');
            break;
    }
    return amount;
};

// Cleaning supplies required by customer
let priceBySupplies='';

cleaningSupplies.addEventListener('change', (e)=>{
    switch (e.target.value) {
        case ('no'):
            priceBySupplies = 0;
            break;
        case ('yes'):
            priceBySupplies = 3;
            break;
        default:
            console.log('no change');
            break;
    }
    quotation();
})


// let citySelected = citySelector.value;
// let priceByLocation = 0;
// let availableLocations = {
//     'Playa del Carmen': 0,
//     'Playacar': 100,
//     'Mayakoba': 100,
//     'Cancun': 200,
//     'Tulum': 200,
//     'Xpu Ha': 160,
//     'Xelhá': 190,
//     'Akumal': 175,
//     'Chacalal': 180,
//     'Chemuyil': 185,
//     'Punta Maroma': 140,
//     'Puerto Morelos': 160,
//     'Puerto Aventuras': 150
// }

//tools selector
// let toolsSelected = citySelector.value;
// let priceByTools = 1;
// let availableTools = {
//     "0": 1, //No cleaning liquids
//     "1": 1.1, //Non eco friendly products
//     "2": 1.3 //Only eco friendly products
// }

//total price
let totalQuote;
let quotation = () => {
    converted = 'usd'
    if (typeof priceBySize !== 'string') {
        if (typeof priceByTown !== 'string') {
            if (priceBySize == 0) {
                quotedPrice.innerHTML = 'Size?';
                console.log('Size?')
            } else if(typeof priceBySupplies !== 'string') {
                currency.innerHTML = currencySymbol;
                console.log(`converted ${converted} and currency symbol ${currencySymbol}`)
                if (converted !== currencySymbol) {
                    let convertedPriceSize = currencyExchange(priceBySize);
                    let convertedPriceSupplies = currencyExchange(priceBySupplies);
                    totalQuote = convertedPriceSize+priceByTown+convertedPriceSupplies;
                } else {
                totalQuote = priceBySize+priceByTown+priceBySupplies;
                }
                quotedPrice.innerHTML = Math.ceil(totalQuote);
                console.log(totalQuote);
            } else {
                currency.innerHTML = '';
                quotedPrice.innerHTML = 'Supplies?';
                console.log('Supplies?')
            };
        } else {
            currency.innerHTML = '';
            quotedPrice.innerHTML = 'Town?';
            console.log('Town?')
        }

    } else {
        quotedPrice.innerHTML = 'Ask for a quote';
        currency.innerHTML = '';
        console.log('Ask for a quote');
    }
};

// Property size input

propertySize.addEventListener('change', (e) => {
    converted = 'usd';
    switch (e.target.value) {
        case '-60':
            sizeSelected = e.target.value;
            priceBySize =24;
            break;
        case '61-80':
            sizeSelected = e.target.value;
            priceBySize =32;
            break;
        case '81-100':
            sizeSelected = e.target.value;
            priceBySize =40;
            break;
        case '101-120':
            sizeSelected = e.target.value;
            priceBySize =48;
            break;
        case '121-140':
            sizeSelected = e.target.value;
            priceBySize =56;
            break;
        case '141-160':
            sizeSelected = e.target.value;
            priceBySize =64;
            break;
        case '161-180':
            sizeSelected = e.target.value;
            priceBySize =72;
            break;
        case '181-200':
            sizeSelected = e.target.value;
            priceBySize =80;
            break;
        case '+200':
            sizeSelected = e.target.value;
            priceBySize = '';
            break;
        default: console.log('Select the size');
            break;
    }
    quotation();
});

// Currency selector

country.addEventListener('change', (e)=>{
    priceByTown = '';
    townCol.value = 'not-selected';
    townEcu.value = 'not-selected';
    townMex.value = 'not-selected';
    townUs.value='not-selected';
    quotation();
});

townCol.addEventListener('change', (e)=>{
    switch (e.target.value) {
        case 'Guatape':
            priceByTown=4000;
            break;
        case 'Cartagena':
            priceByTown = 4500;
            break;
        case 'Santa Marta':
            priceByTown = 5000;
            break;
        default:
            priceByTown='';
            break;
    };
    currencySymbol = 'cop';
    quotation();
});

townEcu.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'Guayaquil':
            priceByTown = 0.6;
            break;
        case 'Quito':
            priceByTown = 0.6;
            break;
        default:
            priceByTown = '';
            break;
    };
    currencySymbol = 'usd';
    quotation();
});

townMex.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'Cancun':
            priceByTown = 40;
            break;
        case 'Tulum':
            priceByTown = 70;
            break;
        case 'Puerto Aventuras':
            priceByTown = 40;
            break;
        case 'Playa del Carmen':
            priceByTown = 50;
            break;
        default:
            priceByTown = '';
            break;
    };
    currencySymbol = 'mxn';
    quotation();
});

townUs.addEventListener('change', (e) => {
    switch (e.target.value) {
        case 'Miami Beach':
            priceByTown = 10;
            break;
        case 'Fort Lauderdale':
            priceByTown = 10;
            break;
        case 'West Palm Beach':
            priceByTown = 10;
            break;
        default:
            priceByTown = '';
            break;
    };
    currencySymbol = 'usd';
    quotation();
});

// frequencySelector.addEventListener('change', (e) => {
//     switch (e.target.value) {
//         case '1':
//             frequencySelected = e.target.value;
//             priceByFrequency = 0.9;
//             break;
//         case '2':
//             frequencySelected = e.target.value;
//             priceByFrequency = 0.95;
//             break;
//         case '3':
//             frequencySelected = e.target.value;
//             priceByFrequency = 0.98;
//             break;
//         case '4':
//             frequencySelected = e.target.value;
//             priceByFrequency = 0;
//             break;
//         case '5':
//             frequencySelected = e.target.value;
//             priceByFrequency = 50;
//             break;
//         default: console.log('Error');
//             break;
//     }
//     quotation();
// });

// citySelector.addEventListener('change', (e) => {
//     switch (e.target.value) {
//         case '1':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '2':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '3':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '4':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '5':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '6':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '7':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '8':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '9':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '10':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '11':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '12':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         case '13':
//             citySelected = e.target.value;
//             priceByLocation = availableLocations[e.target[e.target.value - 1].innerText];
//             // console.log(priceByLocation);
//             break;
//         default: console.log('Error');
//             break;
//     }
//     quotation();
// });

// toolsToBring.addEventListener('change', (e) => {
//     switch (e.target.value) {
//         case '0':
//             toolsSelected = e.target.value;
//             priceByTools = availableTools[e.target.value];
//             console.log(priceByTools);
//             break;
//         case '1':
//             toolsSelected = e.target.value;
//             priceByTools = availableTools[e.target.value];
//             console.log(priceByTools);
//             break;
//         case '2':
//             toolsSelected = e.target.value;
//             priceByTools = availableTools[e.target.value];
//             console.log(priceByTools);
//             break;
//         default: console.log('Error');
//             break;
//     }
//     quotation();
// });

// console.log(quotedPrice);

// const quoteButton = document.getElementById('--').addEventListener('click', (e) => {
//     console.log('Ready to send');
// });
let userNumber = parseInt(prompt('Inserisci un numero compreso tra 1 e 3:'));

console.log('userNumber', userNumber, typeof userNumber);

while (isNaN(userNumber)) {
    userNumber = parseInt(prompt('Numero non valido. Inserisci un numero compreso tra 1 e 3:'));
}

console.log('userNumber 2', userNumber, typeof userNumber);

// Sintassi costrutto condizionale if-else
if (userNumber == 1) {
    console.log('Sei primo');
}
else if (userNumber == 2) {
    console.log('Sei secondo');
}
else if (userNumber == 3) {
    console.log('Sei terzo');
}
else {
    console.log('Non sei sul podio');
}

switch (userNumber) {

    case 1:         // if (userNumber == 1)
        console.log('SWITCH', 'Sei primo');
        break;

    case 2:         // else if (userNumber == 2)
        console.log('SWITCH', 'Sei secondo');
        break;

    case 3:         // else if (userNumber == 3)
        console.log('SWITCH', 'Sei terzo');
        break;

    default:         // else
        console.log('SWITCH', 'Non sei sul podio');
        break;

}

let orderStatus = 'shipped';

switch (orderStatus) {
    case 'shipped':
        console.log('Ordine spedito');
        break;

    case 'to-be-paid':
        console.log('Ordine in attesa di pagamento');
        break;

    default:
        console.log('Ordine non trovato');
        break;
}
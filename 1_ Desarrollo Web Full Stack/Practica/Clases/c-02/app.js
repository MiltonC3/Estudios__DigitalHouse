let readlineSync = require('readline-sync');
 
// Wait for user's response.
var userName = readlineSync.question('Podrias indicarme tu nombre? ');
console.log('Hola ' + userName + '!');
 
// Handle the secret text (e.g. password).
var favFood = readlineSync.question('Cual es tu comida favorita? ', {
  hideEchoBack: false // The typed text on screen is hidden by `*` (default).
});
console.log('Oh, ' + userName + ' ama ' + favFood + '!');

var yearsOld = readlineSync.question('Cual es tu edad? ', {
  hideEchoBack: false // The typed text on screen is hidden by `*` (default).
});

if(yearsOld>=18){
    console.log('Sos mayor de edad')
}
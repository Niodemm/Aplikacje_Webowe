const prompt = require('prompt-sync')({sigint: true});
console.log("Witaj w kalkulatorze");


const op = prompt('Podaj operator: ');
const jeden = parseInt(prompt('podaj pierwsza liczbe '));
const dwa = parseInt(prompt('podaj druga liczbe '));
let wynik;
    switch(op){
        case '+':
            wynik = jeden + dwa;
            console.log(`${jeden} + ${dwa} = ${wynik}`);
        break;

        case '-':
            wynik = jeden - dwa;
            console.log(`${jeden} - ${dwa} = ${wynik}`);
        break;

        default:
            console.log('niepoprawny operator');
        break;
}
  
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let total = 0;
function getNumber() {
    readline.question('Enter a number (or "stop"): ', num => {
        if (num !== 'stop') {
            total += parseInt(num);
            getNumber();
        } else {
            console.log('Sum of all entered numbers: ' + total);
            readline.close();
        }
    });
} 

getNumber();

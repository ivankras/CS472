const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

readline.question('What is your name? ', name => {
    console.log(`Welcome ${name}`);
    readline.question('What is your age?', age => {
        const allowed = 'You\'re allowed to get a drivers license in Iowa';
        const notAllowed = 'You\'re not allowed to drive in Iowa';
        console.log(age <= 16 ? notAllowed : allowed);
        readline.close();
    });
});

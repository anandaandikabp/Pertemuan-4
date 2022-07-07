// core module
// file system

// const fs = require('fs');

// write file
// fs.writeFileSync('test.txt','Hello World secara nyata!');

// read file
// fs.readFile('test.txt','utf-8', (err,data) => {
//     if (err) throw err;
//     console.log(data); {
        
//     }
// });

// input readline
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('What is your name? ', (name,nomor,email) => {
//     console.log(`Thank you ${name}`, `Dengan nomor ${nomor}`, `dan email ${email}`);

//     rl.close();
// });

// task
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Nama? ", function(name) {
    rl.question("Nomor HP? ", function(nomor) {
        rl.question("Email? ", function(email) {

            console.log(`Nama diriku ${name}, bernomor hp ${nomor}, having emailnya ${email}`);
            rl.close();
        })
    });
});



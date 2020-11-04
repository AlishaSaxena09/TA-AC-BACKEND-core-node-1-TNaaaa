var fs = require('fs');

var read = fs.readFile('./content.md');
console.log('task1');


//Async
console.log("Task0")
setTimeout(() => {
    fs.readFile('./content.md', (err, file) => {
        console.log(Error, "task1");
})
}, 1000);


var buff1 = Buffer.alloc(10);
console.log(buff1);

buff1.write("Welcome to Buffer")
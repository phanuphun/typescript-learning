const math = require('./math') // เอามาทั้ง obj
const { sum , pi } = require('./math') // เอามาเฉพาะ method 
const cowsay = require('cowsay')

console.log(math.pi ,' <-- obj.method');
console.log(math.sum(5,6));

console.log(pi , '<-- method specific');
console.log(sum(1,6));

console.log(cowsay.say({text:'Hello there!'}));

// how to run
// node index.js

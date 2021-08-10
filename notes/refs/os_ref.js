const os = require('os');

// === Платформа

console.log(os.platform())

// === Архитектура

console.log(os.arch());

// === Информация о процессоре

console.log(os.cpus())

// === Свободная память

console.log(os.freemem())

// === Сколько всего памяти

console.log(os.totalmem())

// === Корневая папка

console.log(os.homedir())

// === Сколько система работает в секундах

console.log(os.uptime())
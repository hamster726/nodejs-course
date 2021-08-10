// Работа с путями

const path = require('path');

console.log(__filename);
console.log(path.basename(__filename)); // название файла
console.log(path.dirname(__filename)); // где лежит файл
console.log(path.extname(__filename)); // расширение файла

console.log(path.parse(__filename)); // всё в одном

console.log(path.join(__dirname, 'testFolder', 'second.html')); // генерация путей
console.log(path.resolve(__dirname, 'testFolder', 'second.html')); // ???
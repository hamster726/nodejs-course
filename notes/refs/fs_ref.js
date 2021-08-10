// === Работа с файлами и  папками
const path = require('path')
const fs = require('fs'); // file system

// === создать папку

// fs.mkdir(path.join(__dirname, 'notes'), (err) => {
//   if (err) throw err;
//   console.log('Folder created.');
// });

// === создать файл в папке note с содержанием "Hello World"

// fs.writeFile(path.join(__dirname, 'notes', 'mynotes.txt'), 'Hello World!', err => {
//   if (err) throw err;
//   console.log('File created.');
// })

// === добавить в файл в папке notes содержание "Hello World"

// fs.appendFile(path.join(__dirname, 'notes', 'mynotes.txt'), '\r\nfrom append file :)',
//   err => {
//     if (err) throw err;
//     console.log('file changed')
//   })

// === считывать данные с файла

// fs.readFile(path.join(__dirname, 'notes', 'mynotes.txt'),  'utf-8', (err,data) => {
//   if (err) throw err;
//   console.log(data);
// })

// === переименование файла

fs.rename(
  path.join(__dirname, 'notes', 'mynotes.txt'),
  path.join(__dirname, 'notes', 'mynotes.txt')
  , err => {
  if (err) throw err
    console.log('File renamed');
})
/*const http = require('http'); Создание сервера

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});*/
/*Конвертер валют
const CC = require('currency-converter-lt')
let currencyConverter = new CC({from:"USD", to:"RUB", amount:100})

currencyConverter.convert().then((response) => {
  console.log(response)
})
*/

/*Информационное расширение о ОС
const os = require('os')
let res = os.platform()
console.log(res)
*/
/*Подключение своих js файлов и методов в них
let a = 5
let b = 4
const my_math = require('./math')
let res = my_math.plus(a,b)
console.log(res)
*/
/*
const fs = require('fs')

/*
let res = fs.readFile('data.txt', 'utf-8')

console.log(res)

fs.writeFile('data.txt', res + '\nHello world')
/*
fs.readFile('data.txt', 'utf-8', (err, data) => {
  fs.writeFile('data.txt',data + '\nSomeText', (err, data) =>{
    console.log('Its Ok!')
  })
})
*/



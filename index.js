// // Module package CORE => node.js ornatilganda birga ornatiladigan packgelar
// setTimeout(()=> {
//   console.log("Hello world");
// }, 5000);

// let number = 0;
// setInterval(() => {
//   // console.log("hisob :", number);
//   number++;
// }, 1000);

// const fs = require('fs');
// const data = fs.readFileSync('./input.txt', 'utf8');
// // console.log(data);

// // console.log("=============================");

// fs.writeFileSync('./input.txt', `${data} \n\t\t by package.json`);
// const newData = fs.readFileSync('./input.txt', 'utf8');
// // console.log(newData);

// // Module package EXTERNAL => npm install yordamida ornatiladigan packgelar
// const moment = require('moment');

// setInterval(() => {
//   const date = moment().format('YYYY-MM-DD hh:mm:ss');
//   const day = date.split(" ")[0];
//   const time = date.split(" ")[1];
//   // console.log(`Bugungi kun: ${day} \nHozirgi vaqt: ${time}`);
// }, 5000);

// const inquirer = require('inquirer');
// inquirer
// .prompt([{type:'input', name:'raqam', message:'biri bir raqam kiriting? '}])
// .then((answar) => {
//     // console.log('man kiritgan raqam: ', answar.raqam);
//   })
//   .catch((err) => console.log(err));

// const moment2 = require('moment');
// const date = moment2().format('YYYY/MM/DD');
// const validator = require('validator');
// // console.log(validator.isEmail('foo@bar.com'));
// // console.log(validator.isDate(date));
// // console.log(validator.isInt("100"));
// // console.log(validator.isIP("100.10.22.3"));


// const { v4: uuidv4 } = require('uuid');
// const randomStr = uuidv4();
// // console.log(randomStr);

// const chalk = require('chalk');
// const log = console.log;

// // log(chalk.blue("hello") + ` ${randomStr} ` + chalk.red("!"))


// Module package FILE  => biz ozimi tomonimizdan yaratilgan module packagelar

const calculate = require('./hisob.js');

const natija1 = calculate.kopaytirish(100, 5);
console.log(natija1);
console.log('=================================');
const natija2 = calculate.bolish(10, 50);
console.log(natija2);
console.log('=================================');
const natija3 = calculate.qoshish(10, 550);
console.log(natija3);
console.log('=================================');
const natija4 = calculate.ayrish(10, 51);
console.log(natija4);


const Account = require("./account.js");

Account.tellMeAboutClass();

Account.tellMeTime();

const myAccount = new Account('Kai', 500000, 98812312012);
myAccount.givMeDetails();

myAccount.makeDeposit(100000);

myAccount.withdrawMoney(5000000);

myAccount.withdrawMoney(50000);

myAccount.tellMeBlance();
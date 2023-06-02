#! /usr/bin/env node


import inquirer from 'inquirer';
import figlet from 'figlet';
import chalk from 'chalk';
const welcome =async () => {
    console.log(figlet.textSync('calculator'));
  const input = await inquirer.prompt([
{
    type:'number',
    name:'num1',
    message:' Enter First Number',

},
{
    type:'number',
    name:'num2',
    message:' Enter Second Number',

},
{
    type:'list',
    name:'operator',
    message:' Select Operator',
    choices:['+','-','*','/'],
},

  ]);

  if(input.operator == "+"){
    console.log(chalk.bgBlue(input.num1+input.num2));
  
  }
  
  else if(input.operator == "-"){
    console.log(chalk.bgBlue(input.num1-input.num2));
  }
  else if(input.operator == "*"){
    console.log(chalk.bgBlue(input.num1+input.num2));
  }
  else if(input.operator == "/"){
    console.log(chalk.bgBlue(input.num1/input.num2));
  }
  else
  {
    console.log(chalk.bgBlue("invalid Operator"));
  }

}
await welcome();
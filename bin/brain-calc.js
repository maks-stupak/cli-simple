#!/usr/bin/env node

import calcGame from '../src/games/calc-game.js';
import cli from '../src/utils/cli.js';

console.log('Welcome to the Brain Games!');
const user = cli('May I have your name?');
console.log(`Hello, ${user}!`);
console.log('What is the result of the expression?');
calcGame(user);

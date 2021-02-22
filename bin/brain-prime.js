#!/usr/bin/env node

import primeGame from '../src/games/prime-game.js';
import cli from '../src/utils/cli.js';

console.log('Welcome to the Brain Games!');
const user = cli('May I have your name?');
console.log(`Hello, ${user}!`);
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
primeGame(user);

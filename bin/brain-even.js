#!/usr/bin/env node

import evenGame from '../src/games/even-game.js';
import cli from '../src/utils/cli.js';

console.log('Welcome to the Brain Games!');
const user = cli('May I have your name?');
console.log(`Hello, ${user}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
evenGame(user);

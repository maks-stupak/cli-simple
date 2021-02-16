#!/usr/bin/env node

import gcdGame from '../src/games/gcd-game.js';
import cli from '../src/utils/cli.js';

console.log('Welcome to the Brain Games!');
const user = cli('May I have your name?');
console.log(`Hello, ${user}!`);
console.log('Find the greatest common divisor of given numbers.');
gcdGame(user);

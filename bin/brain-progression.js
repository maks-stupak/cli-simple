#!/usr/bin/env node

import progressionGame from '../src/games/progression-game.js';
import cli from '../src/utils/cli.js';

console.log('Welcome to the Brain Games!');
const user = cli('May I have your name?');
console.log(`Hello, ${user}!`);
console.log('What number is missing in the progression?');
progressionGame(user);

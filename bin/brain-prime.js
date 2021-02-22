#!/usr/bin/env node

import primeGame from '../src/games/prime-game.js';
import showGreeting from '../src/greeting.js';

const gameQuest = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const user = showGreeting(gameQuest);

primeGame(user);

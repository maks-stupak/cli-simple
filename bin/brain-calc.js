#!/usr/bin/env node

import calcGame from '../src/games/calc-game.js';
import showGreeting from '../src/greeting.js';

const gameQuest = 'What is the result of the expression?';
const user = showGreeting(gameQuest);
calcGame(user);

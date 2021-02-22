#!/usr/bin/env node

import gcdGame from '../src/games/gcd-game.js';
import showGreeting from '../src/greeting.js';

const gameQuest = 'Find the greatest common divisor of given numbers.';
const user = showGreeting(gameQuest);

gcdGame(user);

#!/usr/bin/env node

import evenGame from '../src/games/even-game.js';
import showGreeting from '../src/greeting.js';

const gameQuest = 'Answer "yes" if the number is even, otherwise answer "no".';
const user = showGreeting(gameQuest);
evenGame(user);

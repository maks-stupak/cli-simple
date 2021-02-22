#!/usr/bin/env node

import progressionGame from '../src/games/progression-game.js';
import showGreeting from '../src/greeting.js';

const gameQuest = 'What number is missing in the progression?';
const user = showGreeting(gameQuest);

progressionGame(user);

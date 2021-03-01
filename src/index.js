import readlineSync from 'readline-sync';
import showGreeting from './greeting.js';

const roundsCountToWin = 3;

const playGame = (gameRule, getQuestion, getCorrectAnswer) => {
  const userName = showGreeting(gameRule);

  for (let i = 1; i <= roundsCountToWin; i += 1) {
    const question = getQuestion();
    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

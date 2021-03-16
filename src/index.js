import readlineSync from 'readline-sync';

const roundsCountToWin = 3;

const playGame = (gameRule, createGameRound) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(gameRule);

  for (let i = 1; i <= roundsCountToWin; i += 1) {
    const gameRound = createGameRound();
    console.log(`Question: ${gameRound.question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameRound.correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${gameRound.correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

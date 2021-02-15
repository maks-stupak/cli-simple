import cli from './utils/cli.js';

const playGame = (userName, questionFunc, correctAnswerFunc) => {
  const maxRoundsNum = 3;

  for (let i = 1; i <= maxRoundsNum; i += 1) {
    const question = questionFunc();
    console.log(`Question: ${question}`);

    const userAnswer = cli('Your answer:');
    const correctAnswer = correctAnswerFunc(question);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      break;
    }

    if (i === 3) {
      console.log(`Congratulations, ${userName}!`);
      break;
    }
  }
};

export default playGame;

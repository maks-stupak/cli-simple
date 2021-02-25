import makeDialog from './utils/cli.js';

const maxRoundsNum = 3;

const playGame = (userName, questionFunc, correctAnswerFunc) => {
  for (let i = 1; i <= maxRoundsNum; i += 1) {
    const question = questionFunc();
    console.log(`Question: ${question}`);

    const userAnswer = makeDialog('Your answer:');
    const correctAnswer = correctAnswerFunc(question);

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;

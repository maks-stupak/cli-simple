import cli from './cli.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const getRandom = () => Math.floor(Math.random() * 100);

const playEvenGame = () => {
  const userName = cli('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctCounts = 0;

  const iter = () => {
    if (correctCounts === 3) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    const randomNum = getRandom();
    console.log(`Question: ${randomNum}`);
    const userAnswer = cli('Answer:');
    const correctAnswer = isEven(randomNum);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctCounts += 1;
      iter();
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
    }
  };

  iter();
};

export default playEvenGame;

import playGame from '../index.js';
import getRandomNum from '../utils/random-num.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

const createQuestion = () => {
  const randomNum = getRandomNum();

  console.log(`Question: ${randomNum}`);
  return randomNum;
};

const getCorrectAnswer = (question) => isEven(question);

export default (userName) => {
  playGame(userName, createQuestion, getCorrectAnswer);
};

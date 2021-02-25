import makeDialog from './utils/cli.js';

export default (gameQuest) => {
  console.log('Welcome to the Brain Games!');
  const user = makeDialog('May I have your name?');
  console.log(`Hello, ${user}!`);

  if (gameQuest) {
    console.log(gameQuest);
  }

  return user;
};

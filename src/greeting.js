import readlineSync from 'readline-sync';

export default (gameQuest) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}!`);

  if (gameQuest) {
    console.log(gameQuest);
  }

  return user;
};

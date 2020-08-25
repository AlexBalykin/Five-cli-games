import readlineSync from 'readline-sync';

export const quantityRounds = 3;

export default (description, roundsForUser) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (const round of roundsForUser) {
    console.log(`Question: ${round[0]}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (String(round[1]) === (userAnswer)) {
      console.log('Correct!');
    }
    if (String(round[1]) !== (userAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${round[1]}. Let's try again ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

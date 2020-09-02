import readlineSync from 'readline-sync';

export const quantityRounds = 3;

export default (description, roundsForUser) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);

  for (const round of roundsForUser) {
    const [roundIndexFirst, roundIndexSecond] = round;

    console.log(`Question: ${roundIndexFirst}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (roundIndexSecond === (userAnswer)) {
      console.log('Correct!');
    }

    if (roundIndexSecond !== (userAnswer)) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${roundIndexSecond}.
Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

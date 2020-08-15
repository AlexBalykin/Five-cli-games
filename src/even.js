import readlineSync from 'readline-sync';

const evenOrNotEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const even = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const arr = [15, 6, 7];
  for (const i of arr) {
    console.log(`Question: ${i}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (evenOrNotEven(i) === userAnswer) {
      console.log('Correct!');
    }

    if (evenOrNotEven(i) !== userAnswer) {
      return console.log(`'"yes" is wrong answer ;(. Correct answer was "no". Let's try again ${userName}`);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default even;

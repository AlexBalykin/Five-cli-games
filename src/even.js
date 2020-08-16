import readlineSync from 'readline-sync';

const rnd = (num) => Math.floor(Math.random() * Math.floor(num));

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
  const arr = [rnd(15), rnd(15), rnd(15)];
  for (const i of arr) {
    console.log(`Question: ${i}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (evenOrNotEven(i) === userAnswer) {
      console.log('Correct!');
    }

    if (evenOrNotEven(i) !== userAnswer) {
      return console.log(
        `'"yes" is wrong answer ;(. Correct answer was "no". Let's try again ${userName}`
      );
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default even;

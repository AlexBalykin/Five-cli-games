import readlineSync from 'readline-sync';

const rnd = (num) => Math.floor(Math.random() * Math.floor(num));

const strNum = () => {
  let a = String(rnd(10));
  let b = String(rnd(10));
  return `${a} + ${b}`;
};

const calc = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  const arr = [strNum(), strNum(), strNum()];
  for (const i of arr) {
    console.log(`Question: ${i}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (eval(i) === Number(userAnswer)) {
      console.log('Correct!');
    }

    if (eval(i) !== Number(userAnswer)) {
      return console.log(
        `${userAnswer} is wrong answer ;(. Correct answer was ${eval(
          i
        )}. Let's try again ${userName}`
      );
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calc;


import gameEngine from '../games engine.js';

const generateRandomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getSign = () => {
  const operator = generateRandomNumber(0, 2);
  const operators = '+-*';
  return operators[operator];
};

const calculate = (number1, number2, sign) => {
  let result = 0;
  switch (sign) {
    case '+':
      result = number1 + number2;
      break;
    case '-':
      result = number1 - number2;
      break;
    case '*':
      result = number1 * number2;
      break;
    default:
      return 'Oops';
  }
  return result;
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(1, 10);
  const sign = getSign();

  const question = `${number1} ${sign} ${number2}`;
  const answer = calculate(number1, number2, sign);

  return [question, answer];
};

const quantityRounds = 3;

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < quantityRounds; i += 1) {
    rounds.push(generateRound());
  }

  return rounds;
};

const roundsForUser = generateRounds();
const description = 'What is the result of the expression?';

const playInCalculator = () => gameEngine(description, roundsForUser);

export default playInCalculator;

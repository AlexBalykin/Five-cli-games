import gameEngine, { quantityRounds } from '../engine.js';

import generateRandomNumber from '../tools.js';

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

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < quantityRounds; i += 1) {
    rounds.push(generateRound());
  }

  return rounds;
};

const roundsForUser = generateRounds();
const description = 'What is the result of the expression?';

export default () => gameEngine(description, roundsForUser);

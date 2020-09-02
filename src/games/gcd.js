import gameEngine, { quantityRounds } from '../engine.js';

import generateRandomNumber from '../tools.js';

const getGcd = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGcd(b, a % b);
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 10);
  const number2 = generateRandomNumber(1, 10);

  const question = `${number1} ${number2}`;
  const answer = getGcd(number1, number2);
  return [question, String(answer)];
};

const generateRounds = () => {
  const rounds = [];

  for (let i = 0; i < quantityRounds; i += 1) {
    rounds.push(generateRound());
  }

  return rounds;
};

const roundsForUser = generateRounds();
const description = 'Find the greatest common divisor of given numbers.';

export default () => gameEngine(description, roundsForUser);

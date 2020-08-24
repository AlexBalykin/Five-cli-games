import gameEngine from '../engine.js';

import { generateRandomNumber, quantityRounds } from '../index.js';

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
const description = 'Find the greatest common divisor of given numbers.';

const playGcd = () => gameEngine(description, roundsForUser);
export default playGcd;

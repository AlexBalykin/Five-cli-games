import gameEngine from '../engine.js';

import { generateRandomNumber, quantityRounds } from '../tools.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 10);

  const question = `${number}`;
  const answer = isPrime(number) === true ? 'yes' : 'no';

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
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => gameEngine(description, roundsForUser);

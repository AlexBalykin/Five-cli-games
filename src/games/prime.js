import gameEngine, { quantityRounds } from '../engine.js';

import generateRandomNumber from '../tools.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  //* i < num - bad Big O;
  //* i <= num / 2 - good Big O;
  //* i <= Math.sqrt(num) - very good Big O;

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const generateRound = () => {
  const number = generateRandomNumber(1, 10);

  const question = `${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';

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

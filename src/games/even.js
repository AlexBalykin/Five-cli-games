import gameEngine, { quantityRounds } from '../engine.js';

import generateRandomNumber from '../tools.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const number = generateRandomNumber(1, 10);

  const question = String(number);
  const answer = isEven(number) ? 'yes' : 'no';

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
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => gameEngine(description, roundsForUser);

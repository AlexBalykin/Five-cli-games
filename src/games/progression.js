import gameEngine from '../engine.js';

import { generateRandomNumber, quantityRounds } from '../tools.js';

const progressionLength = 8;

const getQuestion = (number, step, secretNumber) => {
  const question = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const current = number + i * step;
    const element = i === secretNumber ? '..' : `${current}`;
    question.push(element);
  }

  return question.join(' ');
};

const generateRound = () => {
  const number = generateRandomNumber(1, 10);
  const step = generateRandomNumber(2, 4);
  const secretNumber = generateRandomNumber(0, progressionLength - 1);

  const question = getQuestion(number, step, secretNumber);
  const answer = number + step * secretNumber;

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
const description = 'What number is missing in the progression?';

export default () => gameEngine(description, roundsForUser);

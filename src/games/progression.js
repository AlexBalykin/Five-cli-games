import gameEngine from '../engine.js';

import { generateRandomNumber, quantityRounds } from '../index.js';

const progressionLength = 8;

const getQuestion = (number1, step, secretNumber) => {
  const quest = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const current = number1 + i * step;
    const element = i === secretNumber ? '..' : `${current}`;
    quest.push(element);
  }
  return quest.join(' ');
};

const generateRound = () => {
  const number1 = generateRandomNumber(1, 10);
  const step = generateRandomNumber(2, 4);
  const secretNumber = generateRandomNumber(0, progressionLength - 1);

  const question = getQuestion(number1, step, secretNumber);
  const answer = number1 + step * secretNumber;

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

const playProgression = () => gameEngine(description, roundsForUser);
export default playProgression;

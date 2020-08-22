import gameEngine from '../games engine.js';

const generateRandomNumber = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const getEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const generateRound = () => {
  const number = generateRandomNumber(1, 10);

  const question = `${number}`;
  const answer = getEven(number);

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
const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playInEven = () => gameEngine(description, roundsForUser);
export default playInEven;

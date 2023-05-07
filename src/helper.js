export const shuffleAnswer = (question) => {

  // we take all the answers from the question
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((answer) => ({ sort: Math.random(), value: answer })) // first we map through it and create a new array with them with a random sort value and the answers itself with a key called value
    .sort((a, b) => a.sort - b.sort) // then using sort method and the sort key we compare the values and sort them
    .map((answerObj) => answerObj.value); // lastly we take only the value keys value and create a new array of answers with a random order
};

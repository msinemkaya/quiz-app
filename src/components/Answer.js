export default function Answer({ answerText, index, handleSelectAnswer, currentAnswer, correctAnswer }){

  // as obvious as it is, it is for the answers
  const letterMapping = ['A', 'B', 'C', 'D']

  // we check if there is a currentAnswer that had been choosen and answer that we have choose(answerText) is equal to coorect answer or not
  const isCorrect = currentAnswer && answerText === correctAnswer

  // we check if the currentAnswer is equal to the answer that we had choosen 
  // and if that choosen current answer is equal to the current answer or not
  // we check the equality of the current answer and the answerText(which is the answer itself) to only effect the answer that we choosed
  // or else all the answers will go red
  const isWrong = currentAnswer === answerText && currentAnswer !== correctAnswer

  const correctClass = isCorrect ? 'correct-answer' : ''
  const wrongClass = isWrong ? 'wrong-answer' : ''
  const disabledClass = currentAnswer ? 'disabled-answer' : ''

  return(
    <>
      <div className={`answer ${correctClass} ${wrongClass} ${disabledClass}`} onClick={() => handleSelectAnswer(answerText)}>
        <div className='answer-letter'>
          {letterMapping[index]}
        </div>
        <div className='answer-text'>
          {answerText}
        </div>
      </div>
    </>
  );
}
export default function Answer({ answerText, index, handleSelectAnswer, currentAnswer, correctAnswer }){

  const letterMapping = ['A', 'B', 'C', 'D']
  const isCorrect = currentAnswer && answerText === correctAnswer
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
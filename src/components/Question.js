import useQuizContext from '../hooks/quiz-context-hook';
import Answer from '../components/Answer';

export default function Question() {
  const [quizState, dispatch] = useQuizContext();
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  const handleSelectAnswer = (answerText) => {
    dispatch({
      type: 'SELECT_ANSWER',
      payload: answerText,
    });
  };

  return (
    <>
      <div className='question'>{currentQuestion.question}</div>
      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <Answer
            answerText={answer}
            key={index}
            index={index}
            handleSelectAnswer={handleSelectAnswer}
            currentAnswer={quizState.currentAnswer}
            correctAnswer={currentQuestion.correctAnswer}
          />
        ))}
      </div>
    </>
  );
}

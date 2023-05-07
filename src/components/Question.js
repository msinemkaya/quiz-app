import useQuizContext from '../hooks/quiz-context-hook';
import Answer from '../components/Answer';

export default function Question() {
  const [quizState, dispatch] = useQuizContext();

  // we take our state from QuizContext providers value 
  // which is a useReducer hooks values
  // and we access to questions array inside of this state with the current questions index to get its value (an object)
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  // we give the answer text as a action payload to the dispatch method to be used inside the reducer
  // with the action type that is called select_answer
  // we pass this down as a prop for answer to use
  const handleSelectAnswer = (answerText) => {
    dispatch({
      type: 'SELECT_ANSWER',
      payload: answerText,
    });
  };

  console.log(quizState)

  return (
    <>
      {/* we display the current questions (which is an object inside of the questions array) question key to get to question */}
      <div className='question'>{currentQuestion.question}</div>
      <div className='answers'>
        {/* with using context provider we access to our state once again and wa map the answers' keys which is inside of our state */}
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

import Question from '../components/Question'
import useQuizContext from '../hooks/quiz-context-hook';

export default function Quiz(){
  
  // quizState is the initialState and/or state as mentioned in quiz.js
  const [quizState, dispatch] = useQuizContext()

  const handleClick = () => {
    dispatch({
      type: 'NEXT_QUESTION'
    })
  }

  return(
    <div className='quiz'>
      {quizState.showResults && (
        <div className='results'>
          <div className='congratulations'>congratulations!</div>
          <div className='results-info'>
            <div className=''>
              You Have Completed the Quiz.
            </div>
            <div className=''>
              You've got {quizState.correctAnswerCount} of {quizState.questions.length} right.
            </div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <>
          <div className='score'>
            Question: {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
          </div>
          <Question />
          <div className='next-button' onClick={handleClick}>Next Question</div>
        </>
     )}
    </div>
  );
}
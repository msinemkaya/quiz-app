import Question from '../components/Question'
import useQuizContext from '../hooks/quiz-context-hook';

export default function Quiz(){
  
  // quizState is the initialState and/or state as mentioned in quiz.js
  // useQuizContext is a custom hook that I created
  const [quizState, dispatch] = useQuizContext()

  // instead of using state we use reducer. so we use dispatch to let reducer know the type of the action that it should take
  const handleNextQuestion = () => {
    dispatch({
      type: 'NEXT_QUESTION'
    })
  }

  const handleRestart = () => {
    dispatch({
      type: 'RESTART'
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
            <div className='next-button' onClick={handleRestart}>Restart</div>
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <>
          <div className='score'>
            Question: {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
          </div>
          <Question />
          <div className='next-button' onClick={handleNextQuestion}>Next Question</div>
        </>
     )}
    </div>
  );
}
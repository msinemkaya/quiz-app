import Question from '../components/Question'
import useQuizContext from '../hooks/quiz-context-hook';

export default function Quiz(){
  
  // quizState is the initialState and/or state as mentioned in quiz.js
  const [quizState, dispatch] = useQuizContext()

  return(
    <div className='quiz'>
      <div className='score'>
        Question: {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
      </div>
      <Question />
    </div>
  );
}
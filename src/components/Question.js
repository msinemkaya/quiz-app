import useQuizContext from "../hooks/quiz-context-hook";
import Answer from '../components/Answer'

export default function Question(){
  
  const [quizState, dispatch] = useQuizContext()
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  return(
    <>
      <div className="question">
        {currentQuestion.question}
      </div>
      <div className='answers'>
        {quizState.answers.map((answer, index) => (
          <Answer answerText={answer} key={index} />
        ))}
      </div>
    </>
  );
}
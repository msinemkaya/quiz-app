import useQuizContext from "../hooks/quiz-context-hook";

export default function Question(){
  
  const [quizState, dispatch] = useQuizContext()
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex]

  return(
    <>
      <div className="question">
        {currentQuestion.question}
      </div>
    </>
  );
}
import { useContext } from "react";
import { QuizContext } from "../context/quiz";
import Question from '../components/Question'

export default function Quiz(){
  
  // quizState is the initialState and/or state as mentioned in quiz.js
  const [quizState, dispatch] = useContext(QuizContext)

  return(
    <div>
      <div className="score">
        Question: {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
      </div>
      <Question />
    </div>
  );
}
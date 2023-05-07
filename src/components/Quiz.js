import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export default function Quiz(){
  
  // quizState is the initialState and/or state as mentioned in quiz.js
  const [quizState, dispatch] = useContext(QuizContext)

  return(
    <>
      
    </>
  );
}
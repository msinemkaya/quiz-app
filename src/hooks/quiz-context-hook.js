import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export default function useQuizContext() {
  return useContext(QuizContext)
}
// a simple hook to prevent from importing and writing the same thing over and over again

import { useContext } from "react";
import { QuizContext } from "../context/quiz";

export default function useQuizContext() {
  return useContext(QuizContext)
}
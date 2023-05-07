import { createContext, useReducer } from "react";
import questions from '../data'
import { shuffleAnswer } from "../helper";

// initial state that we use with useState too. which is an obect with the given keys and values
const initialState = {
  questions, //this is the data.js that has a question a coorect answer and 3 incorrect ones within with every object of its
  currentQuestionIndex: 0,
  showResults: false,
  correctAnswerCount: 0,
  answers: shuffleAnswer(questions[0]), //helper fuction that we created to shuffle the order of the answers
  currentAnswer: '', //answer that we have choosen
};

// we are passing 2 arguments state and action
// state is as obvious our state and action is what action should that state take
// reducer is what contains the values we sent with dispatch to be used
const reducer = (state, action) => {
  switch (action.type) {
    // if we are at the las question we show the results by changing it to true
    // we increase the states (we use it as quizState) current questions index if show result is not true yet
    // if we dont show the results yet we shuffle the answers of the next question and set them again for the new question
    // otherwise if we are showing results we return an empty array since there are no answers left
    // and lastly we clear the current answers value for the new answers
    case 'NEXT_QUESTION': {
      const showResults = state.currentQuestionIndex === state.questions.length -1
      const index =  state.currentQuestionIndex
      const currentQuestionIndex = showResults ? index : index + 1
      const answers = showResults ? [] : shuffleAnswer(state.questions[currentQuestionIndex])
      return {
        ...state,
        currentQuestionIndex,
        showResults,
        answers,
        currentAnswer: ''
      }
    }

    case 'RESTART': {
      return initialState
    }

    // we pass the answer (answerText) onClick as a payload and if that is equal to states current questions correctAnswer keys value
    // then we increate the count by 1 else we do nothing and return it as it is
    // and we set the current answer as the answer that we triggered the onClick event on
    case 'SELECT_ANSWER': {
      const correctAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer 
      ? state.correctAnswerCount +1 
      : state.correctAnswerCount
      return {
        ...state,
        currentAnswer: action.payload,
        correctAnswerCount,
      }
    }
  }
}

// we create a context called QuizContext to be used in the components that wants to access to this context
export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {

  // useReducer is kind of a place where you put together all of your states in one place
  // when you have too many of them. it takes 2 arguments; initalState same as useState
  // and a reducer function where you store all your actions with that state ( like delete, add, edit) and 
  // what will happen if that action is taken.

  // normally it is used as
  // const [state, dispatch] = useReducer(reducer, initialState);
  // so this means value is containing the state and the dispatch
  // dispatch is what you use in handlers to pass the information of what the
  // type of action is and any other necessary information for reducer function to use
  // state is well as you might guess our initialState and/or state alltogether
  const value = useReducer(reducer, initialState)

  return(
  // we have created a custom provider for the reason beinq that we want to make our value changable
  <QuizContext.Provider value={value}>
    {children}
  </QuizContext.Provider>
  )
}
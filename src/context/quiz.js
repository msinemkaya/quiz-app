import { createContext, useReducer } from "react";

const initalState = {};

// we are passing 2 arguments state and action
// state is as obvious our state and action is what action should that state take
const reducer = (state, action) => {
  return state;
}

export const QuizContext = createContext()

export const QuizProvider = ({ children }) => {

  // useReducer is kind of a place where you put together all of your states in one place
  // when you have too many of them. it takes 2 arguments; initalState same as useState
  // and a reducer function where you store all your actions with that state ( like delete, add, edit) and 
  // what will happen if that action is taken.
  const value = useReducer(reducer, initialState)

  return(
  <QuizContext.Provider value={value}>
    {children}
  </QuizContext.Provider>
  )
}
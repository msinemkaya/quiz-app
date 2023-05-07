import { createContext, useReducer } from "react";

const initialState = {};

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

  // normally it is used as
  // const [state, dispatch] = useReducer(reducer, initialState);
  // so this means value is containing the state and the dispatch
  // dispatch is what you use in handlers to pass the information of what the
  // type of action is and any other necessary information for reducer function to use
  // state is well as you might guess our initialState and/or state alltogether
  const value = useReducer(reducer, initialState)

  return(
  <QuizContext.Provider value={value}>
    {children}
  </QuizContext.Provider>
  )
}
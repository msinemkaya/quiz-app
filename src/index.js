import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Quiz from './components/Quiz';
import { QuizProvider } from './context/quiz';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* we wrap our app (Quiz.js) component with the custom provider we have created */}
    <QuizProvider>
      <Quiz />
    </QuizProvider>
  </React.StrictMode>
);
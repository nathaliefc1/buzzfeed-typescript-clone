import React, { useState, useEffect } from 'react';
import { QuizData } from '../interfaces';
import Title from './components/Title';

const App = () => {
  const [quiz, setQuiz] = useState<QuizData | null>()

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8000/quiz-item')
      const json = await response.json()
      setQuiz(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(()=> {
    fetchData()
  }, [])
  console.log(quiz)

  return (
    <div>
      <Title title={quiz?.title} subtitle={quiz?.subtitle}/>
    </div>
  );
}

export default App;

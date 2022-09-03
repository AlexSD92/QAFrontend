import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react';

export default function QuestionList() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get('https://ci-drf-api-qa.herokuapp.com/questions/').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  if (!questions) return null;

  return (
      <div>
        {questions[0] && questions.map(question => {
          return (
            <div key={question.id} className='container m-5'>
              <h6 className='badge rounded-pill bg-info'>{question.owner}</h6>
              <h6 className='badge rounded-pill bg-info'>{question.question}</h6>
              <h6 className='badge rounded-pill bg-secondary'>{question.created_at}</h6>
              <p>{question.updated_at}</p>
            </div>
          )
        })}
      </div>
    );
}
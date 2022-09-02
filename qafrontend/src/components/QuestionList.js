import React from 'react'
import axios from 'axios'
import {Link, useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';

export default function QuestionList() {

  let params = useParams()
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    axios.get('https://ci-drf-api-qa.herokuapp.com/questions/').then((response) => {
      setQuestions(response.data);
    });
  }, []);

  if (!questions) return null;

  // useEffect(() => {
  //   fetch('https://drf-api-master.herokuapp.com/questions/questions/', {
  //   method:'GET',
  //   headers: {
  //     'Content-Type':'application/json',
  //     'Authorization':'Token 21eb499dc54e3b79dc02ebde1b9536346fb3ab40',
  //   }
  //   })
  //   .then(resp => resp.json())
  //   .then(result => {
  //     setQuestions(result)
  //   })
  //   .catch(error => {
  //     console.log(error)
  //   })
  //   },)

  return (
      <div>
        {questions[0] && questions.map(question => {
          return (
            <div key={question.id} className='container m-5'>
              {/* <h2><Link to={`/questions/${question.slug}`} className='link-style'>{question.question}</Link></h2> */}
              <h6 className='badge rounded-pill bg-info'>{question.owner}</h6>
              <h6 className='badge rounded-pill bg-secondary'>{question.created_at}</h6>
              <p>{question.updated_at}</p>
              {/* <p>{question.slug}</p> */}
            </div>
          )
        })}
      </div>
    );
}

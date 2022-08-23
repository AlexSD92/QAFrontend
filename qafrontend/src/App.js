import './App.css';
import {useState, useEffect} from 'react';

function App() {

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    fetch('https://drf-api-master.herokuapp.com/questions/questions/', {
    method:'GET',
    headers: {
      'Content-Type':'application/json',
      'Authorization':'Token 21eb499dc54e3b79dc02ebde1b9536346fb3ab40',
    }
  })
  .then(resp => resp.json())
  .then(result => {
    setQuestions(result)
  })
  .catch(error => {
    console.log(error)
  })
},)

  return (
    <div>
      {questions.map(question => {
        return (
          <div className='container m-5'>
            <h2><a className='link-style'>{question.question_summary}</a></h2>
            <h6 className='badge rounded-pill bg-info'>{question.question_author}</h6>
            <h6 className='badge rounded-pill bg-secondary'>{question.question_published}</h6>
            <p>{question.question_details}</p>
          </div>
        )
      })}
    </div>
  );
}

export default App;

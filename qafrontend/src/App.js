import './App.css';
import {useState, useEffect} from 'react';
import QuestionList from './components/QuestionList';
import Navigation from './components/Navigation';
import Login from './components/Login';
import {Routes, Route} from 'react-router-dom';

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
      <Navigation/>
      <Routes>
        <Route path="/" element = {<Login/>}></Route>
        <Route path="/questions" element = {<QuestionList questions = {questions}/>}></Route>
      </Routes>
      
    </div>
  )
}

export default App;

import './App.css';
import {useState, useEffect} from 'react';
import QuestionList from './components/QuestionList';
import Navigation from './components/Navigation';
import Login from './components/Login';
import QuestionDetails from './components/QuestionDetails';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import RouterTest from './components/RouterTest';
import AddQuestion from './components/AddQuestion';
import SignUpForm from './components/SignUpForm';

function App() {

  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path="/questions/:slug" element = {<QuestionDetails />}></Route>
        <Route path="/questions" element = {<QuestionList />}></Route>
        <Route path="/questions/add" element = {<AddQuestion />}></Route>
        <Route path="/" element = {<Login/>}></Route>
        <Route path="/register" element = {<SignUpForm />}></Route>
        <Route path="/routertest" element = {<RouterTest />}></Route>
      </Routes>

      
    </div>
  )
}

export default App;

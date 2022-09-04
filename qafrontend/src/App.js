import './App.css';
import QuestionList from './components/QuestionList';
import Navigation from './components/Navigation';
import Login from './components/Login';
import QuestionDetails from './components/QuestionDetails';
import {Routes, Route } from 'react-router-dom';
import RouterTest from './components/RouterTest';
import AddQuestion from './components/AddQuestion';
import SignUpForm from './components/SignUpForm';
import './api/axiosDefaults';
import { createContext, useEffect, useState } from 'react';
import axios from 'axios'


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const[currentUser, setCurrentUser] = useState(null)

  const handleMount = async () => {
    try {
      const {data} = await axios.get('/dj-rest-auth/user/');
      setCurrentUser(data);
    } catch(err){
      console.log(err);
    }
  }

  useEffect(() => {
    handleMount()
  }, [])


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <SetCurrentUserContext.Provider value={setCurrentUser}>
      <div>
      <Navigation/>
      <Routes>
        <Route path="/questions/:slug" element = {<QuestionDetails />}></Route>
        <Route path="/questions" element = {<QuestionList />}></Route>
        <Route path="/questions/add" element = {<AddQuestion />}></Route>
        <Route path="/login" element = {<Login/>}></Route>
        <Route path="/register" element = {<SignUpForm />}></Route>
        <Route path="/routertest" element = {<RouterTest />}></Route>
      </Routes>      
    </div>
      </SetCurrentUserContext.Provider>
    </CurrentUserContext.Provider>
  )
}

export default App;

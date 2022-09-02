import React from 'react';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

// question-one-aa4ddf3d-288e-4efe-8be8-12f22c1718f9


function QuestionDetails() {

    const params = useParams()
    const [questions, setQuestions] = useState([])

    useEffect(() => {
      axios.get(`https://drf-api-master.herokuapp.com/questions/questions/${params.slug}`).then((response) => {
        setQuestions(response.data);
      });
    }, []);

    if (!questions) return null;

    // useEffect(() => {
    //   fetch(`https://drf-api-master.herokuapp.com/questions/questions/${params.slug}`, {
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
    //   }, [params.slug])
    // },)

    return (
        <div>
                <div className='container m-5'>
                <h2><a className='link-style'>{questions.question_summary}</a></h2>
                <h6 className='badge rounded-pill bg-info'>{questions.question_author}</h6>
                <h6 className='badge rounded-pill bg-secondary'>{questions.question_published}</h6>
                <p>{questions.question_details}</p>
                <p>{questions.slug}</p>
                </div>
        </div>
        )
}

export default QuestionDetails;
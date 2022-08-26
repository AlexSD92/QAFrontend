import React from 'react'

export default function QuestionList(props, index) {
  return (
      <div>
        {props.questions[0] && props.questions.map(question => {
          return (
            <div key={question.slug} className='container m-5'>
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

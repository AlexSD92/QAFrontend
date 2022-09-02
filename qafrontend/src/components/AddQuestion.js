import React, { useState } from 'react'

function AddQuestion() {
    const [question, setQuestion] = useState('')
    const [questionDetail, setQuestionDetail] = useState('')
    const [error, setError] = useState('')

  return (
    <div>
        <h1>Add Question</h1>
        <div>
            <input type="text" className="form-control"
                placeholder = "Please Enter Question"
                value = {question}
                onChange = {evt => setQuestion(evt.target.value)}
            />
        </div>
        <div>
            <textarea type="text" className="form-control"
                placeholder = "Please Enter Question Detail"
                value = {questionDetail}
                onChange = {evt => setQuestionDetail(evt.target.value)}
            />
        </div>
        <div>
            <buttton className="btn btn-success">Submit</buttton>
        </div>
    </div>
  )
}

export default AddQuestion
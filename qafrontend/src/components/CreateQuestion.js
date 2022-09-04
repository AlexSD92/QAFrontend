import React from "react";
import { useState } from 'react';
import {
    Form,
    Button,
    Alert,
  } from "react-bootstrap";

import { useNavigate } from 'react-router-dom'

import axios from "axios";
import '../api/axiosDefaults';

function CreateQuestionForm() {
    const [ questionData, setQuestionData ] = useState({
      question: "",
    });
    const { question } = questionData;
    const [errors, setErrors] = useState({});
    const history = useNavigate();

    const handleChange = (event) => {
        setQuestionData({
            ...questionData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
      event.preventDefault();
      const formData = new FormData();
  
      formData.append("question", question);
  
      try {
        await axios.post("/questions/", formData);
        history('/questions/');
      } catch (err) {
        console.log(err);
        if (err.response?.status !== 401) {
          setErrors(err.response?.data);
        }
      }
    };

    return (
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="question">
          <Form.Label>Question:</Form.Label>
          <Form.Control
            type="text"
            name="question"
            placeholder="What's your question?"
            value={question}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.question?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}


        <Button>Send</Button>
      </Form>
    );
  };

export default CreateQuestionForm;
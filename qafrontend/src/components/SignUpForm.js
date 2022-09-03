import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  Form,
  Button,
  Col,
  Row,
  Container,
  Alert,
} from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});

  const history = useNavigate();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(signUpData)
      await axios.post("https://ci-drf-api-qa.herokuapp.com/dj-rest-auth/registration/", signUpData);
      history("/questions");
      // history.push("/questions");
    } catch (err) {
      setErrors(err.response?.data);
      console.log(err);
    }
  };

  return (
    <Row>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container>
          <h1>sign up</h1>

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label className="d-none">username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Username"
                name="username"
                value={username}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

          <Form.Group controlId="email">
            <Form.Label className="d-none">email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.username?.map((message, idx) => (
              <Alert variant="warning" key={idx}>
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password1">
              <Form.Label className="d-none">Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password1"
                value={password1}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password1?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Form.Group controlId="password2">
              <Form.Label className="d-none">Confirm password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Confirm password"
                name="password2"
                value={password2}
                onChange={handleChange}
              />
            </Form.Group>
            {errors.password2?.map((message, idx) => (
              <Alert key={idx} variant="warning">
                {message}
              </Alert>
            ))}

            <Button
              type="submit"
            >
              Sign up
            </Button>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="warning" className="mt-3">
                {message}
              </Alert>
            ))}
          </Form>
        </Container>

        <Container>
          <Link to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>

    </Row>
  );
};

export default SignUpForm;


  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     await axios.post("https://ci-drf-api-qa.herokuapp.com/dj-rest-auth/registration/", signUpData);
  //     history.push("/questions");
  //   } catch (err) {
  //     setErrors(err.response?.data);
  //   }
  // };
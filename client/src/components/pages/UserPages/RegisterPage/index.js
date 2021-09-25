import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { Form, Button, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { Context } from "../../../..";
import "./style.css";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await store.registration(email, password);
    if (store.isAuth) {
      history.push("/");
    }
  };

  return (
    <Container className="form-signin">
      <h1 className="h3 mb-3 fw-normal">Please register</h1>
      <h5>Create your account. It's free and only takes a minute.</h5>
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            required
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            value={email}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </Form.Group>
        <Form.Group className="mb-3 text-center">
          <Button variant="primary" type="submit">
            Register Now
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default observer(RegisterPage);

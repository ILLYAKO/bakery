import React, { useState, useContext } from "react";
import { observer } from "mobx-react-lite";
import { useHistory } from "react-router";
import { Form, Button, Container, Image } from "react-bootstrap";
import { Context } from "../../../..";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { store } = useContext(Context);
  const history = useHistory();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await store.login(email, password);
    if (store.isAuth) {
      history.push("/");
    }
  };

  return (
    <Container className="form-signin">
      <Form onSubmit={onSubmitHandler}>
        <Form.Group className="mb-1 text-center">
          <Image
            src={require("../../../../assets/images/bakery_logo.png").default.toString()}
            alt="bakery"
            width="100"
            height="100"
          />
        </Form.Group>
        <h1 className="h3 mb-3 fw-normal">Please login</h1>
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
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
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
        <Form.Group className="text-center">
          <Button variant="primary" type="submit">
            Login
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default observer(LoginPage);

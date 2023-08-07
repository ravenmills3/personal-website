import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import LoginContainer from "./pages.styles.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async e => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <LoginContainer>
      <div className="heading1">Sign In</div>

      <Form onSubmit={submitHandler}>
        <Form.Group className="heading2" controlId="email">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group className="heading2" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type="submit" variant="primary" className="heading3">
          Sign In
        </Button>
      </Form>
    </LoginContainer>
  );
};

export default LoginPage;

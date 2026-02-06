import { useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "admin123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/save"); // ✅ redirect to Save component
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <Card className="mx-auto mt-5 mb-5 p-4" style={{ maxWidth: 400 }}>
      <h4 className="text-center mb-3">Login</h4>

      {error && <Alert variant="danger">{error}</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>

        <Button type="submit" className="w-100">
          Login
        </Button>
      </Form>
    </Card>
  );
};

export default Login;

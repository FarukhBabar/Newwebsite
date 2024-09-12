// LoginForm.js
import React from "react";
import { Form, Button, Container, Row, Col, Card } from "react-bootstrap";
import { useState ,  } from 'react'
import {  Link, useNavigate, } from 'react-router-dom'

const LoginForm = () => {
     const[email , setemail] = useState()
  const [ password  , setpassword]  = useState()
  const nevigate=useNavigate()
  
  
  const registeruser = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch("https://api.homeessentialshive.co.uk/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await result.json();
      
      if (result.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        if (data.role === "admin") {
          alert("Wellcome To Admin Panal");
          nevigate("/adminpanal"); // Navigate to the form page
        } else {
          alert("Account Login Sucessfully")
          nevigate('/');
        }
      } else {
        alert(data.Message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Row>
        <Col>
          <Card className="shadow-lg p-4 login-card">
            <Card.Body>
              <h2 className="text-center mb-4">Login</h2>
              <Form>
                <Form.Group controlId="formBasicEmail" className="mb-3">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"  name='email' value={email} onChange={(e)=>setemail(e.target.value)}  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="mb-3">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" name='password' value={password} onChange={(e)=>setpassword(e.target.value)}  />
                </Form.Group>

                <Button variant="primary"  onClick={registeruser}  type="submit" className="w-100 mt-3">
                  Login
                </Button>
              </Form>
              <div className="text-center mt-3">
                <Link to="/forget">Forgot your password?</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginForm;

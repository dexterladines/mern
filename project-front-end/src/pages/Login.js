import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(){

    }
    return(
        <Container>
            <Row>
                <Col md={6} className="login__form--container">
                    <Form style={{ width: "100%" }}>
                        <h1>Login to your Account</h1>
                        <Form.Group>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} required onChange={(e)=> setEmail(e.target.value)} />
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="passwordl" placeholder="Enter Password" value={password} required onChange={(e)=> setPassword(e.target.value)} />
                        </Form.Group>
                        <Form.Group>
                            <Button type="submit">Login</Button>
                        </Form.Group>
                        <a>
                            Dont have an account? <Link to="/signup">Create Account</Link>
                        </a>
                    </Form>
                </Col>
                <Col md={6} className="login__image--container"></Col>
            </Row>   
        </Container>
    );
}

export default Login
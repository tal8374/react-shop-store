import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import LoginStyle from './Login.module.css';

export default class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div className={LoginStyle.container}>
                <Form>
                    <Form.Group controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group  controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>

                    <Button size="lg" block variant="secondary" type="submit">
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}
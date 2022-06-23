import { Component } from "react";
import { signUp } from "../../utilities/services/users-service";
import { Button, Form, Card } from 'react-bootstrap';
import './SignUpForm.css';

export default class SignUpForm extends Component {
    state = {
        name: "",
        email: "",
        password: "",
        confirm: "",
        error: "",
    };

    handleChange = (evt) => {
        this.setState({
        [evt.target.name]: evt.target.value,
        error: "",
        });
    };

    handleSubmit = async (evt) => {
        evt.preventDefault();
        // alert(JSON.stringify(this.state));
        try {
            const formData = { ...this.state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
            console.log("signup form handleSubmit user= ", user);
        } catch {
            this.setState({ error: "Sign Up Failed - Try Again" });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
            <div>
                <div className="form-container">
                    <Card className="signup-card">
                        <Card.Header className="card-header">
                            Sign Up
                        </Card.Header>
                        <Card.Body>
                            <Form onSubmit={this.handleSubmit}>
                                <Form.Group controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                    type="text"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}
                                    required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                    autoComplete="username"
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                    required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                    autoComplete="new-password"
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    required
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicConfirm">
                                    <Form.Label>Confirm</Form.Label>
                                    <Form.Control
                                    autoComplete="off"
                                    type="password"
                                    name="confirm"
                                    value={this.state.confirm}
                                    onChange={this.handleChange}
                                    required
                                    />
                                </Form.Group>
                                <Button type="submit" disabled={disable}>
                                    SIGN UP
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
                <p className="error-message">&nbsp;{this.state.error}</p>
            </div>
        );
    }
}

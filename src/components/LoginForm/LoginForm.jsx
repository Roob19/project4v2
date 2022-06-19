import {useState} from 'react';
import * as usersService from '../../utilities/services/users-service';
import { Button, Form, Card } from 'react-bootstrap';
import './LoginForm.css';

export default function LogIn({setUser}) {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');

    function handleChange(evt) {
        setCredentials({...credentials, [evt.target.name]: evt.target.value});
        setError('');
    }

    async function handleSubmit(evt) {
        evt.preventDefault();
        try {
            const user = await usersService.login(credentials);
            setUser(user);
        } catch {
            setError('Log In Failed - Try Again');
        }
    }

    return (
        <Card className="login-card">
            <div className="form-container" onSubmit={handleSubmit}>
                <Form autoComplete="off">
                    <Form.Group controlId="formBasicName">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" name="email" value={credentials.email} onChange={handleChange} required/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} required/>
                    </Form.Group>
                    <Button type="submit">LOG IN</Button>
                </Form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </Card>
    );
}
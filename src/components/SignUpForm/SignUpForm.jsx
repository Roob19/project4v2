import { Component } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../utilities/services/users-service";

export default class SignUpForm extends Component {
    state = {
        name: "",
        dob: '',
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
        const navigate = useNavigate();
        try {
            const formData = { ...this.state };
            delete formData.error;
            delete formData.confirm;
            const user = await signUp(formData);
            this.props.setUser(user);
            console.log(user);
            navigate('/home');
        } catch {
            this.setState({ error: "Sign Up Failed - Try Again" });
        }
    };

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
        <div>
            <div className="form-container">
            <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                />
                <label>Date of Birth</label>
                <input 
                type="date"
                name="dob"
                value={this.state.dob}
                onChange={this.handleChange}
                placeholder="YYYY-MM-DD"
                required
                />
                <label>Email</label>
                <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
                />
                <label>Password</label>
                <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
                required
                />
                <label>Confirm</label>
                <input
                type="password"
                name="confirm"
                value={this.state.confirm}
                onChange={this.handleChange}
                required
                />
                <button type="submit" disabled={disable}>
                SIGN UP
                </button>
            </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
        </div>
        );
    }
}

import { useState } from "react";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import './AuthPage.css';

export default function AuthPage({setUser, date, country}) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            <h1>AuthPage</h1>
            { showLogin 
                ? <LoginForm 
                        setUser={setUser} 
                        showLogin={showLogin} 
                        setShowLogin={setShowLogin} 
                    /> 
                : <SignUpForm 
                    setUser={setUser} 
                    date={date} 
                    country={country} 
                    showLogin={showLogin} 
                    setShowLogin={setShowLogin} 
                /> 
            }
            <button onClick={setShowLogin(false)}>
                Sign Up
            </button>
        </div>
    );
}

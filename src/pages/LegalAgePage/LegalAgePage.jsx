import React, { useState } from 'react';
import agegate, { getData } from 'agegate';
import { getUser } from '../../utilities/services/users-service'; 
import AuthPage from "../AuthPage/AuthPage";
import SignUpForm from '../../components/SignUpForm/SignUpForm';
// import { Route } from 'react-router';
import './LegalAgePage.css';

const countries = getData();

export default function AgeCheck() {
    // const todayCalc = new Date()
    // const [date, setDate] = useState(`${todayCalc.getFullYear()-21}-${todayCalc.getMonth()}-${todayCalc.getDate()}`); // new Date()-7665
    // console.log(date); // 2001-5-23
    const [date, setDate] = useState('');
    const [country, setCountry] = useState(countries[72].code);
    const [legal, setLegal] = useState(false);
    const [user, setUser] = useState(getUser);
    const [error, setError] = useState('');
    const [showLogin, setShowLogin] = useState(true);
    
    const submitHandler = async e => {
        e.preventDefault();
        try {
            if (date && country) {
                const result = agegate(new Date(date), country);
                setLegal(result);
            }
        } catch {
            setError('AgeCheck submitHandler failed - try again');
        }
    };
    
    return (
        <div>
            { legal ? <SignUpForm 
                        setUser={setUser} 
                        showLogin={showLogin} 
                        setShowLogin={setShowLogin} 
                    /> 
                :
                <>
                    <form onSubmit={submitHandler}>
                        <h3>Enter your date of birth</h3>
                        <input
                        type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                        />
                
                        <h3>Enter your country</h3>
                        <select value={country} onChange={e => setCountry(e.target.value)}>
                            {countries.map(({ code, name }) => (
                                <option key={name} value={code}>
                                {name}
                                </option>
                            ))}
                        </select>
                        <button type="submit">Submit</button>
                    </form>
                    
                    <p style={{ color: legal ? "green" : "red" }}>
                        You are {legal ? "" : "NOT"} old enough!
                    </p>
                </>
            }
        </div>
    );
}

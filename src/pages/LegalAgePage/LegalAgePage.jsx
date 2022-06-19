import React, { useState } from 'react';
import agegate, { getData } from 'agegate';
import { getUser } from '../../utilities/services/users-service'; 
import AuthPage from "../AuthPage/AuthPage";
import { Route } from 'react-router';
import './LegalAgePage.css';

const countries = getData();

export default function AgeCheck() {
    const [date, setDate] = useState("");
    const [country, setCountry] = useState(countries[0].code);
    const [legal, setLegal] = useState(false);
    const [user, setUser] = useState(getUser);
    
    const submitHandler = e => {
        e.preventDefault();
    
        if (date && country) {
            const result = agegate(new Date(date), country);
            setLegal(result);
            if (legal) {
                return (
                    <>
                        <AuthPage setUser={setUser}/>
                    </>
                    );
            }
        }
    };
    
    return (
        <div>
            <form onSubmit={submitHandler}>
                <h3>Enter your date of birth</h3>
                <input
                type="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                selected={(new Date()).getDate()-7665}
                />
        
                <h3>Enter your country</h3>
                <select 
                    value={country} 
                    onChange={e => setCountry(e.target.value)} 
                    defaultValue="United States"
                >
                {countries.map(({ code, name }) => (
                    <option key={name} value={code}>
                    {name}
                    </option>
                ))}
                </select>
        
                <button type="submit">Submit</button>
            </form>
            
            <p style={{ color: legal ? "green" : "red" }}>
                RESULT: You are {legal ? "" : "NOT"} old enough!
            </p>
        </div>
    );
}

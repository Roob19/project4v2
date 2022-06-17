import React from 'react';
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/services/users-service'; 
import NavBar from "../../components/NavBar/NavBar";
import './App.css';


export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? <>
                <NavBar user={user} setUser={setUser}/>
                <Routes>
                    <Route path="/BarCrawls">
                        {/* <BarCrawlsPage /> */}
                    </Route>
                    <Route path="/BottleShops">
                        {/* <BottleShopsPage /> */}
                    </Route>
                    <Route path="/BeerBars">
                        {/* <BeerBarsPage /> */}
                    </Route>
                    <Route path="/BeerGardens">
                        {/* <BeerGardensPage /> */}
                    </Route>
                    <Route path="/BeerTours">
                        {/* <BeerToursPage /> */}
                    </Route>
                    <Route path="/Events">
                        {/* <eventsPage /> */}
                    </Route>
                    <Route path="/HotNew">
                        {/* <HotNewPage /> */}
                    </Route>
                    {/* <Redirect to="/"/> */}
                </Routes>
            </> : <AuthPage setUser={setUser}/>}
        </main>);
}

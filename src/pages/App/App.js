import React from 'react';
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/services/users-service'; 
import NavBar from "../../components/NavBar/NavBar";
import AgeCheck from '../LegalAgePage/LegalAgePage';
import { HomePage } from '../HomePage/HomePage';
import { barCrawlData } from '../../utilities/seeds/barCrawls';
import { beerBarsData } from '../../utilities/seeds/beerbars';
import { beerGardensData } from '../../utilities/seeds/beergardens';
import { beerToursData } from '../../utilities/seeds/beertours';
import { bottleShopData } from '../../utilities/seeds/bottleShops';
import { eventsData } from '../../utilities/seeds/events';
import { hotNewData } from '../../utilities/seeds/hotNew';
import './App.css';


export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? <>
                <NavBar user={user} setUser={setUser}/>
                <Routes>
                    <Route path="/home">
                        <HomePage user={user} setUser={setUser} />
                    </Route>
                    <Route path="/BarCrawls">
                        {/* <BusinessIndex business={barCrawlData} /> */}
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
                    {/* <Redirect to="/home" /> */}
                </Routes>
            </> 
            : <AuthPage setUser={setUser}/>
            // : <AgeCheck />
            }
        </main>);
}

import React from 'react';
import { useState } from "react";
import { Route, Routes, Switch, Redirect } from "react-router-dom";
import { getUser } from '../../utilities/services/users-service'; 

import { barCrawlData } from '../../utilities/seeds/barCrawls';
import { beerBarsData } from '../../utilities/seeds/beerBars';
import { beerGardensData } from '../../utilities/seeds/beerGardens';
import { beerToursData } from '../../utilities/seeds/beerTours';
import { bottleShopData } from '../../utilities/seeds/bottleShops';
import { eventsData } from '../../utilities/seeds/events';
import { hotNewData } from '../../utilities/seeds/hotNew';

import AgeCheck from '../LegalAgePage/LegalAgePage';
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import { HomePage } from '../HomePage/HomePage';
import { BusinessIndex } from '../BusinessIndex/BusinessIndex';
import { EventIndex } from '../EventIndex/EventIndex';
import './App.css';


export default function App() {
    const [user, setUser] = useState(getUser());
    return (<main className="App">
            {user ? 
            <>
                <NavBar user={user} setUser={setUser}/>
                <Routes>
                    {/* <Route path="/home">
                        <HomePage user={user} setUser={setUser} />
                    </Route> */}
                    <Route path="/BarCrawls">
                        <BusinessIndex business={barCrawlData} />
                    </Route>
                    <Route path="/BottleShops">
                        <BusinessIndex business={bottleShopData} />
                    </Route>
                    <Route path="/BeerBars">
                        <BusinessIndex business={beerBarsData} />
                    </Route>
                    <Route path="/BeerGardens">
                        <BusinessIndex business={beerGardensData} />
                    </Route>
                    <Route path="/BeerTours">
                        <BusinessIndex business={beerToursData} />
                    </Route>
                    <Route path="/Events">
                        <EventIndex event={eventsData} />
                    </Route>
                    <Route path="/HotNew">
                        <BusinessIndex business={hotNewData} />
                    </Route>
                    {/* <Redirect to="/home" /> */}
                </Routes>
            </> 
            : <AgeCheck /> 
            // : <AuthPage setUser={setUser}/>
            }
        </main>);
}

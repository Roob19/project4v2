import React from 'react';
import { useState } from "react";
import {
    Link,
    Outlet,  
    Route, 
    Routes, 
    Switch, 
    Redirect, 
} from "react-router-dom";

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

    return (<div className="App">
            {user ? 
            <>
                <NavBar user={user} setUser={setUser} />
                <Routes>
                    {/* <Route path="/BarCrawls" element={<BusinessIndex business={barCrawlData} />} /> */}
                    <Route path="/BottleShops" element={<BusinessIndex business={bottleShopData} />} />
                    {/* <Route path="/BeerBars" element={<BusinessIndex business={beerBarsData} />} /> */}
                    <Route path="/BeerGardens" element={<BusinessIndex business={beerGardensData} />} />
                    {/* <Route path="/BeerTours" element={<BusinessIndex business={beerToursData} />} /> */}
                    {/* <Route path="/Events" element={<EventIndex event={eventsData} />} /> */}
                    {/* <Route path="/HotNew" element={<BusinessIndex business={hotNewData} />} /> */}
                    <Route path="/" element={<HomePage user={user} setUser={setUser} />} />
                </Routes>
            </> 
            : <AuthPage setUser={setUser}/>
            }
        </div>);
}

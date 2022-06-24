import React from 'react';
import { Link } from "react-router-dom";
import * as userService from '../../utilities/services/users-service';

export default function NavBar(props) {

    function handleLogOut() {
        userService.logOut();
        props.setUser(null);
    }

    return (
        <div>
            <Link to="/BarCrawls">Bar Crawls</Link>
            &nbsp; | &nbsp;
            <Link to="/BottleShops">Bottle Shops</Link>
            &nbsp; | &nbsp;
            <Link to="/BeerBars">Beer Bars</Link>
            &nbsp; | &nbsp;
            <Link to="/BeerGardens">Beer Gardens</Link>
            &nbsp; | &nbsp;
            <Link to="/BeerTours">Beer Tours</Link>
            &nbsp; | &nbsp;
            <Link to="/Events">Food & Drink Events</Link>
            &nbsp; | &nbsp;
            <Link to="/HotNew">Hot & New</Link>
            &nbsp; | &nbsp;
            { props.user ? <span>Welcome {props.user.name}</span> : '' }
            &nbsp; | &nbsp;
            <button onClick={ handleLogOut }>Logout</button>
        </div>
    );
}

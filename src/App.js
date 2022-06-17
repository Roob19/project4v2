import React from "react";
import "./App.css";

const YELP_BASE_URL = 'https://api.yelp.com/v3/';
const YELP_BIZ_URL = 'https://api.yelp.com/v3/businesses/search';
const YELP_EVT_URL = 'https://api.yelp.com/v3/events';

const YELP_TOKEN = process.env.REACT_APP_YELP_TOKEN;

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch(`https://api.yelp.com/v3/businesses/search?location=95742`, 
    {
      method: 'GET',
      mode: "no-cors",
      headers: {
        Authorization: `Bearer ${YELP_TOKEN}`, 
        Origin: 'localhost',
        withCredentials: true, 
      }, 
      // params: {
      //   location: '95742', 
      //   categories: 'beergardens',
      // }
    })
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <h1> Fetch data from an api in react </h1>{" "}
        {items.map((item) => (
          <ol key={item.id}>
            User_Name: {item.name}, Full_Name: {item.alias}, User_Email:{" "}
            {item.location.display_address}
          </ol>
        ))}
      </div>
    );
  }
}

export default App;

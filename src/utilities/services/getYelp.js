import axios from 'axios';

const YELP_TOKEN = process.env.REACT_APP_YELP_TOKEN;

// const YELP_BASE_URL = 'https://api.yelp.com/v3/';
const YELP_BIZ_URL = 'https://api.yelp.com/v3/businesses/search';
// const YELP_EVT_URL = 'https://api.yelp.com/v3/events';


const getYelp = () => {
    const prep = {
    mode: "no-cors",
    headers: {
        Autorization: `Bearer ${YELP_TOKEN}`,
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": true,
    },
    params: {
        location: "95742",
        radius: 39999,
        categories: "beergardens",
        sort_by: "rating",
        limit: 10,
    },
    };

    axios
        .get(`${YELP_BIZ_URL}`, prep)
        .then((res) => {
            console.log(res);
            // console.log(res.data.businesses[0].name);
        });
};

export {
    getYelp,
}
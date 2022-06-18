// require('dotenv').config();
// require('../../../config/database');

// const Business = require('../../../models/business');


// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=barcrawl&sort_by=rating

export const barCrawlData = [
  {
    id: "Li-qWlIITGUa8LN-_fsqiw",
    alias: "bar-crawl-nation-sacramento",
    name: "Bar Crawl Nation",
    image_url: "",
    is_closed: false,
    url: "https://www.yelp.com/biz/bar-crawl-nation-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 1,
    categories: [
      {
        alias: "barcrawl",
        title: "Bar Crawl",
      },
    ],
    rating: 1.0,
    coordinates: {
      latitude: 38.5794410705566,
      longitude: -121.490852355957,
    },
    transactions: [],
    location: {
      address1: "",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "94203",
      country: "US",
      state: "CA",
      display_address: ["Sacramento, CA 94203"],
    },
    phone: "",
    display_phone: "",
    distance: 24597.96445747545,
  },
];

// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&term=beer&attributes=hot_and_new

const hotNewData = [
  {
    id: "3939P75ImKkRsNsWVNFxzw",
    alias: "camerado-brewing-cameron-park",
    name: "Camerado Brewing",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/BT5GkXUTno6JtDV09R9ItA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/camerado-brewing-cameron-park?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 6,
    categories: [
      {
        alias: "breweries",
        title: "Breweries",
      },
    ],
    rating: 5.0,
    coordinates: {
      latitude: 38.697958298459184,
      longitude: -120.99560602872252,
    },
    transactions: [],
    location: {
      address1: "2650 Cameron Park Dr",
      address2: "Ste 370",
      address3: null,
      city: "Cameron Park",
      zip_code: "95682",
      country: "US",
      state: "CA",
      display_address: [
        "2650 Cameron Park Dr",
        "Ste 370",
        "Cameron Park, CA 95682",
      ],
    },
    phone: "+15303568246",
    display_phone: "(530) 356-8246",
    distance: 23146.2175293232,
  },
  {
    id: "HlYsjy2xfm4jO1KxXaizbQ",
    alias: "represa-grill-by-chef-william-hartzell-folsom",
    name: "Represa Grill by Chef William Hartzell",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/_YadilFFeJQJU99YHHJr9A/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/represa-grill-by-chef-william-hartzell-folsom?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 15,
    categories: [
      {
        alias: "breakfast_brunch",
        title: "Breakfast & Brunch",
      },
      {
        alias: "burgers",
        title: "Burgers",
      },
      {
        alias: "tradamerican",
        title: "American (Traditional)",
      },
    ],
    rating: 5.0,
    coordinates: {
      latitude: 38.67991280253946,
      longitude: -121.1656441120811,
    },
    transactions: [],
    location: {
      address1: "97 Natoma St",
      address2: "",
      address3: null,
      city: "Folsom",
      zip_code: "95630",
      country: "US",
      state: "CA",
      display_address: ["97 Natoma St", "Folsom, CA 95630"],
    },
    phone: "+15302208787",
    display_phone: "(530) 220-8787",
    distance: 12521.80732826085,
  },
  {
    id: "zdAV8CAMAmos_0enVUkjVg",
    alias: "juju-kitchen-and-cocktails-sacramento-2",
    name: "Juju Kitchen & Cocktails",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/DsjgeSQpJpj8Pv7RZDkTAA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/juju-kitchen-and-cocktails-sacramento-2?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 4,
    categories: [
      {
        alias: "tapasmallplates",
        title: "Tapas/Small Plates",
      },
      {
        alias: "cocktailbars",
        title: "Cocktail Bars",
      },
    ],
    rating: 5.0,
    coordinates: {
      latitude: 38.576379488299466,
      longitude: -121.4870067,
    },
    transactions: [],
    location: {
      address1: "1501 L St",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "95814",
      country: "US",
      state: "CA",
      display_address: ["1501 L St", "Sacramento, CA 95814"],
    },
    phone: "",
    display_phone: "",
    distance: 24255.572833488008,
  },
  {
    id: "waaUgLQaTlr_NpIxoWW7Vg",
    alias: "nara-sushi-folsom",
    name: "Nara Sushi",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/eIv5Sr6D_fyhn5eBvFY5Yw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/nara-sushi-folsom?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 41,
    categories: [
      {
        alias: "sushi",
        title: "Sushi Bars",
      },
      {
        alias: "japanese",
        title: "Japanese",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.67064,
      longitude: -121.16421,
    },
    transactions: [],
    location: {
      address1: "1125 Riley St",
      address2: null,
      address3: "",
      city: "Folsom",
      zip_code: "95630",
      country: "US",
      state: "CA",
      display_address: ["1125 Riley St", "Folsom, CA 95630"],
    },
    phone: "+19167908844",
    display_phone: "(916) 790-8844",
    distance: 11648.693502501774,
  },
  {
    id: "2orx4UvfBzZlJAsxErmfjg",
    alias: "ramen-101-sacramento-3",
    name: "Ramen 101",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/Ml-fFz4beTQhvM4Y27DBjQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/ramen-101-sacramento-3?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 15,
    categories: [
      {
        alias: "hawaiian",
        title: "Hawaiian",
      },
      {
        alias: "ramen",
        title: "Ramen",
      },
      {
        alias: "sportsbars",
        title: "Sports Bars",
      },
    ],
    rating: 3.5,
    coordinates: {
      latitude: 38.61823704388493,
      longitude: -121.40104593381639,
    },
    transactions: [],
    location: {
      address1: "2651 Marconi Ave",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "95821",
      country: "US",
      state: "CA",
      display_address: ["2651 Marconi Ave", "Sacramento, CA 95821"],
    },
    phone: "+12793450645",
    display_phone: "(279) 345-0645",
    distance: 17534.75104791012,
  },
  {
    id: "UgHba7We38OX381p5gUtrQ",
    alias: "captain-crab-elk-grove-3",
    name: "Captain Crab",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/zYJl7mR9mY0ioaUFqjLgbw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/captain-crab-elk-grove-3?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 49,
    categories: [
      {
        alias: "seafood",
        title: "Seafood",
      },
      {
        alias: "cajun",
        title: "Cajun/Creole",
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 38.44979,
      longitude: -121.37124,
    },
    transactions: [],
    location: {
      address1: "8471 Elk Grove Florin Rd",
      address2: null,
      address3: "",
      city: "Elk Grove",
      zip_code: "95624",
      country: "US",
      state: "CA",
      display_address: ["8471 Elk Grove Florin Rd", "Elk Grove, CA 95624"],
    },
    phone: "+19166885868",
    display_phone: "(916) 688-5868",
    distance: 19677.485265736537,
  },
  {
    id: "0zcMOXO7h_UisUItqqU9vw",
    alias: "sila-thai-cuisine-rocklin",
    name: "Sila Thai Cuisine",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/qltjeeHwqsmXlpFbTqyLWA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/sila-thai-cuisine-rocklin?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 14,
    categories: [
      {
        alias: "thai",
        title: "Thai",
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 38.79790591519918,
      longitude: -121.29149806109591,
    },
    transactions: [],
    location: {
      address1: "6815 Lonetree Blvd",
      address2: "Ste 105",
      address3: null,
      city: "Rocklin",
      zip_code: "95765",
      country: "US",
      state: "CA",
      display_address: ["6815 Lonetree Blvd", "Ste 105", "Rocklin, CA 95765"],
    },
    phone: "",
    display_phone: "",
    distance: 26113.135798992178,
  },
];

module.exports = {
  hotNewData,
}
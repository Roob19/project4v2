// https://api.yelp.com/v3/businesses/search?location=95742&radius=39999&categories=beerbar&sort_by=rating

const beerBarsData = [
  {
    id: "-dANAEth6XwSxSOMNoJuqA",
    alias: "sac-brew-bike-sacramento-3",
    name: "Sac Brew Bike",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/7PmLgoeeCWo6aMQbaqvYdA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/sac-brew-bike-sacramento-3?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 290,
    categories: [
      {
        alias: "partybikerentals",
        title: "Party Bike Rentals",
      },
      {
        alias: "beertours",
        title: "Beer Tours",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 5.0,
    coordinates: {
      latitude: 38.5708179,
      longitude: -121.4837016,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "1519 19th St",
      address2: null,
      address3: "",
      city: "Sacramento",
      zip_code: "95811",
      country: "US",
      state: "CA",
      display_address: ["1519 19th St", "Sacramento, CA 95811"],
    },
    phone: "+19169527973",
    display_phone: "(916) 952-7973",
    distance: 23965.454632211808,
  },
  {
    id: "G6AWxQ8YZLapVrZKv9rWJQ",
    alias: "flour-dust-pizza-roseville-3",
    name: "Flour Dust Pizza",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/8t3xOawfPc4RHMplL2kF5g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/flour-dust-pizza-roseville-3?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 291,
    categories: [
      {
        alias: "pizza",
        title: "Pizza",
      },
      {
        alias: "italian",
        title: "Italian",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.76065,
      longitude: -121.3116,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "5080 Foothills Blvd",
      address2: "Ste 5",
      address3: "",
      city: "Roseville",
      zip_code: "95747",
      country: "US",
      state: "CA",
      display_address: ["5080 Foothills Blvd", "Ste 5", "Roseville, CA 95747"],
    },
    phone: "+19167735080",
    display_phone: "(916) 773-5080",
    distance: 22825.591904177607,
  },
  {
    id: "2i2LFXfk2kS58hmwIzn24A",
    alias: "craft-beer-vault-rocklin",
    name: "Craft Beer Vault",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/AuVxzKdocYfbMUhm_wbFuQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/craft-beer-vault-rocklin?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 83,
    categories: [
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.8035351618068,
      longitude: -121.294941,
    },
    transactions: ["delivery"],
    price: "$$",
    location: {
      address1: "6508 Lonetree Blvd",
      address2: "Ste 108",
      address3: "",
      city: "Rocklin",
      zip_code: "95765",
      country: "US",
      state: "CA",
      display_address: ["6508 Lonetree Blvd", "Ste 108", "Rocklin, CA 95765"],
    },
    phone: "+19168996112",
    display_phone: "(916) 899-6112",
    distance: 26797.569330517574,
  },
  {
    id: "Dxn8-A-hActdD5YVBpyMFw",
    alias: "the-bank-shot-elk-grove",
    name: "The Bank Shot",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/SkoRp1vqvf92D08FnOytrw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-bank-shot-elk-grove?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 33,
    categories: [
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "sportsbars",
        title: "Sports Bars",
      },
      {
        alias: "poolhalls",
        title: "Pool Halls",
      },
    ],
    rating: 5.0,
    coordinates: {
      latitude: 38.41004,
      longitude: -121.38784,
    },
    transactions: [],
    location: {
      address1: "8535 Elk Grove Blvd",
      address2: null,
      address3: "",
      city: "Elk Grove",
      zip_code: "95624",
      country: "US",
      state: "CA",
      display_address: ["8535 Elk Grove Blvd", "Elk Grove, CA 95624"],
    },
    phone: "",
    display_phone: "",
    distance: 23855.697900909785,
  },
  {
    id: "WRdqUCXBwh4dbsBBsVQV3g",
    alias: "the-rind-sacramento",
    name: "The Rind",
    image_url:
      "https://s3-media4.fl.yelpcdn.com/bphoto/wWc81RwxgEkBU5ggWdMGgw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-rind-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 1056,
    categories: [
      {
        alias: "newamerican",
        title: "American (New)",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "wine_bars",
        title: "Wine Bars",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.5752587,
      longitude: -121.4827261,
    },
    transactions: ["pickup", "delivery"],
    price: "$$",
    location: {
      address1: "1801 L St",
      address2: "Ste 40",
      address3: "",
      city: "Sacramento",
      zip_code: "95811",
      country: "US",
      state: "CA",
      display_address: ["1801 L St", "Ste 40", "Sacramento, CA 95811"],
    },
    phone: "+19164417463",
    display_phone: "(916) 441-7463",
    distance: 23881.652266990437,
  },
  {
    id: "yeHudLl2MwLGpu4AAIqvcQ",
    alias: "tree-house-cafe-west-sacramento",
    name: "Tree House Cafe",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/8f7dj3OV1cbU1Q9KeHZRKA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/tree-house-cafe-west-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 133,
    categories: [
      {
        alias: "cafes",
        title: "Cafes",
      },
      {
        alias: "coffee",
        title: "Coffee & Tea",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.58383269999999,
      longitude: -121.5111948,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "630 3rd St",
      address2: null,
      address3: "",
      city: "West Sacramento",
      zip_code: "95605",
      country: "US",
      state: "CA",
      display_address: ["630 3rd St", "West Sacramento, CA 95605"],
    },
    phone: "+19169429229",
    display_phone: "(916) 942-9229",
    distance: 26383.92616340035,
  },
  {
    id: "I1K4zHoQiN-_IwzG5ch3bg",
    alias: "caffe-italiano-ristorante-fair-oaks-2",
    name: "Caffe Italiano Ristorante",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/_dLXrKEP5DjPkUMFK8WT3Q/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/caffe-italiano-ristorante-fair-oaks-2?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 127,
    categories: [
      {
        alias: "italian",
        title: "Italian",
      },
      {
        alias: "salad",
        title: "Salad",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.66324333,
      longitude: -121.26126667,
    },
    transactions: ["pickup", "delivery"],
    price: "$$",
    location: {
      address1: "8112 Madison Av",
      address2: null,
      address3: "",
      city: "Fair Oaks",
      zip_code: "95628",
      country: "US",
      state: "CA",
      display_address: ["8112 Madison Av", "Fair Oaks, CA 95628"],
    },
    phone: "+19164364037",
    display_phone: "(916) 436-4037",
    distance: 11123.428288363635,
  },
  {
    id: "7eyOUHlgLiXfUyNcqqwx2w",
    alias: "sacyard-community-tap-house-sacramento-2",
    name: "SacYard Community Tap House",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/rVgHisbTU5EJHLz4-rrIDA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/sacyard-community-tap-house-sacramento-2?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 207,
    categories: [
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "beergardens",
        title: "Beer Gardens",
      },
      {
        alias: "foodtrucks",
        title: "Food Trucks",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.5642675099592,
      longitude: -121.465629972517,
    },
    transactions: ["delivery"],
    price: "$$",
    location: {
      address1: "1725 33rd St",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "95816",
      country: "US",
      state: "CA",
      display_address: ["1725 33rd St", "Sacramento, CA 95816"],
    },
    phone: "+19164004708",
    display_phone: "(916) 400-4708",
    distance: 22412.58299921581,
  },
  {
    id: "fpa4gG1v03afLCxMGg5Ljw",
    alias: "sacramento-pizza-company-folsom",
    name: "Sacramento Pizza Company",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/ZiWxmWLvl3rSoxVjCnaUdw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/sacramento-pizza-company-folsom?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 403,
    categories: [
      {
        alias: "pizza",
        title: "Pizza",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "chicken_wings",
        title: "Chicken Wings",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.6570122122873,
      longitude: -121.125263012946,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "2700 E Bidwell St",
      address2: "Ste 500",
      address3: "",
      city: "Folsom",
      zip_code: "95630",
      country: "US",
      state: "CA",
      display_address: ["2700 E Bidwell St", "Ste 500", "Folsom, CA 95630"],
    },
    phone: "+19166739754",
    display_phone: "(916) 673-9754",
    distance: 11852.755282963644,
  },
  {
    id: "Jk2F7TqX9luLuluG-j91zw",
    alias: "the-pour-choice-auburn",
    name: "The Pour Choice",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/EuRCeEcAD66skURrAC19Og/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/the-pour-choice-auburn?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 449,
    categories: [
      {
        alias: "coffee",
        title: "Coffee & Tea",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.8949355,
      longitude: -121.0777911,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "177 Sacramento St",
      address2: "",
      address3: null,
      city: "Auburn",
      zip_code: "95603",
      country: "US",
      state: "CA",
      display_address: ["177 Sacramento St", "Auburn, CA 95603"],
    },
    phone: "+15308203451",
    display_phone: "(530) 820-3451",
    distance: 37614.105262221456,
  },
  {
    id: "_XDejR85wYNcz3sgXl9Wxw",
    alias: "capitol-beer-and-tap-room-sacramento",
    name: "Capitol Beer and Tap Room",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/DV80UnLTdSApJhGulkfvWQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/capitol-beer-and-tap-room-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 215,
    categories: [
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.573737,
      longitude: -121.414125,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "2222 Fair Oaks Blvd",
      address2: "",
      address3: "",
      city: "Sacramento",
      zip_code: "95825",
      country: "US",
      state: "CA",
      display_address: ["2222 Fair Oaks Blvd", "Sacramento, CA 95825"],
    },
    phone: "+19169221745",
    display_phone: "(916) 922-1745",
    distance: 17916.600482956525,
  },
  {
    id: "xH6QINGBt1b8JAQqkvpeNg",
    alias: "pangaea-bier-cafe-sacramento",
    name: "Pangaea Bier Cafe",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/SIbT5g5b5o2_YI51Wv_6rw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/pangaea-bier-cafe-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 885,
    categories: [
      {
        alias: "pubs",
        title: "Pubs",
      },
      {
        alias: "newamerican",
        title: "American (New)",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.5539331,
      longitude: -121.4756451,
    },
    transactions: ["delivery"],
    price: "$$",
    location: {
      address1: "2743 Franklin Blvd",
      address2: "",
      address3: "",
      city: "Sacramento",
      zip_code: "95818",
      country: "US",
      state: "CA",
      display_address: ["2743 Franklin Blvd", "Sacramento, CA 95818"],
    },
    phone: "+19164544942",
    display_phone: "(916) 454-4942",
    distance: 23355.98334842345,
  },
  {
    id: "7teVpg5ExWvxnQfij_PdtQ",
    alias: "ro-sham-beaux-sacramento",
    name: "Ro Sham Beaux",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/4h5c3tV_Rz0BTdCcTQYtSg/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/ro-sham-beaux-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 41,
    categories: [
      {
        alias: "wine_bars",
        title: "Wine Bars",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "sandwiches",
        title: "Sandwiches",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.575423,
      longitude: -121.47383,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "2413 J St",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "95816",
      country: "US",
      state: "CA",
      display_address: ["2413 J St", "Sacramento, CA 95816"],
    },
    phone: "+19163651216",
    display_phone: "(916) 365-1216",
    distance: 23104.889648319946,
  },
  {
    id: "9vUjy3SSGfYkNx5X_vqriQ",
    alias: "vons-chicken-east-sacramento-sacramento-3",
    name: "Vons Chicken - East Sacramento",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/hXMCoB1qodv9bhKJfPAjLA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/vons-chicken-east-sacramento-sacramento-3?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 35,
    categories: [
      {
        alias: "chicken_wings",
        title: "Chicken Wings",
      },
      {
        alias: "korean",
        title: "Korean",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.554119148477675,
      longitude: -121.4261867,
    },
    transactions: ["pickup", "delivery"],
    price: "$$",
    location: {
      address1: "6601 Folsom Blvd",
      address2: "Ste 100",
      address3: "",
      city: "Sacramento",
      zip_code: "95819",
      country: "US",
      state: "CA",
      display_address: ["6601 Folsom Blvd", "Ste 100", "Sacramento, CA 95819"],
    },
    phone: "+19162284670",
    display_phone: "(916) 228-4670",
    distance: 19074.24638606336,
  },
  {
    id: "aF-BWoEa7XZWJ9ris56RZA",
    alias: "river-shack-deli-and-pub-lotus",
    name: "River Shack Deli & Pub",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/fSZnXCOg2jW9trO8TgflgQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/river-shack-deli-and-pub-lotus?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 59,
    categories: [
      {
        alias: "sandwiches",
        title: "Sandwiches",
      },
      {
        alias: "salad",
        title: "Salad",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.80929,
      longitude: -120.9093,
    },
    transactions: [],
    price: "$",
    location: {
      address1: "7170 Hwy 49",
      address2: "",
      address3: "",
      city: "Lotus",
      zip_code: "95651",
      country: "US",
      state: "CA",
      display_address: ["7170 Hwy 49", "Lotus, CA 95651"],
    },
    phone: "+15306261334",
    display_phone: "(530) 626-1334",
    distance: 36977.33863452026,
  },
  {
    id: "VMzhYtUaeBswzmhCZzyF3Q",
    alias: "hop-gardens-taproom-sacramento",
    name: "Hop Gardens Taproom",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/0iQyeMb_llqtvXayH0mzxA/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/hop-gardens-taproom-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 198,
    categories: [
      {
        alias: "beergardens",
        title: "Beer Gardens",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "pizza",
        title: "Pizza",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.55184,
      longitude: -121.47619,
    },
    transactions: ["delivery"],
    price: "$$",
    location: {
      address1: "2904 Franklin Blvd",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "95818",
      country: "US",
      state: "CA",
      display_address: ["2904 Franklin Blvd", "Sacramento, CA 95818"],
    },
    phone: "+19164763889",
    display_phone: "(916) 476-3889",
    distance: 23419.71047412507,
  },
  {
    id: "jSZ6jJ2v0h710xFAbJhrhw",
    alias: "porchlight-brewing-sacramento-2",
    name: "Porchlight Brewing",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/8pBTwrOy8VXNgy90N49QTQ/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/porchlight-brewing-sacramento-2?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 93,
    categories: [
      {
        alias: "breweries",
        title: "Breweries",
      },
      {
        alias: "foodtrucks",
        title: "Food Trucks",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.56603,
      longitude: -121.43355,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "866 57th St",
      address2: "",
      address3: null,
      city: "Sacramento",
      zip_code: "95819",
      country: "US",
      state: "CA",
      display_address: ["866 57th St", "Sacramento, CA 95819"],
    },
    phone: "+19164765384",
    display_phone: "(916) 476-5384",
    distance: 19617.928058168545,
  },
  {
    id: "becXx1dgwgm84vZzFbS9gw",
    alias: "caps-pizza-and-tap-house-sacramento",
    name: "Cap's Pizza & Tap House",
    image_url:
      "https://s3-media1.fl.yelpcdn.com/bphoto/KirYzM-593KCOzmY92CK2g/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/caps-pizza-and-tap-house-sacramento?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 274,
    categories: [
      {
        alias: "pizza",
        title: "Pizza",
      },
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "chicken_wings",
        title: "Chicken Wings",
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 38.56318,
      longitude: -121.37898,
    },
    transactions: ["pickup", "delivery"],
    price: "$$",
    location: {
      address1: "8760 La Riviera Dr",
      address2: "Ste A",
      address3: null,
      city: "Sacramento",
      zip_code: "95826",
      country: "US",
      state: "CA",
      display_address: ["8760 La Riviera Dr", "Ste A", "Sacramento, CA 95826"],
    },
    phone: "+19163994217",
    display_phone: "(916) 399-4217",
    distance: 14894.192664736396,
  },
  {
    id: "xLqBR7u15w6gIb2Rh6kNWg",
    alias: "thai-on-tap-folsom-4",
    name: "Thai on Tap",
    image_url:
      "https://s3-media2.fl.yelpcdn.com/bphoto/dknuVJkIG-s2RYBr2owwsw/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/thai-on-tap-folsom-4?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 185,
    categories: [
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
      {
        alias: "thai",
        title: "Thai",
      },
    ],
    rating: 4.5,
    coordinates: {
      latitude: 38.65582274570184,
      longitude: -121.17798224540262,
    },
    transactions: [],
    price: "$$",
    location: {
      address1: "194 Blue Ravine Rd",
      address2: "Ste 120",
      address3: null,
      city: "Folsom",
      zip_code: "95630",
      country: "US",
      state: "CA",
      display_address: ["194 Blue Ravine Rd", "Ste 120", "Folsom, CA 95630"],
    },
    phone: "+19167908324",
    display_phone: "(916) 790-8324",
    distance: 9649.3835946648,
  },
  {
    id: "3b-smGmemzM9Ve-sN9ZxAQ",
    alias: "final-gravity-roseville",
    name: "Final Gravity",
    image_url:
      "https://s3-media3.fl.yelpcdn.com/bphoto/StgoBE2GfSYUylr8eG-yng/o.jpg",
    is_closed: false,
    url: "https://www.yelp.com/biz/final-gravity-roseville?adjust_creative=BRwnxxQVDh4lnO7BFVYRrQ&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=BRwnxxQVDh4lnO7BFVYRrQ",
    review_count: 221,
    categories: [
      {
        alias: "beerbar",
        title: "Beer Bar",
      },
    ],
    rating: 4.0,
    coordinates: {
      latitude: 38.736302,
      longitude: -121.224881,
    },
    transactions: ["delivery"],
    price: "$$",
    location: {
      address1: "9205 Sierra College Blvd",
      address2: "Ste 100",
      address3: "",
      city: "Roseville",
      zip_code: "95661",
      country: "US",
      state: "CA",
      display_address: [
        "9205 Sierra College Blvd",
        "Ste 100",
        "Roseville, CA 95661",
      ],
    },
    phone: "+19167821166",
    display_phone: "(916) 782-1166",
    distance: 18293.636814276324,
  },
];

module.exports = {
  beerBarsData,
}
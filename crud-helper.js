require('dotenv').config();
require('./config/database');

const User = require('./models/user');
const Business = require('./models/business');
const Event = require('./models/event');

let u, b, e;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventsSchema = new Schema({
    id: {
        type: String, 
        required: true
    }, 
    business_id: {
        type: String
    }, 
    name: {
        type: String, 
        required: true
    }, 
    image_url: {
        type: String
    },
    description: {
        type: String
    }, 
    time_start: {
        type: Date
    }, 
    time_end: {
        type: Date
    },
    is_canceled: {
        type: Boolean
    }, 
    is_free: {
        type: Boolean
    },
    cost: {
        type: Number
    }, 
    cost_max: {
        type:Number
    }, 
    interested_count: {
        type: Number
    }, 
    attending_count: {
        type: Number
    }, 
    location: {
        address1: {
            type: String
        }, 
        address2: {
            type: String
        }, 
        address3: {
            type: String
        }, 
        city: {
            type: String
        }, 
        zip_code: {
            type: String
        }, 
        country: {
            type: String
        }, 
        state: {
            type: String
        }, 
        display_address: {
            type: String
        }, 
        cross_streets: {
            type: String
        }
    }, 
    tickets_url: {
        type: String
    }
})

module.exports = mongoose.model('Events', eventsSchema);
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CalendarSchema = new Schema({
    date: [
        {
            type: Date,
            required: true
        }
    ],
},
    {
        timestamps: true
    }
)

const Calendar = mongoose.model('Calendar', CalendarSchema)

module.exports = Calendar
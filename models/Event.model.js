const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EventSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Por favor, indica el nombre del evento'],
        },

        musicStyle: {
            type: String,
            enum: ['Rock', 'Blues', 'Flamenco', 'Latin', 'Jazz', 'Pop'],
            required: [true, 'Por favor, indica el estilo musical que tendrá la sesión']
        },

        requiredExperience: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            required: [true, 'Por favor, indica el nivel de experiencia recomendado para los componentes de la sesión']
        },

        open: {
            type: Boolean,
            default: true
        },

        venueEvent: {
            type: Schema.Types.ObjectId,
            ref: 'Venue',
            required: [true, 'Por favor, indica la sala']
        },

        eventDate: {
            type: Date
        },

        planner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        maxPlaces: {
            type: Number
        },

        assistants: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }]
    },
    {
        timestamps: true
    }
)

const Event = mongoose.model('Event', EventSchema)

module.exports = Event

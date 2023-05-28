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

        level: {
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
            ref: 'Venue'
        },

        eventDate: {
            type: Schema.Types.ObjectId,
            ref: 'Calendar'
        },

        userPlanner: {
            type: Schema.Types.ObjectId,
            ref: 'User',
        },

        usersAssistants: [{
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: []
        }]
    },
    {
        timestamps: true
    }
    // state: {
    //     type: String,
    //     enum: ['closed', 'open'],
    //     default: 'open'
    // },
)

// DUDA GERMÁN
EventSchema.pre('save', async function (next) {
    const User = mongoose.model('User')
    const userAssistantsCount = await User.countDocuments({ _id: { $in: this.usersAssistants } })
    if (userAssistantsCount === this.capacity) {
        this.open = false;
    }
    next()
})

const Event = mongoose.model('Event', EventSchema)

module.exports = Event

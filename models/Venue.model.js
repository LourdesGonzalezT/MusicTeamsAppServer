const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VenueSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: [true, 'Por favor, indica el nombre de la sala'],
            set: value => value.charAt(0).toUpperCase() + value.substring(1)
        },

        addres: {
            type: String,
            trim: true,
            required: [true, 'Por favor, indica la dirección de la sala'],
        },

        phone: {
            type: String,
            maxlength: [9, 'Por favor, indica un número de teléfono correcto'],
            minlength: [8, 'Por favor, indica un número de teléfono correcto']
        },

        openingHours: {
            type: String,
        },

        venueImg: {
            type: String,
            default: 'https://www.sonoramajadahonda.com/wp-content/uploads/2021/03/IMG_20190409_215706_705.jpg',
        },

        features: [
            {
                type: String,
                enum: ['Parking', 'Aire Acondicionado', 'Alquiler de material', 'Microfonía', 'Amplificadores', 'Wifi', 'Almacén', 'Cafetería', 'Batería', 'Estudio de Grabación'],
                defaul: [],

            }
        ],

        capacity: {
            type: Number,
            require: [true, 'Por favor, especifica la capacidad máxima de la sala'],
        },

        description: {
            type: String,
            maxlength: [1000, 'Has superado el máximo de caracteres (1000)'],
        },

        venueSchedule: {
            type: Schema.Types.ObjectId,
            ref: 'Calendar'
        },

        eventsList: [
            {
                type: Schema.Types.ObjectId, ref: 'Event'
            }
        ],

        userManager: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },

        // CAMPOS PARA ESCALABILIDAD
        location: {
            type: {
                type: String
            },
            coordinates: [Number]
        },
        opinions: [
        ],
        rating: {
            type: Number
        },
        valuation: [
        ]
    },
    {
        timestamps: true
    }

)

const Venue = mongoose.model('Venue', VenueSchema);

module.exports = Venue;
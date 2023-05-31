const mongoose = require('mongoose')
const Schema = mongoose.Schema

const VenueSchema = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'Por favor, indica el nombre de la sala'],
            trim: true,
            // set: value => value.charAt(0).toUpperCase() + value.substring(1),
        },

        address: {
            type: String,
            trim: true,
            required: [true, 'Por favor, indica la dirección de la sala'],
        },

        phone: {
            type: String,
            maxlength: [9, 'Por favor, indica un número de teléfono correcto'],
            minlength: [9, 'Por favor, indica un número de teléfono correcto']
        },

        openingHours: {
            type: String,
            required: [true, 'Por favor, especifica los horarios de apertura de la sala'],
        },

        venueImg: {
            type: String,
            default: 'https://www.sonoramajadahonda.com/wp-content/uploads/2021/03/IMG_20190409_215706_705.jpg',
        },
        // ARRAY DE ARRAYS PREGUNTAR GERMAN
        features: [{
            type: String,
            enum: ['Parking', 'Aire Acondicionado', 'Alquiler de material', 'Microfonía', 'Amplificadores', 'Wifi', 'Almacén', 'Cafetería', 'Batería', 'Estudio de Grabación'],
            // default: [],
        }],

        capacity: {
            type: Number,
            required: [true, 'Por favor, especifica la capacidad máxima de la sala'],
        },

        description: {
            type: String,
            maxlength: [1000, 'Has superado el máximo de caracteres (1000)'],
        },

        eventsList: [
            {
                type: Schema.Types.ObjectId, ref: 'Event'
            }
        ],

        manager: {
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
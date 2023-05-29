const { Schema, model } = require("mongoose")

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: true,
      required: [true, 'Por favor, indica una dirección de correo electrónico'],
      trim: true,
      lowercase: true,
      validate: {
        validator: value => value.includes("@"),
        message: 'Por favor, indica un email correcto'
      }
    },

    password: {
      type: String,
    },

    firstName: {
      type: String,
      trim: true,
      required: [true, 'Por favor, indica tu nombre'],
      set: value => value.charAt(0).toUpperCase() + value.substring(1)
    },

    lastName: {
      type: String,
      trim: true,
      required: [true, 'Por favor, indica tu apellido'],
      set: value => value.charAt(0).toUpperCase() + value.substring(1)
    },

    role: {
      type: String,
      enum: ['MANAGER', 'MUSICIAN', 'ADMIN'],
      default: 'MUSICIAN'
    },

    avatar: {
      type: String,
      default: 'https://i.stack.imgur.com/l60Hf.png',
    },

    aboutMe: {
      type: String,
      maxlength: [500, 'Has superado el máximo de caracteres (500)'],
    },

    instrument: {
      type: String,
      required: [true, 'Por favor, selecciona el instrumento que vas a practicar'],
      enum: ['Guitarra', 'Bajo', 'Violín', 'Piano', 'Batería', 'Saxofón', 'Trompeta', 'Percusión']
    },

    level: {
      type: Number,
      required: [true, 'Por favor, selecciona tu nivel de experiencia'],
      enum: [1, 2, 3, 4, 5]
    },

    eventsCreated: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event'
      }
    ],

    eventsAssisted: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Event'
      }
    ],

    venuesCreated: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Venue'
      }
    ],

    venueFavorites: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Venue'
      }
    ],

    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User'
      }
    ],

    // CAMPOS PARA ESCALABILIDAD


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

const User = model("User", userSchema)

module.exports = User
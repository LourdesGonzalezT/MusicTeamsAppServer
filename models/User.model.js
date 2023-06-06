const { Schema, model } = require("mongoose")
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

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
      require: [true, 'Por favor, indica una contraseña'],
      minlength: [2, 'Por favor, introduce una contraseña de más de 2 caracteres']
    },

    firstName: {
      type: String,
      trim: true,
      required: [true, 'Por favor, indica tu nombre'],
    },

    lastName: {
      type: String,
      trim: true,
      required: [true, 'Por favor, indica tu apellido'],
    },

    role: {
      type: String,
      enum: ['MANAGER', 'MUSICIAN', 'ADMIN'],
      default: 'MUSICIAN'
    },

    avatar: {
      type: String,
      default: '{https://res.cloudinary.com/duewvq0qa/image/upload/v1685439940/jaagt9jzd154emhmfncj.jpg}',
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

userSchema.pre('save', function (next) {

  const saltRounds = 10
  const salt = bcrypt.genSaltSync(saltRounds)
  const hashedPassword = bcrypt.hashSync(this.password, salt)
  this.password = hashedPassword

  next()
})

userSchema.methods.signToken = function () {
  const { _id, email, firstName, avatar, role } = this
  const payload = { _id, email, firstName, avatar, role }

  const authToken = jwt.sign(
    payload,
    process.env.TOKEN_SECRET,
    { algorithm: 'HS256', expiresIn: "6h" }
  )

  return authToken
}

userSchema.methods.validatePassword = function (candidatePassword) {
  return bcrypt.compareSync(candidatePassword, this.password)
}

const User = model("User", userSchema)

module.exports = User
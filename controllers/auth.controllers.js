const User = require('./../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const signup = (req, res, next) => {

    const { email, password, firstName, lastName, avatar, aboutMe, instrument, level } = req.body

    User
        .create({ email, password, firstName, lastName, avatar, aboutMe, instrument, level })
        .then((createdUser) => {
            const { _id, email, firstName, lastName, avatar, aboutMe, instrument, level } = createdUser
            const user = { _id, email, firstName, lastName, avatar, aboutMe, instrument, level }
            res.status(201).json({ user })
        })
        .catch(err => {
            next(err)
        })
}

const login = (req, res, next) => {

    const { email, password } = req.body;

    if (email === '' || password === '') {
        res.status(400).json({ message: "Provide email and password." });
        return;
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (!foundUser) {
                res.status(401).json({ message: "User not found." })
                return
            }

            if (foundUser.validatePassword(password)) {

                const authToken = foundUser.signToken()

                res.json({ authToken: authToken })
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user." });
            }

        })
        .catch(err => next(err))
}

const verify = (req, res, next) => {
    res.json(req.payload)
}

module.exports = {
    signup,
    login,
    verify
}
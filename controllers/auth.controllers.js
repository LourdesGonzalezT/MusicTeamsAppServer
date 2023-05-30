const User = require('./../models/User.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const saltRounds = 10

const signup = (req, res, next) => {

    const { email, password, firstName, lastName, avatar, aboutMe, instrument, level } = req.body

    if (password.length < 2) {
        res.status(400).json({ message: "Password must have at least 2 characters" })
        return
    }

    User
        .findOne({ email })
        .then((foundUser) => {

            if (foundUser) {
                res.status(400).json({ message: "User already exists." })
                return
            }

            const salt = bcrypt.genSaltSync(saltRounds)
            const hashedPassword = bcrypt.hashSync(password, salt)

            return User.create({ email, password: hashedPassword, firstName, lastName, avatar, aboutMe, instrument, level })
        })
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

    console.log('secretoo', process.env.TOKEN_SECRET)

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
                return;
            }

            if (bcrypt.compareSync(password, foundUser.password)) {

                const { _id, email, firstName, avatar, role } = foundUser;

                const payload = { _id, email, firstName, avatar, role }

                const authToken = jwt.sign(
                    payload,
                    process.env.TOKEN_SECRET,
                    { algorithm: 'HS256', expiresIn: "6h" }
                )

                res.json({ authToken: authToken });
            }
            else {
                res.status(401).json({ message: "Unable to authenticate the user." });
            }

        })
        .catch(err => next(err));
}


module.exports = {
    signup,
    login
}
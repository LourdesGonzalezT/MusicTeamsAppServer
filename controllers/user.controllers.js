const User = require('./../models/User.model')


const getAllUsers = (req, res, next) => {

    User
        .find()
        // TODO: PROYECTAR
        .then(response => res.json(response))
        .catch(err => next(err))
}


const newUser = (req, res, next) => {

    const { email, password, firstName, lastName, avatar, aboutMe, instrument, level, userDiary } = req.body

    User
        .create({ email, password, firstName, lastName, avatar, aboutMe, instrument, level, userDiary })
        .then(response => res.json(response))
        .catch(err => next(err))

}

const userDetails = (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const userEdit = (req, res, next) => {

    const { email, role, firstName, lastName, avatar, aboutMe, instrument, level, venueFavorites, friends } = req.body
    const { user_id } = req.params

    User
        .findByIdAndUpdate(user_id, { email, role, firstName, lastName, avatar, aboutMe, instrument, level, venueFavorites, friends })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const userDelete = (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(() => res.sendStatus(204))
        // TODO: REVIUSAR OTRAS OPCIONES RESOLUBLES CON SENDSTATUS
        .catch(err => next(err))
}

module.exports = {
    getAllUsers,
    newUser,
    userDetails,
    userEdit,
    userDelete
}
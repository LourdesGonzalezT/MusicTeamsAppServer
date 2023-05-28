const router = require('express').Router()

const User = require('./../models/User.model')

router.get('/getAllUsers', (req, res, next) => {

    User
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/newUser', (req, res, next) => {

    const { email, password, firstName, lastName, profileImg, aboutMe, instrument, level, userDiary } = req.body

    User
        .create({ email, password, firstName, lastName, profileImg, aboutMe, instrument, level, userDiary })
        .then(response => res.json(response))
        .catch(err => next(err))

})

router.get('/:user_id', (req, res, next) => {

    const { user_id } = req.params

    User
        .findById(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/:user_id/edit', (req, res, next) => {

    const { email, role, firstName, lastName, profileImg, aboutMe, instrument, level, venueFavorites, friends } = req.body
    const { user_id } = req.params

    User
        .findByIdAndUpdate(user_id, { email, role, firstName, lastName, profileImg, aboutMe, instrument, level, venueFavorites, friends })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/:user_id/delete', (req, res, next) => {

    const { user_id } = req.params

    User
        .findByIdAndDelete(user_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router


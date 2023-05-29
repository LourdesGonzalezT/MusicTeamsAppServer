const router = require('express').Router()
const {
    getAllUsers,
    newUser,
    userDetails,
    userEdit,
    userDelete
} = require('./../controllers/user.controllers')

router.get('/getAllUsers', getAllUsers)

router.post('/newUser', newUser)

router.get('/:user_id', userDetails)

router.put('/:user_id/edit', userEdit)

router.delete('/:user_id/delete', userDelete)

module.exports = router


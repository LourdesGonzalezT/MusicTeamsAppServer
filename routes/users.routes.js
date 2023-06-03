const router = require('express').Router()
const {
    getAllUsers,
    newUser,
    userDetails,
    userEdit,
    userDelete,
    userAddVenue,
    userAddFriend,
    userAssitEvent,
    userChangeRole

} = require('./../controllers/user.controllers')

router.get('/getAllUsers', getAllUsers)

router.post('/newUser', newUser)

router.get('/:user_id', userDetails)

router.put('/:user_id/edit', userEdit)

router.delete('/:user_id/delete', userDelete)

router.put('/:user_id/addVenueFavorite/:venue_id', userAddVenue)

router.put('/:user_id/addFriend/:friend_id', userAddFriend)

router.put('/:user_id/assitEvent/:event_id', userAssitEvent)

router.put('/:user_id/changeRole', userChangeRole)

module.exports = router


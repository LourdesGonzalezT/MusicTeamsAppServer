const router = require('express').Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const {
    getOpenEvents,
    getClosedEvents,
    getAllEvents,
    newEvent,
    eventDetails,
    eventEdit,
    eventDelete,
    eventAddAssistants

} = require('./../controllers/event.controllers')

router.get('/getOpenEvents', getOpenEvents)

router.get('/getClosedEvents', getClosedEvents)

router.get('/getAllEvents', getAllEvents)

router.post('/newEvent', isAuthenticated, newEvent)

router.get('/:event_id', eventDetails)

router.put('/:event_id/edit', eventEdit)

router.delete('/:event_id/delete', eventDelete)

router.put('/:event_id/edit/:user_id', eventAddAssistants)

module.exports = router

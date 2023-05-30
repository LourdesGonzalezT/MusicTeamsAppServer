const router = require('express').Router()

const {
    getOpenEvents,
    getClosedEvents,
    getAllEvents,
    newEvent,
    eventDetails,
    eventEdit,
    eventDelete

} = require('./../controllers/event.controllers')

router.get('/getOpenEvents', getOpenEvents)

router.get('/getClosedEvents', getClosedEvents)

router.get('/getAllEvents', getAllEvents)

router.post('/newEvent', newEvent)

router.get('/:event_id', eventDetails)

router.put('/:event_id/edit', eventEdit)

router.delete('/:event_id/delete', eventDelete)

module.exports = router

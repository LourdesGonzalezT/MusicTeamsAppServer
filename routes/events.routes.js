const router = require('express').Router()

const Event = require('./../models/Event.model')

router.get('/getOpenEvents', (req, res, next) => {

    Event
        .find({ open: true })
        // .select()
        // .sort()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getClosedEvents', (req, res, next) => {

    Event
        .find({ open: false })
        // .select()
        // .sort()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/getAllEvents', (req, res, next) => {

    Event
        .find()
        // .select()
        // .sort()
        .then(response => res.json(response))
        .catch(err => next(err))
})


router.post('/newEvent', (req, res, next) => {

    const { name, musicStyle, requiredExperience, assistants, venueEvent, eventDate, planner } = req.body

    Event
        .create({ name, musicStyle, requiredExperience, assistants, venueEvent, eventDate, planner })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/:event_id', (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/:event_id/edit', (req, res, next) => {

    const { name, musicStyle, requiredExperience, assistants } = req.body
    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { name, musicStyle, requiredExperience, assistants })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/:event_id/delete', (req, res, next) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router

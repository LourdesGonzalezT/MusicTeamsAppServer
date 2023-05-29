const Event = require('./../models/Event.model')


const getOpenEvents = (req, res, next) => {

    Event
        .find({ open: true })
        // .select()
        // .sort()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getClosedEvents = (req, res, next) => {

    Event
        .find({ open: false })
        // .select()
        // .sort()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getAllEvents = (req, res, next) => {

    Event
        .find()
        // .select()
        // .sort()
        .then(response => res.json(response))
        .catch(err => next(err))
}

const newEvent = (req, res, next) => {

    const { name, musicStyle, requiredExperience, assistants, venueEvent, eventDate, planner } = req.body

    Event
        .create({ name, musicStyle, requiredExperience, assistants, venueEvent, eventDate, planner })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventDetails = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventEdit = (req, res, next) => {

    const { name, musicStyle, requiredExperience, assistants } = req.body
    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { name, musicStyle, requiredExperience, assistants })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventDelete = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findByIdAndDelete(event_id)
        .then(response => res.json(response))
        .catch(err => next(err))
}

module.exports = {
    getOpenEvents,
    getClosedEvents,
    getAllEvents,
    newEvent,
    eventDetails,
    eventEdit,
    eventDelete
}
const Event = require('./../models/Event.model')
const User = require('./../models/User.model')

const getOpenEvents = (req, res, next) => {

    Event
        .find({ open: true })
        // .select()
        .sort({ name: 1 })
        .populate('assistants')
        .populate('planner')
        .populate('venueEvent')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const getClosedEvents = (req, res, next) => {

    Event
        .find({ open: false })
        // .populate('assistants')
        // .populate('planner')
        // .populate('venueEvent')
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
        // .populate('assistants')
        // .populate('planner')
        // .populate('venueEvent')
        .then(response => res.json(response))
        .catch(err => next(err))
}


const newEvent = (req, res, next) => {

    const { name, musicStyle, requiredExperience, assistants, venueEvent, eventDate, maxPlaces } = req.body
    const { _id: planner } = req.payload

    Event.create({ name, musicStyle, requiredExperience, assistants, venueEvent, eventDate, maxPlaces, planner })
        .then(event => {
            const event_id = event._id
            return Promise.all([
                User.findByIdAndUpdate(planner, { $addToSet: { eventsCreated: event_id } }),
                User.findByIdAndUpdate(planner, { $addToSet: { eventsAssisted: event_id } }),
            ])
        })
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventDetails = (req, res, next) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .populate('assistants')
        .populate('planner')
        .populate('venueEvent')
        .then(response => res.json(response))
        .catch(err => next(err))
}

const eventEdit = (req, res, next) => {

    const { name, musicStyle, requiredExperience, assistants } = req.body
    const { event_id } = req.params

    Event
        .findByIdAndUpdate(event_id, { name, musicStyle, requiredExperience, assistants }, { new: true })
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

const eventAddAssistants = (req, res, next) => {
    const { event_id } = req.params
    const { user_id } = req.params
    let eventUpdatePromise = Promise.resolve()

    Event.findById(event_id)
        .then(event => {
            if (event.assistants.length === event.maxPlaces - 1) {
                eventUpdatePromise = Event.findByIdAndUpdate(event_id, { open: false }, { new: true })
            }

            Promise.all([
                User.findByIdAndUpdate(user_id, { $addToSet: { eventsAssisted: event_id } }),
                Event.findByIdAndUpdate(event_id, { $addToSet: { assistants: user_id } }),
                eventUpdatePromise,
            ])
                .then(response => res.json(response))
                .catch(err => next(err))
        })
        .catch(err => next(err))
};

module.exports = {
    getOpenEvents,
    getClosedEvents,
    getAllEvents,
    newEvent,
    eventDetails,
    eventEdit,
    eventDelete,
    eventAddAssistants
}
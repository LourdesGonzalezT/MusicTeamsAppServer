const router = require('express').Router()

const Venue = require('./../models/Venue.model')


router.get('/getAllVenues', (req, res, next) => {

    Venue
        .find()
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.post('/newVenue', (req, res, next) => {

    const { name, address, phone, openingHours, venueImg, features, capacity, description, venueSchedule, userManager } = req.body

    Venue
        .create({ name, address, phone, openingHours, venueImg, features, capacity, description, venueSchedule, userManager })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.get('/:venue_id', (req, res, next) => {

    const { venue_id } = req.params

    Venue
        .findById(venue_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.put('/:venue_id/edit', (req, res, next) => {

    const { name, address, phone, openingHours, venueImg, features, capacity, description } = req.body
    const { venue_id } = req.params

    Venue
        .findByIdAndUpdate(venue_id, { name, address, phone, openingHours, venueImg, features, capacity, description })
        .then(response => res.json(response))
        .catch(err => next(err))
})

router.delete('/:venue_id/delete', (req, res, next) => {

    const { venue_id } = req.params

    Venue
        .findByIdAndDelete(venue_id)
        .then(response => res.json(response))
        .catch(err => next(err))
})

module.exports = router

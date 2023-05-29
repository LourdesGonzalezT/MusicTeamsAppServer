const router = require('express').Router()

const {
    getAllVenues,
    newVenue,
    venueDetails,
    venueEdit,
    venueDelete

} = require('./../controllers/venue.controllers')

router.get('/getAllVenues', getAllVenues)

router.post('/newVenue', newVenue)

router.get('/:venue_id', venueDetails)

router.put('/:venue_id/edit', venueEdit)

router.delete('/:venue_id/delete', venueDelete)

module.exports = router

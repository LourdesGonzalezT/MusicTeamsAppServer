const router = require('express').Router()
const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

const {
    getAllVenues,
    newVenue,
    venueDetails,
    venueEdit,
    venueDelete,
    checkAvailability,
    getFilterVenuesByName

} = require('./../controllers/venue.controllers')

router.get('/getAllVenues', getAllVenues)

router.post('/newVenue', isAuthenticated, newVenue)

router.get('/:venue_id', venueDetails)

router.put('/:venue_id/edit', venueEdit)

router.delete('/:venue_id/delete', venueDelete)

router.get('/:venue_id/checkAvailability/:requested_date', checkAvailability)

router.get('/getFilterVenuesByName?name=${inputValue}', getFilterVenuesByName)

module.exports = router

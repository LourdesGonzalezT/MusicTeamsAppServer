const router = require("express").Router()

router.use('/users', require('./users.routes'))
router.use('/venues', require('./venues.routes'))
router.use('/events', require('./events.routes'))
// router.use('/calendar', require('./calendar.routes'))
// router.use('/auth', require('./auth.routes'))


module.exports = router
const router = require("express").Router()

router.use('/users', require('./users.routes'))
router.use('/venues', require('./venues.routes'))
router.use('/events', require('./events.routes'))
router.use('/auth', require('./auth.routes'))
router.use('/upload', require('./upload.routes'))


module.exports = router
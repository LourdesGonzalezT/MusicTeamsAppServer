const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/verifyToken.middleware")


const {
    signup,
    login
} = require('./../controllers/auth.controllers')

router.post('/signup', signup)

router.post('/login', login)

router.get('/verify', isAuthenticated, (req, res, next) => {
    res.json(req.payload)
})

module.exports = router
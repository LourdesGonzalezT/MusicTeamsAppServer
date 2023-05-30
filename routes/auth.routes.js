const router = require("express").Router()

const { isAuthenticated } = require("../middlewares/verifyToken.middleware")


const {
    signup,
    login
} = require('./../controllers/auth.controllers')

router.post('/signup', signup)

router.post('/login', login)

router.get('/verify', isAuthenticated, (req, res, next) => {
    console.log('EL USUARIO TIENE UN TOKEN CORRECTO Y SUS DATOS SON', req.payload)
    setTimeout(() => {
        res.status(200).json(req.payload)
    }, 1500)
})

module.exports = router
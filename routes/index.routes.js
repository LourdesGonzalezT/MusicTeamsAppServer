const router = require("express").Router()

// QUITAR SOLO SIRVE PARA TESTEAR
router.get("/", (req, res, next) => {
  res.json("All good in here")
})

module.exports = router

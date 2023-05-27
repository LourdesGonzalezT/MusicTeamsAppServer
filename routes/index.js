// const { router } = require("../app")

module.exports = app => {
    const indexRoutes = require("./index.routes")
    app.use("/api", indexRoutes)
}
// module.exports = router
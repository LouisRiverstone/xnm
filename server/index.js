const router = require('express').Router()

router.use("/roms", require("./routes/roms"))
router.use("/run", require("./routes/run"))
router.use("/upload", require("./routes/upload"))
router.use("/emulators", require("./routes/emulators"))

module.exports = router
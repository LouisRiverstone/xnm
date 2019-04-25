const router = require('express').Router()
const fs = require("fs")
const path = require("path")

router.get("/", (req, res) => {
    fs.readFile(path.resolve(__dirname, "..", "setup.json"), (err, files) => {
        if (err) {
            return res.status(500).send(err.message)
        }
        res.json(JSON.parse(files))
    })
})

module.exports = router
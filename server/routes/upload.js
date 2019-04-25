const router = require('express').Router()
const http = require("http")
const io = require("socket.io")(http)

router.get("/", (req, res) => {
    io.on("connection", (socket) => {
        console.log("teste")
    })
    res.send("ok")
})

module.exports = router
const router = require('express').Router()
const { exec } = require('child_process');

router.post("/", (req, res) => {
    const { rom, emu, cns, folder, parameters } = req.body
    exec(`${emu} ${parameters} 'static/games/roms/${cns}/${folder}/${rom}'`, (err, stdout, stderr) => {
        if (err) {
            console.log(err.message)
        }
    })
})


module.exports = router
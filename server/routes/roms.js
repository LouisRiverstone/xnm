const router = require('express').Router()
const fs = require('fs-extra')
let listGames = []

router.get("/", (req, res) => {
    fs.readdir("./static/games/roms", "utf-8", (err, files) => {
        if (err) {
            return err.message
        }
        files.forEach(cns => {
            if (err) {
                return err.message
            }
            fs.readdir("./static/games/roms/" + cns, "utf-8", (err, games) => {
                if (err) {
                    return err.message
                }
                games.forEach(game => {
                    fs.readdir("./static/games/roms/" + cns + "/" + game, "utf-8", (err, roms) => {
                        if (err) {
                            return err.message
                        }
                        roms.forEach(rom => {
                            listGames.push({
                                cns,
                                folder: game,
                                rom
                            })
                        })
                    });
                });

            })
        });
        res.send(listGames)
        listGames = []
    })
})


module.exports = router
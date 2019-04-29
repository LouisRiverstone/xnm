const router = require('express').Router()
const fs = require('fs-extra')
const path = require('path')

router.get("/", async (req, res) => {
	const listGames = []

	try {
		const romsDir = path.join(__dirname, '..', '..', 'static', 'games', 'roms')
		const files = await fs.readdir(romsDir, "utf-8")

		for(const cns of files){
			const cnsDir = path.join(romsDir, cns)
			const games = await fs.readdir(cnsDir, "utf-8")

			for(const game of games){
				const gameDir = path.join(cnsDir, game)
				const roms = await fs.readdir(gameDir, "utf-8")

				for(const rom of roms){
					listGames.push({
						cns,
						folder: game,
						rom
					})
				}
			}
		}

		res.json(listGames)
	}
	catch(err){
		res.status(500).send(err.message)
	}
})


module.exports = router
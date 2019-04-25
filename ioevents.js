const ioHook = require('iohook');
const { exec } = require('child_process');
const emus = require("./server/setup.json")

ioHook.on('keyup', event => {
    if (event.keycode === 1) {
        emus.forEach(em => {
            exec(`pkill ${em.emu}`, (err, stdout, stderr) => {
                if (err) {
                    console.log(err.message)
                }
            })
        });
    }
});


ioHook.start();

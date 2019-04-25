<template>
  <div>
    <h1>Games</h1>
    <div v-for="(game,i) in games" :key="i">
      <a @click="runGame(game)" href="#">{{game.folder}}</a>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      games: [],
      emulatorConfig: []
    };
  },
  async mounted() {
    this.games = (await axios.get("/api/roms")).data
      .sort((a, b) => a.folder > b.folder)
      .filter(game => game.cns == "genesis");
    this.emulatorConfig = (await axios.get("/api/emulators")).data.find(
      em => em.cns == "genesis"
    );
  },
  methods: {
    runGame: function(objRun) {
      axios.post("/api/run", {
        rom: objRun.rom,
        folder: objRun.folder,
        emu: this.emulatorConfig.emu,
        cns: objRun.cns,
        parameters: this.emulatorConfig.parameters
      });
    }
  }
};
</script>

<template>
  <div>
    <h1>Games</h1>
    <div v-for="(vg,i) in vgs" :key="i">
      <a :href="'console/'+vg.cns">{{vg.cns}}</a>
    </div>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      vgs: []
    };
  },
  async mounted() {
    this.vgs = (await axios.get("/api/emulators")).data;
  }
};
</script>


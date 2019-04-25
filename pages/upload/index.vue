<template>
  <div>
    <form action="/api/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file">
      <input type="submit" value="Upload!">
    </form>
  </div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {};
  }
};
</script>

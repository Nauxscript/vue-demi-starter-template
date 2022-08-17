<template>
  <div>
    <h2 class="title">Vue 2.x Project, Now version is {{version}}</h2>
    <fun-button />
  </div>

</template>
<script>
import { version } from 'vue'
export default {
  name: "Home",
  components: {},
  data() {
    return {
      version
    }
  },
  mounted() {
    console.log(this.FunButton)
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>

<template>
  <div>
    <h2 class="title">Vue 2.x Project, Now version is {{version}}</h2>
    <fun-button />
  </div>

</template>
<script>
import { version } from 'vue'
import { FunButton } from '@fun/components'
export default {
  name: "Home",
  components: {
    FunButton
  },
  data() {
    return {
      version
    }
  },
};
</script>

<style scoped>
.title {
  text-align: center;
}
</style>

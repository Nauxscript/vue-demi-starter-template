<script lang="ts">
import { defineComponent, isVue2, h } from 'vue-demi'

export default defineComponent({
  render(h_vue2) {
    if (isVue2) {
      return h_vue2("p", {}, 'Vue 2 Button For Fun 💖')
    }
    return h('p', {}, 'Vue 3 Button For Fun ✨')
  },
})
</script>

<script lang="ts">
import { defineComponent, isVue2, h } from 'vue-demi'

export default defineComponent({
  render(h_vue2) {
    if (isVue2) {
      console.log('vue2')
      return h_vue2("p", {}, 'fun-button: this is call by vue2')
    }
    console.log('vue3')
    return h('p', {}, 'fun-button: this is call by vue3')
  },
})
</script>

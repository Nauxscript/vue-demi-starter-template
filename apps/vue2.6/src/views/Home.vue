<template>
  <div>
    <div>This is a project base in {{$version}}</div>
    <fun-button></fun-button>
  </div>
</template>
<script>
import {FunButton} from '@fun/components'
export default {
  name: "Home",
  components: {
    FunButton
  },
  mounted() {
    // console.log(this.$)
  },
  components: {},
};
</script>

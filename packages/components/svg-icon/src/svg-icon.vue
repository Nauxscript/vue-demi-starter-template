<script lang="ts">
import { defineComponent, isVue2, h, computed } from 'vue-demi'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
  },
  setup(props) {
    const iconName = computed(() => `#icon-${props.iconClass}`);
    const svgClass = computed(() => {
      if (props.className) {
        return 'svg-icon ' + props.className;
      } else {
        return 'svg-icon';
      }
    });
    return () => h(
        "svg",
        {
          staticClass: [svgClass.value],
        },
        h('use', {
          'xlink:href': iconName.value
        })
      )
  },
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
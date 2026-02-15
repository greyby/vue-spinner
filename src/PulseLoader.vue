<template>
<div class="v-spinner" v-show="loading">
    <div class="v-pulse v-pulse1" v-bind:style="[spinnerStyle,spinnerDelay1]">
    </div><div class="v-pulse v-pulse2" v-bind:style="[spinnerStyle,spinnerDelay2]">
    </div><div class="v-pulse v-pulse3" v-bind:style="[spinnerStyle,spinnerDelay3]">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'PulseLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '15px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    const spinnerStyle = computed(() => ({
      backgroundColor: props.color,
      width: props.size,
      height: props.size,
      margin: props.margin,
      borderRadius: props.radius
    }))

    const spinnerDelay1 = { animationDelay: '0.12s' }
    const spinnerDelay2 = { animationDelay: '0.24s' }
    const spinnerDelay3 = { animationDelay: '0.36s' }

    return { spinnerStyle, spinnerDelay1, spinnerDelay2, spinnerDelay3 }
  }
})
</script>

<style scoped>
.v-spinner .v-pulse
{
    -webkit-animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);
            animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block;
}

@keyframes v-pulseStretchDelay
{
    0%,
    80%
    {
        transform: scale(1);
        opacity: 1;
    }
    45%
    {
        transform: scale(0.1);
        opacity: 0.7;
    }
}
</style>
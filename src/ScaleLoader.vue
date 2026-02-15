<template>
<div class="v-spinner" v-show="loading">
    <div class="v-scale v-scale1" v-bind:style="[spinnerStyle,spinnerDelay1]">
    </div><div class="v-scale v-scale2" v-bind:style="[spinnerStyle,spinnerDelay2]">
    </div><div class="v-scale v-scale3" v-bind:style="[spinnerStyle,spinnerDelay3]">
    </div><div class="v-scale v-scale4" v-bind:style="[spinnerStyle,spinnerDelay4]">
    </div><div class="v-scale v-scale5" v-bind:style="[spinnerStyle,spinnerDelay5]">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'ScaleLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    height: {
      type: String,
      default: '35px'
    },
    width: {
      type: String,
      default: '4px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '2px'
    }
  },
  setup(props) {
    const spinnerStyle = computed(() => ({
      backgroundColor: props.color,
      height: props.height,
      width: props.width,
      margin: props.margin,
      borderRadius: props.radius
    }))

    const spinnerDelay1 = { animationDelay: '0.1s' }
    const spinnerDelay2 = { animationDelay: '0.2s' }
    const spinnerDelay3 = { animationDelay: '0.3s' }
    const spinnerDelay4 = { animationDelay: '0.4s' }
    const spinnerDelay5 = { animationDelay: '0.5s' }

    return {
      spinnerStyle,
      spinnerDelay1, spinnerDelay2, spinnerDelay3, spinnerDelay4, spinnerDelay5
    }
  }
})
</script>

<style scoped>
.v-spinner
{
    text-align: center;
}

.v-spinner .v-scale
{
    -webkit-animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
            animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block;
}

@keyframes v-scaleStretchDelay
{
    0%,
    100%
    {
        transform: scaleY(1);
    }
    50%
    {
        transform: scaleY(0.4);
    }
}
</style>
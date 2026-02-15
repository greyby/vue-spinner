<template>
  <div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0}" v-show="loading">
    <div class="v-fade v-fade1" v-bind:style="[spinnerStyle,animationStyle1]">
    </div><div class="v-fade v-fade2" v-bind:style="[spinnerStyle,animationStyle2]">
    </div><div class="v-fade v-fade3" v-bind:style="[spinnerStyle,animationStyle3]">
    </div><div class="v-fade v-fade4" v-bind:style="[spinnerStyle,animationStyle4]">
    </div><div class="v-fade v-fade5" v-bind:style="[spinnerStyle,animationStyle5]">
    </div><div class="v-fade v-fade6" v-bind:style="[spinnerStyle,animationStyle6]">
    </div><div class="v-fade v-fade7" v-bind:style="[spinnerStyle,animationStyle7]">
    </div><div class="v-fade v-fade8" v-bind:style="[spinnerStyle,animationStyle8]">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'FadeLoader',

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
      default: '15px'
    },
    width: {
      type: String,
      default: '5px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '20px'
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

    const ngRadius = computed(() => '-' + props.radius)

    const quarter = computed(() =>
      (parseFloat(props.radius) / 2 + parseFloat(props.radius) / 5.5) + 'px'
    )

    const ngQuarter = computed(() => '-' + quarter.value)

    const animationStyle1 = computed(() => ({
      top: props.radius,
      left: 0,
      animationDelay: '0.12s'
    }))

    const animationStyle2 = computed(() => ({
      top: quarter.value,
      left: quarter.value,
      animationDelay: '0.24s',
      transform: 'rotate(-45deg)'
    }))

    const animationStyle3 = computed(() => ({
      top: 0,
      left: props.radius,
      animationDelay: '0.36s',
      transform: 'rotate(90deg)'
    }))

    const animationStyle4 = computed(() => ({
      top: ngQuarter.value,
      left: quarter.value,
      animationDelay: '0.48s',
      transform: 'rotate(45deg)'
    }))

    const animationStyle5 = computed(() => ({
      top: ngRadius.value,
      left: 0,
      animationDelay: '0.60s'
    }))

    const animationStyle6 = computed(() => ({
      top: ngQuarter.value,
      left: ngQuarter.value,
      animationDelay: '0.72s',
      transform: 'rotate(-45deg)'
    }))

    const animationStyle7 = computed(() => ({
      top: 0,
      left: ngRadius.value,
      animationDelay: '0.84s',
      transform: 'rotate(90deg)'
    }))

    const animationStyle8 = computed(() => ({
      top: quarter.value,
      left: ngQuarter.value,
      animationDelay: '0.96s',
      transform: 'rotate(45deg)'
    }))

    return {
      spinnerStyle,
      animationStyle1, animationStyle2, animationStyle3, animationStyle4,
      animationStyle5, animationStyle6, animationStyle7, animationStyle8
    }
  }
})
</script>

<style scoped>

.v-spinner .v-fade
{
    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
            animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    position: absolute;
}

@keyframes v-fadeStretchDelay
{
    50%
    {
        opacity: 0.3;
    }
    100%
    {
        opacity: 1;
    }
}
</style>
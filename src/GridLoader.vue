<template>
  <div class="v-spinner" v-bind:style="containerStyle" v-show="loading">
    <div class="v-grid v-grid1" v-bind:style="[spinnerStyle,animationStyle1]">
    </div><div class="v-grid v-grid2" v-bind:style="[spinnerStyle,animationStyle2]">
    </div><div class="v-grid v-grid3" v-bind:style="[spinnerStyle,animationStyle3]">
    </div><div class="v-grid v-grid4" v-bind:style="[spinnerStyle,animationStyle4]">
    </div><div class="v-grid v-grid5" v-bind:style="[spinnerStyle,animationStyle5]">
    </div><div class="v-grid v-grid6" v-bind:style="[spinnerStyle,animationStyle6]">
    </div><div class="v-grid v-grid7" v-bind:style="[spinnerStyle,animationStyle7]">
    </div><div class="v-grid v-grid8" v-bind:style="[spinnerStyle,animationStyle8]">
    </div><div class="v-grid v-grid9" v-bind:style="[spinnerStyle,animationStyle9]">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'GridLoader',

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
    const random = (value) => Math.random() * value
    const delay = () => ((random(100) / 100) - 0.2) + 's'
    const duration = () => ((random(100) / 100) + 0.6) + 's'

    const spinnerStyle = computed(() => ({
      backgroundColor: props.color,
      width: props.size,
      height: props.size,
      margin: props.margin,
      borderRadius: props.radius
    }))

    const makeDelayStyle = () => ({
      animationDelay: delay(),
      animationDuration: duration()
    })

    const animationStyle1 = computed(makeDelayStyle)
    const animationStyle2 = computed(makeDelayStyle)
    const animationStyle3 = computed(makeDelayStyle)
    const animationStyle4 = computed(makeDelayStyle)
    const animationStyle5 = computed(makeDelayStyle)
    const animationStyle6 = computed(makeDelayStyle)
    const animationStyle7 = computed(makeDelayStyle)
    const animationStyle8 = computed(makeDelayStyle)
    const animationStyle9 = computed(makeDelayStyle)

    const containerStyle = computed(() => ({
      width: parseFloat(props.size) * 3 + parseFloat(props.margin) * 6 + 'px',
      fontSize: 0
    }))

    return {
      spinnerStyle, containerStyle,
      animationStyle1, animationStyle2, animationStyle3,
      animationStyle4, animationStyle5, animationStyle6,
      animationStyle7, animationStyle8, animationStyle9
    }
  }
})
</script>

<style scoped>
.v-spinner .v-grid
{
    -webkit-animation: v-gridStretchDelay 1s infinite ease;
            animation: v-gridStretchDelay 1s infinite ease;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block;
}

@keyframes v-gridStretchDelay
{
    0%
    {
        transform: scale(1);
    }
    50%
    {
        transform: scale(0.5);
        opacity: 0.7;
    }
    100%
    {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
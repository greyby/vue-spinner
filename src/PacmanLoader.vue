<template>
<div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0}" v-show="loading">
    <div class="v-pacman v-pacman1" v-bind:style="spinnerStyle1">
    </div><div class="v-pacman v-pacman-ball" v-bind:style="[spinnerStyle,ballPositionStyle,spinnerDelay2]">
    </div><div class="v-pacman v-pacman-ball" v-bind:style="[spinnerStyle,ballPositionStyle,spinnerDelay3]">
    </div><div class="v-pacman v-pacman-ball" v-bind:style="[spinnerStyle,ballPositionStyle,spinnerDelay4]">
    </div><div class="v-pacman v-pacman-ball" v-bind:style="[spinnerStyle,ballPositionStyle,spinnerDelay5]">
    </div>
</div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'PacmanLoader',

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
      default: '25px'
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
    const spinnerDelay2 = { animationDelay: '0.25s' }
    const spinnerDelay3 = { animationDelay: '0.50s' }
    const spinnerDelay4 = { animationDelay: '0.75s' }
    const spinnerDelay5 = { animationDelay: '1s' }

    const spinnerStyle = computed(() => ({
      backgroundColor: props.color,
      width: '10px',
      height: '10px',
      margin: props.margin,
      borderRadius: props.radius
    }))

    const border1 = computed(() => props.size + ' solid transparent')
    const border2 = computed(() => props.size + ' solid ' + props.color)

    const spinnerStyle1 = computed(() => ({
      width: 0,
      height: 0,
      borderTop: border2.value,
      borderRight: border1.value,
      borderBottom: border2.value,
      borderLeft: border2.value,
      borderRadius: props.size
    }))

    const ballPositionStyle = computed(() => ({
      transform: 'translate(0, ' + (-parseFloat(props.size) / 4) + 'px)',
      position: 'absolute',
      top: '25px',
      left: '100px'
    }))

    return {
      spinnerStyle, spinnerStyle1, ballPositionStyle,
      spinnerDelay2, spinnerDelay3, spinnerDelay4, spinnerDelay5
    }
  }
})
</script>

<style scoped>
.v-spinner
{
    text-align: center;
}

.v-spinner .v-pacman-ball
{
    -webkit-animation: v-pacmanStretchDelay 1s infinite linear;
            animation: v-pacmanStretchDelay 1s infinite linear;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
}

@keyframes v-pacmanStretchDelay
{
    75%
    {
        opacity: 0.7;
    }
    100%
    {
        transform: translate(-100px, -6.25px);
    }
}
</style>
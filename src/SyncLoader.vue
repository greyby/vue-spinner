<template>
<div class="v-spinner" v-show="loading">
    <div class="v-sync v-sync1" v-bind:style="[spinnerStyle,spinnerDelay1]">
    </div><div class="v-sync v-sync2" v-bind:style="[spinnerStyle,spinnerDelay2]">
    </div><div class="v-sync v-sync3" v-bind:style="[spinnerStyle,spinnerDelay3]">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'SyncLoader',

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
      height: props.size,
      width: props.size,
      margin: props.margin,
      borderRadius: props.radius
    }))

    const spinnerDelay1 = { animationDelay: '0.07s' }
    const spinnerDelay2 = { animationDelay: '0.14s' }
    const spinnerDelay3 = { animationDelay: '0.21s' }

    return { spinnerStyle, spinnerDelay1, spinnerDelay2, spinnerDelay3 }
  }
})
</script>

<style scoped>
.v-spinner .v-sync
{
    -webkit-animation: v-syncStretchDelay 0.6s infinite ease-in-out;
            animation: v-syncStretchDelay 0.6s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block;
}

@keyframes v-syncStretchDelay
{
    33%
    {
        transform: translateY(10px);
    }
    66%
    {
        transform: translateY(-10px);
    }
    100%
    {
        transform: translateY(0);
    }
}
</style>
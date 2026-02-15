<template>
<div class="v-spinner" v-show="loading">
    <div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
    </div><div class="v-beat v-beat-even" v-bind:style="spinnerStyle">
    </div><div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'BeatLoader',

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
    return { spinnerStyle }
  }
})
</script>

<style scoped>

.v-spinner .v-beat
{
    -webkit-animation: v-beatStretchDelay 0.7s infinite linear;
            animation: v-beatStretchDelay 0.7s infinite linear;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block;
}

.v-spinner .v-beat-odd
{
  animation-delay: 0s;
}
.v-spinner .v-beat-even
{
  animation-delay: 0.35s;
}

@keyframes v-beatStretchDelay
{
    50%
    {
        transform: scale(0.75);
        opacity: 0.2;
    }
    100%
    {
        transform: scale(1);
        opacity: 1;
    }
}
</style>
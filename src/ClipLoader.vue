<template>
<div class="v-spinner" v-show="loading">
    <div class="v-clip" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'ClipLoader',

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
      default: '35px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  setup(props) {
    const spinnerStyle = computed(() => ({
      height: props.size,
      width: props.size,
      borderWidth: '2px',
      borderStyle: 'solid',
      borderColor: props.color + ' ' + props.color + ' transparent',
      borderRadius: props.radius,
      background: 'transparent'
    }))

    return { spinnerStyle }
  }
})
</script>

<style scoped>
.v-spinner
{
    text-align: center;
}

.v-spinner .v-clip
{
    -webkit-animation: v-clipDelay 0.75s 0s infinite linear;
            animation: v-clipDelay 0.75s 0s infinite linear;
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;

    display: inline-block;
}

@keyframes v-clipDelay
{
    0%
    {
        transform: rotate(0deg) scale(1);
    }
    50%
    {
        transform: rotate(180deg) scale(0.8);
    }
    100%
    {
        transform: rotate(360deg) scale(1);
    }
}
</style>

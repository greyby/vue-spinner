<template>
<div class="v-spinner" v-show="loading">
    <div class="v-skew" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'SkewLoader',

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
      default: '20px'
    }
  },
  setup(props) {
    const spinnerStyle = computed(() => ({
      height: 0,
      width: 0,
      borderLeft: props.size + ' solid transparent',
      borderRight: props.size + ' solid transparent',
      borderBottom: props.size + ' solid ' + props.color
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

.v-spinner .v-skew
{
    -webkit-animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
            animation: v-skewDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    display: inline-block;
}

@keyframes v-skewDelay
{
    25%
    {
        transform: perspective(100px) rotateX(180deg) rotateY(0);
    }
    50%
    {
        transform: perspective(100px) rotateX(180deg) rotateY(180deg);
    }
    75%
    {
        transform: perspective(100px) rotateX(0) rotateY(180deg);
    }
    100%
    {
        transform: perspective(100px) rotateX(0) rotateY(0);
    }
}
</style>
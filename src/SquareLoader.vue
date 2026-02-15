<template>
<div class="v-spinner" v-show="loading">
    <div class="v-square" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'SquareLoader',

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
      default: '50px'
    }
  },
  setup(props) {
    const spinnerStyle = computed(() => ({
      backgroundColor: props.color,
      height: props.size,
      width: props.size
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

.v-spinner .v-square
{
    -webkit-animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
            animation: v-squareDelay 3s 0s infinite cubic-bezier(.09,.57,.49,.9);
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;
    perspective: 100px;
    display: inline-block;
}

@keyframes v-squareDelay
{
    25%
    {
        transform: rotateX(180deg) rotateY(0);
    }
    50%
    {
        transform: rotateX(180deg) rotateY(180deg);
    }
    75%
    {
        transform: rotateX(0) rotateY(180deg);
    }
    100%
    {
        transform: rotateX(0) rotateY(0);
    }
}
</style>
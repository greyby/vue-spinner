<template>
<div class="v-spinner" v-show="loading">
    <div class="v-ring v-ring1" v-bind:style="spinnerBasicStyle">
    <div class="v-ring v-ring2" v-bind:style="spinnerStyle">
    </div><div class="v-ring v-ring3" v-bind:style="spinnerStyle">
    </div></div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'RingLoader',

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
      default: '60px'
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
      height: props.size,
      width: props.size,
      border: parseFloat(props.size) / 10 + 'px solid ' + props.color,
      opacity: 0.4,
      borderRadius: props.radius
    }))

    const spinnerBasicStyle = computed(() => ({
      height: props.size,
      width: props.size,
      position: 'relative'
    }))

    return { spinnerStyle, spinnerBasicStyle }
  }
})
</script>

<style scoped>

.v-spinner .v-ring2
{
    -webkit-animation: v-ringRightRotate 2s 0s infinite linear;
            animation: v-ringRightRotate 2s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    perspective: 800px;
    position: absolute;
    top: 0;
    left: 0;
}

.v-spinner .v-ring3
{
    -webkit-animation: v-ringLeftRotate 2s 0s infinite linear;
            animation: v-ringLeftRotate 2s 0s infinite linear;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
    perspective: 800px;
    position: absolute;
    top: 0;
    left: 0;
}

@keyframes v-ringRightRotate
{
    0%
    {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%
    {
        transform: rotateX(180deg) rotateY(360deg) rotateZ(360deg);
    }
}

@keyframes v-ringLeftRotate
{
    0%
    {
        transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
    }
    100%
    {
        transform: rotateX(360deg) rotateY(180deg) rotateZ(360deg);
    }
}
</style>
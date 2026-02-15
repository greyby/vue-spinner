<template>
<div class="v-spinner" v-show="loading">
    <div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
    </div><div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
    </div><div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
    </div><div class="v-rise v-rise-even" v-bind:style="spinnerStyle">
    </div><div class="v-rise v-rise-odd" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue'

export default defineComponent({

  name: 'RiseLoader',

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
.v-spinner
{
    text-align: center;
}

.v-spinner .v-rise-odd
{
    -webkit-animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
            animation: v-riseOddDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;

    display: inline-block;
}

.v-spinner .v-rise-even
{
    -webkit-animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
            animation: v-riseEvenDelay 1s 0s infinite cubic-bezier(.15,.46,.9,.6);
    -webkit-animation-fill-mode: both;
            animation-fill-mode: both;

    display: inline-block;
}

@keyframes v-riseOddDelay
{
    0%
    {
        transform: scale(0.4);
    }
    25%
    {
        transform: translateY(30px);
    }
    50%
    {
        transform: scale(1.1);
    }
    75%
    {
        transform: translateY(-30px);
    }
    100%
    {
        transform: translateY(0) scale(0.75);
    }
}

@keyframes v-riseEvenDelay
{
    0%
    {
        transform: scale(1.1);
    }
    25%
    {
        transform: translateY(-30px);
    }
    50%
    {
        transform: scale(0.4);
    }
    75%
    {
        transform: translateY(30px);
    }
    100%
    {
        transform: translateY(0) scale(1.0);
    }
}
</style>
<template>
  <div id="wrapper">
    <h1>vue-spinner</h1>
    <h4>Vue 3 Spinner Components</h4>

    <p class="buttons">
      <a href="https://github.com/greyby/vue-spinner" class="button">Source on GitHub</a>
    </p>

    <ul class="list-container">
      <li class="spinner-list" title="pulse loader">
        <pulse-loader :color="color" :size="size" :margin="margin" :radius="radius"></pulse-loader>
      </li>
      <li class="spinner-list" title="grid loader">
        <grid-loader></grid-loader>
      </li>
      <li class="spinner-list" title="clip loader">
        <clip-loader></clip-loader>
      </li>
      <li class="spinner-list" title="rise loader">
        <rise-loader></rise-loader>
      </li>
      <li class="spinner-list" title="beat loader">
        <beat-loader></beat-loader>
      </li>
      <li class="spinner-list" title="sync loader">
        <sync-loader></sync-loader>
      </li>
      <li class="spinner-list" title="rotate loader">
        <rotate-loader></rotate-loader>
      </li>
      <li class="spinner-list" title="fade loader">
        <fade-loader></fade-loader>
      </li>
      <li class="spinner-list" title="pacman loader">
        <pacman-loader></pacman-loader>
      </li>
      <li class="spinner-list" title="square loader">
        <square-loader></square-loader>
      </li>
      <li class="spinner-list" title="scale loader">
        <scale-loader></scale-loader>
      </li>
      <li class="spinner-list" title="skew loader">
        <skew-loader></skew-loader>
      </li>
      <li class="spinner-list" title="moon loader">
        <moon-loader></moon-loader>
      </li>
      <li class="spinner-list" title="ring loader">
        <ring-loader></ring-loader>
      </li>
      <li class="spinner-list" title="bounce loader">
        <bounce-loader></bounce-loader>
      </li>
      <li class="spinner-list" title="dot loader">
        <dot-loader></dot-loader>
      </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PulseLoader from './PulseLoader.vue'
import GridLoader from './GridLoader.vue'
import ClipLoader from './ClipLoader.vue'
import RiseLoader from './RiseLoader.vue'
import BeatLoader from './BeatLoader.vue'
import SyncLoader from './SyncLoader.vue'
import RotateLoader from './RotateLoader.vue'
import FadeLoader from './FadeLoader.vue'
import PacmanLoader from './PacmanLoader.vue'
import SquareLoader from './SquareLoader.vue'
import ScaleLoader from './ScaleLoader.vue'
import SkewLoader from './SkewLoader.vue'
import MoonLoader from './MoonLoader.vue'
import RingLoader from './RingLoader.vue'
import BounceLoader from './BounceLoader.vue'
import DotLoader from './DotLoader.vue'

export default defineComponent({
  name: 'App',
  components: {
    PulseLoader,
    GridLoader,
    ClipLoader,
    RiseLoader,
    BeatLoader,
    SyncLoader,
    RotateLoader,
    FadeLoader,
    PacmanLoader,
    SquareLoader,
    ScaleLoader,
    SkewLoader,
    MoonLoader,
    RingLoader,
    BounceLoader,
    DotLoader
  },
  setup() {
    const color = ref('#5dc596')
    const size = ref('15px')
    const margin = ref('2px')
    const radius = ref('100%')

    return { color, size, margin, radius }
  }
})
</script>

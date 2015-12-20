import PulseLoader from './PulseLoader.vue'
import ScaleLoader from './ScaleLoader.vue'
import ClipLoader from './ClipLoader.vue'
import RiseLoader from './RiseLoader.vue'
import BeatLoader from './BeatLoader.vue'
import SyncLoader from './SyncLoader.vue'
import RotateLoader from './RotateLoader.vue'
import FadeLoader from './FadeLoader.vue'
import SquareLoader from './SquareLoader.vue'
import SkewLoader from './SkewLoader.vue'
import MoonLoader from './MoonLoader.vue'

Vue.config.debug = true

new Vue({
	el: '#app',
	components: {
    PulseLoader,
    ScaleLoader,
    ClipLoader,
    RiseLoader,
    BeatLoader,
    SyncLoader,
    RotateLoader,
    FadeLoader,
    SquareLoader,
    SkewLoader,
    MoonLoader
  },
  data () {
    return {
   		color: '#5dc596',
      height: '15px',
      width: '15px',
      margin: '2px',
      radius: '100%'
    }
  }
})


Vue.config.debug = true // turn on debugging mode
var PulseLoader = VueSpinner.PulseLoader
var GridLoader = VueSpinner.GridLoader
var ClipLoader = VueSpinner.ClipLoader
var RiseLoader = VueSpinner.RiseLoader
var BeatLoader = VueSpinner.BeatLoader
var SyncLoader = VueSpinner.SyncLoader
var RotateLoader = VueSpinner.RotateLoader
var FadeLoader = VueSpinner.FadeLoader
var PacmanLoader = VueSpinner.PacmanLoader
var SquareLoader = VueSpinner.SquareLoader
var ScaleLoader = VueSpinner.ScaleLoader
var SkewLoader = VueSpinner.SkewLoader
var MoonLoader = VueSpinner.MoonLoader
var RingLoader = VueSpinner.RingLoader
var BounceLoader = VueSpinner.BounceLoader
var DotLoader = VueSpinner.DotLoader

new Vue({
	el: '#app',
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
	data () {
		return {
			color: '#3AB982',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px'
		}
	}
})
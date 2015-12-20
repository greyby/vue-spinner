Vue.config.debug = true // turn on debugging mode
var PulseLoader = VueSpinner.PulseLoader
var ScaleLoader = VueSpinner.ScaleLoader
var ClipLoader = VueSpinner.ClipLoader
var RiseLoader = VueSpinner.RiseLoader
var BeatLoader = VueSpinner.BeatLoader
var SyncLoader = VueSpinner.SyncLoader
var RotateLoader = VueSpinner.RotateLoader
var FadeLoader = VueSpinner.FadeLoader
var SquareLoader = VueSpinner.SquareLoader
var SkewLoader = VueSpinner.SkewLoader
var MoonLoader = VueSpinner.MoonLoader

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
			color: '#3AB982',
      height: '35px',
      width: '4px',
      margin: '2px',
      radius: '2px'
		}
	}
})
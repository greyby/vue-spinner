Vue.config.debug = true // turn on debugging mode
var PulseLoader = VueSpinner.PulseLoader
var ScaleLoader = VueSpinner.ScaleLoader
new Vue({
	el: '#app',
	components: {
		PulseLoader,
		ScaleLoader
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
# vue-spinner

A collection of loading spinners with Vue.js. Just convert yuanyan's React.js project [Halogen](https://github.com/yuanyan/halogen) to Vue.js components. Special thanks to [yuanyan](https://github.com/yuanyan) for the wonderful project.

## [Live demo](http://greyby.github.io/vue-spinner/)

## Installation

### NPM
```bash
$ npm install vue-spinner
```

### CommonJS
```js
var PulseLoader = require('vue-spinner/src/PulseLoader.vue');

new Vue({
  components: {
    'PulseLoader': PulseLoader
  }
})
```

### ES6
```js
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

new Vue({
  components: {
    PulseLoader
  }
})
```

### Browser globals
The `dist` folder contains `vue-spinner.js` and `vue-spinner.min.js` with all components exported in the <code>window.VueSpinner</code> object. These bundles are also available on NPM packages.

```html
<script src="path/to/vue.js"></script>
<script src="path/to/vue-spinner.js"></script>
<script>
  var PulseLoader = VueStrap.PulseLoader
</script>
```

## Local setup

```
npm install
npm run dev
```

## Usage

```html
<pulse-loader></pulse-loader>
<grid-loader></grid-loader>
<clip-loader></clip-loader>
<rise-loader></rise-loader>
<beat-loader></beat-loader>
<sync-loader></sync-loader>
<rotate-loader></rotate-loader>
<fade-loader></fade-loader>
<pacman-loader></pacman-loader>
<square-loader></square-loader>
<scale-loader></scale-loader>
<skew-loader></skew-loader>
<moon-loader></moon-loader>
<ring-loader></ring-loader>
<bounce-loader></bounce-loader>          
<dot-loader></dot-loader>
```

## TODO



## License

 vue-spinner is licensed under [The MIT License](LICENSE).
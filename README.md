# vue-spinner

A collection of loading spinners with Vue.js 3. Based on [Halogen](https://github.com/yuanyan/halogen) by [yuanyan](https://github.com/yuanyan).

| vue-spinner version | Vue version |
|---------------------|-------------|
| 3.x | Vue 3.x |
| 1.0.4 | Vue 1.x / 2.x |

## [Live Demo](http://greyby.github.io/vue-spinner/)

## Installation

```bash
npm install vue-spinner
```

## Usage

### ES Module (Recommended)

```js
import { PulseLoader } from 'vue-spinner'
// or import individually
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'
```

```vue
<template>
  <pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
</template>

<script setup>
import { ref } from 'vue'
import { PulseLoader } from 'vue-spinner'

const loading = ref(true)
const color = ref('#5dc596')
const size = ref('15px')
</script>
```

### Global Registration

```js
import { createApp } from 'vue'
import { PulseLoader } from 'vue-spinner'

const app = createApp(App)
app.component('PulseLoader', PulseLoader)
```

### Browser (UMD)

```html
<script src="path/to/vue.global.js"></script>
<script src="path/to/vue-spinner.umd.js"></script>
<script>
  const { PulseLoader, GridLoader } = VueSpinner
</script>
```

## Available Spinners

```html
<pulse-loader :loading="loading" :color="color" :size="size"></pulse-loader>
<grid-loader :loading="loading" :color="color" :size="size"></grid-loader>
<clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
<rise-loader :loading="loading" :color="color" :size="size"></rise-loader>
<beat-loader :loading="loading" :color="color" :size="size"></beat-loader>
<sync-loader :loading="loading" :color="color" :size="size"></sync-loader>
<rotate-loader :loading="loading" :color="color" :size="size"></rotate-loader>
<fade-loader :loading="loading" :color="color" :height="height" :width="width"></fade-loader>
<pacman-loader :loading="loading" :color="color" :size="size"></pacman-loader>
<square-loader :loading="loading" :color="color" :size="size"></square-loader>
<scale-loader :loading="loading" :color="color" :height="height" :width="width"></scale-loader>
<skew-loader :loading="loading" :color="color" :size="size"></skew-loader>
<moon-loader :loading="loading" :color="color" :size="size"></moon-loader>
<ring-loader :loading="loading" :color="color" :size="size"></ring-loader>
<bounce-loader :loading="loading" :color="color" :size="size"></bounce-loader>
<dot-loader :loading="loading" :color="color" :size="size"></dot-loader>
```

## Props

All spinners accept the following props (with defaults):

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `loading` | Boolean | `true` | Show/hide the spinner |
| `color` | String | `'#5dc596'` | Spinner color |
| `size` | String | varies | Spinner size (most spinners) |
| `margin` | String | `'2px'` | Margin between elements |
| `radius` | String | varies | Border radius |

Some spinners use `height` and `width` instead of `size` (e.g., `FadeLoader`, `ScaleLoader`).

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output: `dist/vue-spinner.es.js` (ESM) + `dist/vue-spinner.umd.js` (UMD) + `dist/vue-spinner.css`

## License

vue-spinner is licensed under [The MIT License](LICENSE).

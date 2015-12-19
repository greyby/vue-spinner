<template>
<div class="v-spinner">
    <div class="v-pulse v-pulse1" v-bind:style="spinnerStyle">
    </div><div class="v-pulse v-pulse2" v-bind:style="spinnerStyle">
    </div><div class="v-pulse v-pulse3" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'PulseLoader',

  props: {
    color: { 
      type: String,
      default: '#5dc596'
    },
    height: {
      type: String,
      default: '15px'
    },
    width: {
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
  data () {
    return {
      spinnerStyle: {
      	backgroundColor: this.color,
      	height: this.height,
     		width: this.width,
      	margin: this.margin,
      	borderRadius: this.radius
      	// TODO 
      	// animation: ['sk-waveStretchDelay', '1s', 'infinite', 'cubic-bezier(.2,.68,.18,1.08)'].join(' '),
      	// animationFillMode: "both"
      }
    }
  }

}
</script>

<style>
/*.v-spinner
{
    margin: 100px auto;
    text-align: center;
}
*/.v-spinner .v-pulse
{
    -webkit-animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);
            animation: v-pulseStretchDelay 0.75s infinite cubic-bezier(.2,.68,.18,1.08);
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;
    display: inline-block;         
}

.v-spinner .v-pulse1
{
  animation-delay: 0.12s;
}
.v-spinner .v-pulse2
{
  animation-delay: 0.24s;
}
.v-spinner .v-pulse3
{
  animation-delay: 0.36s;
}

@-webkit-keyframes v-pulseStretchDelay
{
    0%,
    80%
    {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-opacity: 1;             
                opacity: 1;
    }
    45%
    {
        -webkit-transform: scale(0.1);
                transform: scale(0.1);
        -webkit-opacity: 0.7;             
                opacity: 0.7;
    }
}

@keyframes v-pulseStretchDelay
{
    0%,
    80%
    {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-opacity: 1;             
                opacity: 1;
    }
    45%
    {
        -webkit-transform: scale(0.1);
                transform: scale(0.1);
        -webkit-opacity: 0.7;             
                opacity: 0.7;
    }
}
</style>
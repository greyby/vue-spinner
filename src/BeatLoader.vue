<template>
<div class="v-spinner">
    <div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
    </div><div class="v-beat v-beat-even" v-bind:style="spinnerStyle">
    </div><div class="v-beat v-beat-odd" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'BeatLoader',

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
*/.v-spinner .v-beat
{
    -webkit-animation: v-beatStretchDelay 0.7s infinite linear;
            animation: v-beatStretchDelay 0.7s infinite linear;
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;
    display: inline-block;         
}

.v-spinner .v-beat-odd
{
  animation-delay: 0s;
}
.v-spinner .v-beat-even
{
  animation-delay: 0.35s;
}

@-webkit-keyframes v-beatStretchDelay
{
    50%
    {
        -webkit-transform: scale(0.75);
                transform: scale(0.75);
        -webkit-opacity: 0.2;             
                opacity: 0.2;
    }
    100%
    {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-opacity: 1;             
                opacity: 1;
    }
}

@keyframes v-beatStretchDelay
{
    50%
    {
        -webkit-transform: scale(0.75);
                transform: scale(0.75);
        -webkit-opacity: 0.2;             
                opacity: 0.2;
    }
    100%
    {
        -webkit-transform: scale(1);
                transform: scale(1);
        -webkit-opacity: 1;             
                opacity: 1;
    }
}
</style>
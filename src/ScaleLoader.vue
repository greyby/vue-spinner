<template>
<div class="v-spinner">
    <div class="v-scale v-scale1" v-bind:style="spinnerStyle">
    </div><div class="v-scale v-scale2" v-bind:style="spinnerStyle">
    </div><div class="v-scale v-scale3" v-bind:style="spinnerStyle">
    </div><div class="v-scale v-scale4" v-bind:style="spinnerStyle">
    </div><div class="v-scale v-scale5" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'ScaleLoader',

  props: {
  	color: { 
      type: String,
      default: '#5dc596'
    },
  	height: {
      type: String,
      default: '35px'
    },
  	width: {
      type: String,
      default: '4px'
    },
  	margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '2px'
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
.v-spinner
{
/*	  font-size: 10px; 

    width: 60px;
    height: 40px;*/
    /*margin: 25px auto;*/
    text-align: center;
 
}

.v-spinner .v-scale
{
    -webkit-animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
            animation: v-scaleStretchDelay 1s infinite cubic-bezier(.2,.68,.18,1.08);
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;

    display: inline-block;
}

.v-spinner .v-scale1
{
  animation-delay: 0.1s;
}
.v-spinner .v-scale2
{
  animation-delay: 0.2s;
}
.v-spinner .v-scale3
{
  animation-delay: 0.3s;
}
.v-spinner .v-scale4
{
  animation-delay: 0.4s;
}
.v-spinner .v-scale5
{
  animation-delay: 0.5s;
}

@-webkit-keyframes v-scaleStretchDelay
{
    0%,
    100%
    {
        -webkit-transform: scaleY(1);
                transform: scaleY(1);
    }
    50%
    {
        -webkit-transform: scaleY(0.4);
                transform: scaleY(0.4);
    }
}

@keyframes v-scaleStretchDelay
{
    0%,
    100%
    {
        -webkit-transform: scaleY(1);
                transform: scaleY(1);
    }
    50%
    {
        -webkit-transform: scaleY(0.4);
                transform: scaleY(0.4);
    }
}
</style>
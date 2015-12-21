<template>
  <div class="v-spinner" v-bind:style="{position: 'relative', fontSize: 0, left: '50%', top: '50%', margin: 0}">
  <!-- <div class="v-spinner" v-bind:style="containerStyle"> -->
    <div class="v-fade v-fade1" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade2" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade3" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade4" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade5" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade6" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade7" v-bind:style="spinnerStyle">
    </div><div class="v-fade v-fade8" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'FadeLoader',

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
      default: '5px'
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
      }
    }
  }

}
</script>

<style>

.v-spinner .v-fade
{
    -webkit-animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
            animation: v-fadeStretchDelay 1.2s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;
    position: absolute;               
}

.v-spinner .v-fade1
{
  animation-delay: 0.12s;
  top: 20px;
  left: 0;
}

.v-spinner .v-fade2
{
  animation-delay: 0.24s;
  top: 13.636363636363637px;
  left: 13.636363636363637px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);

}

.v-spinner .v-fade3
{
  animation-delay: 0.36s;
  top: 0;
  left: 20px;
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.v-spinner .v-fade4
{
  animation-delay: 0.48s;
  top: -13.636363636363637px;
  left: 13.636363636363637px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

.v-spinner .v-fade5
{
  animation-delay: 0.60s;
  top: -20px;
  left: 0;
}

.v-spinner .v-fade6
{
  animation-delay: 0.72s;
  top: -13.636363636363637px;
  left: -13.636363636363637px;
  -webkit-transform: rotate(-45deg);
          transform: rotate(-45deg);
}

.v-spinner .v-fade7
{
  animation-delay: 0.84s;
  top: 0;
  left: -20px;
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.v-spinner .v-fade8
{
  animation-delay: 0.96s;
  top: 13.636363636363637px;
  left: -13.636363636363637px;
  -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
}

@-webkit-keyframes v-fadeStretchDelay
{
    50%
    {
        -webkit-opacity: 0.3;             
                opacity: 0.3;
    }
    100%
    {
        -webkit-opacity: 1;             
                opacity: 1;
    }
}

@keyframes v-fadeStretchDelay
{
    50%
    {
        -webkit-opacity: 0.3;             
                opacity: 0.3;
    }
    100%
    {
        -webkit-opacity: 1;             
                opacity: 1;
    }
}
</style>
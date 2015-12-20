<template>
<div class="v-spinner">
    <div class="v-sync v-sync1" v-bind:style="spinnerStyle">
    </div><div class="v-sync v-sync2" v-bind:style="spinnerStyle">
    </div><div class="v-sync v-sync3" v-bind:style="spinnerStyle">
    </div>
  </div>
</template>

<script>
export default {
  
  name: 'SyncLoader',

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
      }
    }
  }

}
</script>

<style>

.v-spinner .v-sync
{
    -webkit-animation: v-syncStretchDelay 0.6s infinite ease-in-out;
            animation: v-syncStretchDelay 0.6s infinite ease-in-out;
    -webkit-animation-fill-mode: both;
	          animation-fill-mode: both;
    display: inline-block;         
}

.v-spinner .v-sync1
{
  animation-delay: 0.07s;
}
.v-spinner .v-sync2
{
  animation-delay: 0.14s;
}
.v-spinner .v-sync3
{
  animation-delay: 0.21s;
}

@-webkit-keyframes v-syncStretchDelay
{
    33%
    {
        -webkit-transform: translateY(10px);
                transform: translateY(10px);
    }
    66%
    {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
    }
    100%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
}

@keyframes v-syncStretchDelay
{
    33%
    {
        -webkit-transform: translateY(10px);
                transform: translateY(10px);
    }
    66%
    {
        -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
    }
    100%
    {
        -webkit-transform: translateY(0);
                transform: translateY(0);
    }
}
</style>
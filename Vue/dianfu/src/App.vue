<template>
  <div id="app">
      <navbar v-show="bNav"></navbar> 
      <loading v-show="bLoad"></loading> 
      <transition
      enter-active-class="animated fadeIn"
      >      
      <router-view></router-view>
      </transition>
      <footbar v-show="bFt"></footbar>
  </div>
</template>

<script>
import navbar from './components/navbar'
import home from './components/home'
import footbar from './components/footbar'
import {mapGetters} from 'vuex'
import * as type from './store/type.js'

export default {
  name: 'App',
  components: {
    navbar,home,footbar
  },
  computed:mapGetters([
    'bNav','bFt','bLoad'
  ]),
  watch:{
    $route(adc){
      this.changeBl(adc.path)
    }
  },
  methods: {
    changeBl(path){
      if(/home|news|about|detail/.test(path)){
        this.$store.dispatch(type.VIEW_NAV,true);
        this.$store.dispatch(type.VIEW_FT,true);
      };
      if(/reg|login|user/.test(path)){
        this.$store.dispatch(type.VIEW_NAV,false);
        this.$store.dispatch(type.VIEW_FT,false);
      };
      if(/user/.test(path)){
        this.$store.dispatch(type.VIEW_NAV,false);
        this.$store.dispatch(type.VIEW_FT,true);
      }
    }
  },
    mounted() {
        this.changeBl(this.$route.path)
    },
 
    
}
</script>

<style>

</style>

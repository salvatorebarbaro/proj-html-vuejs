<script>
import AppNavbar from './components/AppNavbar.vue';
import AppNavbarSecond from './components/AppNavbarSecond.vue';
import AppNavbarThird from './components/AppNavbarThird.vue';
import AppSectionRed from './components/AppSectionRed.vue';
import AppSectionCourses from './components/AppSectionCourses.vue';

import AppSectionSlider from './components/AppSectionSlider.vue';
import AppCorsirecenti from './components/AppCorsirecenti.vue';

export default{
  data(){
    return{
    }
  },
    components:{
      AppNavbar,
      AppNavbarSecond,
      AppNavbarThird,
      AppSectionRed,
      AppSectionCourses,
      AppSectionSlider,
      AppCorsirecenti,
  },
  created(){
   
   
  },

  methods: {  
  },
}

</script>

<template>
  <AppNavbar></AppNavbar>
  <AppNavbarSecond></AppNavbarSecond>
  <AppNavbarThird></AppNavbarThird>
  <AppSectionRed></AppSectionRed>
  <AppSectionCourses></AppSectionCourses>
  <AppSectionSlider></AppSectionSlider>
  <AppCorsirecenti></AppCorsirecenti>
 
</template>

<style lang="scss">

</style>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppNavbarSecond from './components/AppNavbarSecond.vue';
import AppNavbarThird from './components/AppNavbarThird.vue';
import AppSectionRed from './components/AppSectionRed.vue';
import AppSectionCourses from './components/AppSectionCourses.vue';

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
  
 
</template>

<style lang="scss">

</style>

<script>
import {store} from '../components/store.js'

import ItemsCourses from '../components/ItemsCourses.vue'

export default{
  name:'AppSectionCourses',
  data(){
    return{
        store,

       
    }
  },
    components:{
        ItemsCourses,
        
      
  },
  created(){
   
   
  },

  methods: {
    
    
  },
  props:{
   
  }
}


</script>

<template>
<div id="container_courses">
    <h3>Popular Development Courses</h3>
        <div id="container_total" >
            <ItemsCourses v-for="corsocorrente in store.courses" :elemento="corsocorrente"></ItemsCourses>
 
        </div>
</div>

</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#container_courses{
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    padding: 92px 100px 80px;
    h3{
        font-size: 18px;
        margin-bottom: 42px;
        font-weight: 700;
    }
    #container_total{
        display: flex;
        gap: 20px;
        align-items: stretch;
    }
}

</style>


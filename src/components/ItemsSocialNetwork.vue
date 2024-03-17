<script>
import {store} from '../components/store.js';

import itemsSocial from '../components/itemsSocial.vue';

export default{
  name:'ItemsSocialNetwork',
  data(){
    return{
      store
       
        
    }
  },
    components:{
      itemsSocial,
        
       

    },
  created(){
   },

  methods: {
    
    
  },
  props:{
    sociale:String,
   
  }
}


</script>

<template>
  <div id="containerSocial">
    <h3>{{ sociale.title }}</h3>
    <div id="ContainerAllIcons">
      <itemsSocial v-for="currentSocial in store.iconeSocial" :icona="currentSocial"></itemsSocial>
    </div>
    

  </div>
 
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#containerSocial{
  margin-left: 94px;
  h3{
    text-transform: uppercase;
    margin-bottom: 28px;
  
  }
  #ContainerAllIcons{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: 210px;
    gap: 10px;
  }
}

</style>


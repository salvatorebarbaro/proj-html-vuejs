<script>
import {store} from '../components/store.js'

import ItemsTopic from '../components/ItemsTopic.vue'

export default{
  name:'AppNavbarThird',
  data(){
    return{
        store,
       
    }
  },
    components:{
        ItemsTopic,
      
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
    <div id="Container_topic">
        <ul>
           <ItemsTopic v-for="TopicCurrent in store.Topics" :topic="TopicCurrent"></ItemsTopic> 
        </ul>
        

    </div>

</template>

<style lang="scss">
#Container_topic{
    display: flex;
    padding: 30px 0;
    background-color: #273044;
    ul{
    display: flex;
    list-style: none;
    gap: 60px;
    margin: 0 auto;
}
}



</style>


<script>
import ItemsAbout from '../components/ItemsAbout.vue'
import ItemsContact from '../components/ItemsContact.vue'
import ItemsSocialNetwork from '../components/ItemsSocialNetwork.vue'
import Itemsimg from '../components/Itemsimg.vue'
import {store} from '../components/store.js'
export default{
  name:'SectionInfo',
  data(){
    return{
      store
        
    }
  },
    components:{
        ItemsAbout,
        ItemsContact,
        ItemsSocialNetwork,
        Itemsimg
       

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
  <div class="container">
    <ItemsAbout v-for="currentabout in store.About" :cosa="currentabout"></ItemsAbout>
    <ItemsContact v-for="CurrentContact in store.Contact" :dove="CurrentContact"></ItemsContact>
    <ItemsSocialNetwork v-for="currentsocial in store.Social" :sociale="currentsocial"></ItemsSocialNetwork>
    <Itemsimg></Itemsimg>
  </div>
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
.container{
  display: flex;
        gap: 46px;
        

}

</style>


<script>
import ItemsInvest from '../components/ItemsInvest.vue';

import {store} from './store.js';
export default{
  name:'AppInvesting',
  data(){
    return{
        store
    }
  },
    components:{
        ItemsInvest,

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
   <div id="contenitore">
    <img src="../assets/img/testimonial-1-1917x640-1-1914x639.jpg" alt="">
    <div id="contenitore_testo">
        <ItemsInvest v-for="currentItems in store.Investiments"  :invest="currentItems"></ItemsInvest>
    </div>
   </div>
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#contenitore{
    position: relative;
    img{
        width: 100%;
       object-fit: cover;
        height: 100%;
    }
    #contenitore_testo{
        position: absolute;
        top: 0;
        left: 210px;
        color: black;
        margin: 74px 0;
        padding: 100px 88px;
        background-color: white;
        max-width: 736px;
    }
    // gestione dell'elemnto per far sembrare il div un fumetto
    #contenitore_testo::before{
    content: "";
    position: absolute;
    top: 180px;
    right: -18px;
    background-color: white;
    
    width: 36px;
    height: 36px;
    transform: rotate(45deg);

}
    
}
</style>


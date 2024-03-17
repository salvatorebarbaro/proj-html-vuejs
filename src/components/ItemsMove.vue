<script>

export default{
  name:'ItemsMove',
  data(){
    return{
        
       
    }
  },
    components:{
        
      
  },
  created(){
   
   
  },

  methods: {
    
    
  },
  props:{
    Icone:Object,
   
  }
}


</script>

<template>
    <li id="itemMOve">
        <a href="#" ><span v-html="Icone.icon"></span></a>
    </li>

</template>

<style lang="scss">
#itemMOve{
    padding: 10px;
    a{
        color: #484848;
        cursor: pointer;
    }
    a:hover{
      color: #FF4450;
    }
    
}



</style>



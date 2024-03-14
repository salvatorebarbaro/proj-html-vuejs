<script>

export default{
  name:'ItemsHover',
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
    oggetto:String,
   
  }
}


</script>

<template>
    <li id="itemsHover">
        <a href="#">{{ oggetto }}</a>

    </li>

</template>

<style lang="scss">
#itemsHover{
    a{
        color:#4E7F97;
        font-weight: 400;
        border-radius: 30px;
        padding: 14px;
        border: transparent;
    }
    a:hover{
        background-color: #F0F4FA;
        color: #7B7B7C;
        
    }
}



</style>



<script>


export default{
  name:'ItemsList',
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
    link:String,
  }
}


</script>

<template>
    <li id="List_element">
        <a href="#">{{ link}}</a>
    </li>
    

</template>

<style lang="scss">
#List_element{
    color: #AAAAAA;
    a{
      text-decoration: none;
      color: #AAAAAA;
    }
}



</style>


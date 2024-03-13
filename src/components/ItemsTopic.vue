<script>


export default{
  name:'ItemsTopic',
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
    topic:Object,
  }
}


</script>

<template>
    <li>
        <!-- <a href=""><span v-html="topic.icon"></span></a> grazie a v-html inseriamo le icone come elementi html nella pagina in modo dinamico -->
        <a href=""><span v-html="topic.icon"></span></a>
        <a href="">{{ topic.name }}</a>
    </li>
 
    

</template>

<style lang="scss">
li{
    display: flex;
    gap: 12px;
    a{
        color: white;
        text-decoration: none;
    }
    
}




</style>


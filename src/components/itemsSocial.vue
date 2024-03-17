<script>


export default{
  name:'itemsSocial',
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
    icona:Object,

   
  }
}


</script>

<template>
    <div id="containerIcone">
      <span v-html="icona.icon " :style="{backgroundColor: icona.color}"></span>  
    </div>
  
 
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#containerIcone{
    display: flex;
    

    

    span
    {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 22px;
        padding: 10px;
        border-radius: 50%;
        cursor: pointer;
    }
}


</style>


<script>

export default{
  name:'ItemsAbout',
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
    cosa:Object,
    
   
  }
}


</script>

<template>
    <div id="contenitore_about">
        <h3>{{ cosa.title}}</h3>
        <span>{{ cosa.testo }}</span>
    </div>
 
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#contenitore_about{
  max-width: 254px;
  h3{margin-bottom: 30px;}
  span{
    font-weight: 300;
  }
}

</style>


<script>

export default{
  name:'ItemsContact',
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
    dove:Object,
   
  }
}


</script>

<template>
  <div id="contenitoreContact">
    <h3>{{ dove.title }}</h3>
    <span id="address">{{ dove.address }}</span>
    <span id="california">{{ dove.where }}</span>
    <span id="contact1">{{ dove.contact1 }}</span>
    <span id="contact2">{{ dove.contact2 }}</span>
    <a href="#">{{ dove.email }}</a>
    


  </div>
 
</template>

<style lang="scss">
@use '../components/style/varables.scss' as *;
#contenitoreContact{
  display: flex;
  flex-direction: column;
  h3{
     text-transform: uppercase;
     margin-bottom: 30px;
  }
  span{
    font-weight: 400;
  }
  #california{
    margin-bottom: 30px;
  }
  #contact2{
    margin-bottom: 30px;
  }
  a{
    color: $grigio;
  }
}

</style>

